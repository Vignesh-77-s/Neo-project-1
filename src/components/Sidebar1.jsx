import { useState } from 'react';
import lo from '../asset/lo.png'
import profile1 from '../asset/profile1.png'
import sec from '../asset/sec.png'
import idea from '../asset/idea.png'
import signout from '../asset/signout.png'
import './styles.css';
import profile from '../asset/profile.png';
import down from '../asset/down.png';
import question from '../asset/question .png';
import star from '../asset/stars.png';
import home from '../asset/home.png'
import square from '../asset/square.png'
import time from '../asset/timesym.png'
import  setting from '../asset/setting.png'

 import './Sidebar.css'

const Sidebar1 = () => {
  const [openmenu, setOpenmenu] = useState(false);

  const toggleMenu = () => {
    setOpenmenu(prevState => !prevState);
  };
  return (
  <div id='sidebar' className="sidebar1">

    <div className='sidebar1-header'>
    <img src={lo} alt="Neo UI Logo" className='logo' />
      <h1>   Neo UI</h1>
      </div>
      <div className='sidebar1-nav'>
      <ul>
        <li><img src={home} alt="" /> Home</li>
        <li><img src={square} alt="" /> Events</li>
        <li><img src={time} alt="" /> Orders</li>
        <li><img src={setting} alt="" /> Settings</li>
      </ul>
      </div>
      <div className='sidebar1-event'  style={{cursor : 'pointer'}}>
      <h3>Upcoming Events</h3>
      <ul>
        <li>Bear Hug: Live in Concert</li>
        <li>Six Fingers — DJ Set</li>
        <li>We All Look The Same</li>
        <li>Viking People</li>
      </ul>
    </div>
    <div className="two"  style={{cursor : 'pointer'}}>
      <p><img src={question} alt="ques" />Support</p>
      <p><img src={star} alt="star" />Changelog</p>
      </div>
      <div  className={`sub-menu-wrap ${openmenu ? 'open-menu' : ''}`}  id="subMenu">
        <div className="sub-menu">
          <div className="user-info">
          <p><img src={profile1} alt="" />  My account</p>
          <hr />
          <p><img src={sec} alt="" /> Privary policy</p>
          <p><img src={idea} alt="" /> Share feedback</p>
          <hr />
          <p><img src={signout} alt="" /> Sign out</p>
          </div>
          
        </div>
          
      </div>
    <div className="footer" style={{cursor : 'pointer'}} >
    <img id='img1' src={profile} alt="profile" onClick={toggleMenu} />
      <p  onClick={toggleMenu}>Erica<br/>erica@example.com</p>
      <img class='up' src={down} alt="e" onClick={toggleMenu}/>
    </div>
    </div>
  
);
}
export default Sidebar1;