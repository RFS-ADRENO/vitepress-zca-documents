# sendMessage

## api.sendMessage(message, threadId\[, type])

### Parameters

* message `string` | `MessageContent`
* threadId `string`
  * Id của người dùng/nhóm
* type `ThreadType?`
  * loại thread: người dùng/nhóm, mặc định là người dùng

### Return

`Promise<SendMessageResponse>`

### Types

<<< @/snippets/apis/sendMessage/types.ts

### Examples

Gửi tin nhắn văn bản đến nhóm

<<< @/snippets/apis/sendMessage/example-1.ts

Gửi tin nhắn với định dạng và mức độ quan trọng tùy chỉnh

<<< @/snippets/apis/sendMessage/example-2.ts

Gửi tin nhắn văn bản và đề cập người dùng khác

<<< @/snippets/apis/sendMessage/example-3.ts

Gửi tin nhắn văn bản kèm trích dẫn

<<< @/snippets/apis/sendMessage/example-4.ts

Gửi tệp đính kèm

<<< @/snippets/apis/sendMessage/example-5.ts

### Related

* [ThreadType](../models/Enum)
* [AttachmentSource](../models/Attachment)
