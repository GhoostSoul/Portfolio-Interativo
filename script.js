(function () {
  emailjs.init("zrf4fiPtJWHnS_Ihw"); 
})();


document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  emailjs.sendForm('service_l0g6bx5', 'template_4x5pjie', this)
    .then(function () {
      alert('Mensagem enviada com sucesso!');
      document.getElementById('contact-form').reset(); 
    }, function (error) {
      console.log('Erro:', error);
      alert('Ocorreu um erro ao enviar. Tente novamente.');
    });
});


