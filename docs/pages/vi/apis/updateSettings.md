# updateSettings

## api.updateSettings(type, value)

### Parameters

* type `UpdateSettingsType`
* value `number`

#### Value

* ViewBirthday
  * 0 - ẩn
  * 1 - hiện ngày/tháng/năm
  * 2 - hiện ngày/tháng
* ShowOnlineStatus
  * 0 - ẩn
  * 1 - hiện
* DisplaySeenStatus
  * 0 - ẩn
  * 1 - hiện
* ReceiveMessage
  * 1 - mọi người
  * 2 - chỉ từ bạn bè
* AcceptCall
  * 2 - chỉ từ bạn bè
  * 3 - mọi người
  * 4 - bạn bè và người lạ từng liên hệ
* AddFriendViaPhone
  * 0 - tắt
  * 1 - bật
* AddFriendViaQR
  * 0 - tắt
  * 1 - bật
* AddFriendViaGroup
  * 0 - tắt
  * 1 - bật
* AddFriendViaContact
  * 0 - tắt
  * 1 - bật
* DisplayOnRecommendFriend
  * 0 - tắt
  * 1 - bật
* ArchivedChat
  * 0 - tắt
  * 1 - bật
* QuickMessage
  * 0 - tắt
  * 1 - bật

### Return

`Promise<UpdateSettingsResponse>`

### Types

<<< @/snippets/apis/updateSettings/types.ts

### Examples

<<< @/snippets/apis/updateSettings/example.ts
