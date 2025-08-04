//klasa odpowiedzialna do przetwarzania strumieni RTSP
// używa biblioteki node-rtsp-stream do obsługi RTSP i WebSocket

const Stream = require('node-rtsp-stream');

class RtspProcessingService {
    #rtspUrl = 'rtsp://root:123abc...@10.1.1.4/live1s1.sdp'; // prywatne pole

    constructor() {
        this.stream = new Stream({
            name: 'camera',
            streamUrl: this.#rtspUrl,
            wsPort: 9999,
            ffmpegOptions: {
                '-stats': '',
                '-r': 30,
            }
        });
    }

    stop() {
        if (this.stream && this.stream.ffmpeg) {
            this.stream.ffmpeg.kill('SIGINT'); // zatrzymuje proces FFmpeg
        }
    }
}

module.exports = RtspProcessingService;