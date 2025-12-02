export type EditNoteOptions = {
    /**
     * tiêu đề
     */
    title: string;
    /**
     * id ghi chú
     */
    topicId: string;
    /**
     * ghim ghi chú?
     */
    pinAct?: boolean;
};

export type EditNoteResponse = NoteDetail;