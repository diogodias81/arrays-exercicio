function  enviarDados(){
    let nome  = document.querySelector('#campoNome').value;
    let erro = document.querySelector('#erro-mensagem');
    if(!nome){
        erro.innerHTML = "produtos cadastrados!";
        return;
    }


    limparCampo()

   

    const textoAtual = 
    `Nome:${nome}<br>
    
    `
     document.querySelector('#resultado').innerHTML = document.querySelector('#resultado').innerHTML +textoAtual;
}

document.querySelector('#resumo').innerHTML = "texto modificado com js";


function limparCampo(){
    document.querySelector('#campoNome').value = "";
}