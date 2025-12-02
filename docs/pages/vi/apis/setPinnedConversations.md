# setPinnedConversations

## api.setPinnedConversations(pinned, threadId\[, type])

### Parameters

* pinned `boolean`
* threadId `string` | `string[]`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<PinConversationsResponse>`

### Examples

Ghim cuộc hội thoại nhóm

<<< @/snippets/apis/setPinnedConversations/example-1.ts

Bỏ ghim cuộc hội thoại nhóm

<<< @/snippets/apis/setPinnedConversations/example-2.ts

### Related

* [ThreadType](../models/Enum)
