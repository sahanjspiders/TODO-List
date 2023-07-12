import React from 'react'
import '../Style/Projects.css'

export default function Projects() {
  return (
    <div>
      <center>
   <div className='Main_Card' >
   <div className="class"           onClick={() => {
            window.open("https://www.instagram.com/rahulvijay81/");
          }}>Todo-List
  
    </div>
   <div className="class">FoodRestorent </div>
   <div className="class">Medicalword </div>
   <div className="class">Netflix clone </div>
   <div className="class">Todo-List </div>
   <div className="class">FoodRestorent </div>
   <div className="class">Medicalword </div>
   <div className="class">Netflix clone </div>
   </div>
   </center>
      
      
      </div>
  )
}
