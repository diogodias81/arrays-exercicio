//function mostrarCores(e){
    //e.preventDefault()
    //let cores = ["preto","azul","vermelho","verde"];
    
    //usando join para dar espacos bonitos ao array
    //document.querySelector('#resultado').value = cores.join(", ");
    //cores.push("verde")
    //for(let n = 0; n < cores.length;n++){
        //console.log(cores[n]);
    //}
//};


let nomes = [
    {Nome: "Diogo",idade: 10 },
    {Nome: "joava",idade: 15 },
    {Nome: "pedro",idade: 19 },
    {Nome: "rodolfo",idade: 24 },
]
for (let i in nomes){
    console.log(nomes[i].idade)
}