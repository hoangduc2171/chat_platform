<h1 align="center">
    💬 Chat Platform
</h1>
<p align="center">
    <img src="https://github.com/user-attachments/assets/4b16cac4-b8cf-4578-a355-0d0b91bd1154"/>
</p>

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

<p align="center">
    <img width="60%" src="https://github.com/user-attachments/assets/68dd824e-a0bf-470a-a1c0-b5bd0efc6e93" />
</p>

- Để tiến hành bước tiếp theo bạn hãy cài **[Vite](https://vite.dev/)** để tiến hành tạo CLI cho dự án hiện tại. Với dự án có sẵn thì chúng ta chỉ cần sử dụng lệnh: 
```bash 
    npm install vite@latest #Cài phiên bản Vite mới nhất
```
<p align="center">
    <img width="60%" src="https://github.com/user-attachments/assets/cd29598f-eadd-481f-91a4-6e986cd730bd" />
</p>

- Sau khi đã cài đặt thành công, để chạy dự án sử dụng lệnh: 
``` bash
    npm run dev
```
<p align="center">
    <img width="60%" src="https://github.com/user-attachments/assets/586d7b76-2038-44d2-9fe5-71fd06470f63" />
</p>

<h3 align="center">Cuối cùng truy cập trình duyệt tại http://localhost:5173 (Hoặc cổng tương ứng được hiển thị)</h3>

![{363C5FB9-C136-44CB-BF69-94AE4FC849A1}](https://github.com/user-attachments/assets/08533d44-ad0d-4b83-b9af-86dbce21563f)

<h3 align="center">Chúc mọi người có trải nghiệm vui vẻ 😘😘😘</h3>
