
document.getElementById('year').textContent = new Date().getFullYear();

function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');
  if(!name || !message){ status.textContent = 'Please fill name and message.'; return; }
  // Local demo behavior: show a message and clear the form.
  status.textContent = 'Thank you! Your message has been recorded locally. Please call the shop for quick response.';
  setTimeout(()=>{ status.textContent = ''; }, 7000);
  document.getElementById('contactForm').reset();
}

function resetForm(){ document.getElementById('contactForm').reset(); }
