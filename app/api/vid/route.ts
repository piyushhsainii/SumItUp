import { NextResponse } from "next/server";
const ytdl = require('ytdl-core');
import fs from 'fs'

export async function POST() {
    try {
        await ytdl('https://www.youtube.com/shorts/V2bmo8FsQLo')
            .pipe(fs.createWriteStream('video.mp4'));
        return Response.json({
            done: "done"
        })
    } catch (err) {
        console.error(err);
        return NextResponse.json({
            error: err
        }, {
            status: 500
        });
    }
}
