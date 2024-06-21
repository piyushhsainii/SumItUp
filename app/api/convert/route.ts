import { context } from '@/app/utils/botContext';
import { AssemblyAI } from 'assemblyai'
import cloudinary from "cloudinary"
import ytdl from 'ytdl-core';
import fs from 'fs'
import path from 'path';
const { GoogleGenerativeAI } = require("@google/generative-ai");

const client = new AssemblyAI({
    apiKey: process.env.ASSEMBLEY_API ?? ""
})

export async function POST() {

    cloudinary.v2.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    let info = await ytdl.getInfo('https://www.youtube.com/shorts/GllsYUTs1Ok');
    await ytdl('https://www.youtube.com/shorts/GllsYUTs1Ok')
        .pipe(fs.createWriteStream('./video.mp4'));

    // Upload the audio file to cloudinary
    const videoFile = await cloudinary.v2.uploader.upload(
        "./video.mp4",
        {
            resource_type: "video"
        }
    )
    console.log(`> Result: ${videoFile.url}`);

    // const audioUrl =
    //     'https://github.com/AssemblyAI-Examples/audio-examples/raw/main/20230607_me_canadian_wildfires.mp3'

    const params = {
        audio: videoFile.url
    }
    // transcibe the audio to text
    const transcript = await client.transcripts.transcribe(params)

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
    const result = await chat.sendMessage(msg);
    const response = result.response.text()

    return Response.json({
        response: response
    })

}