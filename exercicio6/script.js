/* 6. Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada. */

const numero1 = Number(prompt("digite um numero"))
const numero2 = Number(prompt("digite outro numero"))

const operação = prompt("digite a operação ( / * - + )")

switch (operação){
     case '/' :
          document.write(`O ${numero1} divido por ${numero2} é igual ${numero1 / numero2}`)
          break;
     case '+' :
          document.write(`O ${numero1} somado por ${numero2} é igual ${numero1 + numero2}`)
          break;
     case '-' :
          document.write(`O ${numero1} subtraido por ${numero2} é igual ${numero1 - numero2}`)
          break;
     case '/' :
          document.write(`O ${numero1} multiplicado por ${numero2} é igual ${numero1 * numero2}`)
          break;
     default:
          document.write("operção nao valida, tente usar * - / ou +")
}