const divContainer = document.getElementById('container-div')

    for (let index = 0; index < 16; index++) {
        const gridDiv = document.createElement('div')
        gridDiv.setAttribute('class', 'grid grid-div')
        gridDiv.innerText = index
        divContainer.append(gridDiv)        
    }
    for (let index = 0; index < 15; index++) {
        for (let index = 0; index < 16; index++) {
            const gridDivBelow = document.createElement('div')
            gridDivBelow.setAttribute('class', 'grid grid-div-below')
            gridDivBelow.innerText = index
            divContainer.append(gridDivBelow)        
        }
    }