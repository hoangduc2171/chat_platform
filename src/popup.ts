interface PopUpProps {
    container : string;
    closeClass : string;
}

export default class PopUp {
    private container : HTMLElement;
    private removes : HTMLButtonElement[];

    constructor({container, closeClass} : PopUpProps) {
        this.container = document.querySelector(container) as HTMLElement;
        this.removes = [...document.querySelectorAll(closeClass)] as HTMLButtonElement[];

        this.onInit();
    }

    public onInit() {
        let childModal = this.container.firstElementChild as HTMLElement | null;
        this.container.onclick = () => {
            this.hideModal();
        };
        
        if (childModal) {
            childModal.onclick = (e: Event) : void => {
                e.stopPropagation();
            };
        }
        
        this.removes.forEach((button) => {
            button.onclick = () => {
                this.hideModal()
            };
        })
    }

    public openModal() {
        this.container.classList.remove('hide');
    }

    public hideModal() {
        this.container.classList.add('hide');
    }
}
