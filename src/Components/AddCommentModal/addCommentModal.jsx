import React, { useState } from 'react'
import './addCommentModal.css'
import { createComment } from '../../Services/commentServices.js'

export default function AddCommentModal({ isLoading, sortBy, setSortBy, sortByRef, setWhatProject, whatProject, setComments, comments, setLoadComments, setLoadProjects, projectNameRef, projects }) { 

  const [author, setAuthor] = useState('')
  const [commentText, setCommentText] = useState('')
  
  const date = Date.now()
  const currentTime = new Date(date).toLocaleTimeString()
  const currentDate = new Date(date).toLocaleDateString()
    
    const scrollToBottom = () =>{
      const commentList = document.getElementById('listDiv')
      const page = document.getElementById('commentsContainer')
      const scrollHeight = (commentList.scrollHeight)
      page.scrollIntoView()
      commentList.scrollTop = (scrollHeight)
    } 
    
    const closeModal =()=>{
      const addBackground = document.getElementById('modalBackground')
      const addModal = document.getElementById('addCommentModal')
      addModal.style.display= 'none'
      addBackground.style.display= 'none'
      setAuthor(prev => prev = "")
      setCommentText(prev => prev = "")
      setWhatProject(prev => prev = "")
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
        setWhatProject(prev => prev = "")
        setTimeout(scrollToBottom, 300)
        setTimeout()
      }catch(error){console.log(error)}
    }

  return (
    <div className = "addCommentModal" id = "addCommentModal">
      
      <div className = 'modalBackground' id = 'modalBackground'>
      
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
    </div>
  )
}
