import React from 'react'
import './Library.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'


function Library() {
  return (
    <div className="container_Pages_App">
        <LeftSidebar/>
        <div className="container2_Pages_App">
          Library <p>Hello</p>
        </div>
    </div>
  )
}

export default Library