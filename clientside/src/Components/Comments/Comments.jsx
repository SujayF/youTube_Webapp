import React, { useState } from 'react'
import './comments.css'
import DisplayComments from './DisplayComments';

function Comments() {
    const[commentText,setCommentText]=useState("");

    const commentList= [
        {    
            _id:"1",
            commentBody:"hello",
            userCommented:"abc",
        },
        { 
            _id:"2",
            commentBody:"hii",
            userCommented:"xyz",
        }

    ];
    const handleOnSubmit =(e)=>{
        e.preventDefault();
    }
  return (
    <>
        <form className='comments_sub_form_comments'
        onSubmit={handleOnSubmit}
        >
          <input 
             type="text"
             onChange={e=>setCommentText(e.target.value)}
             placeholder='add comment...'
             className='comment_ibox'
          />
          <input type="submit" value="add" className='comment_add_button_comments' />
          </form>
          <div className="display_comment_container">
          {
            commentList.map(m=>{
                return(
                    <DisplayComments
                    cId= {m._id}
                    commentBody={m.commentBody}
                    userCommented={m.userCommented}
                    />
                )
            }

            )
          }
          </div>
    </>
  )
}

export default Comments