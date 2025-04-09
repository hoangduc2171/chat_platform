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

export default class Validation {
    private form: string;
    private text: string;
    private rules: Rule[];

    constructor({form, text, rules} : ValidationProps) {
        this.form = form;
        this.text = text;
        this.rules = rules;
        this.onInit();
    }

    private onValidate(element: HTMLInputElement, rule: Rule) {
        const parentElement = element.parentElement as HTMLElement;
        const textElement = parentElement.querySelector(this.text) as HTMLElement;
        const messageError : string | undefined = rule.handle(element.value);
        
        if (messageError) {
            textElement.innerText = messageError;
            parentElement.classList.toggle('invalid', Boolean(messageError));
        } else {
            textElement.innerText = '';
        }

        if (element)
            element.addEventListener('input', () => {
                textElement.innerText = '';
                parentElement.classList.remove('invalid');
            })
        return rule.handle(element.value);
    }

    private isValid(formElement: HTMLElement) {
        let checkValid : boolean[] = [];
        this.rules.forEach(rule => {
            const inputElement = formElement.querySelector(rule.selector) as HTMLInputElement;
            checkValid.push(!this.onValidate(inputElement, rule));
        })
        return !checkValid.includes(false);
    }

    private onInit() {
        const formElement = document.querySelector(this.form) as HTMLElement;
        if (formElement) {
            this.rules.forEach(rule => {
                const inputElement = formElement.querySelector(rule.selector) as HTMLInputElement;
                inputElement.addEventListener('blur', () => {
                    this.onValidate(inputElement, rule);
                })
            })
            
            formElement.addEventListener('submit', event => {
                let isValid = this.isValid(formElement);
                // loại bỏ sự kiện onsubmit để không load lại trang
                
                console.log(isValid);
                event.preventDefault();
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
    
    public static checkEmail(selector: string) {
        // regex check có phải email không
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return {
            selector: selector, 
            handle: (value: string) => {
                return regex.test(value.trim()) ? undefined : 'Vui lòng nhập đúng email!';
            }
        }
    }

    public static checkPassword = function (selector: string) {
        // regex check mật khẩu có ít nhất 8 ký tự gồm chữ hoa, chữ thường, số
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return {
            selector: selector, 
            handle: (value: string) => {
                return regex.test(value.trim()) ? undefined : 'Ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số.';
            }
        }
    }
}