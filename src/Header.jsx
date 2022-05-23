import React from 'react';



 function handleChange(value, handleChange, event) {
    console.log(event.target.value); 
      }
const Header = () => {
 


  
  return (
    <div className='header'>  
        <a className='text-left' href="/">Stallet</a><br></br>
        <a className='text-left' href="/product-list">Hästar</a><br></br>
        <a className='text-left' href="/shopping-cart">Varukorg</a><br></br>
        
      <br></br> <br></br>
      
      {
        //Search bar on navbar
          <div>
            <input placeholder="Sök" />
          </div>
        }
  </div>
  )
}

export default Header;
