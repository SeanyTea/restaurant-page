import './styles.css';
import firstRender from './firstRender'
import HeaderDiv from './Header';
import Home from './Home'
import About from './About'
import Menu from './Menu'

const content = document.querySelector(".main-container");
const header = HeaderDiv();
const home = Home();
const about = About();
const menu = Menu();

content.appendChild(header);
firstRender();
const hero = document.querySelector('.hero')

const homeButton = document.getElementById('homeButton')
const menuButton = document.getElementById('menuButton')
const aboutButton = document.getElementById('aboutButton')

homeButton.addEventListener('click',function(){
    var child = hero.lastElementChild;
    while (child){
        hero.removeChild(child)
        child = hero.lastElementChild;
    }
    // remove active tag
    for (const li of document.querySelectorAll("li.active")) {
        li.classList.remove("active");
      }
    const navBarHome = document.getElementById('nav-bar-home')
    navBarHome.classList.add('active');
    console.log(homeButton)
    hero.appendChild(home);
})
menuButton.addEventListener('click', function() {
    var child = hero.lastElementChild;
    while (child){
        hero.removeChild(child)
        child = hero.lastElementChild;
    }
    //Remove active tag
    for (const li of document.querySelectorAll("li.active")) {
        li.classList.remove("active");
      }
    const navBarMenu = document.getElementById('nav-bar-menu')
    navBarMenu.classList.add('active');
    hero.appendChild(menu);
    console.log(hero)
})

aboutButton.addEventListener('click',function(){
    var child = hero.lastElementChild;
    while (child){
        hero.removeChild(child)
        child = hero.lastElementChild;
    }
    //Remove active tag
    for (const li of document.querySelectorAll("li.active")) {
        li.classList.remove("active");
      }
      const navBarAbout = document.getElementById('nav-bar-about')
      navBarAbout.classList.add('active');
    hero.appendChild(about);
})