
//import ka matlab lana hota hay ,matlab kahe say lana
//export ka matlab hay is page say kahe export karna
import React from 'react';
import ReactDOM from 'react-dom';

import "./App.css"; 

function Hi(props) {


  return <div class="main">
         
   {/* <img src={process.env.PUBLIC_URL+"images/guns.jpg"} 

width="120px" height="140px"></img> */}
  <div class="ccard">
   <div class="img">
    <img src={process.env.PUBLIC_URL

+"images/topimages.jpg"}height="80px" width="90px"></img>
    <span class="ibr">Ibrar khan with Jamel 

bhai</span><br></br>
    <span class="tme">Nov 3,2013 at 10:43 am</span>
   </div>
   <div class="txt">
       <p><b>This is American gun with best features and  

Low in price.</b></p>
   </div>
   <div class="gunim">
     
       <img src={process.env.PUBLIC_URL+"images/guns.jpg"} height="220px" width="300px"></img>     
   </div>
   <div class="likes">
    <span class="lke">21 Likes</span>
   </div>
   <div class="buttn">
    
    <button class="btn">Like</button>
    <button class="btn">Comments</button>
    <button class="btn">Share</button>
   </div>
  </div>

     
  </div>



}

ReactDOM.render(<div><Hi /></div>, document.querySelector('#root'));