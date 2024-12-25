
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
      if (entry.isIntersecting) {
          entry.target.classList.add('slide-up-animation');
      } else {
        entry.target.classList.remove('slide-up-animation')
      }
  });
});
const slideElements = document.querySelectorAll('.slide-up');
slideElements.forEach((el) => observer.observe(el))

const observer2 = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-animation')
    } else {
      entry.target.classList.remove('fade-in-animation')
    }
  });
});
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach((el) => observer2.observe(el))




let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');
		
burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

const hideValues = {
    hide: "hidden",
    show: "showme",
  };
  
  function toggleEventHandler(event) {
    const targetSelector = event.target.dataset.target;
    const target = document.querySelector(targetSelector);
    const showHide = target.dataset.hideme == hideValues.hide ? hideValues.show : hideValues.hide;
    const toggleTargets = document.querySelectorAll('.toggle-target');
  
    toggleTargets.forEach(el => {
      el.dataset.hideme = hideValues.hide;
    });
    target.dataset.hideme = showHide;
    if (showHide === hideValues.show) {
      const firstListItem = target
      if (firstListItem) {
        firstListItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  
  /* set up event handlers on the buttons */
  const options = {
    capture: true
  };
  /* we do this first to prevent the click from happening */
  const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach(el => {
    el.addEventListener('click', toggleEventHandler, options)
  });

  /*   target.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'})*/