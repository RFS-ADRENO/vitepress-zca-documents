# addUnreadMark

## api.addUnreadMark(threadId\[, type])

### Parameters

* threadId `string`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<AddUnreadMarkResponse>`

### Types

<<< @/snippets/apis/addUnreadMark/types.ts

### Examples

Đánh dấu chưa đọc 1 nhóm

<<< @/snippets/apis/addUnreadMark/example.ts

### Related

* [ThreadType](../models/Enum)
