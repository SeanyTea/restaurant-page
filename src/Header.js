function HeaderDiv() {
    const header = document.createElement('div')
    header.classList.add('header')

    const headerLogoDiv = document.createElement('div')
    headerLogoDiv.classList.add('logo')
    header.appendChild(headerLogoDiv)

    const headerLogo = document.createElement('img')
    headerLogo.src = '../images/logo.svg'
    headerLogoDiv.appendChild(headerLogo)

    const headerSlogan = document.createElement('p')
    headerSlogan.innerText = 'Sushi & Co.'
    headerLogoDiv.appendChild(headerSlogan)

    // Create nav-items
    const navBarDiv = document.createElement('div')
    navBarDiv.classList.add('nav-items')
    const unorderedList = document.createElement('ul')

    const home = document.createElement('li')
    home.id = 'nav-bar-home'
    const homeButton = document.createElement('button')
    homeButton.id = 'homeButton'
    homeButton.innerText = "Home"
    home.appendChild(homeButton)
    unorderedList.appendChild(home)

    const menu = document.createElement('li')
    menu.id = 'nav-bar-menu'
    const menuButton = document.createElement('button')
    menuButton.id = "menuButton"
    menuButton.innerText = "Menu"
    menu.appendChild(menuButton)
    unorderedList.appendChild(menu)

    const about = document.createElement('li')
    about.id = 'nav-bar-about'
    const aboutButton = document.createElement('button')
    aboutButton.id = "aboutButton"
    aboutButton.innerText = "About"
    about.appendChild(aboutButton)
    unorderedList.appendChild(about)

    const order = document.createElement('li')
    const orderButton = document.createElement('button')
    orderButton.innerText = "Order Online"
    order.appendChild(orderButton)
    unorderedList.appendChild(order)

    const cart = document.createElement('div')
    cart.classList.add('cart')
    const cartText = document.createElement('p')
    cartText.innerText = "Hello"
    cart.appendChild(cartText)
    navBarDiv.appendChild(unorderedList)
    
    header.appendChild(navBarDiv)
    header.appendChild(cart)
    return header;
  }

export default HeaderDiv;