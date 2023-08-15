function Home() {
    const home = document.createElement('div')
    home.classList.add('home')
    const text = document.createElement('div')
    text.classList.add('text')
    const h1Text = document.createElement('h1')
    h1Text.innerText = "From Sea to Table."
    const pText = document.createElement('p')
    pText.innerText = 'Get ready to roll. Life is better with Sushi & Co.'
    
    
    text.appendChild(h1Text)
    text.appendChild(pText)
    home.appendChild(text)
    const imageDiv = document.createElement('div')
    imageDiv.classList.add('image')
    const image = document.createElement('img')
    image.src = "../images/sushi.png"
    imageDiv.appendChild(image)
    home.appendChild(image)
    
    return home
  }

export default Home;