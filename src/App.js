import './App.css';
import Home from "./Screens/Home/Home.jsx";
import Navbar from './Components/Navbar/Navbar.jsx';
import About from './Screens/About/About.jsx';
import Projects from './Screens/Projects/Projects.jsx';
import { useEffect, useRef, useState } from 'react';
import { getAllData } from './Services/projectServices.js';
import { getAllComments } from './Services/commentServices.js';

function App() {

  const[comments, setComments] = useState([])
  const[projects, setProjects] = useState([])
  const[sortedComments, setSortedComments] = useState([])
  const[loadProjects, setLoadProjects] = useState(true)
  const[loadComments, setLoadComments] = useState(true)
  const[sortBy, setSortBy] = useState('All')
  const projectNameRef = useRef('')
  const sortByRef = useRef('All')

  useEffect(()=>{
    if(loadProjects){
      getProjectData()
    }else
    if(loadComments || sortBy === "All"){
      setTimeout(getComments,50)
      }
      if(sortBy !== 'All'){
        sortComments()
      }
    },[loadProjects, loadComments, sortBy])

  const getProjectData = async () => {
    try{
      const projectData = await getAllData()
      setProjects(prev => prev = projectData.data)
      setLoadProjects(prev => prev = false)
      }catch(error){console.log('error')}
    }
    
    const getComments = async () =>{
      try{
        if(sortBy === "All"){
          const data = await getAllComments()
          setComments(prev => prev = data.data)
          setSortedComments(prev => prev =data.data)
          setLoadComments(prev => prev = false)
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
      <Navbar/>
      <Home/>
      <About/>
      <Projects sortByRef = {sortByRef} setComments={setComments} comments = {comments} setLoadComments={setLoadComments} setLoadProjects ={setLoadProjects} projects = {projects} setProjects = {setProjects} projectNameRef = {projectNameRef} sortBy = {sortBy} setSortBy = {setSortBy} />
    </div>
  );
}

export default App