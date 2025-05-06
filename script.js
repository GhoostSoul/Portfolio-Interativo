
const projetos = document.querySelectorAll('.projeto');
projetos.forEach(projeto => {
  projeto.addEventListener('mouseenter', () => {
    projeto.style.backgroundColor = '#f0f0f0';
  });
  projeto.addEventListener('mouseleave', () => {
    projeto.style.backgroundColor = '';
  });
});


(function () {
  emailjs.init("Szrf4fiPtJWHnS_Ihw"); 
})();


document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  emailjs.sendForm('service_5j7nxfy', 'template_4x5pjie', this)
    .then(function () {
      alert('Mensagem enviada com sucesso!');
      document.getElementById('contact-form').reset(); 
    }, function (error) {
      console.log('Erro:', error);
      alert('Ocorreu um erro ao enviar. Tente novamente.');
    });
});

