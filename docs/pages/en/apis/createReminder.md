# createReminder

## api.createReminder(options, threadId\[, type])

### Parameters

* options `CreateReminderOptions`
* threadId `string`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<CreateReminderResponse>`

### Types

<<< @/snippets/apis/createReminder/types.ts

### Examples

<<< @/snippets/apis/createReminder/example.ts

### Related

* [ReminderRepeatMode & ReminderUser & ReminderGroup](../models/Reminder)
* [ThreadType](../models/Enum)
