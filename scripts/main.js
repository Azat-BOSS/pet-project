const signUp = document.querySelector('.header__button');
const modalSignUp = document.querySelector('.popup');
const closeButton = modalSignUp.querySelector('.popup__close-button');
/* меню бурге */
const burgerMenu = document.querySelector('.header__burger-button');
const headerLinks = document.querySelector('.header__inner-links')
const backgroundBurger = document.querySelector('.header')


function openPopup(popup) {
    popup.classList.add('popup__active')
}

function closePopup(popup) {
    popup.classList.remove('popup__active')
}

signUp.addEventListener('click', evt => {
    openPopup(modalSignUp)
})

closeButton.addEventListener('click', evt => {
    closePopup(modalSignUp)
})
burgerMenu.addEventListener('click', evt => {
    headerLinks.classList.add('header__inner-links_active')
    backgroundBurger.classList.add('header_active')
})