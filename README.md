<h1 align="center">💬 Chat Platform</h1>

Nền tảng trò chuyện trực tuyến cho phép người dùng giao tiếp hiệu quả và an toàn.

## 🚀 Tính năng hiện có: 

- **Đăng nhập**
    - ✅ Validation (kiểm tra hợp lệ) đảm bảo rằng dữ liệu đó đúng định dạng, hợp lý, và an toàn trước khi xử lý tiếp.
    - ✅ Ẩn hiện mật khẩu
    - ✅ Thông báo khi nhập thông tin sai
    - ✅ Sử dụng Local Storage để giới hạn số lần đăng nhập 

## 🛠️ Công nghệ sử dụng

- **Frontend**: HTML, SCSS, TypeScript

## 📂 Cấu trúc thư mục

```bash
chat_platform/
├── public/
│   └── assets/
│       └── img/              # Thư mục chứa hình ảnh và tài nguyên tĩnh
├── src/                      # Mã nguồn chính của ứng dụng
├── .gitignore                # Các tệp và thư mục được bỏ qua bởi Git
├── 404_page.html             # Trang lỗi 404
├── forget_password.html      # Trang quên mật khẩu
├── index.html                # Trang chính của ứng dụng
├── package.json              # Thông tin về dự án và các phụ thuộc
└── tsconfig.json             # Cấu hình TypeScript

## ⚙️ Cài đặt và chạy dự án
**Điều kiện:**
- Để chạy project thì điều kiện cần có đó là cài đặt môi trường NodeJS. Dowload **[NodeJS](https://nodejs.org/en/download)**

- Bước tiếp theo, mở *Terminal* trên máy tính hoặc trên IDE (nếu có) và di chuyển tới thư mục dự án. 

``` bash 
    C:\...\chat-platform>
```

- Để chắc chắn bạn đã cài đặt NodeJS thành công hãy gõ lệnh:

```bash
    node -v     #Kiểm tra phiên bản hiện tại của NodeJS
    npm -v      #Kiểm tra phiên bản của package manager
```

- Để tiến hành bước tiếp theo bạn hãy cài **[Vite](https://vite.dev/)** để tiến hành tạo CLI cho dự án hiện tại. Với dự án có sẵn thì chúng ta chỉ cần sử dụng lệnh: 
```bash 
    npm install vite@latest #Cài phiên bản Vite mới nhất
```

- Sau khi đã cài đặt thành công, để chạy dự án sử dụng lệnh: 
``` bash
    npm run dev
```
Cuối cùng truy cập trình duyệt tại http://localhost:5173 (Hoặc cổng tương ứng được hiển thị)