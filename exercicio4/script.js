/* 4. O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor. */

const custoFabrica = 28000
const imposto = 0.45
const distribuidor = 0.28

const custoFabricaImposto = custoFabrica * imposto 

const custoFabricaDistribuidor = custoFabrica * distribuidor

const custoFinal = custoFabrica + custoFabricaDistribuidor + custoFabricaImposto

document.write(`O Valor do carro fica em R$ ${custoFinal.toFixed(2)}`)