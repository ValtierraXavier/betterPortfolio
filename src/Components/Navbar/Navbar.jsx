import { Await } from 'react-router-dom'
import './Navbar.css'
import React, { useEffect } from 'react'

export default function Navbar() {
  const home = document.getElementById('homePageContainer')
  const about = document.getElementById('aboutPageContainer')
  const projects = document.getElementById('projectPageContainer')

  async function isInViewport(string, element) {
    const rect =  element.getBoundingClientRect()
   
        if(rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)){
            return console.log(string, true)
        }else if(rect == null){
          return console.log(string, false)
      }else{
          return console.log(string, false)
      }
    
}
  // setInterval(()=>{isInViewport("home",home)},1000)
  // setInterval(()=>{isInViewport("about" ,about)},1000)
  // setInterval(()=>{isInViewport("projects", projects)},1000)

  function showHide(){
    let lastVerticalPosition = window.pageYOffset;
 
  window.onscroll = function() {
    
    let verticalPosition = window.pageYOffset;
    let pos = ((window.screen.height) - verticalPosition)

    if(pos <= 800 && pos >= 0){

      document.body.style.transitionDuration = '.3s'
      document.getElementById('Nav').style.backgroundColor = 'rgba(255, 255, 0, 0.95)'
      document.body.style.backgroundColor = 'yellow'
      document.body.style.color = 'black'
      document.getElementsByClassName('nav-link')[0].style.color = 'black'
      document.getElementsByClassName('nav-link')[1].style.color = 'black'
      document.getElementsByClassName('nav-link')[2].style.color = 'black'

    }else if(pos <= 80 && pos >= -900){

      document.getElementById('Nav').style.transitionDuration = '.3s'
      document.getElementById('Nav').style.backgroundColor = 'rgba(0, 0, 0, .7)'
      document.body.style.transitionDuration = '.3s'
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'rgb(54, 199, 247)'
      document.getElementsByClassName('nav-link')[0].style.color = 'rgb(54, 199, 247)'
      document.getElementsByClassName('nav-link')[1].style.color = 'rgb(54, 199, 247)'
      document.getElementsByClassName('nav-link')[2].style.color = 'rgb(54, 199, 247)'

    }else if(pos <= (-760)){

      document.getElementById('Nav').style.transitionDuration = '.3s'
      document.getElementById('Nav').style.backgroundColor = 'rgba(255, 0, 0, 0.92)'
      document.body.style.transitionDuration = '.3s'
      document.body.style.backgroundColor = 'red'
      document.body.style.color = 'black'
      document.getElementsByClassName('nav-link')[0].style.color = 'black'
      document.getElementsByClassName('nav-link')[1].style.color = 'black'
      document.getElementsByClassName('nav-link')[2].style.color = 'black'
      
    }
    if(pos<=-2020 || pos >=799){
      }else{
        if (lastVerticalPosition > verticalPosition) {

          document.getElementById('Nav').style.transitionDuration = '.3s'
          document.getElementsByClassName('content')[0].style.transitionDuration = '.3s'
          document.getElementsByClassName('nav-link')[0].style.transitionDuration = '.3s'
          document.getElementById('Nav').style.height = '9%'
          document.getElementsByClassName('nav-link')[0].style.fontSize = 'xx-large'
          document.getElementsByClassName('nav-link')[1].style.fontSize = 'xx-large'
          document.getElementsByClassName('nav-link')[2].style.fontSize = 'xx-large'
          document.getElementsByClassName('nav-link')[0].style.display = 'block'
          document.getElementsByClassName('nav-link')[1].style.display = 'block'
          document.getElementsByClassName('nav-link')[2].style.display = 'block'

        } else {

          document.getElementsByClassName('nav-link')[0].style.transitionDuration = '.3s'
          document.getElementsByClassName('content')[0].style.transitionDuration = '.3s'
          document.getElementById('Nav').style.transitionDuration = '.3s'
          document.getElementById('Nav').style.height = '0%'
          document.getElementsByClassName('nav-link')[0].style.fontSize = '0%'
          document.getElementsByClassName('nav-link')[1].style.fontSize = '0%'
          document.getElementsByClassName('nav-link')[2].style.fontSize = '0%'
          document.getElementsByClassName('nav-link')[0].style.display = 'none'
          document.getElementsByClassName('nav-link')[1].style.display = 'none'
          document.getElementsByClassName('nav-link')[2].style.display = 'none'
         
        }
    }
    lastVerticalPosition = verticalPosition;
  }
}

function handleHomeScroll(){
  const homeScreen = document.getElementById('homePageContainer') 
  homeScreen.scrollIntoView()
}
function handleAboutScroll(){
  const aboutScreen = document.getElementById('aboutPageContainer') 
  aboutScreen.scrollIntoView()
}
function handleProjectScroll(){
  const projectScreen = document.getElementById('projectPageContainer') 
  projectScreen.scrollIntoView()
}

useEffect(()=>{
  document.getElementById("Nav").style.top = "2.5%";
  document.getElementsByClassName('content')[0].style.marginTop = '7%'
  document.body.style.backgroundColor = 'yellow'
  document.body.style.color = 'black'
  showHide()
},[])
  return (
    <div className = 'Nav'>
        <div className='Nav_Bar' id = 'Nav'>
            <div className='nav-link' id = 'home-link' onClick={handleHomeScroll}>Home</div>
            <div className='nav-link' id = 'about-link'  onClick={handleAboutScroll}>About</div>
            <div className='nav-link' id = 'projects-link'  onClick={handleProjectScroll}>Projects</div>
        </div>
    </div>
  )
}