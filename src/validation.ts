import { CheckForm } from "./form_check"

interface Rule {
    selector: string,
    handle: (value: string) => string | undefined
}

interface ValidationProps {
    form: string, 
    text: string, 
    rules: Rule[]
}

// Nhận các đối số là form, thẻ hiển thị thông báo lỗi, các quy định (có phải email, password có đúng định dạng)
export function Validation({form, text, rules} : ValidationProps) {
    // Hàm xử lí khi blur checkout khỏi input
    function validate(element: HTMLInputElement, rule: Rule) {
        const parentElement = element.parentElement as HTMLElement;
        const textElement = parentElement.querySelector(text) as HTMLElement;
        const messageError : string | undefined = rule.handle(element.value);
        
        if (messageError) {
            textElement.innerText = messageError;
            parentElement.classList.toggle('invalid', Boolean(messageError));
        } else {
            textElement.innerText = '';
        }

        element.addEventListener('input', () => {
            textElement.innerText = '';
            parentElement.classList.remove('invalid');
        })

        return rule.handle(element.value);
    }
    
    const formElement = document.querySelector(form) as HTMLElement;
    if (formElement) {
        rules.forEach((rule) => {
            const inputElement = formElement.querySelector(rule.selector) as HTMLInputElement;
            if (inputElement) {
                inputElement.addEventListener('blur', () => {
                    validate(inputElement, rule)
                })
            }
        })
        
        // Xử lý submit 

        formElement.addEventListener('submit', function(event) {
            // loại bỏ sự kiện onsubmit để không load lại trang
            event.preventDefault();
            // Biến checkValid để kiểm tra các trường có bị lỗi gì hay không
            let checkValid : boolean[] = [];

            rules.forEach(rule => {
                const inputElement = formElement.querySelector(rule.selector) as HTMLInputElement;
                checkValid.push(!validate(inputElement, rule));
            })
            let isValid = !checkValid.includes(false);
            
            if (isValid) {
                // Lấy giá trị từ các ô input có attr là name tránh trường hợp lấy giá trị checkbox;
                let enableInputs = [...formElement.querySelectorAll('[name]:not([disable])')] as HTMLInputElement[];
                let formValue = enableInputs.reduce((value: any, input) => {
                    value[input.name] = input.value;
                    return value;
                }, {})

               CheckForm(formValue, enableInputs, formElement);
            }
        })
    }    
}


Validation.checkEmail = function (selector: string) {
    // regex check có phải email không
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return {
        selector: selector, 
        handle: (value: string) => {
            return regex.test(value.trim()) ? undefined : 'Vui lòng nhập đúng email!';
        }
    }
}

Validation.checkPassword = function (selector: string) {
    // regex check mật khẩu có ít nhất 8 ký tự gồm chữ hoa, chữ thường, số
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return {
        selector: selector, 
        handle: (value: string) => {
            return regex.test(value.trim()) ? undefined : 'Ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số.';
        }
    }
}
