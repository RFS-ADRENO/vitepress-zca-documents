# sendReport

## api.sendReport(options, threadId\[, type])

### Parameters

* options `SendReportOptions`
  * reason `ReportReason`
  * content `string?`
    * Nội dung báo xấu, chỉ cần nếu reason là `ReportReason.Other`
* threadId `string`
* type `ThreadType?`
  * loại thread, mặc định là người dùng

### Return

`Promise<SendReportResponse>`

### Types

<<< @/snippets/apis/sendReport/types.ts

### Examples

Báo xấu người dùng

<<< @/snippets/apis/sendReport/example.ts

### Related

* [ThreadType](../models/Enum)
