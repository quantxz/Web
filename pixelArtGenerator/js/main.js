const container = document.querySelector('.container')
const gridSizeEl = document.querySelector('.size')
let gridSize = gridSizeEl.value
const color = document.querySelector('.color')


const popule = (size) => {
    container.style.setProperty('--size', size)
    for(let i = 0; i < size * size; i++) {
            const div = document.createElement('div')
            div.classList.add('pixel')
            container.appendChild(div)

        div.addEventListener('click', () => {
            div.style.background = color.value
        });
        div.addEventListener('touchstart', () => {
            div.style.background = color.value
        });
        div.addEventListener('dblclick', () => {
            div.style.background = '#3D3C3E'
        });
        
    }
}

const reset = () => {
    container.innerHTML = ''
    popule(gridSize)
}

gridSizeEl.addEventListener('change', () => {
    gridSize = gridSizeEl.value
    reset()
})

popule(gridSize)