import React, { useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {MdPlaylistAddCheck} from 'react-icons/md'
import {RiPlayListAddFill,RiHeartAddFill,RiShareForwardLine} from 'react-icons/ri'
import {AiFillDislike,AiOutlineDislike,AiFillLike,AiOutlineLike} from 'react-icons/ai'
import './LikeWatchLaterSaveBtns.css'

function LikeWatchLaterSaveBtns() {

    const [saveVideo,setSaveVideo] = useState(true);
    const [DisLikeBtn,setDisLikeBtn] = useState(true);
    const [LikeBtn,setLikeBtn] = useState(true);

    

 
   const toggleSavedVideo=()=>{
    if(saveVideo){
        setSaveVideo(false);
    }else{
        setSaveVideo(true);
    }
   }   

   const toggleLikeBtn=()=>{
    if(LikeBtn){
        setLikeBtn(false);
    }else{
        setLikeBtn(true);
    }
   } 
  
   const toggleDisLikeBtn=()=>{
    if(DisLikeBtn){
        setDisLikeBtn(false);
    }else{
        setDisLikeBtn(true);
    }
   } 
   

  return (
    <div className='btns_cont_videoPage'>
        <div className="btn_videoPage" >
            <BsThreeDots/>
        </div>
       <div className="btn_videoPage">

       <div className="like_videoPage" onClick={()=>toggleLikeBtn()} >
        {
            LikeBtn ? (<>
                   <AiFillLike size={22} className='btns_videoPage'/>  
            </>): (<>
            <AiOutlineLike size={22} className='btns_videoPage' />
            </>)
        }
           <b>1</b>
        </div>
        <div className="like_videoPage" onClick={()=>toggleDisLikeBtn()} >
        {
            DisLikeBtn ? (<>
                   <AiFillDislike size={22} className='btns_videoPage'/>  
            </>):(<>
            <AiOutlineDislike size={22} className='btns_videoPage' />
            </>)
        }
          <b>DisLike</b>
        </div>

        <div className="like_videoPage" onClick={()=>toggleSavedVideo()} >
        {
            saveVideo ? (<>
                   <RiPlayListAddFill size={22} className='btns_videoPage'/>  
            <b>Saved</b>
            </>):(<>
            <MdPlaylistAddCheck size={22} className='btns_videoPage' />
            <b>Saved</b>
            </>)
        }
        </div>


        <div className="like_videoPage">
        {
            <>
            <RiHeartAddFill size={22} className='btns_videoPage' />  
            <b>Thanks</b>
            </>
        }
        </div>
        <div className="like_videoPage">
        {
            <>
            <RiShareForwardLine size={22} className='btns_videoPage' />  
            <b>Share</b>
            </>
        }
        </div>  

       </div>

    </div>
  )
}

export default LikeWatchLaterSaveBtns