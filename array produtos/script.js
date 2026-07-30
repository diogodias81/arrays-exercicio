const produtos = ['Ipé','Sabão','Blusa','Escovinha'];

const lista = document.querySelector('#lista-produtos');
const opcoes = document.querySelector('#opcoesSelecionadas');
const tabela = document.querySelector('#tabela-produtos');
const verLIsta = document.querySelector('#arrayCopiar')
//sintaxe para ver o index da array
const modificado0 = produtos.indexOf(produtos[0]);
const modificado1 = produtos.indexOf(produtos[1]);
const modificado2 = produtos.indexOf(produtos[2]);
const modificado3 = produtos.indexOf(produtos[3]);

alert(
    `
    O Index ${modificado0} e o produto: ${produtos[0]}
    O Index ${modificado1} e o produto: ${produtos[1]}
    O Index ${modificado2} e o produto: ${produtos[2]}
    O Index ${modificado3} e o produto: ${produtos[3]}
    `
)
lista.innerHTML = 
    `
        <li>Nome: ${produtos[0]} </li>
        <li>Nome: ${produtos[1]} </li>
        <li>Nome: ${produtos[2]} </li>
        <li>Nome: ${produtos[3]} </li>
    `

opcoes.innerHTML = 
    `
        <option>SELECIONE...</option>
        <option>${produtos[0]}</option>
        <option>${produtos[1]}</option>
        <option>${produtos[2]}</option>
        <option>${produtos[3]}</option>
    `
// alert(
//         `Esses sao os produtos:
//             ${produtos[0]}
//             ${produtos[1]}
//             ${produtos[2]}
//             ${produtos[3]}
        
//         `

//     );

tabela.innerHTML = 
     `
    <tr>
        <th>Nome:</th>
    </tr>
    <tr>
        <td>${produtos[0]}</td>
    </tr>
    <tr>
        <td>${produtos[1]}</td>
    </tr>
    <tr>
        <td>${produtos[2]}</td>
    </tr>

    

     `  
    
function verProdutos(){
    verLIsta.innerHTML = 
    `
    Este e a primeiro da lista de produtos:${produtos[0]}<br>
    Este e o segundo produto da lista:${produtos[1]}<br>
    Este e o terceiro produto da lista:${produtos[2]}<br>
    Este e o quarto produto da lista:${produtos[3]}<br>
    `

}

