let valores = [7, 9, 3, 1, 2, 8, 6, 0]

console.log(valores)


for(var pos = 0; pos<valores.length; pos++){
console.log(valores[`${pos}`])
}

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}