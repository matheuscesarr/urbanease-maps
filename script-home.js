function carregarConteudo() {
    fetch('map.html')
        .then(response => response.text())
        .then(data => {
            // Inserir o conteúdo na div "conteudo"
            document.querySelector('.conteudo').innerHTML = data;
            console.log('Funcionou!');
        })
        .catch(error => {
            console.error('Erro ao carregar o conteúdo:', error);
        });
}

// Chamar a função para carregar o conteúdo quando a página for carregada
window.addEventListener('DOMContentLoaded', carregarConteudo);