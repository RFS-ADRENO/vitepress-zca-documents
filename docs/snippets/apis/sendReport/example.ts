import { ReportReason } from "zca-js";
const userId = "0000000000000001"

api.sendReport(
    {
        reason: ReportReason.Fraud
    },
    userId
)
    .then(console.log)
    .catch(console.error);