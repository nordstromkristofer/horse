import React from 'react';



<<<<<<< HEAD
 function handleChange(value, handleChange, event) {
    console.log(event.target.value); 
=======
function handleChange() {
  console.log(handleChange); 
>>>>>>> origin/dev
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
          <input
            placeholder="Golden Horse 🔍"
           
            onChange={handleChange}  />
          </div>
        }
  </div>
  )
}

export default Header;
