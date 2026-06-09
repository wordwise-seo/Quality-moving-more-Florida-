document.getElementById('yr').textContent = new Date().getFullYear();
  const head = document.getElementById('top');
  addEventListener('scroll', () => head.classList.toggle('scrolled', scrollY > 10));
  const btn = document.getElementById('menuBtn'), links = document.getElementById('navLinks');
  btn.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }), {threshold:.12});
  document.querySelectorAll('.reveal').forEach((el,i) => { el.style.transitionDelay = (i%3*80)+'ms'; io.observe(el); });