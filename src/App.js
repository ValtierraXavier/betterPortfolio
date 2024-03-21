import './App.css';
import Home from "./Screens/Home/Home.jsx";
import About from './Screens/About/About.jsx';
import Projects from './Screens/Projects/Projects.jsx';
import { useEffect, useRef, useState } from 'react';
import { getAllData } from './Services/projectServices.js';

function App() {

  const[isLoading, setIsLoding] = useState(true)
  const[loadProjects, setLoadProjects] = useState(true)
  const[projects, setProjects] = useState([])
  const projectNameRef = useRef('')
  
  const techs = document.getElementsByClassName(`techs`)
  const whoami = document.getElementsByClassName(`whoami`)
  const projDivs = document.getElementsByClassName(`projDivs`)
  
  useEffect(()=>{
    setTimeout(()=>{
      sequentialHighlight(techs);
      sequentialHighlight(whoami);
      sequentialHighlight(projDivs);
    },500)
  },[])

  useEffect(()=>{
    if(loadProjects){
      getProjectData()
      }
    }, [loadProjects])
  
const prom = async (ms)=>{
  return new Promise((resolve2)=>{
    setTimeout(()=>{resolve2()}, ms)
  })
}
const prom2 = async (ms)=>{
  return new Promise((resolve2)=>{
    setTimeout(()=>{resolve2()}, ms)
  })
}

const sequentialHighlight = async (el)=>{
  const restartTiming = el.length * 500
  await prom(restartTiming)
  for(let j = 0; j < el.length; j++){      
    await prom(60)
    el[j].style.color = 'rgb(57, 57, 57)'
    el[j].style.transition = 'ease-in-out .2s'
    if (j === 3 ){
      sequentialUnhighlight(el)
    }     
  }
}

const sequentialUnhighlight = async(el) =>{
    for(let i = 0; i < el.length; i++){      
      if(el[i].dataset.index == i){
        await prom2(60)
        el[i].style.color = 'white'
      }if (i == 4){
        sequentialHighlight(el)
      }
    }
}

const getProjectData = async () => {
    try{
      const projectData = await getAllData()
      if(projectData.data){
        setProjects(prev => prev = projectData.data)
        setLoadProjects(prev => prev = false)
        setIsLoding(prev=> prev = false)
      }else{setLoadProjects(prev =>prev=true)}
      }catch(error){console.log('error')}
}

  return (
    <div className = 'App'>
      <Home/>
      <About/>
      <Projects isLoading = {isLoading}  setLoadProjects ={setLoadProjects} projects = {projects} setProjects = {setProjects} projectNameRef = {projectNameRef}/>
    </div>
  );
}

export default App