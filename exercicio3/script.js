/* 3. Crie um programa que peça um número e verifique se ele é positivo,
negativo ou zero. */

const numero = parseInt(Number(prompt("Insira um numero")))

if(numero > 0 ){
     document.write(`O numero ${numero} é positivo`)
} else if(numero < 0 ){
     document.write(`O numero ${numero} é  negativo`)
}else{
     document.write(`O numero ${numero} é igual a zero`)
}
