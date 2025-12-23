# editReminder

## api.editReminder(options, groupId)

### Parameters

* options `EditReminderOptions`
* groupId `string`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<EditReminderResponse>`

### Types

<<< @/snippets/apis/editReminder/types.ts

### Examples

<<< @/snippets/apis/editReminder/example.ts

### Related

* [ReminderRepeatMode & ReminderUser & ReminderGroup](../models/Reminder)
* [ThreadType](../models/Enum)
