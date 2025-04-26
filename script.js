// Cookies
function aceitarCookies() {
    document.getElementById('cookies').style.display = 'none';
  }
  
  // Carrossel de depoimentos
  let indice = 0;
  const depoimentos = document.querySelectorAll('.depoimento');
  
  function mostrarDepoimento() {
    depoimentos.forEach((el, i) => {
      el.classList.remove('ativo');
      if (i === indice) el.classList.add('ativo');
    });
    indice = (indice + 1) % depoimentos.length;
  }
  setInterval(mostrarDepoimento, 4000);
  
  // Menu hambúrguer
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');
  
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
  function enviarWhatsApp(plano, preco) {
    const numero = "5599999999999"; // Substitua pelo número de WhatsApp com DDI e DDD
    const mensagem = `Quero o plano ${plano} custando ${preco}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }

  
  let currentIndex = 0;

function moveSlide(direction) {
  const carousel = document.getElementById("carousel");
  const totalSlides = carousel.children.length;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = totalSlides - 1;
  if (currentIndex >= totalSlides) currentIndex = 0;

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
 // Carrega o conteúdo de about.html no div
 fetch('about.html')
 .then(response => response.text())
 .then(data => {
   document.getElementById('componente-about').innerHTML = data;
 });