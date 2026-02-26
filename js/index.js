document.getElementById("texto").innerHTML = "<b> Meu primeiro texto JS! <b>"; /*  */
alert("oi, isso é um alerta");
console.log("olá isso é um console.log");
// inserindo um texto no paragrafo
var a=1;
var b=2;
var c=7;
var d= a + b + c / 2;
var oito= 3 * 7
console.log(d);
console.log(oito)


{var nome, sobrenome,nomeCompleto;
nome = "joao";
sobrenome = "vitor";
nomeCompleto= nome + "  "  +  sobrenome;
document.getElementById("texto-2").innerHTML = nomeCompleto; 
}

function soma(valor1, valor2){
    return valor1 + valor2;
}
document.getElementById("texto-3").innerHTML = soma(10,10);

function alertaHello(){
    alert("Olá, pessoal!");
}

function paraCelsius(valorFahrenheit){
    return (5 / 9) * (valorFahrenheit - 32);
    
}

function mostrarTemperatura(){
   let x = paraCelsius(77);
    alert("A temperatura é de " + x + " graus celsius");
}
/* OBJETOS */
 const carro = {
    marca: "ford",
    modelo: "mustang",
    ano: 2015,
    placa: "VBV-1234",
    buzina: function() { alert('biiiiiiiiiii') },
    completo: function() {
        return "A marca é " +this.marca+" e o modelo é: " + this.modelo;
    }
 }
 console.log(carro.completo());
 /* EVENTOS */
 /* 
 (x)onclick: ocorre quando um elemento é clicado
 (x)ondblclick: ocorre quando um elemento é clicado duas vezes
 (x)onmouseover: ocorre quando o mouse é movido para cima de um elemento
 (x)onmouseout: ocorre quando o mouse é movido para fora de um elemento
 (x)onmousemove: ocorre quando o mouse é movido dentro de um elemento
 (x)onmousedown: ocorre quando um botão do mouse é pressionado sobre um elemento
    onmouseup: ocorre quando um botão do mouse é liberado sobre um elemento
    onfocus: ocorre quando um elemento recebe foco
    onchange: ocorre quando o valor de um elemento é alterado
    onblur: ocorre quando um elemento perde o foco
    onkeydown: ocorre quando uma tecla é pressionada
    onkeypress: ocorre quando uma tecla é pressionada e liberada
    onkeyup: ocorre quando uma tecla é liberada
    onload: ocorre quando a página é carregada
    onresize: ocorre quando a janela do navegador é redimensionada
 */
    // EVENTO: onclick
    function unClick(){
        document.body.style.backgroundColor = "yellow";
    }
    console.log(unClick);


    // EVENTO:ondblclick
    function eventodblclick(){
        document.body.style.backgroundColor = "red";
    }
    console.log(eventodblclick);

    //EVENTO: Onmouseover
    function viraVermelho(){
        let div = document.getElementById("teste");
        div.style.backgroundColor = "red";
    }
    //EVENTO: Onmouseout
    function voltaAzul(){
        let div = document.getElementById("teste");
        div.style.backgroundColor = "blue";
    }
    //EVENTO: onmousemove
    function adicionaTexto(){
        let p = document.getElementById("texto");
        p.append("o mouse está movendo");
    }
    //EVENTO: onmousedown
    