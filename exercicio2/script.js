//Uma solução
/*let idade = 25;
let ensinoMedio = true;
let cursaFaculdade = true;

//Se a pessoa tem 18 anos ou mais
if (idade >= 18) {
    console.log("Você é maior de idade", idade, "anos.");
} else {
    console.log("Você é menor de idade", idade, "anos.");
};
//Se a pessoa terminou o ensino médio
if (ensinoMedio === true) {
    console.log("Terminol o ensino médio");
} else {
    console.log("Você ainda e menor de idade");
};

//Se a pessoa NÃO está cursando alguma faculdade
if(cursaFaculdade === false) {
    console.log("Você naõ está na faculdade");
}   else {
    console.log("Você cursa uma faculdade");
};*/

//Outra solução
let idade = +prompt("Qual a sua idade?");
let maiorIdade

//Se a pessoa terminou o ensino médio;
if(idade >=18) {
    maiorIdade = "É maior de idade."
} else {
    maiorIdade = "É menor de idade."
};

//Se a pessoa terminou o ensino médio;
let ensinoMedio = prompt("Já concluiu o ensino médio? (Sim/Não)").toLowerCase();

if(ensinoMedio === "sim") {
    ensinoMedio = true
} else if(ensinoMedio === "não") {
    ensinoMedio = false
} else {
    alert("Dado inválido")
};

//Se a pessoa NÃO está cursando alguma faculdade;

let cursaFaculdade = prompt("Você cursa alguma faculdade? (Sim/Não)").toLowerCase();

if(cursaFaculdade === "sim") {
    cursaFaculdade = true
} else if(cursaFaculdade === "não") {
    cursaFaculdade = false
} else {
    alert("Dado inválido")
};

alert(`Com $(idade) anos $(maiorIdade):
A afirmação de que você concluiu o ensino médio é: $(ensinoMedio):
A afirmação de que você concluiu o ensino médio é: $(cursaFaculdade)`);
