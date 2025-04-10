import Validation from "./validation";
import PasswordControls from "./password-controls";

// Slide button
const slideButtons = document.querySelectorAll('.slide');
    slideButtons.forEach((slideBtn) => {
        slideBtn.addEventListener('click', () => {
            slideButtons.forEach(slideBtn => slideBtn.classList.remove('active'))
            slideBtn.classList.add('active');
    })
})

document.addEventListener('DOMContentLoaded', () => {
    new PasswordControls({
        element: '#password',
        iconShow: '.fa-eye',
        iconHide: '.fa-eye-slash'
    })
    new Validation(
        {
            form: '#sign-in__form',
            text: '.input-subtext',
            rules: [
                Validation.checkEmail('#username'),
                Validation.checkPassword('#password')
            ]
        }, 
    )
    
    new Validation(
        {
            form: '#forget-password__form',
            text: '.input-subtext',
            rules: [
                Validation.checkEmail('#email'),
            ]
        }, 
    )
});




