import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import './WHLcss.css'
import WHLVideoList from './WHLVideoList';

function WHL({page,videoList}) {
  return (
    <div className="container_Pages_App">
        <LeftSidebar />
        <div className="container2_Pages_App">
         
         <p className="container_whl">
                <div className="box_WHL leftside_whl">
                    <b>Your {page} Shown Here </b>
                       <div className="clear_History_btn">
                        Clear History
                       </div>
                </div>
         </p>

          <div className='rightside_whl' >
            <h1>{page}</h1>;
            <div className="whl_list">
              

                <WHLVideoList
                page={page}
                videoList={videoList}
                />
            </div>
          </div>

        </div>
    </div>    
    
  )
}

export default WHL