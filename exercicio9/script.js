/* 9. Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida. */

const velocidade = Number(prompt("digite uma velocidade"))


if(velocidade > 80){
     multa = (velocidade - 80) * 5
     document.write(`Voce foi multado em R$: ${multa} reais.`)
}else{
     document.write("Voce esta dentro da velocidade permitida!")
}