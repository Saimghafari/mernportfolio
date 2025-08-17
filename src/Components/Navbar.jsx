import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TiInfoLarge } from "react-icons/ti";
import { RiServiceFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-4 py-4 bg-gray-800 text-white nav">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
         
          <div className="w-full flex justify-between lg:w-auto">
            <Link
              className="text-lg font-extrabold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              M.Ahtisham
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              
              <i className="fas fa-bars"></i>
            </button>
          </div>

          
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-sm uppercase font-extrabold leading-snug hover:opacity-75"
                  to="/"
                >
                  <IoHomeOutline className="text-lg" />
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-sm uppercase font-extrabold leading-snug hover:opacity-75"
                  to="/about"
                >
                  <TiInfoLarge className="text-lg" />
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-sm uppercase font-extrabold leading-snug hover:opacity-75"
                  to="/services"
                >
                  <RiServiceFill className="text-lg" />
                  <span className="ml-2">Services</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-sm uppercase font-extrabold leading-snug hover:opacity-75"
                  to="/portfolio"
                >
                  <IoPerson className="text-lg" />
                  <span className="ml-2">Portfolio</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-sm uppercase font-extrabold leading-snug hover:opacity-75"
                  to="/contact"
                >
                  <IoIosPhonePortrait className="text-lg" />
                  <span className="ml-2">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
