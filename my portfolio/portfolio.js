/* typing effect */
const typingEl = document.getElementById('typing');
const words = ['a Web Developer','a Machine‑Learning Engineer','a Data Analyst','a Creative Thinker','a Data Scientist', 'a Saxophonist'];
let w = 0, c = 0, del = false;
(function type(){
  const word = words[w];
  typingEl.textContent = del ? word.slice(0,--c) : word.slice(0,++c);
  if(!del && c === word.length){del=true;setTimeout(type,1200);}
  else if(del && c===0){del=false;w=(w+1)%words.length;setTimeout(type,500);}
  else setTimeout(type, del?60:100);
})();
/* mobile nav */
const nav = document.getElementById('nav');
document.getElementById('menu-toggle').addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));


/* dynamic year in footer */
document.getElementById('year').textContent = new Date().getFullYear();

/* (optional) basic form handler */
document.getElementById('contact-form').addEventListener('submit',e=>{
  e.preventDefault();
  alert('Thanks! Your message has been sent ✅');
  e.target.reset();
});
