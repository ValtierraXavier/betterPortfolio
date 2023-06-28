import React, { useState } from 'react'
import './addCommentModal.css'
import Comments from '../Comments/Comments.jsx'
import { createComment } from '../../Services/commentServices.js'

export default function AddCommentModal({ sortBy, setSortBy, sortByRef, setWhatProject, whatProject, setComments, comments, setLoadComments, setLoadProjects, projectNameRef, projects }) { 

  const [author, setAuthor] = useState('')
  const [commentText, setCommentText] = useState('')
  
  const date = Date.now()
  const currentTime = new Date(date).toLocaleTimeString()
  const currentDate = new Date(date).toLocaleDateString()
    
    const scrollToBottom = () =>{
      const commentList = document.getElementById('listDiv')
      const scrollHeight = (commentList.scrollHeight)
      commentList.scrollTop = (scrollHeight)
    } 
    
    const closeModal =()=>{
      const addModal = document.getElementById('modalBackground')
      addModal.style.display= 'none'
      setAuthor(prev => prev = '')
      setCommentText(prev => prev = '')
      setWhatProject(prev => prev = '')
    }
    
    const handleMakeComment = async (e) =>{
      e.preventDefault(false)
      const commentToAdd = {
        commentAuthor: author,
        commentText: commentText,
        whatProject: projectNameRef.current,
        date: currentDate,
        time: currentTime
      }
      try{
        await createComment(commentToAdd)
        setLoadComments(prev => prev = true)
        closeModal()
        setWhatProject(prev => prev = '')
        setTimeout(scrollToBottom, 300)
      }catch(error){console.log(error)}
    }

  return (
    <div className = "addCommentModal" id = "addCommentModal">
      
      <div id = 'modalBackground'>
      
        <div className ='modalWhatProject' id = 'modalWhatProgect' >Commenting on: {projectNameRef.current}</div>
      
          <form className ="commentForm" onSubmit = {handleMakeComment}>
      
            <input 
            id = 'commentNameInput'
            className = 'commentInput'
            type ="text" 
            placeholder ="Name"
            required = 'required'
            value = {author}
            onChange={(e)=> setAuthor(prev => prev = e.target.value)}
            />

            <textarea 
            id='commentTextInput'
            className = 'commentInput'
            type ="text" 
            placeholder ="Comment"
            required = 'required'
            value= {commentText}
            onChange = {(e) => setCommentText(prev => prev = e.target.value)}
            />

            <div className = 'modalActionButtons'>
            
              <input 
              id = 'submitButton'
              className = 'commentButton'
              type ="submit"/>

              <div 
              id = 'closeButton' 
              className = 'commentButton'
              onClick={closeModal}>Close
              </div>

            </div>

          </form>
      </div>
    <Comments sortBy = {sortBy} setSortBy = {setSortBy} sortByRef = {sortByRef} projects = {projects} whatProject = { whatProject } setComments ={ setComments } comments = { comments } setLoadComments = { setLoadComments }/>
    </div>
  )
}
