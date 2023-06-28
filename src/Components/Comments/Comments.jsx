import React from 'react'
import './Comments.css'
import CommentSort from '../CommentSort/CommentSort.jsx'
import { deleteComment } from '../../Services/commentServices.js'


export default function Comments({ sortBy, setSortBy, sortByRef, projects, whatProject, setComments, comments, setLoadComments, parentId }) {

  

  const handleDelete = async (e) =>{
    try{
      const commentId = (e.target.dataset.commentid)
      await deleteComment(`${commentId}`)
      setLoadComments(prev => prev = true) 
    }catch(error){console.log(error)}

  }

  return (
    <div className = 'comments'>
      <div className='commentLabelDiv'>
        <div className ='commentLabel'>Comments</div>
        <CommentSort sortBy = {sortBy} setSortBy = {setSortBy} sortByRef = {sortByRef} projects = {projects} comments={comments} setComments={setComments}/>
      </div>
        <div className='listDiv' id ='listDiv' >
          {comments.map((element)=>(
            <div className = 'mapDiv'>

              <div className = 'userNameProject'>
                <div className = 'commentUsername'>{element.commentAuthor} -</div>
                <div className = 'whatProject'>{element.whatProject}</div>
              </div>

              <div className = 'commentItselfDiv' key = {element._id}>
                <div className = 'commentText'>{element.commentText}</div>
                <div className = 'actionButtons'>
                  <div id = 'deleteButton' onClick={handleDelete} data-commentid={element._id} parentid = {parentId} >delete</div>
                </div>
              </div>

              <div id = 'dateTimeDiv'>
                <div className = 'dateDiv' id = 'dateDiv' >{element.date} ·</div>
                <div className = 'timeDiv' id = 'timeDiv' >{element.time}</div>
              </div>

            </div>
          ))}       
      </div>
    </div>
  )
}
