export type SendVoiceOptions = {
    voiceUrl: string;
    ttl?: number;
};

export type SendVoiceResponse = {
    msgId: string;
};