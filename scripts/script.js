const divContainer = document.getElementById('container-div')

    for (let index = 0; index < 256; index++){
        const gridDiv = document.createElement('div')
        gridDiv.setAttribute('class', 'grid')
        gridDiv.innerText = index
        divContainer.append(gridDiv)        
    }
