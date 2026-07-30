const frutas = ["PERA","UVA","BANANA","MELANCIA"];
const valorFruta = [1,2,12,25];
const tabela = document.querySelector('#tabela-frutas tbody')


let armazenaTabela = "";
let i = 0;

while(i < frutas.length){
    armazenaTabela += 
        `
            <tr>
                <td>${frutas[i]}</td>
                <td>${valorFruta[i]}</td> 
            </tr>
        `;
        i++;
}

tabela.innerHTML = armazenaTabela;