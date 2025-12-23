# sendVoice

## api.sendVoice(options, threadId\[, type])

### Parameters

* options `SendVoiceOptions`
  * voiceUrl `string`
  * ttl `number?`
    * thời gian tồn tại danh thiếp, mặc định là 0 (vô hạn)
* threadId `string`
* type `ThreadType?`
  * loại thread, mặc định là người dùng

### Return

`Promise<SendVoiceResponse>`

### Types

<<< @/snippets/apis/sendVoice/types.ts

### Examples

Gửi đoạn hội thoại

<<< @/snippets/apis/sendVoice/example.ts

### Related

* [ThreadType](../models/Enum)
