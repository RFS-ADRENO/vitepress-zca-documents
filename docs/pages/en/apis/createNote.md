# createNote

## api.createNote(options, groupId)

### Parameters

* options `CreateNoteOptions`
  * title `string`
  * pinAct `boolean?`
    * Ghim ghi chú, mặc định `false`
* groupId `string`

### Return

`Promise<CreateNoteResponse>`

### Types

<<< @/snippets/apis/createNote/types.ts

### Examples

Tạp ghi chú mới

<<< @/snippets/apis/createNote/example.ts

### Related

* [NoteDetail](../models/Board)
