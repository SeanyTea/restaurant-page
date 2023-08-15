import Home from './Home'
function firstRender(){
    const content = document.querySelector(".main-container");
    const mainHero = document.createElement('div')
    const home = Home();
    mainHero.classList.add('hero')
    mainHero.appendChild(home)
    content.appendChild(mainHero)
    const navBarHome = document.getElementById('nav-bar-home')
    navBarHome.classList.add('active');
}

export default firstRender 