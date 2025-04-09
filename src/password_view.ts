const passwordElement = document.querySelector('input[type="password"]') as HTMLInputElement;
const passwordIcons = document.querySelector('.password-icons') as HTMLInputElement;
const iconAppear = document.querySelector('.fa-eye') as HTMLElement;
const iconHide = document.querySelector('.fa-eye-slash') as HTMLElement;
let hidePassword : boolean = true;


const changeStatePassword = () => {
    if (hidePassword) {
        passwordElement.type = 'text';
        iconAppear.classList.add('appear');
        iconHide.classList.remove('appear');
    } else {
        passwordElement.type = 'password';
        iconAppear.classList.remove('appear');
        iconHide.classList.add('appear');
    }
    hidePassword = !hidePassword;
}
[iconHide, iconAppear].forEach(icon => icon.addEventListener('click', changeStatePassword));


// Xử lý trường hợp khi nhập giá trị mới hiện nút điều khiển
passwordElement.addEventListener('input', () => {
    let passwordLength = passwordElement.value.length;
    if (passwordLength > 0) { 
        passwordIcons.classList.add('show');
    } else {
        passwordIcons.classList.remove('show');
    }
})

