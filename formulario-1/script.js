function enviarDados(){
    let nome = document.querySelector('#nome').value;
    let idade =document.querySelector('#idade').value;
    let cpf = document.querySelector('#cpf').value;
    let contato = document.querySelector('#telefone').value;
    let nascimento = document.querySelector('#dataNascimento').value;
    let email = document.querySelector('#email').value
    let mae = document.querySelector('#nomeMae').value;
    let pai = document.querySelector('#nomePai').value;

    if(!nome){
        alert("O Campo nome esta em branco");
        return;
    }
    if(!idade){
        alert("O Campo idade esta em branco!")
        return;
    }
    
    if(!cpf){
        alert("O Campo CPF esta em branco!")
        return;
    }
    
    if(!contato){
        alert("O Campo contato esta em branco!")
        return;
    if(!nascimento){
        alert("O Campo email esta em branco!")
        return
    }}
    
    if(!email){
        alert("O Campo email esta em branco!")
        return;
    }
    
    if(!mae){
        alert("O Campo nome Mãe esta em branco!")
        return;
    }
    
    if(!pai){
        alert("O Campo nome do Pai esta em branco!")
        return;
    }
}