let num = [5, 8, 4]
num[3] = 6
num.push(7)

console.log(`Os valores do vetor são ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Nosso vetor possui ${num.length} valores`)

var pos = num.indexOf(8)

console.log(`O valor 8 está na posição ${pos}`)


num.sort()
console.log(`Os valores do vetor em ordem são ${num}`)

var pos = num.indexOf(8)

console.log(`Após a ordenação o valor 8 está na posição ${pos}`)


let ps = num.indexOf(10)
if (ps== -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${ps}`)
}