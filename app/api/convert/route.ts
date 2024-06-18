import { context } from '@/app/utils/botContext';
import { AssemblyAI } from 'assemblyai'
const { GoogleGenerativeAI } = require("@google/generative-ai");


const client = new AssemblyAI({
    apiKey: '36ba7b2eb77742ee91b674211b5c1777'
})

export async function POST() {

    const audioUrl =
        'https://github.com/AssemblyAI-Examples/audio-examples/raw/main/20230607_me_canadian_wildfires.mp3'

    const params = {
        audio: audioUrl
    }
    const transcript = await client.transcripts.transcribe(params)

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
        response
    })

}