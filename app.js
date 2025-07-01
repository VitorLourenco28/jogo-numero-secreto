let listaDeNumerosSorteados = []
let numeroSecretoAte = 100
let numeroSecreto = numeroAleatorio();
let tentativas = 1
mensagemInicial();

function editarTexto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    editarTexto('h1', 'Bem vinda, dona Telma!');
    editarTexto('p', 'Escolha um numero de 1 a 100');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
     
    if (chute == numeroSecreto){
        editarTexto('h1', 'Acertou mizeravi!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa} !`;
        editarTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else {
        if(numeroSecreto < chute){
            editarTexto('p',`O número secreto é menor que ${chute}`);
        } else {
            editarTexto('p', `O número secreto é maior que ${chute}`);
        }
        tentativas ++;
        limparCampo();
    }
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function numeroAleatorio() {
    let NumeroEscolhido = parseInt(Math.random() * numeroSecretoAte + 1);
    let  quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroSecretoAte){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(NumeroEscolhido)){
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(NumeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return NumeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');    
    chute.value = '';
}
let listaGenerica = [10, 10, 'a']
console.log (listaGenerica)

let linguagensDeProgramacao = ['java', 'Kotlin', 'Python']
console.log (linguagensDeProgramacao)
linguagensDeProgramacao.push = ['Java', 'Ruby', 'GoLang']
console.log (linguagensDeProgramacao [1])