import { ThreadType, BinBankCard } from "zca-js";

const groupId = "000000000000000";

api
    .sendBankCard(
        {
            binBank: BinBankCard.Techcombank,
            numAccBank: "19038393966015",
            nameAccBank: "TO CHAU TRI DUNG"
        },
        groupId,
        ThreadType.Group
    )
    .then(console.log).catch(console.error);