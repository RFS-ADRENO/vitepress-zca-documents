# undo

## api.listener.on("undo", callback)

### Callback Parameters

* undo `Undo`

#### Undo

* data `TUndo`
  * dữ liệu của sự kiện
* threadId `string`
  * id người dùng/nhóm của sự kiện
* isSelf `boolean`
  * true nếu sự kiện đó bắt nguồn từ tải khoản đang sử dụng
* isGroup `boolean`
  * true nếu sự kiện đó xảy ra ở nhóm

### Examples

Lắng nghe và in ra dữ liệu của sự kiện thu hồi

<<< @/snippets/listeners/undo/example.ts
