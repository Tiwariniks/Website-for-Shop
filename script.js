
document.getElementById('year').textContent = new Date().getFullYear();

// Testimonials simple slider
let tests = document.querySelectorAll('.test');
let cur = 0;
function showTest(i){
  tests.forEach(t=>t.classList.remove('active'));
  tests[i].classList.add('active');
}
function nextTest(){ cur = (cur+1)%tests.length; showTest(cur); }
function prevTest(){ cur = (cur-1+tests.length)%tests.length; showTest(cur); }
setInterval(nextTest, 6000);

// Contact form local behavior
function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('status');
  if(!name || !message){ status.textContent = 'Please fill required fields.'; return; }
  status.textContent = 'Thank you — message saved locally. For urgent help, call or WhatsApp.';
  setTimeout(()=> status.textContent = '', 6000);
  document.getElementById('contactForm').reset();
}
function resetForm(){ document.getElementById('contactForm').reset(); }
