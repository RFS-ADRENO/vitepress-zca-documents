# sendBankCard

## api.sendBankCard(payload, threadId\[, type])

### Parameters

* payload `SendBankCardPayload`
* threadId `string`
* type `ThreadType?`
  * mặc định `ThreadType.User`

### Return

`Promise<SendBankCardResponse>`

### Types

<<< @/snippets/apis/sendBankCard/types.ts

### Examples

<<< @/snippets/apis/sendBankCard/example.ts

### Related

* [ThreadType, BinBankCard](../models/Enum)
