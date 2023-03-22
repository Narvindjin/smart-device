let scrollForm = () => {
  if (document.querySelector('[data-scroll-to="form"]')) {
    const form = document.querySelector('[data-scroll="form"]');
    document.querySelector('[data-scroll-to="form"]').addEventListener('click', () => {
      form.scrollIntoView({behavior: 'smooth', block: 'center'});
    });
  }
};

export {scrollForm};
