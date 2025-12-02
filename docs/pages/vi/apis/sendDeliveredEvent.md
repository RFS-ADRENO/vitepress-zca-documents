# sendDeliveredEvent

## api.sendDeliveredEvent(isSeen, messages\[, type])

### Parameters

* isSeen `boolean`
* messages `SendDeliveredEventMessageParam[]`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<SendDeliveredEventResponse>`

### Types

<<< @/snippets/apis/sendDeliveredEvent/types.ts

### Examples

<<< @/snippets/apis/sendDeliveredEvent/example.ts

### Related

* [ThreadType](../models/Enum)
