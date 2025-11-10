document.getElementById('y')?.textContent = new Date().getFullYear();

function openWhatsApp(){
  const name = document.getElementById('name')?.value || '';
  const mail = document.getElementById('mail')?.value || '';
  const phone = document.getElementById('phone')?.value || '';
  const msg = document.getElementById('msg')?.value || '';
  const text = encodeURIComponent(`مرحباً 3TN!\nالاسم: ${name}\nالبريد: ${mail}\nالهاتف: ${phone}\n\n${msg}`);
  // رقم واتساب دولي بدون +
  const phoneNumber = '967775151839';
  window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
}
window.openWhatsApp = openWhatsApp;
