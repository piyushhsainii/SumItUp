import { context } from "@/app/utils/botContext";
import { AssemblyAI } from "assemblyai";
import cloudinary from "cloudinary";
import ytdl from "ytdl-core";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLEY_API ?? "",
});

export async function POST(req: Request) {
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  const { VideoUrl } = await req.json();
  console.log(VideoUrl, "video urkl here");
  let FinalResponse;

  try {
    // Upload video to Cloudinary
    const uploadResult: any = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        { resource_type: "video" },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      ytdl(VideoUrl).pipe(uploadStream);
    });

    const params = {
      audio: uploadResult.secure_url,
    };

    // Transcribe the audio to text
    const transcript = await client.transcripts.transcribe(params);

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Convert the video text into a summary
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: context }],
        },
        {
          role: "model",
          parts: [{ text: "" }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 150,
      },
    });

    const msg = transcript.text;
    const result2 = await chat.sendMessage(msg);
    const response = await result2.response.text();
    FinalResponse = response;
  } catch (error) {
    console.error("Error occurred:", error);
    return Response.json({ error: error });
  }

  return Response.json({
    response: FinalResponse,
  });
}
