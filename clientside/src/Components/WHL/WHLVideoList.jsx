import React from 'react'
import ShwoVideoList from '../ShowVideoList/ShowVideoList'

function WHLVideoList({ page, CurrentUser,videoList }) {
  return (
    <>
     { CurrentUser ?(<>
     {
              videoList?.data?.filter(q=>q?.Viewer === CurrentUser).reverse().map(m=>{
                return(
                    <>
                    <ShwoVideoList videoId={m?._Id} key={m?._id}/>
                    </>
                )
            })
     }
      </>):(<> 
      <h2 style={{color:"white"}}>Plz Login To Watch Your {page} </h2>
      </>)

     }
    </>
  )
}

export default WHLVideoList