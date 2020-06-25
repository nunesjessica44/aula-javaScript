//html com javaScript

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b> obrigado por clicar </b>"; //atribue a string como filha do elemento, ou conteúdo do elemento 
    console.log(document.getElementById("agradecimento"));//mostra elemento que foi encontrado
    //alert ("obrigado por clicar");
}

function redirecionar () {

    /*redireciona abrindo em outra aba*/ window.open("https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide");//redireciona para outra página
    ///*redireciona na mesma janela*/ window.location.href = "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide";
}

function trocar (elemento) { 
    elemento.innerHTML = "obrigado por passar o mouse"; //não precisa do id, consegue replicar
    //(precisa do id no html, é usado quando não tem o paramentro e retira o this do html, mas se for replicar o segundo não irá funcionar) document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse"; //troca a string  <p>que se encontra aqui </p> apos passar o mouse
    //alert ("trocar texto");
}

function voltar (elemento) { 
    elemento.innerHTML = "passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";

}

function load() {
    alert ("pagina carregada");
}

function funcaoChange (elemento) {

    console.log (elemento.value); //vai carregar o valor do elemento
}

/*
function clicou(){
    document.getElementById("agradecimento"); //busca o elemento agradecimento no html
    console.log(document.getElementById("agradecimento"));//mostra elemento que foi encontrado
    //alert ("obrigado por clicar");
}
*/


//exemplos 

/*
var nome = " Jessica Nunes";
var n1 = 23;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert (nome + " tem " + idade + " anos");
//alert (idade + idade2);
console.log (nome);
console.log (n1 + n2); //pode * / e concatenar
console.log (frase.toLowerCase());
console.log (frase.replace("Japão", "Brasil")); //troca uma palavra por outra
console.log (frase.toUpperCase()); //tudo maiusculo
console.log (frase.toLowerCase());//tudo minusculo     
*/

/*
var lista = ["maça", "pera", "laranja"];
lista.push("uva"); //coloca item na lista
lista.pop (); //retira ultimo item da lista, no caso a uva que colocamos
console.log(lista);
console.log(lista.join(" - ")); //transforma em string e pode alterar o caracter de separação entre os elementos 
console.log(lista.toString()); //perde referencia de arey e transforma em uma string
console.log(lista.toString()[0]); //imprime apenas a primeira letra que está na posição 0, e não o elemento
console.log(lista.length); //para ver a quantidade de elementos da lista em numero, que pode ser somado
console.log(lista.reverse()); //trás os elementos ao contrario
alert (lista [1]); //apenas n1 = pera, pq inicia em posição 0
*/

/*
var fruta = {nome:"maça", cor:"vermelha"} //dicionario
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
//lista de dicionarios
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}] 
console.log(frutas);
console.log(frutas[1].nome);
*/

/*
var idade = prompt("qual sua idade?"); //pergunta ao usuario

if (idade >= 18) {    //condicional se-então 

    alert("maior de idade");

}else {   //condicional senão-então

    alert("menor de idade");
}
*/

/*
var count = 0;

while (count <= 5) { //estrutura de repetição

    console.log (count);
    alert(count);
    count++
}
*/

/*
var count;

for (count = 0; count <=5; count ++) { //estrutura de repetição

    alert(count);
}
*/

/*
var d = new Date ();  //trabalhando com data
alert(d);
alert(d.getMonth()+1);
alert(d.getDay()); //estra mostrando o dia incorreto, não sei porque
alert(d.getHours());
alert(d.getMinutes());
*/

/*
function soma (n1, n2){ //função que reebe 2 argumentos
    return n1 + n2; //retornando a soma desses argumentos
}

alert (soma(5,10)); //é necessário chamar a função, e colocar a referencia
*/

/*
function validaIdade (idade){ 
     var validar;
    if (idade>= 18){
        validar = true; 
    }else {
        validar = false;
    }
    return validar;
}

var idade = prompt("qual a sua idade?");
console.log(validaIdade(idade));
*/

/*
function setReplace(frase, nome, novo_nome){ //função que altera nome na frase

    return frase.replace(nome, novo_nome);
}

alert(setReplace("vai Japão", "Japão", "Brasil"));
*/