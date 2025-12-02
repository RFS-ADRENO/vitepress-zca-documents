# Nâng cấp lên v2

### Đăng Nhập

#### 1.x.x

::: code-group

<<< @/snippets/get-started/upgrade-to-v2/v1-login.ts [index.ts]

:::

#### 2.x.x

::: code-group

<<< @/snippets/get-started/upgrade-to-v2/v2-login.ts [index.ts]

:::

### ImageMetadataGetter

Kể từ phiên bản 2.0.0, **zca-js** đã loại bỏ sự phụ thuộc vào **sharp** trong việc trích xuất siêu dữ liệu hình ảnh. Giờ đây, **zca-js** yêu cầu người dùng tự cung cấp hàm **imageMetadataGetter** khi khởi tạo lớp Zalo nếu muốn gửi ảnh/gif theo đường dẫn tệp.

#### Ví dụ với Sharp

Cài đặt thư viện **sharp** và xây dựng hàm trích xuất dữ liệu hình ảnh

```bash
bun add sharp # or npm install sharp
```

::: code-group

<<< @/snippets/get-started/upgrade-to-v2/image-metadata-getter-sharp.ts [index.ts]

:::
