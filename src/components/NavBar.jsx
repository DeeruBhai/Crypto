// import { home_icon } from "../assets";
import { hamburger, homeicon } from "../assets/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
function NavBar() {
  const [hamClick, setHamClick] = useState(false);
  const navLinks = [
    { label: "Home", link: "/" },
    // { label: "Coins", link: "/coins" },
    { label: "Exchange", link: "/exchanges" },
  ];
  return (
    <header
      className="px-8 py-2 relative z-10 w-full bg-[#1F2544] max-container
    "
    >
      <nav className="flex justify-between items-center max-container">
        <Link to="/">
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              src={homeicon}
              alt="headerlogo"
              width={50}
              height={20}
              className="text-[#E26EE5]"
            />
            {/* <p className="text-[#FFD0EC]">Crypt</p> */}
          </div>
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-md:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.link}
                className="font-montserrat leading-normal text-lg text-[#FFD0EC] hover:text-[#E26EE5]"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* */}
        <div className="hidden max-md:block">
          <GiHamburgerMenu
            className="text-[#E26EE5] text-xl"
            onClick={() => setHamClick(true)}
          />
          {/* <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={() => setHamClick(true)}
          /> */}
        </div>
        {hamClick && (
          <div className="fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 left-0 z-20 transition-all delay-75">
            <div className="text-[#7E30E1]  bg-[#F3F8FF] flex-col absolute right-0 top-0 h-full p-8  z-50 flex">
              <div className="self-end">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-coral-red mb-8 text-4xl cursor-pointer mt-0"
                  onClick={() => setHamClick(false)}
                />
              </div>
              <ul className="flex-1 flex-col flex justify-center items-center gap-16 p-12">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.link}
                      className="font-montserrat leading-normal text-3xl text-[#7E30E1]  hover:text-[#E26EE5]"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
