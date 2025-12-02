# forwardMessage

## api.forwardMessage(payload, threadIds\[, type])

### Parameters

* payload `ForwardMessagePayload`
* threadIds `string[]`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<ForwardMessageResponse>`

### Types

<<< @/snippets/apis/forwardMessage/types.ts

### Examples

Chuyển tiếp tin nhắn cho 3 người dùng

<<< @/snippets/apis/forwardMessage/example.ts

### Related

* [ThreadType](../models/Enum)
