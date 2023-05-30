import React from 'react'
import './style.css'

const Pratice1 = () => {
    const name = "chioma";
    const currentDate = new Date();
    const year = currentDate.getFullYear();
     
  return (
    <div>
       <p>Create by {name}</p>
       <p>copyright {year}</p>
       <h1 className='heading' contentEditable="false" IspellCheck="false">My Favourite Foods</h1>
       <ul>
         <li>Bacoon</li>
         <li>Jason</li>
         <li>Noodles</li>
       </ul>
    </div>
  )
}

export default Pratice1



