import React from 'react'
import '../Style/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  
    
    return (
  
  <div>
  
            <div className='Navcontenar'>
                    <div>
          
                   <Link to={'/'}>
                   <h1 >Sahan Logowithname</h1>
                   </Link> 
                    
                      
                            </div>
                            <div className='Navtemlate'>
                           <Link to={'/'}>   <div className='nav-items' >Home</div>   </Link> 
                                
                           <Link  to={'About'}>    <div  className='nav-items' >About</div>     </Link> 
                           <Link  to={'Projects'}>    <div  className='nav-items' >Project</div>    </Link> 
              
                                        
                    <button className='Navbutton'>Resume</button>
                    </div>
  </div>
  </div>
  
    )

}
