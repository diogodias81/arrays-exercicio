const nome = ["Pedro Afonso","Jõao Diniz","Matheus Dantas","Diogo Dias"];
const numeroCpf = [2134213,2343987,6278286,28475478];
const localidade = ["Marco","Tenoné","Jurunas","Pedreira"]
const tabela = document.querySelector('#tabelaFuncionarios tbody');

let variavelVazia = "";
let i = 0;


function mostrarTabela(){
 

    while(i < nome.length){

        variavelVazia += 
            `
            
                <tr>
                    <td>${nome[i]}</td>
                    <td>${numeroCpf[i]}</td>
                    <td>${localidade[i]}</td>    
                <tr>
            
            `;
            i++
    }


    tabela.innerHTML = variavelVazia;

















}