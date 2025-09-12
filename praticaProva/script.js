document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    
    mensagem.textContent = "";
    mensagem.className = "mensagem";

    if (!validarEmail(email)) {
        mensagem.textContent = "Por favor, insira um e-mail válido.";
        mensagem.className = "mensagem erro";

        
        setTimeout(() => {
            mensagem.textContent = "";
            mensagem.className = "mensagem";
        }, 4000);
        return;
    }

    mensagem.textContent = "Cadastro concluído com sucesso.";
    mensagem.className = "mensagem sucesso";

    document.getElementById('cadastroForm').reset();

   
    setTimeout(() => {
        mensagem.textContent = "";
        mensagem.className = "mensagem";
    }, 4000);
});

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


document.getElementById('tarefaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value.trim();
    const data = document.getElementById('data').value;
    const mensagemTarefa = document.getElementById('mensagemTarefa');

    
    if (!titulo || !data) {
        mensagemTarefa.textContent = "Preencha todos os campos.";
        mensagemTarefa.className = "mensagem erro";

        setTimeout(() => {
            mensagemTarefa.textContent = "";
            mensagemTarefa.className = "mensagem";
        }, 4000);

        return;
    }

    
    mensagemTarefa.textContent = "Tarefa cadastrada com sucesso.";
    mensagemTarefa.className = "mensagem sucesso";

   
    document.getElementById('tarefaForm').reset();

    
    setTimeout(() => {
        mensagemTarefa.textContent = "";
        mensagemTarefa.className = "mensagem";
    }, 4000);
});
