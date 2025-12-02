# Sử dụng Proxy

### Đối với Bun

::: code-group

<<< @/snippets/auth/using-proxy/bun.ts [index.ts]

:::

### Đối với NodeJS

Vì native fetch của NodeJS không hỗ trợ proxy nên phải thay thế nó bằng [node-fetch](https://www.npmjs.com/package/node-fetch)


::: code-group

<<< @/snippets/auth/using-proxy/nodeJS.ts [index.ts]

:::
