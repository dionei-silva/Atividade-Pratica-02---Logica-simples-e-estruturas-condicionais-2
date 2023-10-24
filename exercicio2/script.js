/* 2. Crie um programa que peça um número de 1 a 7 e exiba o dia da
semana correspondente utilizando a estrutura condicional switch. */

const numero = parseInt(prompt("insira um numero de 1 a 7"))

switch(numero){
      case 1:
            document.write(`O dia ${numero} corresponde ao domingo`)
            break;
       case 2:
            document.write(`O dia ${numero} corresponde ao segunda`)
            break;           
       case 3:
            document.write(`O dia ${numero} corresponde ao terça`)
            break;           
       case 4:
            document.write(`O dia ${numero} corresponde ao quarta`)
            break;           
       case 5:
            document.write(`O dia ${numero} corresponde ao quinta`)
            break;           
       case 6:
            document.write(`O dia ${numero} corresponde ao sexta`)
            break;           
       case 7:
            document.write(`O dia ${numero} corresponde ao sabado`)
            break;
      default:
            document.write("Numero Invalido, isnira um numero de 1 a 7")           
}
