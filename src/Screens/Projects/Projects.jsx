import React,{ useEffect, useState } from 'react'
import './Projects.css'
import ProjectCard from '../../Components/ProjectCard/ProjectCard.jsx'
import CommentModal from '../../Components/AddCommentModal/addCommentModal.jsx'

export default function Projects({ sortByRef, setComments, comments, setLoadComments, projects, setProjects, projectNameRef, setLoadProjects, sortBy, setSortBy }) {
const [whatProject, setWhatProject] = useState('')

const openModal = (e) =>{
  const addModal = document.getElementById('modalBackground')
  addModal.style.display = "flex"
  addModal.scrollIntoView()
  projectNameRef.current = (e.target.dataset.projectname)
  setWhatProject(prev => prev = projectNameRef.current)
  // console.log(projectNameRef.current)
}
  
  useEffect(()=>{
    document.getElementsByClassName('content')[0].style.marginTop = '7%'
},[])

  return (
    <div className='projectPageContainer' id='projectPageContainer'>
      <h1 className='pageTitle'>Projects</h1>
      <div className='cardsDisplayArea'>
      {projects.map((info)=>
        (
          <div>
            <ProjectCard item = {info} key = {info._id} dataset = {info._id}/>
            <div id = 'makeCommentButton' onClick = {openModal} className = 'makeComment' data-projectname = {info.projectName} data-parentid = {info._id} >Say something about this project</div>
          </div>))
      }
      <div id = 'commentsDiv'>
        <CommentModal sortBy = {sortBy} setSortBy = {setSortBy} sortByRef = {sortByRef} whatProject = { whatProject } setWhatProject = { setWhatProject } setComments = {setComments} comments = {comments} setLoadComments={setLoadComments} setLoadProjects = {setLoadProjects} projectNameRef = {projectNameRef} projects = {projects}/>
      </div>
      </div>
    </div>     
  )
}
