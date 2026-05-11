// Navbar scroll effect
const navbar = document.getElementById('navbar');
if(navbar){
  window.addEventListener('scroll',()=>{
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// Mobile nav toggle
function toggleNav(){
  const nav = document.getElementById('navLinks');
  const toggle = document.getElementById('navToggle');
  if(nav) nav.classList.toggle('open');
  if(toggle) toggle.classList.toggle('active');
}

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click',()=>{
    const nav = document.getElementById('navLinks');
    const toggle = document.getElementById('navToggle');
    if(nav) nav.classList.remove('open');
    if(toggle) toggle.classList.remove('active');
  });
});

// Scroll animations
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.12});

document.querySelectorAll('.fade-up,.fade-in').forEach(el=>{
  observer.observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    const href = this.getAttribute('href');
    if(href==='#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if(target){
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({top, behavior:'smooth'});
    }
  });
});

// Active nav link highlight
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll',()=>{
  let current = '';
  sections.forEach(section=>{
    const top = section.offsetTop - 100;
    if(window.pageYOffset >= top) current = section.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a').forEach(link=>{
    link.style.color = '';
    if(link.getAttribute('href') === '#'+current){
      link.style.color = 'var(--secondary)';
    }
  });
});
