# uploadAttachment

## api.uploadAttachment(source, threadId\[, type])

### Parameters

* source `AttachmentSource` | `AttachmentSource[]`
* threadId `string`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<UploadAttachmentType>`

### Types

<<< @/snippets/apis/uploadAttachment/types.ts

### Examples

<<< @/snippets/apis/uploadAttachment/example.ts

### Related

* [AttachmentSource](../models/Attachment)
* [ThreadType](../models/Enum)
