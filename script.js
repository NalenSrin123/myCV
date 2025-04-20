// Typed text
new Typed('#name', {
    strings: ['SRIN NALEN'],
    typeSpeed: 120,
    backSpeed: 120,
    loop: true,
  });
  
  new Typed('#ads-text', {
    strings: ['មើលអី​ៗៗៗ'],
    typeSpeed: 120,
    backSpeed: 120,
    loop: true,
  });
  
  new Typed('.text-ok', {
    strings: ['នៀក នៀក នៀក សក់អ៊ុតសារ៉ូមមែន?'],
    typeSpeed: 90,
    loop: true,
  });
  
  // Popup logic
  const pop = document.querySelector('.pop');
  const image = document.querySelector('.image');
  const div = document.querySelector('.div');
  
  setTimeout(() => {
    pop.style.display = 'block';
  }, 500);
  
  document.getElementById('close').addEventListener('click', () => {
    image.style.visibility = 'visible';
  });
  
  document.querySelector('.btn-cancel').addEventListener('click', () => {
    image.style.visibility = 'hidden';
  });
  
  document.querySelector('.btn-ok').addEventListener('click', () => {
    div.style.display = 'block';
  });
  