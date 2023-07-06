import React, { useState } from 'react'
import './comments.css'

function DisplayComments({cId,commentBody,userCommented}) {
    const[Edit,setEdit] = useState(true);
    const[cmtBdy,setCmtBdy]=useState("");
    const handleEdit=(ctId,ctBdy)=>{
       setEdit(true);
       setCmtBdy(ctBdy)
    }
     
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        setEdit(false);
    }
  return (
    <>
    {
        Edit ? (<>
             <form className='comments_sub_form_comments'
        onSubmit={handleOnSubmit}
        >
          <input 
             type="text"
             onChange={e=>setCmtBdy(e.target.value)}
             placeholder='Edit comment...'
             value={cmtBdy}
             className='comment_ibox'
          />
          <input type="submit" value="add" className='comment_add_button_comments' />
          </form>
        </>):(
            
            <p className='comment_body'>{commentBody}</p>

        )
    }
    <p className="usercommented">- {userCommented} commented</p>
    <p className="EditDel_DisplayComment">
        <i onClick={()=>handleEdit(cId,commentBody)} >Edit</i>
        <i>Delete</i>
    </p>
    </>
  )
}

export default DisplayComments