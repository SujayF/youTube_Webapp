import React from "react";
import "./LeftSidebar.css";

import {
  AiOutlineHome,
  AiOutlineLike,
  AiOutlinePlaySquare,
} from "react-icons/ai";

import {
  MdOutlineExplore,
  MdOutlineHistory,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdSubscriptions,
} from "react-icons/md";
import shorts from "../LeftSidebar/shorts.png";
import { NavLink } from "react-router-dom";

function DrawerSidebar({ toggleDrawer, toggleDrawerSidebar }) {
  return (
    <div className="container_DrawerLeftSidebar" style={toggleDrawerSidebar}>
      <div className="container2_DrawerLeftSidebar">
        <div className="Drawer_leftsidebar">
          <NavLink to={"/"} className="icon_sidebar_div">
            <p>
              <AiOutlineHome
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Home</div>
            </p>
          </NavLink>

          <div className="icon_sidebar_div">
            <p>
              <MdOutlineExplore
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Explore</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <img
                src={shorts}
                width={22}
                style={{ margin: "auto 0.7rem" }}
                alt="phot"
              />
              <div className="text_sidebar_icon">Shorts</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <MdSubscriptions
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Subscriptons</div>
            </p>
          </div>
        </div>

        <div className="libraryBtn_Drawerleftsidebar">
          <NavLink to={"/library"} className="icon_sidebar_div">
            <p>
              <MdOutlineVideoLibrary
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Library</div>
            </p>
          </NavLink>

          <NavLink to={"/history"} className="icon_sidebar_div">
            <p>
              <MdOutlineHistory
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">History</div>
            </p>
          </NavLink>

          <NavLink to={"/yourvideos"} className="icon_sidebar_div">
            <p>
              <AiOutlinePlaySquare
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Your Videos</div>
            </p>
          </NavLink>

          <NavLink to={"/watchlater"} className="icon_sidebar_div">
            <p>
              <MdOutlineWatchLater
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Watch Later</div>
            </p>
          </NavLink>

          <NavLink to={"/likedvideo"} className="icon_sidebar_div">
            <p>
              <AiOutlineLike
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Liked Videos</div>
            </p>
          </NavLink>
        </div>

        <div className="subScriptions_lsdbar">
          <h3>Subscriptions</h3>
          <div className="channel_lsdbar">
            <p>C</p>
            <div className="minor">Channel</div>
          </div>
          <div className="channel_lsdbar">
            <p>C</p>
            <div className="minor">Channel</div>
          </div>
          <div className="channel_lsdbar">
            <p>C</p>
            <div className="minor">Channel</div>
          </div>
          <div className="channel_lsdbar">
            <p>C</p>
            <div className="minor">Channel</div>
          </div>
        </div>
      </div>
      <div
        className="container3_DrawerSidebar"
        onClick={() => toggleDrawer()}
      ></div>
    </div>
  );
}

export default DrawerSidebar;
