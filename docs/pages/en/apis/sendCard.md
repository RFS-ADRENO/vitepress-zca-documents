# sendCard

## api.sendCard(options, threadId\[, type])

### Parameters

* options `SendCardOptions`
* threadId `string`
  * id của người dùng hoặc nhóm
* type `ThreadType?`
  * loại thread: người dùng/nhóm, mặc định là người dùng

### Return

`Promise<SendCardResponse>`

### Types

<<< @/snippets/apis/sendCard/types.ts

### Examples

Gửi danh thiếp của tài khoản đã đăng nhập tới 1 nhóm

<<< @/snippets/apis/sendCard/example.ts
