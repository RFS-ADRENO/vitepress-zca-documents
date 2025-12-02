const userId = "0000000000000001"

api.sendVoice(
    {
        voiceUrl: "https://example.com/voice.mp3"
    },
    userId
)
    .then(console.log)
    .catch(console.error);