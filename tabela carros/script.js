const marcasCarro = ["BWM","FORD","MERCEDES","CHEVROLET"];
const valores = [15000,12000,19000,25000];
const carro = document.querySelector('#tabela-carros tbody');



let armazenaTabela = "";

let i = 0;

while(i < marcasCarro.length){
    armazenaTabela  += 
        `
            <tr>
                <td>${marcasCarro[i]}</td>
                <td>${valores[i]}</td>
            </tr>
        `;
        i++;
}
carro.innerHTML = armazenaTabela;

