import React from 'react';
import { useStates } from './utilities/states';



function Header ({ handleChange, data }) {
  const [filteredData, setFilterdData] = useStates([]);
  const [wordEntered, setWordEntered] = useStates("");
  console.log(handleChange);


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((data) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    
  }
  if (searchWord === "") {
    setFilterdData([]);
  } else {
    setFilterdData(newFilter);
}
};
const clearInput = () => {
  setFilterdData([]);
  setWordEntered("");
};





const Header = () => {




  return (
    <div className='header'>
      <a className='text-left' href="/">Stallet</a><br></br>
      <a className='text-left' href="/product-list">Hästar</a><br></br>
      <a className='text-left' href="/shopping-cart">Varukorg</a><br></br>

      <br></br> <br></br>



      
        //Search bar on navbar
        <div>


          <div className="search">
      <div className="searchInputs">
          <input
            type="text"
            placeholder="Golden Horse 🔍"
            value={wordEntered}
              onChange={handleFilter}
            />
            </div>
            </div>
       
       <div className="searchIcon">
                {filteredData.length === 0 ? (
                  < Section />
                ) : (
                  <CloseIcon id="clearbtn" onClick={clearInput}
                  />
          )}
          

                </div>
        </div>
      </div>
    
                );
                

    }


export default Header;
