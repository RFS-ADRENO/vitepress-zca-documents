# deleteMessage

## api.deleteMessage(options, threadId\[, type])

### Parameters

* dest `DeleteMessageDestination`
* onlyMe `boolean?`
  * mặc định `true` , chỉ xóa ở phía bản thân

### Return

`Promise<DeleteMessageResponse>`

### Types

<<< @/snippets/apis/deleteMessage/types.ts

### Examples

Xóa tin nhắn bản thân sau 5s

<<< @/snippets/apis/deleteMessage/example.ts
