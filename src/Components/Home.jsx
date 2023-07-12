import * as React from 'react';
import Button from '@mui/material/Button';
import '../Style/Home.css'
// import { Typewriter } from 'typewriter-effect/dist/core';
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'react-ts-typewriter';

export default function Home() {
 
 
 
    return (
    <div className='Homepage'>
      {/* <Button variant="contained">Hello World</Button> */}
<div className='HomeText'>
      <h1>Hi,I'm Sahan Gasti</h1>
      <span><h3> <Typewriter text='Frountend Developer'/>
      
      </h3></span>
<span><h3><Typewriter text="React Js Developer "/> </h3></span>




      
     
      
</div>
{/* /add image / */}
<div className='Homeimage'></div>
      <img height="400px" width="500px" src='https://rahulvijay-portfolio.netlify.app/static/media/Web-designer-1024x821.6e57f7f5669037a83b03.webp'></img>
    </div>
  );
}

















   {/* <div>
        <p>Explore a world of innovative web development as you discover their passion for<br/>
         creating captivating user experiences and visually stunning interfaces.<br/>
         With deep knowledge in React.js, they craft seamless, <br/>
          responsive designs that engage and delight users.<br/>
          Get ready to elevate your web presence with our talented developer and<br/>
          unlock the potential of your digital projects. </p>
        </div> */}