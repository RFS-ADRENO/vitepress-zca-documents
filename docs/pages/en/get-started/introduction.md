# Giới thiệu

## ZCA-JS

Là một thư viện cung cấp các API (unofficial) hỗ trợ bạn xây dựng 1 bot chat Zalo bằng chính tài khoản cá nhân của bạn.

**Lưu ý:** việc sử dụng thư viện này đồng nghĩa với việc bạn đang làm trái với chính sách của Zalo và nó có thể khiến cho tài khoản của bạn bị vô hiệu hóa. Chúng tôi sẽ không chịu trách nhiệm nếu điều đó xảy ra, vậy nên hãy cân nhắc trước khi sử dụng.

### Các tính năng

* Đăng nhập
  * [Cookie](/dang-nhap/dang-nhap-voi-cookie)
  * [QRCode](/dang-nhap/dang-nhap-voi-qrcode)
  * [Sử dụng nhiều tài khoản](/dang-nhap/dang-nhap-nhieu-tai-khoan)
  * [Sử dụng Proxy](/dang-nhap/su-dung-proxy)
* Lắng nghe các sự kiện:
  * [message](/listener/message)
  * [reaction](/listener/reaction)
  * [undo](/listener/undo)
  * [group_event](/listener/group_event)
* Các **API** giúp tương tác với **Zalo**:
  * [acceptFriendRequest](/api/acceptfriendrequest)
  * [addGroupDeputy](/api/addgroupdeputy)
  * [addReaction](/api/addreaction)
  * [addUserToGroup](/api/addusertogroup)
  * [blockUser](/api/blockuser)
  * [changeFriendAlias](/api/changefriendalias)
  * [changeGroupAvatar](/api/changegroupavatar)
  * [changeGroupName](/api/changegroupname)
  * [changeGroupOwner](/api/changegroupowner)
  * [createGroup](/api/creategroup)
  * [createNote](/api/createnote)
  * [createPoll](/api/createpoll)
  * [deleteMessage](/api/deletemessage)
  * [disperseGroup](/api/dispersegroup)
  * [editNote](/api/editnote)
  * [fetchAccountInfo](/api/fetchaccountinfo)
  * [findUser](/api/finduser)
  * [getAllFriends](/api/getallfriends)
  * [getAllGroups](/api/getallgroups)
  * [getContext](/api/getcontext)
  * [getCookie](/api/getcookie)
  * [getGroupInfo](/api/getgroupinfo)
  * [getOwnId](/api/getownid)
  * [getQR](/api/getqr)
  * [getStickers](/api/getstickers)
  * [getStickersDetail](/api/getstickersdetail)
  * [getUserInfo](/api/getuserinfo)
  * [lockPoll](/api/lockpoll)
  * [pinConversations](/api/setpinnedconversations)
  * [removeGroupDeputy](/api/removegroupdeputy)
  * [removeUserFromGroup](/api/removeuserfromgroup)
  * [sendCard](/api/sendcard)
  * [sendFriendRequest](/api/sendfriendrequest)
  * [sendMessage](/api/sendmessage)
  * [sendReport](/api/sendreport)
  * [sendSticker](/api/sendsticker)
  * [sendVoice](/api/sendvoice)
  * [unblockUser](/api/unblockuser)
  * [undo](/api/undo)

### Cài đặt

Với **Bun**:

```
bun add zca-js
```

Với **NPM**:

```
npm install zca-js
```
