import { useState } from 'react';
import './App.css';
import DrawerSidebar from './Components/LeftSidebar/DrawerSidebar';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
// import Home from './Pages/Home/Home';
import { BrowserRouter as Router } from "react-router-dom"
// import { RiSendBackward } from 'react-icons/ri';

function App() {
  
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display:"none",
});

  // const toggleDrawer=()=>{
  //       if(toggleDrawerSidebar.display=== "none"){
  //          setToggleDrawerSidebar({
  //             display:"flex"
  //          });
  //       }else{
  //         setToggleDrawerSidebar({
  //           display:"none"
  //        })
  //       }
  // }

  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };



  return (
    <Router>
      <Navbar
      toggleDrawer={toggleDrawer}
      />
      {
        <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
        />
      }
      {/* <Home/> */}
      <AllRoutes/>
    </Router>
  );
}

export default App;
