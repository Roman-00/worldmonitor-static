// Click add a mobile menu btn

const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu__btn');

    document.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if(target && target.closest('.menu__btn')) {
            btnMenu.classList.add('menu__btn--active');
        } else if (target && (target.tagName === 'A' || !target.classList.contains('menu__btn--active'))) {
            btnMenu.classList.remove('menu__btn--active');
        }
    });

};

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});


function init() {
    toggleMenu();
}

init();