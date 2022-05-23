import React from 'react'

const Header = () => {
  return (
    <div className='header'>  
        <a className='text-left' href="/">Hem</a><br></br>
        <a className='text-left' href="/product-list">Produktlista</a><br></br>
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