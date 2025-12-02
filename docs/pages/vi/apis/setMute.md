# setMute

## api.setMute(params, threadId\[, type])

### Parameters

* params `SetMuteParams`
* threadId `string` | `string[]`
* type `ThreadType?`
  * mặc định là `ThreadType.User`

### Return

`Promise<SetMuteResponse>`

### Types

<<< @/snippets/apis/setMute/types.ts

### Examples

<<< @/snippets/apis/setMute/example.ts

### Related

* [ThreadType](../models/Enum)
