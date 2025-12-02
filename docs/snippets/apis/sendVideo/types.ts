export type SendVideoOptions = {
    msg?: string;
    videoUrl: string;
    thumbnailUrl: string;
    duration?: number;
    width?: number;
    height?: number;
    ttl?: number;
};

export type SendVideoResponse = {
    msgId: number;
};