var idade = 66
console.log (`voce tem ${idade} anos`)
if  (idade < 16) {
    console.log ('Nao vota')
}else if (idade < 18 || idade > 65 ){
console.log ('Voto Opcional')
}else if (idade > 18){
console.log ('voto Obrigatorio')
}