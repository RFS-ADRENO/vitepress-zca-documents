export type MessageContent = {
    /**
     * Nội dung văn bản
     */
    msg: string;
    /**
     * Định dạng nội dung văn bản
     */
    styles?: Style[];
    /**
     * Mức độ quan trọng của tin nhắn
     */
    urgency?: Urgency;
    /**
     * Tin nhắn trích dẫn
     */
    quote?: SendMessageQuote;
    /**
     * Đề cập người dùng trong nhóm
     */
    mentions?: Mention[];
    /**
     * Tệp đính kèm
     */
    attachments?: AttachmentSource | AttachmentSource[];
    /**
     * Thời gian tồn tại của tin nhắn, mili giây
     */
    ttl?: number;
};

export enum TextStyle {
    Bold = "b",
    Italic = "i",
    Underline = "u",
    StrikeThrough = "s",
    Red = "c_db342e",
    Orange = "c_f27806",
    Yellow = "c_f7b503",
    Green = "c_15a85f",
    Small = "f_13",
    Big = "f_18",
    UnorderedList = "lst_1",
    OrderedList = "lst_2",
    Indent = "ind_$",
};

export type Style =
    | {
          start: number; // vị trí bắt đầu định dạng
          len: number; // độ dài văn bản tính từ vị trí bắt đầu
          st: Exclude<TextStyle, TextStyle.Indent>; // định dạng
      }
    | {
          start: number; // vị trí bắt đầu định dạng
          len: number; // độ dài văn bản tính từ vị trí bắt đầu
          st: TextStyle.Indent;
          /**
           * Độ dài thục lề
           */
          indentSize?: number;
      };

export enum Urgency {
    Default,
    Important,
    Urgent,
};

export type Mention = {
    /**
     * vị trí bắt đầu chuỗi đề cập
     */
    pos: number;
    /**
     * độ dài chuỗi đề cập
     */
    len: number;
    /**
     * id người dùng cần đề cập
     */
    uid: string;
};

export type SendMessageQuote = {
    content: TMessage["content"];
    msgType: TMessage["msgType"];
    propertyExt: TMessage["propertyExt"];

    uidFrom: TMessage["uidFrom"];
    msgId: TMessage["msgId"];
    cliMsgId: TMessage["cliMsgId"];
    ts: TMessage["ts"];
    ttl: TMessage["ttl"];
};

export type SendMessageResult = {
    msgId: number;
};

export type SendMessageResponse = {
    message: SendMessageResult | null;
    attachment: SendMessageResult[];
};