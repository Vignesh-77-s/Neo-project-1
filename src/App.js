import React from 'react';
// import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import { useState } from 'react';
import icon from './asset/icon.png';
import RecentOrders from './components/RecentOrders';
import './components/styles.css';
import Sidebar from './components/Sidebar.jsx';
import Sidebar1 from './components/Sidebar1.jsx';
import profile from '../src/asset/profile.png'
import profile1 from './asset/profile1.png'
import sec from './asset/sec.png'
import idea from './asset/idea.png'
import signout from './asset/signout.png'

function App(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openmenu, setOpenmenu] = useState(false);
  const toggleMenu = () => {
    setOpenmenu(prevState => !prevState);
  };
  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  };

 return (
  
  <div className='landing' style={{ display: 'flex' }}>
    <Sidebar1/> 
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <div className="main-content">
       <div className='main-name'>
       <h1 className="header"> 
        <div className='icon'>
            <a href="#" onClick={(e) => { e.preventDefault(); toggleSidebar(); }}>
            <img  src={icon} alt='not fount' />
            </a>  
         </div> 
          Good Afternoon, Erica 
         </h1>
         <div  className={`sub-menu-wrap1 ${openmenu ? 'open-menu' : ''}`}  id="subMenu">
                 <div className="sub-menu1">
                   <div className="user-info1">
                   <p><img src={profile1} alt="" />  My account</p>
                   <hr />
                   <p><img src={sec} alt="" /> Privary policy</p>
                   <p><img src={idea} alt="" /> Share feedback</p>
                   <hr />
                   <p><img src={signout} alt="" /> Sign out</p>
                   </div>
                 </div>
               </div>
             <img className='img11' src={profile} alt="profile" onClick={toggleMenu} />

       </div>
        <div className="overview-head"> 
        <h4>Overview</h4>
        <h5>last week</h5>
        </div>
      <Overview />
      <RecentOrders />

    </div>
  </div>
  
);
}

export default App;