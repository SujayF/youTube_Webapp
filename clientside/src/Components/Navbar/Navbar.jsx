import React from 'react'
import './Navbar.css'
import favicon from './favicon.ico' 
import Searchbar from './Searchbar/Searchbar'
import {RiVideoAddLine} from "react-icons/ri"
import { IoMdNotificationsOutline } from "react-icons/io"
import { BiUserCircle } from "react-icons/bi"





function navbar({toggleDrawer}) {
  const Currentuser = {
     result : {
      email : "xyz@BiMailSend.com",
      joinedOn : "2222-07-15T09:57:23.489Z"
     },
  }
  return (
    <div className='Container_Navbar'>
         <div className="Burger_Logo_Navbar"> 
         <div className="burger" onClick={()=>toggleDrawer()} >
          <p></p>
          <p></p>
          <p></p>

         </div>
           <div className='logo_div_Navbar' >
            <img src={favicon} alt=""  width={48}  />
           
            <p className='logo_title_navbar' > 
            
            YouTube</p>
           </div>
           

         </div>
         <Searchbar/>  
         <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
         <div className="apps_Box">
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
         </div>
         < IoMdNotificationsOutline size={22} className='vid_bell_Navbar' />
         <div className="Auth_cont_Navbar">
           
           {Currentuser ? ( <>

               <div className="Chanel_logo_App">
                <p className="fstChar_logo_App">
                  {
                    Currentuser?.result.name ?(
                      <>
                      {Currentuser?.result.name.charAt(0).toUpperCase()}
                      </>
                    ):(<> {Currentuser.result.email.charAt(0).toUpperCase()} </>)
                  }
                </p>
                </div>              
 
            </> 
           ) : <>
           
          <p className="Auth_Btn"> 
          < BiUserCircle size={22} />
          <b>Sign in</b>
          </p>
           
           </> }
           
         </div>

    </div>

    
    

  )
}

export default navbar