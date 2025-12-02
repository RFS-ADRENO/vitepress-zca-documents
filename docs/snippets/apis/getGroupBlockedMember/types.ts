export type GetGroupBlockedMemberPayload = {
    /**
     * mặc định: 1
     */
    page?: number;
    /**
     * mặc định: 50
     */
    count?: number;
};

export type GetGroupBlockedMemberResponse = {
    blocked_members: {
        id: string;
        dName: string;
        zaloName: string;
        avatar: string;
        avatar_25: string;
        accountStatus: number;
        type: number;
    }[];
    has_more: number;
};