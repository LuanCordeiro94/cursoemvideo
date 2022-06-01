let num = [5, 8, 2, 9, 3]
num.push(7)
num.sort()
console.log(num)
console.log(`Meu vetor tem ${num.length} posições`)
console.log(`O primeiro valor do meu vetor é ${num[0]}`)
let pos = num.indexOf(10)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
