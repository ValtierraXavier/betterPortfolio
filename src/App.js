import './App.css';
import Home from "./Screens/Home/Home.jsx";
import Comments from './Components/Comments/Comments.jsx';
// import Navbar from './Components/Navbar/Navbar.jsx';
import About from './Screens/About/About.jsx';
import Projects from './Screens/Projects/Projects.jsx';
import ContactTab from './Components/ContactTab/ContactTab.jsx';
import { useEffect, useRef, useState } from 'react';
import { getAllData } from './Services/projectServices.js';
import { getAllComments } from './Services/commentServices.js';

function App() {

  const[isLoading, setIsLoding] = useState(true)
  const[comments, setComments] = useState([])
  const[projects, setProjects] = useState([])
  const[sortedComments, setSortedComments] = useState([])
  const[loadProjects, setLoadProjects] = useState(true)
  const[loadComments, setLoadComments] = useState(false)
  const[sortBy, setSortBy] = useState('All')
  const projectNameRef = useRef('')
  const sortByRef = useRef('All')
  const techs = document.getElementsByClassName(`techs`)
  const whoami = document.getElementsByClassName(`whoami`)
  const projDivs = document.getElementsByClassName(`projDivs`)
  
  useEffect(()=>{
    if(loadProjects){
      getProjectData()
      }
    if(loadComments || sortBy === "All"){
      setTimeout(getComments,50)
      }
    if(sortBy !== 'All'){
        sortComments()
      }
    sequentialHighlight(techs)
    sequentialHighlight(whoami)
    sequentialHighlight(projDivs)
    },[loadProjects, loadComments, sortBy])
  
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
  const restartTiming = el.length * 200
  await prom(restartTiming)
    for(let j = 0; j < el.length; j++){
      
      if(j == el[j].dataset.index){
        await prom(60)
        el[j].style.color = 'rgb(57, 57, 57)'
        el[j].style.transition = 'ease-in-out .2s'
      } if (j === 3 ){
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
    
const getComments = async () =>{
  try{
    if(sortBy === "All"){
      const commentData = await getAllComments()
      if(commentData.data){
        setComments(prev => prev = commentData.data)
        setSortedComments(prev => prev = commentData.data)
        setLoadComments(prev => prev = false)
        setIsLoding(prev=> prev = false)
      }else{setLoadComments(prev =>prev=true)}
    }
    
  }catch(error){console.log(error)}
}
const sortComments = async () =>{
      let filteredArray = []
        sortedComments.forEach((comment)=>{
        let filteredBy = comment.whatProject
        if(sortBy === filteredBy){
          filteredArray.push(comment)
          setComments(prev => prev = filteredArray)
          filteredBy = ''
        }
        else{return}
      })
}
  

  return (
    <div className = 'App'>
      {/* <Navbar/> */}
      <Home/>
      <About/>
      <Projects isLoading = {isLoading} sortByRef = {sortByRef} setComments={setComments} comments = {comments} setLoadComments={setLoadComments} setLoadProjects ={setLoadProjects} projects = {projects} setProjects = {setProjects} projectNameRef = {projectNameRef} sortBy = {sortBy} setSortBy = {setSortBy} />
      <ContactTab/>
    </div>
  );
}

export default App