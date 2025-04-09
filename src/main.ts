import { Validation } from "./validation";
// Slide button
const slideButtons = document.querySelectorAll('.slide');
    slideButtons.forEach((slideBtn) => {
        slideBtn.addEventListener('click', () => {
            slideButtons.forEach(slideBtn => slideBtn.classList.remove('active'))
            slideBtn.classList.add('active');
    })
})

// Validation form
Validation(
    {
        form: '#sign-in__form',
        text: '.input-subtext',
        rules: [
            Validation.checkEmail('#username'),
            Validation.checkPassword('#password')
        ]
    }, 
)

Validation(
    {
        form: '#forget-password__form',
        text: '.input-subtext',
        rules: [
            Validation.checkEmail('#email'),
        ]
    }, 
)





