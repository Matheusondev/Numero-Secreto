      let listaDeNumeros = []
      let numeroLimite = 100
        let numeroSecreto = gerarNumeroAleatorio()
        let tentativas = 1
        function exibirTextoNaTela(tag, texto) {
          let campo = document.querySelector(tag);
        campo.innerHTML = texto
        if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
  function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto')
        exibirTextoNaTela('p', 'Escolha um número entre 1 e 100')

  }
        exibirTextoNaTela('h1', 'Jogo do número secreto')
        exibirTextoNaTela('p', 'Escolha um número entre 1 e 100')

        function verificarChute(){
          let chute = document.querySelector ('input').value
        

        if (chute == numeroSecreto) {
          exibirTextoNaTela('h1', 'Acertou!')
          let mensagemTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
          let palavraTentativa = `Você acertou o número secreto com ${tentativas} ${mensagemTentativas} `
          exibirTextoNaTela('p', palavraTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
          if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor`)
          } else {
            exibirTextoNaTela('p', `O número secreto é maior`)
          }
          tentativas++
        }
        };

        function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() * 100 + 1)
        let quantidadeElementosLista = listaDeNumeros.length
        
        if (quantidadeElementosLista == numeroLimite) {
          listaDeNumeros = []
        } 

        if (listaDeNumeros.includes(numeroEscolhido)) {
          return gerarNumeroAleatorio()
        } else {
          listaDeNumeros.push(numeroEscolhido);
          console.log (listaDeNumeros)
          return numeroEscolhido
        }
        }
        
        
          function limparCampo() {
      let chute = document.querySelector('input');
      chute.value = '';
  }
  function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
  }
