const nomes = ["Diniz","Pedro","Roberto"];
const idade = [22,17,20,]
const tabela = document.querySelector('#tabela-nomes tbody');

let conteudoLista ="";
let i = 0;

while(i < nomes.length){
    conteudoLista += 
    `<tr>
        <td>${nomes[i]}</td>
        <td>${idade[i]}</td>
    </tr>
    `;  
    i++;    
}
tabela.innerHTML = conteudoLista;
//adiciona os items na lista
// tabela.innerHTML += `<li>${nomes[i]}</li>`

//adiciona os itens da tabela no tbody
// tabela.innerHTML += 
//         `
//             <tr>
//                 <td>Nome:${nomes[i]} </td>
//             </tr>
//         ` 


