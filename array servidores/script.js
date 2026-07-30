const servidores = ['Jõao Alberto','Guilherme Dias','Diego Dias'];


const tabela = document.querySelector('#tabela-servidores tbody');
const novaTabela = document.querySelector('#tabelaNovaServidores tbody');
const modificado0 = servidores.indexOf(servidores[0]);
const modificado1 = servidores.indexOf(servidores[1]);
const modificado2 = servidores.indexOf(servidores[2]);


// alert( 
//     `
//         \nO Primeiro Index é: \n${modificado0} Sendo o servidor: \n${servidores[0]}
//         \nO Segundo  Index é: \n${modificado1} Sendo o servidor: \n${servidores[1]}
//         \nO Terceiro Index é: \n${modificado2} Sendo o servidor: \n${servidores[2]}

//     `
// )
// alert('Bem vindo a lista de servidores!');

// alert(
//     `
//         Este são os Servidores: ${servidores[0]}
//         Este são os Servidores: ${servidores[1]}
//         Este são os Servidores: ${servidores[2]}

//     `);

 
// nomes.innerHTML = 
//     `
//         <li>Nome 1: ${servidores[0]}</li>
//         <li>Nome 2: ${servidores[1]}</li>
//         <li>Nome 3: ${servidores[2]}</li>
//     `;

// tabela.innerHTML = 
//     `
//     <table>
//         <tr>
//             <td>${servidores[0]}</td>
//             <td>${servidores[1]}</td>
//             <td>${servidores[2]}</td>
//         </tr>
//     </table>
//     `;

novaTabela.innerHTML = 
    `
    <tr>
        <td>${servidores[0]}</td>
        <td>18</td>
        <td>PA</td>
    </tr>
    <tr> 
        <td>${servidores[1]}</td>
        <td>20</td>
        <td>MA</td>
    </tr>
    <tr>
        <td>${servidores[2]}</td>
        <td>25</td>
        <td>RJ</td>
    </tr>

    `;

function mostrarTabela(){
    const tabela = document.querySelector('#tabelaMostrar');
    tabela.innerHTML =     `
    <table>
        <caption>Nome Servidores</caption
        <tr>
            <td>${servidores[0]}</td>
            <td>${servidores[1]}</td>
            <td>${servidores[2]}</td>
        </tr>
    `;
}





