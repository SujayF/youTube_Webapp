import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Library from "../Pages/Library/Library";
import YourVideo from "../Pages/YourVideo/YourVideo";
import WatchHistory from "../Pages/WatchHistory/WatchHistory";
import WatchLater from "../Pages/WatchLater/WatchLater";
import VideoPage from "../Pages/VideoPage/VideoPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="library" element={<Library />} />
      <Route path="/yourvideos" element={<YourVideo />} />
      <Route path="/history" element={<WatchHistory />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/videopage/:vids" element={<VideoPage />} />
    </Routes>
  );
}

export default AllRoutes;
