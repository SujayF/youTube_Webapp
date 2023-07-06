import React from "react";
import "./VideoPage.css";
import vid from "../../Components/Video/vid.mp4";
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns";
import Comments from "../../Components/Comments/Comments";

function VideoPage() {
  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
            <video
              src={vid}
              className={"video_ShowVideo_videoPage"}
              controls
              // autoPlay
            ></video>
          
          <div className="video_details_videoPage">
            <div className="video_btns_title_videoPage_cont">
              <p className="video_title_videoPage">Title</p>
              <div className="views_date_btns_videoPage">
                <div className="views_videoPage">
                  5 views <div className="dot"></div> uploaded 1 year ago
                </div>
                <LikeWatchLaterSaveBtns/>
              </div>
            </div>
            <div className="channel_details_videoPage"> 
               <b className="channel_logo_videoPage"> 
               <p>C</p>
               </b>
               <p className="channel_name_videoPage" >Channel Name</p>
            </div>
            <div className="comments_videoPage">
              <h2> <u>Comments</u>  </h2>
             <Comments/>
            </div>
          </div>
          </div>
          <div className="moreVideoBar">
            More Video
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPage;
