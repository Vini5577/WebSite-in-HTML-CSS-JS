const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const resgisterLink = document.querySelector('.register-link');
const btnPopUP = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close')

resgisterLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});


loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopUP.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup')
})

