// Usando array
/*let nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase();

const nacoes = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"];

if(nacoes.includes(nacionalidade)) {
    console.log("Você é", nacionalidade);
}   else {
    console.log("Nacionalidade não encontrada."); 
};*/

//Outra forma

/*let nacionalidade = prompt("Qual a sua nacionalidade?").toLowerCase();

if(nacionalidade === "brasileira" || nacionalidade === "brasileiro") {
    console.log(`Nacionalidade: $(nacionalidade)`)
} else if(nacionalidade === "argentina" || nacionalidade === "argentino") {
    console.log(`Nacionalidade: $(nacionalidade)`)
} else if(nacionalidade === "uruguaia" || nacionalidade === "uruguaio") {
    console.log(`Nacionalidade: $(nacionalidade)`)
} else if(nacionalidade === "chilena" || nacionalidade === "chileno") {
    console.log(`Nacionalidade: $(nacionalidade)`)
} else if(nacionalidade === "colombiana" || nacionalidade === "colombiano") {
    console.log(`Nacionalidade: $(nacionalidade)`)
} else {
    console.log("Você não mora na América do Sul");
};*/

//Mais uma

let nacionalidade = prompt("Qual país você nasceu?").toLowerCase();

if(nacionalidade === "brasil") {
    console.log("Brasileiro(a)");
} else if(nacionalidade === "argentina") {
    console.log("Argentino(a)");
} else if(nacionalidade === "colombia") {
    console.log("Colombiano(a)");
} else if(nacionalidade === "uruguai") {
    console.log("uruguaio(a)");
} else if(nacionalidade === "chile") {
    console.log("chileno(a)");
} else {
    console.log("Nacionalidaded não registrada");
};