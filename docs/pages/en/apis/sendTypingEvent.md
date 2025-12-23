# sendTypingEvent

## api.sendTypingEvent(threadId, type, destType)

### Parameters

* threadId `string`
* type `ThreadType`
  * mặc định `ThreadType.User?`
* destType `DestType?`
  * Chỉ yêu cầu khi `type` là `ThreadType.User`

### Return

`Promise<SendTypingEventResponse>`

### Types

<<< @/snippets/apis/sendTypingEvent/types.ts

### Examples

<<< @/snippets/apis/sendTypingEvent/example.ts

### Related

* [ThreadType, DestType](../models/Enum)
