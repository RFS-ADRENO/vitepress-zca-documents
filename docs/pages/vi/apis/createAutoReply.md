# createAutoReply

## api.createAutoReply(memberId, groupId)

### Parameters

* payload `CreateAutoReplyPayload`

### Return

`Promise<CreateAutoReplyResponse>`

### Types

<<< @/snippets/apis/createAutoReply/types.ts

### Examples

Cấu hình tự động trả lời trong khoảng từ 18 giờ đến 7 giờ 30 hôm sau

<<< @/snippets/apis/createAutoReply/example.ts

::: info Lưu ý

Cấu hình trên được áp dụng cho mọi ngày, không chỉ riêng ngày được truyền vào. Tham số thời gian chỉ nhằm giúp Zalo xác định mốc thời gian tham chiếu.

:::

### Related

* [AutoReplyScope & AutoReplyItem](../models/AutoReply)
