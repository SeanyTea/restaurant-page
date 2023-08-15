function Menu(){
    const menu = document.createElement('div')
    menu.classList.add('menu')
    const imageDiv = document.createElement('div')
    imageDiv.classList.add('image')
    const image = document.createElement('img')
    image.src = "../images/sashimi.png"
    imageDiv.appendChild(image)
    menu.appendChild(imageDiv)
    const text = document.createElement('div')
    text.classList.add('text')
    const h1Text = document.createElement('h1')
    h1Text.innerText = "Menu"

    text.appendChild(h1Text)

    const apps = document.createElement('div')
    apps.classList.add('apps')
    const appsHeader = document.createElement('h2')
    appsHeader.innerText = "Appetizers"
    apps.appendChild(appsHeader)

    var unorderedList = document.createElement('ul')

    var li1 = document.createElement('li')
    li1.innerText = "Yellowtail Jalapeño"
    unorderedList.appendChild(li1)
    var li2 = document.createElement('li')
    li2.innerText = "Salmon Nashi"
    unorderedList.appendChild(li2)
    var li3 = document.createElement('li')
    li3.innerText = "Octopus Carpaccio"
    unorderedList.appendChild(li3)
    var li4 = document.createElement('li')
    li4.innerText = "Tuna Cilantro Dressing"
    unorderedList.appendChild(li4)

    apps.appendChild(unorderedList)
    text.appendChild(apps)


    const sashimi = document.createElement('div')
    sashimi.classList.add('sashimi')
    const sashimiHeader = document.createElement('h2')
    sashimiHeader.innerText = "Sashimi"
    sashimi.appendChild(sashimiHeader)

    unorderedList = document.createElement('ul')

    li1 = document.createElement('li')
    li1.innerText = "Tuna"
    unorderedList.appendChild(li1)
    li2 = document.createElement('li')
    li2.innerText = "Toro"
    unorderedList.appendChild(li2)
    li3 = document.createElement('li')
    li3.innerText = "Salmon"
    unorderedList.appendChild(li3)
    li4 = document.createElement('li')
    li4.innerText = "Yellowtail"
    unorderedList.appendChild(li4)

    sashimi.appendChild(unorderedList)
    text.appendChild(sashimi)

    const rolls = document.createElement('div')
    rolls.classList.add('rolls')
    const rollsHeader = document.createElement('h2')
    rollsHeader.innerText = "Rolls"
    rolls.appendChild(rollsHeader)

    unorderedList = document.createElement('ul')

    li1 = document.createElement('li')
    li1.innerText = "Spicy Tuna"
    unorderedList.appendChild(li1)
    li2 = document.createElement('li')
    li2.innerText = "California"
    unorderedList.appendChild(li2)
    li3 = document.createElement('li')
    li3.innerText = "Shrimp Tempura"
    unorderedList.appendChild(li3)
    li4 = document.createElement('li')
    li4.innerText = "Sweet Potato"
    unorderedList.appendChild(li4)

    rolls.appendChild(unorderedList)
    text.appendChild(rolls)

    const desserts = document.createElement('div')
    desserts.classList.add('desserts')
    const dessertsHeader = document.createElement('h2')
    dessertsHeader.innerText = "Desserts"
    desserts.appendChild(dessertsHeader)

    unorderedList = document.createElement('ul')

    li1 = document.createElement('li')
    li1.innerText = "Tempura Ice Cream"
    unorderedList.appendChild(li1)
    li2 = document.createElement('li')
    li2.innerText = "Matcha Layer Cake"
    unorderedList.appendChild(li2)
    li3 = document.createElement('li')
    li3.innerText = "Pandan Cheesecake"
    unorderedList.appendChild(li3)
    li4 = document.createElement('li')
    li4.innerText = "Mochi Ice Cream"
    unorderedList.appendChild(li4)

    desserts.appendChild(unorderedList)
    text.appendChild(desserts)
    
    menu.appendChild(text)
    

    
    return menu
}

export default Menu