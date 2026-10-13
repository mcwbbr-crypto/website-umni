(() => {
  const bar = document.getElementById('mobile-quick-actions');
  const hero = document.getElementById('home');
  const contact = document.getElementById('contato');
  if (!bar || !hero || !contact) return;
  const mobile = window.matchMedia('(max-width: 760px)');
  let heroVisible = true;
  let contactVisible = false;
  function update(){
    const dialogOpen = Boolean(document.querySelector('.analysis-modal.is-open, .blog-modal.is-open'));
    const show = mobile.matches && !heroVisible && !contactVisible && !dialogOpen;
    bar.classList.toggle('is-visible',show);
    document.body.classList.toggle('mobile-quick-actions-active',show);
    bar.inert = !show;
    bar.setAttribute('aria-hidden',String(!show));
  }
  const heroObserver = new IntersectionObserver(([entry]) => {heroVisible=entry.isIntersecting;update()},{threshold:0});
  const contactObserver = new IntersectionObserver(([entry]) => {contactVisible=entry.isIntersecting;update()},{threshold:0});
  heroObserver.observe(hero);contactObserver.observe(contact);
  mobile.addEventListener('change',update);
  new MutationObserver(update).observe(document.body,{attributes:true,subtree:true,attributeFilter:['class']});
  update();
})();
