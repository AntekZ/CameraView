//obbsluga żądań z frontendu i wysylanie odpowiedzi
const express = require('express');
const app = express();

//import klasy 
const RtspProcessingService = require('./RtspProcessingService');

//po prostu na poczatku zeby sprawdzic czy to sie wyswietka
//to wymusilem stworzenie obiektu rtspService po wystartowaniu backendu
let rtspService = new RtspProcessingService();

//req - dane OD klienta
//res - odpowiedz DO klienta

app.post('/start-stream', (req, res) => {
    if (!rtspService) 
    {
        rtspService = new RtspProcessingService();
        res.send('Streaming started');
    }
    else 
        {
        res.send('Streaming already in progress');
    }
});
app.post('/stop-stream', (req, res) => {
    if (rtspService) 
    {
        rtspService.stop(); // kończy streaming i zamyka proces ffmpeg
        rtspService = null; // kończy streaming i zamyka proces ffmpeg
        res.send('Streaming stopped');
    }
    else 
    {
        res.send('No streaming to stop');
    }
});

app.listen(3000, () => {    
    console.log('Server is listening on port 3000');
});