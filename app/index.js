const images = [
    {
        'id' :  1,
        'url': 'img/chrono.jpg',
    },
    {
        'id' :  2,
        'url': 'img/inuyasha.jpg',
    },
    {
        'id' :  3,
        'url': 'img/ippo.png',
    },
    {
        'id' :  4,
        'url': 'img/tenchi.jpg',
    },
    {
        'id' :  5,
        'url': 'img/tenjhotenge.jpg',
    },
    {
        'id' :  6,
        'url': 'img/yuyuhakusho.jpg',
    },
]

const containerItens = window.document.querySelector('#container-itens')


const loadImage = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'>
        </div>`
    })
}

loadImage( images, containerItens )


let itens = window.document.querySelectorAll('.item')


const previous = () =>{
    containerItens.appendChild(itens[0])
    itens = window.document.querySelectorAll('.item')
}
const next = () =>{
    containerItens.insertBefore(itens[itens.length - 1], itens[0])
    itens = window.document.querySelectorAll('.item')
}

window.document.querySelector('#previous').addEventListener('click', next)
window.document.querySelector('#next').addEventListener('click', previous)