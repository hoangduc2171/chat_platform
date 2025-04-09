import { messageNotify } from "./message-notify";
import { openModal } from "./popup";

type FormData = {
    username: string, 
    password: string
}

let user : FormData = {
    username: "duc@gmail.com", 
    password: "Hduc12345"
}
// Ý tưởng: Sử dụng localStorage để lưu trữ số lần đăng nhập, sử dụng tên tài khoản làm key.
// Hàm này sẽ nhận các giá trị trả về khi validation không có lỗi, các thẻ input chứa thông tin.

export function CheckForm(value: FormData, inputs: HTMLInputElement[], forms: HTMLElement) {
    let buttonElement = forms.querySelector('button') as HTMLButtonElement;
    function clear() {
        inputs.forEach((input) => {
            input.value = '';
        })
    }
    let userKey = `${value.username}`;
    let count = 1;
    // Trước hết kiểm tra có tồn tại tài khoản không, nếu không hiển thị warning tài khoản không tồn tại.
    if (userKey == user.username) {
        // Nếu có check, tiếp đến password
        if (user.password == value.password && Number(localStorage.getItem(userKey)) < 5) {
            // Nếu tk, mk đúng thì loại bỏ bộ đếm sai và submit form
            if (localStorage.getItem(userKey)) {
                localStorage.removeItem(userKey);
            }
            clear();
            window.location.href = './404_page.html';
        } else {
            messageNotify({
                type: 'error',
                text: 'Bạn đã nhập sai tài khoản hoặc mật khẩu',
                button: buttonElement
            });
            // Nếu sai, kiểm tra xem tài khoản đó đã đăng nhập sai trước đó không, nếu chưa thì tạo một bộ đếm mới
            if (localStorage.getItem(userKey)) {
                count = Number(localStorage.getItem(userKey));
                // Kiểm tra quá 5 lần nhập
                if (count < 5) {
                    localStorage.setItem(userKey, (count + 1).toString());
                } else {
                    // Quá 5 lần sẽ chuyển đến trang quên mật khẩu.
                    clear();
                    openModal();
                }
            } else {
                // Tạo bộ đếm mới
                localStorage.setItem(userKey, count.toString());
            }
        }
    } else {
        messageNotify({
            type: 'error',
            text: 'Tài khoản không tồn tại!',
            button: buttonElement
        });
    }
}

