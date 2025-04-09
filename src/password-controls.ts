// Passsword controls class 

interface PasswordProps {
    element: string,
    iconShow: string;
    iconHide: string;
}

export default class PasswordControls {
    private element: HTMLInputElement;
    private iconShow: HTMLElement;
    private iconHide: HTMLElement;
    private stateHidePassword: boolean = true;

    constructor({element, iconShow, iconHide} : PasswordProps) {
        this.element = document.querySelector(element) as HTMLInputElement;        
        this.iconShow = document.querySelector(iconShow) as HTMLElement;
        this.iconHide = document.querySelector(iconHide) as HTMLElement; 

        this.onInit();
    }

    private onInit() {
        [this.iconHide, this.iconShow].forEach(icon => icon.addEventListener('click', () => {
            this.changeStatePassword(this.element);
        }))

        this.element.addEventListener('input', () => {
            let passwordLength = this.element.value.length;
            let parentIconsElement = this.iconHide.parentElement as HTMLElement;
            if (passwordLength > 0) { 
                parentIconsElement.classList.add('show');
            } else {
                parentIconsElement.classList.remove('show');
            }
        })
    }

    private changeStatePassword(element: HTMLInputElement) {
        if (this.stateHidePassword) {
            element.type = 'text';        
            this.iconShow.classList.add('appear');
            this.iconHide.classList.remove('appear');
        } else {
            element.type = 'password';
            this.iconShow.classList.remove('appear');
            this.iconHide.classList.add('appear');
        }
        this.stateHidePassword = !this.stateHidePassword;
    }
}