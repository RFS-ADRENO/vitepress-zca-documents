const groupId = "0000000000000000000";

// xóa 1 thành viên
const memberId = "0000000000000000001";
api
    .removeUserFromGroup(memberId, groupId)
    .then(console.log).catch(console.error);
    
// xóa nhiều thành viên
const memberIds = ["0000000000000000001", "0000000000000000002"];
api
    .removeUserFromGroup(memberIds, groupId)
    .then(console.log).catch(console.error);