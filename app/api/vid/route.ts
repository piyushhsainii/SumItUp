import { NextResponse } from "next/server";
const ytdl = require('ytdl-core');
import fs from 'fs'

export async function POST() {
    try {
        let info = await ytdl.getInfo('https://www.youtube.com/shorts/V2bmo8FsQLo');
        let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
        console.log(audioFormats)
        console.log('Formats with only audio: ' + audioFormats.length);
        await ytdl('https://www.youtube.com/shorts/V2bmo8FsQLo')
            .pipe(fs.createWriteStream('video.mp4'));
        return Response.json({
            done: info
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
