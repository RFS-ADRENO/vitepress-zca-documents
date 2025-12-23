# sendSeenEvent

## api.sendSeenEvent(messages, threadId\[, type])

### Parameters

* messages `SendSeenEventMessageParam[]`
* threadId `string`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<SendSeenEventResponse>`

### Types

<<< @/snippets/apis/sendSeenEvent/types.ts

### Examples

<<< @/snippets/apis/sendSeenEvent/example.ts

### Related

* [ThreadType](../models/Enum)
