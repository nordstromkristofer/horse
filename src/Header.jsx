import React from 'react';

<<<<<<< HEAD
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
          <input
            placeholder="Golden Horse 🔍"
           value={value}
            onChange={handleChange} />
=======


function handleChange() {
<<<<<<< HEAD
  console.log(handleChange);
}
=======
  console.log(handleChange); 
      }
>>>>>>> 6d50c47bcb78109e2822d4b41da914348dad5ac5
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
<<<<<<< HEAD
            onChange={handleChange} />
        </div>
      }
    </div>
=======
           
            onChange={handleChange}  />
>>>>>>> origin/dev
          </div>
        }
  </div>
>>>>>>> 6d50c47bcb78109e2822d4b41da914348dad5ac5
  )
}

export default Header;
