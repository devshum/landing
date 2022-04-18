const sectionHeroEl = document.querySelector('.hero');
const headerEl = document.querySelector('.header');

const observer = new IntersectionObserver(
  entries => {
    const ent = entries[0];
   
    if(!ent.isIntersecting) {
      headerEl.classList.add('fixed');
    }

    if(ent.isIntersecting && ent.boundingClientRect.top !== 0) {
      headerEl.classList.add('slideUp');
     
      setTimeout(() => {
        headerEl.classList.remove('fixed');
        headerEl.classList.remove('slideUp');
      }, 500);
    }
  },
  {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);






