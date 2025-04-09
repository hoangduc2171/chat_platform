
type MessageNotifyProps = {
    type: string,
    text: string, 
    button: HTMLButtonElement
}

export function messageNotify({type, text, button}: MessageNotifyProps) {
    button.disabled = true;
    let messageElement = document.querySelector('.error-notify') as HTMLElement;
    let titleElement = messageElement.querySelector('.error-title') as HTMLElement;

    messageElement.classList.add(type);
    titleElement.innerHTML = text;
    
    setTimeout(() => {
        messageElement.classList.remove(type);
        button.disabled = false;
    }, 4000);
}