const servidor = ["Diogo Dias","Pedro Afonso","Diego matos"];
const lista = document.querySelector('#lista-nomes');

let i = 0;

while(i < servidor.length){
    lista.innerHTML += `<li>Nome:${servidor[i]}</li>`;
    i++
}



// variavel servidor [...]
// variavel lista <ul></ul>
// variavel i = 3;
