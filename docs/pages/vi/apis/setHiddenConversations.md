# setHiddenConversations

## api.setHiddenConversations(hidden, threadId\[, type])

### Parameters

* hidden `boolean`
* threadId `string` | `string[]`
* type `ThreadType?`
  * mặc định là `ThreadType.User`

### Return

`Promise<SetHiddenConversationsResponse>`

### Types

<<< @/snippets/apis/setHiddenConversations/types.ts

### Examples

<<< @/snippets/apis/setHiddenConversations/example.ts

### Related

* [ThreadType](../models/Enum)
