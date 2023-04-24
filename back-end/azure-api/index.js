

const express = require('express')
const fs = require("fs");
const sdk = require("microsoft-cognitiveservices-speech-sdk");
var request = require('request');

const app = express()
const port = 8082

app.get('/azure-speech-service', (req, res) => {
    azure_speech_tranlate_func(req.query.request_id,req.query.input_lang, req.query.output_lang,res);
})


function azure_speech_tranlate_func(request_id,input_lang, output_lang,response) {

    const speechTranslationConfig = sdk.SpeechTranslationConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
    speechTranslationConfig.speechRecognitionLanguage = input_lang;

    var language = output_lang;
    speechTranslationConfig.addTargetLanguage(language);

    let audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync("./sample_audio_files/sample1.wav"));
    let translationRecognizer = new sdk.TranslationRecognizer(speechTranslationConfig, audioConfig);



    translationRecognizer.recognizeOnceAsync(result => {
        switch (result.reason) {
            case sdk.ResultReason.TranslatedSpeech:
                var output_Result = result.translations.get(language);
                request({
                    uri: "http://localhost:8081/request/result?request_id="+request_id+"&result="+output_Result,
                  }).pipe(response);

            case sdk.ResultReason.NoMatch:
                console.log("NOMATCH: Speech could not be recognized.");
                break;
            case sdk.ResultReason.Canceled:
                const cancellation = sdk.CancellationDetails.fromResult(result);
                console.log(`CANCELED: Reason=${cancellation.reason}`);

                if (cancellation.reason == sdk.CancellationReason.Error) {
                    console.log(`CANCELED: ErrorCode=${cancellation.ErrorCode}`);
                    console.log(`CANCELED: ErrorDetails=${cancellation.errorDetails}`);
                    console.log("CANCELED: Did you set the speech resource key and region values?");
                }
                break;
        }
        translationRecognizer.close();
    });
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



