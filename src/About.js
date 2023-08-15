function About() {
  const about = document.createElement('div')
  about.classList.add('about')
  const text = document.createElement('div')
  text.classList.add('text')
  const h1Text = document.createElement('h1')
  h1Text.innerText = "Our Story"
  const pText1 = document.createElement('p')
  pText1.innerText = 'Our story began with a shared passion for both exceptional cuisine and the wellbeing of our planet. Driven by a commitment to sustainability, we embarked on a journey to create a unique sushi restaurant that redefines dining.'
  const pText2 = document.createElement('p')
  pText2.innerText = 'Every aspect of our establishment, from sourcing the freshest ocean-friendly ingredients to adopting innovative, eco-conscious practices in our kitchen, reflects our dedication to preserving marine ecosystems. With a menu that celebrates the artistry of sushi while prioritizing responsible fishing and farming methods, we invite our guests to savor flavors that not only tantalize the taste buds but also contribute to a healthier planet.'
  const pText3 = document.createElement('p')
  pText3.innerText = 'Our sustainable sushi restaurant is more than a dining experience; its a movement towards a harmonious relationship between culinary delight and environmental stewardship.'
  
  text.appendChild(h1Text)
  text.appendChild(pText1)
  text.appendChild(pText2)
  text.appendChild(pText3)
  about.appendChild(text)
  const imageDiv = document.createElement('div')
  imageDiv.classList.add('image')
  const image = document.createElement('img')
  image.src = "../images/roll.png"
  imageDiv.appendChild(image)
  about.appendChild(image)
  return about
  }

export default About;