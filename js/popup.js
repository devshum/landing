const popup = document.querySelector('.pop-up');

const openPopupBtn = document.querySelector('.header__btn');

const closePopUpItems = [document.querySelector('.pop-up__icon'), document.querySelector('.pop-up__bg')]

openPopupBtn.addEventListener('click', () => {
  popup.classList.add('opened')
})

closePopUpItems.forEach(closeItem => {
  closeItem.addEventListener('click', () => {
    popup.classList.remove('opened')
  })
})