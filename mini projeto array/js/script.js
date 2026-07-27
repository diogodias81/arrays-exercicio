const listaServidor = document.querySelector('#nomeFuncionarios')
const nomes = ['Pedro Afonso','Roberto Alves','Joao Alvares','Diogo fonseca'];
const modificado1 = nomes.indexOf(nomes[0])
const modificado2 = nomes.indexOf(nomes[1])
const modificado3 = nomes.indexOf(nomes[2])
const modificado4 = nomes.indexOf(nomes[3])

function mostrarArray(){
    const lista = document.querySelector('#resultadoArray');
    
    
    // alert(
    //     `Os dados da Lista sao:
    //         ${nomes[0]}
    //         ${nomes[1]}
    //         ${nomes[2]}
    //         ${nomes[3]}
    //     `
    // )
    
    lista.innerHTML = 
    `
        O Index ${modificado1 + 1} Possui o servidor: ${nomes[0]}<br>
        O Index ${modificado2 + 1} Possui o servidor: ${nomes[1]}<br>
        O Index ${modificado3 + 1} Possui o servidor: ${nomes[2]}<br>
        O Index ${modificado4 + 1} Possui o servidor: ${nomes[3]}<br>

        `;

    
}
    nomeFuncionarios.innerHTML = 
    `
    <option>Selecione...</option>
    <option>${nomes[0]}</option><br>
    <option>${nomes[1]}</option><br>
    <option>${nomes[2]}</option><br>
    <option>${nomes[3]}</option><br>
    `
    //nao esquecer!!!!!!
        //const nomes = ['Pedro roberto','joao silva']
        // const listaIndex = nomes.indexOf('Pedro roberto');
        // alert(`O Primeiro indice da lista e: ${nomes[0]} e possui a posicao: ${listaIndex + 1}`)