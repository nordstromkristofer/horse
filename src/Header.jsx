import React from 'react';

 function handleChange() {
    console.log(handleChange); 
      }
const Header = () => {
 
     

  
  return (
    <div className='header'>  
        <a className='text-left' href="/">Hem</a><br></br>
        <a className='text-left' href="/product-list">Hästar</a><br></br>
        <a className='text-left' href="/shopping-cart">Varukorg</a><br></br>
        
      <br></br> <br></br>
      
      {
        //Search bar on navbar
          <div>
            <input placeholder="Sök" onChange={handleChange} />
          </div>
        }
  </div>
  )
}
 console.log(handleChange);
export default Header;