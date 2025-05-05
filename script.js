const projetos = document.querySelectorAll('.projeto');
projetos.forEach(projeto => {
    projeto.addEventListener('mouseenter', () => {
        projeto.style.backgroundColor = '#f0f0f0';
    });
    projeto.addEventListener('mouseleave', () => {
        projeto.style.backgroundColor = '';
    });
});
document.getElementById('form-contato').addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        event.preventDefault();
    } else {
        alert('Mensagem enviada com sucesso!');
    }
});
