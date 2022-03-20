const divContainer = document.getElementById('container-div')
const clearButton = document.getElementById('clear-board')
const drawButton = document.getElementById('draw-board')
const eraserButton = document.getElementById('eraser-button')
const inputSizeElement = document.getElementById('size-input')
let gridDivElement

function createBoard (size) {
    let widthAndHeight = 960 / size
    let child = divContainer.lastElementChild;
    while(child){
        divContainer.removeChild(child)
        child = divContainer.lastElementChild;
    }
    for (let index = 0; index < size*size; index++){
        const gridDiv = document.createElement('div')
        gridDiv.setAttribute('class', 'grid')
        gridDiv.setAttribute('id', 'grid-'+index)
        gridDiv.style.width = `${widthAndHeight}px`
        gridDiv.style.height = `${widthAndHeight}px`
        // gridDiv.innerText = index
        divContainer.append(gridDiv)
        gridDivElement = document.getElementsByClassName('grid')
    }
    return gridDivElement
}

const clearBoard = function () {
    for (grid in gridDivElement){
        let gridItem = document.getElementById('grid-'+grid)
        if (gridItem){
            gridItem.setAttribute('class', 'grid')
        }
    }
}

const drawHover = function () {
    for (grid in gridDivElement){
        let gridItem = document.getElementById('grid-'+grid)
        if (gridItem){
            gridItem.addEventListener('mouseover', () => {
            gridItem.setAttribute('class', 'grid grid-drawn')
            })
        }
    }
}

const eraseHover = function () {
    for (grid in gridDivElement){
        let gridItem = document.getElementById('grid-'+grid)
        if (gridItem){
            gridItem.addEventListener('mouseover', () => {
            gridItem.setAttribute('class', 'grid')
            })
        }
    }
}

window.onload = function () {
    createBoard(16)
    drawHover()
}

clearButton.addEventListener('click', () => {
    clearBoard()
})

drawButton.addEventListener('click', () => {
    let size = inputSizeElement.value
    createBoard(size)
    drawHover()
})

eraserButton.addEventListener('click', ()=>{
    eraseHover()
})
