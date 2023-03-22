let initCollapsibles = () => {
  if (document.querySelector('[data-hidden-content="info"]')) {
    const hiddenContent = document.querySelector('[data-hidden-content="info"]');
    const showButton = document.querySelector('[data-show-content="info"]');
    let isOpen = false;
    hiddenContent.classList.add('is-closed');
    showButton.addEventListener('click', () => {
      if (isOpen) {
        hiddenContent.classList.add('is-closed');
        hiddenContent.style.maxHeight = null;
        showButton.textContent = 'Подробнее';
      } else {
        showButton.textContent = 'Свернуть';
        hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px';
        hiddenContent.classList.remove('is-closed');
      }
      isOpen = !isOpen;
    });
    addEventListener('resize', () => {
      if (!(hiddenContent.classList.contains('is-closed'))) {
        hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px';
      }
    });
  }
  if (document.querySelector('[data-hidden-footer]')) {
    let accordionOpen = false;
    const showButtonArray = document.querySelectorAll('[data-show-footer]');
    const hiddenTextArray = document.querySelectorAll('[data-hidden-footer]');
    const breakpoint = window.matchMedia('(max-width:767px)');
    hiddenTextArray.forEach((block) => {
      block.classList.add('is-closed-mobile');
    });
    showButtonArray.forEach((button) => {
      const id = button.getAttribute('data-show-footer');
      const hiddenText = document.querySelector('[data-hidden-footer=' + CSS.escape(id) + ']');
      button.classList.add('footer__title--closed');
      button.addEventListener('click', () => {
        if (breakpoint.matches) {
          if (hiddenText.classList.contains('is-closed-mobile')) {
            if (accordionOpen) {
              hiddenTextArray.forEach((block) => {
                block.classList.add('is-closed-mobile');
                block.style.maxHeight = null;
              });
              showButtonArray.forEach((element) => {
                element.classList.add('footer__title--closed');
                element.classList.remove('footer__title--opened');
              });
            }
            button.classList.add('footer__title--opened');
            button.classList.remove('footer__title--closed');
            hiddenText.style.maxHeight = hiddenText.scrollHeight + 'px';
            hiddenText.classList.remove('is-closed-mobile');
            accordionOpen = true;
          } else {
            hiddenText.classList.add('is-closed-mobile');
            hiddenText.style.maxHeight = null;
            button.classList.add('footer__title--closed');
            button.classList.remove('footer__title--opened');
            accordionOpen = false;
          }
        }
      });
    });
    breakpoint.addListener(() => {
      if (!(breakpoint.matches)) {
        accordionOpen = false;
        hiddenTextArray.forEach((block) => {
          block.classList.add('is-closed-mobile');
          block.style.maxHeight = null;
        });
        showButtonArray.forEach((element) => {
          element.classList.add('footer__title--closed');
          element.classList.remove('footer__title--opened');
        });
      }
    });
  }
};
export {initCollapsibles};
