# sendSticker

## api.sendSticker(sticker, threadId\[, type])

### Parameters

* sticker `SendStickerPayload`
* threadId `string`
  * id của người/nhóm cần gửi
* type `ThreadType?`
  * loại thread: người dùng/nhóm, mặc định là người dùng

### Return

`Promise<SendStickerResponse>`

### Types

<<< @/snippets/apis/sendSticker/types.ts

### Examples

Gửi sticker `"xin chào"`

<<< @/snippets/apis/sendSticker/example.ts

## Related

* [getStickers](getStickers)
* [getStickersDetail](getStickersDetail)
* [ThreadType](../models/Enum)
