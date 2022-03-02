let inputAdultos = document.getElementById("adultos");
let inputAdultos0 = document.getElementById("adultos0");
let inputCriancas = document.getElementById("criancas");
let inputHoras = document.getElementById("horas");
let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let adultos0 = inputAdultos0.value;
    let criancas = inputCriancas.value;
    let horas = inputHoras.value;

    let totalCarne = carnePP(horas) * (adultos + adultos0) + (carnePP(horas)/2 * criancas);
    let totalCerveja = cervejaPP(horas) * adultos;
    let totalBebidas = bebidasPP(horas) * (adultos + adultos0) + (bebidasPP()/2 * criancas)
    console.log(totalCarne);
    console.log(totalCerveja)
    console.log(totalBebidas)

    resultado.innerHTML = `<ul><li>${Math.ceil(totalCarne/1000)} kg de carne.</li>
                                <li>${Math.ceil(totalCerveja/355)} latas de cerveja.</li>
                                <li>${Math.ceil(totalBebidas/2000)} garrafas 2l de refrigerante/água.</li>
                            </ul>`
}

function carnePP(){
    if(horas >= 6){
    return 600;
    }else{
        return 350;
    }
}

function cervejaPP(){
    if(horas >= 6){
        return 1800;
    }else{
        return 1200
    }
}

function bebidasPP(){
    if(horas >= 6){
        return  1500
    }else{
        return 1000
    }
}