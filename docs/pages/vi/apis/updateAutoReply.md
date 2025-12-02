# updateAutoReply

## api.updateAutoReply(payload)

### Parameters

* payload `UpdateAutoReplyPayload`

### Return

`Promise<UpdateAutoReplyResponse>`

### Types

<<< @/snippets/apis/updateAutoReply/types.ts

### Examples

Cập nhật tự động trả lời trong khoảng từ 18 giờ đến 7 giờ 30 hôm sau

<<< @/snippets/apis/updateAutoReply/example.ts

{% hint style="info" %}
**Lưu ý**: cấu hình trên được áp dụng cho mọi ngày, không chỉ riêng ngày được truyền vào. Tham số thời gian chỉ nhằm giúp Zalo xác định mốc thời gian tham chiếu.
{% endhint %}

### Related

* [AutoReplyScope](../models/AutoReply)
