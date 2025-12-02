export type UpdateProfilePayload = {
    profile: {
        name: string;
        dob: `${string}-${string}-${string}`; // yyyy-mm-dd
        gender: Gender;
    };
    biz?: Partial<{
        cate: BusinessCategory;
        description: string;
        address: string;
        website: string;
        email: string;
    }>;
};

export type UpdateProfileResponse = "";