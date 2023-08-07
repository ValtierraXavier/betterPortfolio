import React from 'react'
import './Comments.css'
import CommentSort from '../CommentSort/CommentSort.jsx'
import CommentModal from '../AddCommentModal/addCommentModal.jsx'
import { deleteComment } from '../../Services/commentServices.js'


export default function Comments({ isLoading, setWhatProject, setLoadProjects, projectNameRef, sortBy, setSortBy, sortByRef, projects, whatProject, setComments, comments, setLoadComments, parentId }) {

  

  const handleDelete = async (e) =>{
    try{
      const commentId = (e.target.dataset.commentid)
      await deleteComment(`${commentId}`)
      setLoadComments(prev => prev = true) 
    }catch(error){console.log(error)}

  }

  return (
    <div className = 'comments' id = 'commentsContainer'>
      <CommentModal isLoading = {isLoading} sortBy = {sortBy} setSortBy = {setSortBy} sortByRef = {sortByRef} whatProject = { whatProject } setWhatProject = { setWhatProject } setComments = {setComments} comments = {comments} setLoadComments={setLoadComments} setLoadProjects = {setLoadProjects} projectNameRef = {projectNameRef} projects = {projects}/>
      <div className='commentLabelDiv'>
        <div className = 'labelContainer'>
          <div className ='commentLabel'>Comments</div>
        </div>
        <div className = 'sortContainer'>
          <CommentSort setSortBy={setSortBy} projects={projects} />
        </div>
      </div>
        <div className='listDiv' id ='listDiv' >
          {comments.map((element, index)=>(
            <div key = {`mD${index}`} className = 'mapDiv'>

              <div key = {`uNP${index}`} className = 'userNameProject'>
                <div key = {`cU${index}`} className = 'commentUsername'>{element.commentAuthor} -</div>
                <div key = {`wP${index}`} className = 'whatProject'>{element.whatProject}</div>
              </div>

              <div key = {`cID${index}`} className = 'commentItselfDiv'>
                <div key = {`cT${index}`} className = 'commentText'>{element.commentText}</div>
                <div key = {`aB${index}`} className = 'actionButtons'>
                  <div key = {`dB${index}`} id = 'deleteButton' onClick={handleDelete} data-commentid={element._id} parentid = {parentId} >delete</div>
                </div>
              </div>

              <div key = {`dTD${index}`} id = 'dateTimeDiv'>
                <div key = {`dD${index}`} className = 'dateDiv' id = 'dateDiv' >{element.date} ·</div>
                <div key = {`tD${index}`} className = 'timeDiv' id = 'timeDiv' >{element.time}</div>
              </div>
            </div>
          ))}       
      </div>
    </div>
  )
}
