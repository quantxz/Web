const buttonh = document.querySelector('.buttonHome')
const buttona = document.querySelector('.buttonAnimal')
const buttonl = document.querySelector('.buttonLoc')
const input = document.querySelector('.inpu')
const content = document.querySelector('.content')

const home = document.querySelector('.conteudo')
const animals = document.querySelector('.conteudoanimais')
const loc = document.querySelector('.conteudoLoc')

const cardFirst = document.querySelector('.card1')
const cardSecond = document.querySelector('.card2')
const cardThird = document.querySelector('.card3')

const dog = document.querySelector('.dogImage')
const cat = document.querySelector('.catImage')

const dogAPI = async () => {
    const responseApi = await fetch('https://dog.ceo/api/breeds/image/random');

    if (responseApi.status === 200) {
        const data = await responseApi.json();
        console.log(data)
        return data
    }
}

const Renderdog = async () => {
    const data = await dogAPI();

    if(data){
        dog.src = data['message']
    }
}

const catAPI = async () => {
    const responseCatApi = await fetch('https://aws.random.cat/meow');

    if (responseCatApi.status === 200) {
        const data = await responseCatApi.json();
        console.log(data)
        return data
    }
}

const Rendercat = async () => {
    const data = await catAPI();

    if(data){
        cat.src = data['file']
    }
}








buttonh.addEventListener('click', async () => {
    buttonh.classList.add('buttonHome')
    buttona.classList.remove('buttonHome')
    buttonl.classList.remove('buttonHome')
    home.style.display = 'block'
    content.style.display = 'block'
    animals.style.display = 'none'
    loc.style.display = 'none'
    input.setAttribute('placeholder', 'procure um animal')
})

buttona.addEventListener('click', async () => {
    buttona.classList.add('buttonHome')
    buttonh.classList.remove('buttonHome')
    buttonl.classList.remove('buttonHome');
    animals.style.display = 'block';
    home.style.display = 'none';
    loc.style.display = 'none';
    content.style.display = 'none'
    input.setAttribute('placeholder', 'procure um animal')
})

buttonl.addEventListener('click', () => {
    buttonl.classList.add('buttonHome')
    buttona.classList.remove('buttonHome')
    buttonh.classList.remove('buttonHome')
    loc.style.display = 'flex'
    home.style.display = 'none'
    animals.style.display = 'none'
    content.style.display = 'none'
    input.setAttribute('placeholder', 'digite um cep')

})

window.sr = ScrollReveal({ reset: true });


sr.reveal('.title', { duration: 1600 });
sr.reveal('.context', { duration: 2000 });
sr.reveal('.conteudo', { duration: 2000 });

