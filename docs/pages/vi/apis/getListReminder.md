# getListReminder

## api.getListReminder(options, threadId\[, type])

### Parameters

* options `ListReminderOptions`
* threadId  `string`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<GetListReminderResponse>`

### Types

<<< @/snippets/apis/getListReminder/types.ts

### Examples

<<< @/snippets/apis/getListReminder/example.ts

### Related

* [ThreadType](../models/Enum)
* [ReminderGroup, ReminderUser](../models/Reminder)
