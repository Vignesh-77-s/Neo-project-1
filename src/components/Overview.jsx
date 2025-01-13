import React from 'react';
import './styles.css';

const Overview = () => (
    
  <div className="overview">
    
    <div className="overview-card">
      <h3>Total Revenue</h3>
      <h2 >$2.6M </h2>
      <p className='week'><button className="positive">+4.5%</button>   from last week </p>
    </div>
    <div className="overview-card">
      <h3>Average Order Value</h3>
      <h2>$455 </h2>
      <p className='week'><button className="negative">-0.5%</button>   from last week </p>
      </div>
    <div className="overview-card">
      <h3>Tickets Sold</h3>
      <h2>5,888 </h2>
      
      <p className='week'><button className="positive">+4.5%</button>   from last week </p>
      </div>
    <div className="overview-card">
      <h3>Pageviews</h3>
      <h2>823,067 </h2>
     
      <p className='week'><button className="positive">+21.2%</button>  from last week </p>
      </div>
  </div>
);

export default Overview;