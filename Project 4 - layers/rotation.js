const pages = document.querySelectorAll('[class^="page"]');
const fastener = document.querySelector('.fastener');

/* Code adapted from https://stackoverflow.com/questions/52153424/how-to-use-event-listener-to-toggle-class-to-individual-list-item*/
pages.forEach(page => {
  page.addEventListener('click', function() {
    this.classList.toggle('rotated');
  });
});

/* Code adapted from https://stackoverflow.com/questions/5704479/stoppropagation-element-addeventlistener-vs-onclick-attribute*/
fastener.addEventListener('click', function(e) {
  e.stopPropagation();

  /* Code adapted from https://stackoverflow.com/questions/67518886/why-the-foreach-classlist-remove-iteration-is-not-working*/
  pages.forEach(page => {
    page.classList.remove('rotated');
  });
});