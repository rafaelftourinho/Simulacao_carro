var statusCarro = "desligado";
var aceleracao = 0;
var rotacaoVolante = 0;
var farois = "desligado";

function ligarDesligar (){
	if (statusCarro === "desligado"){
	statusCarro = "ligado";
} else {
	statusCarro = "desligado";
}

	return statusCarro;
}

function acelerar(incremento){
	aceleracao = aceleracao + incremento;
	return "Acelerado a " + aceleracao + "m/s";
}

function frear(decremento){
	aceleracao = aceleracao - decremento;
	return "Desacelerando para " + aceleracao + "m/s";
}

function girarVolante(anguloRotacao){
	rotacaoVolante = anguloRotacao;
	return rotacaoVolante + "º";
}

function LigarDesligarFarois(){
	if (farois === "desligado"){
		farois = "ligado";
	} else {
		farois = "desligado";
	}
	return "Farol " + farois;
}