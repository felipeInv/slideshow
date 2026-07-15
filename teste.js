let itens2 = window.document.querySelectorAll('.item2')
console.log(itens2)

let body = window.document.body

body.appendChild(itens2[0])
itens2 = window.document.querySelectorAll('.item2')
console.log(itens2)
body.appendChild(itens2[0])
