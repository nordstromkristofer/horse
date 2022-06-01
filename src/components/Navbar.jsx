import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";
// import { Link } from "react-scroll";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  function handleChange() {
    console.log(handleChange);
  }
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = Horses.filter((horse) => {
        return;
        user.horse.toLoweCase().startWith(keyword.toLowerCase());
      });
      setFoundHorses(results);
    } else {
      setFoundHorses(Horses);
    }
    setName(keyword);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#F9EBC8] text-black-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to={`/`}>Stallet</Link>
        </li>
        <li>
          <Link
            to={`/product-list`}
            activeClass="active"
            smooth={true}
            duration={500}
          >
            Hästar
          </Link>
        </li>
        <li>
          <Link to={`/shopping-cart`}>Varukorg</Link>
        </li>
      </ul>

      {/* Search Bar */}

      <form class="rounded-md items-center flex divide-x">
        <select class="rounded-l-md  py-4 focus:bg-yellow-50">
          <option selected="selected">Kategorier</option>
          <option>Hästar</option>
          <option>Utrustning</option>
          <option>Edibles</option>
        </select>
        <input
          class="py-3.5 px-2 appearance-none block w-full  focus:outline-none focus:bg-yellow-50 placeholder-gray-500 placeholder-opacity-25"
          name="search"
          placeholder="Sök ....."
          type="search"
          onChange={handleChange}
        />

        <button class="py-3 px-2 bg-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-8 text-gray-50 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>

      {/* Hamburger */}

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#F9EBC8] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to={`/`}>
            Stallet
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to={`/product-list`}>
            Hästar
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to={`/shopping-cart`}>
            Varukorg
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navbar;
