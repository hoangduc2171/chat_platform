
type MessageNotifyProps = {
    type: string,
    text: string, 
    duration?: number,
    buttonHandled: HTMLButtonElement
}

export default class MessageNotify {
    private type : string;
    private text: string;
    private buttonHandled: HTMLButtonElement
    static duration: number;

    constructor({type, text, duration, buttonHandled}: MessageNotifyProps) {
        this.type = type;
        this.text = text;
        this.buttonHandled = buttonHandled;

        this.onInit(this.buttonHandled, duration ? duration : 3000);
    }

    onInit(button: HTMLButtonElement, duration: number) {
        button.disabled = true;
        let messageElement = document.querySelector('.error-notify') as HTMLElement;
        let titleElement = messageElement.querySelector('.error-title') as HTMLElement;

        messageElement.classList.add(this.type);
        titleElement.innerHTML = this.text;
        
        setTimeout(() => {
            messageElement.classList.remove(this.type);
            button.disabled = false;
        }, duration);
    }
}
