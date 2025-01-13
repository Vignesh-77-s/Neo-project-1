import lo from '../asset/lo.png'
import question from '../asset/question .png';
import star from '../asset/stars.png';
import './Sidebar3.css'
import home from '../asset/home.png'
import square from '../asset/square.png'
import time from '../asset/timesym.png'
import  setting from '../asset/setting.png'

const Sidebar = ({ isOpen, toggleSidebar }) => {

  return (
  <div id='sidebar3' className="sidebar3">
    <div  className={`sidebar3 ${isOpen ? "show" : ""}`}>
          <button  onClick={toggleSidebar}>x</button>
    <div  style={{cursor : 'pointer'}} className='sidebar-header3'>
    <img src={lo} alt="Neo UI Logo" className='logo3' />
      <h1>   Neo UI</h1>
      </div>
      <div className='sidebar-nav3'>
      <ul>
        <li ><img src={home} alt="" /> Home</li>
        <li ><img src={square} alt="" /> Events</li>
        <li ><img src={time} alt="" /> Orders</li>
        <li ><img src={setting} alt="" /> Settings</li>
      </ul>
      </div>
     
     <div className="two3"  style={{cursor : 'pointer'}}>
           <p><img src={question} alt="ques" /> Support</p>
           <p><img src={star} alt="star" /> Changelog</p>
      </div>
    </div>
    
    </div>
  
  
);
}
export default Sidebar;