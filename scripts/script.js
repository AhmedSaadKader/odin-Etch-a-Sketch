const divContainer = document.getElementById('container-div')

function drawBoard () {
    for (let index = 0; index < 256; index++){
        const gridDiv = document.createElement('div')
        gridDiv.setAttribute('class', 'grid')
        gridDiv.setAttribute('id', 'grid-'+index)
        gridDiv.innerText = index
        divContainer.append(gridDiv)        
    }
}

drawBoard()

let gridDivElement = document.getElementsByClassName('grid')

for (grid in gridDivElement){
    let gridItem = document.getElementById('grid-'+grid)
    gridItem.addEventListener('mouseover', () => {
        gridItem.setAttribute('class', 'grid grid-drawn')
    })
}