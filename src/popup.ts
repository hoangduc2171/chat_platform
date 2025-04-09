// Modal
let modalContainer : HTMLElement | null = document.querySelector('.modal-container');
let closeButtons = [...document.querySelectorAll('.close-modal')] as HTMLButtonElement[];

export function openModal() {
    if (modalContainer)
        modalContainer.classList.remove('hide');
}

export function hideModal() {
    if (modalContainer)
        modalContainer.classList.add('hide');;
}

if (modalContainer != null) {
    let childModal = modalContainer.firstElementChild as HTMLElement | null;
    modalContainer.onclick = () => {
        hideModal();
    };
    
    if (childModal) {
        childModal.onclick = (e: Event) : void => {
            e.stopPropagation();
        };
    }
    
    closeButtons.forEach((button) => {
        button.onclick = () => {
            hideModal()
        };
    })
}