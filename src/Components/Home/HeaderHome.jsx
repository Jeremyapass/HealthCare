import React, { useState } from "react";
import english from "../Gambar/englishflag.jpeg"
import menu from "../Gambar/menu.svg"
import close from "../Gambar/close.svg"
import { useNavigate } from "react-router-dom";

const HeaderHome = () => {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false);
  return (
      <div className="  flex justify-between p-4 sm:max-w-screen-xl sm:grid grid-cols-[1fr_1fr_1fr] m-auto sm:pt-2 sm:pb-2 ">

        <button className=" text-center cursor-default leading-7 w-20   worksans  font-bold"> 
          <p className="bg-clip-text text-[17px] text-transparent bg-gradient-to-r from-sky-800 to-sky-700 -mb-3 ">HEALTH</p> 
          <p className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-sky-950 to-sky-800 -mb-1 " >CARE</p>
          </button>

          <li className="  sm:grid  hidden font text-center font-light content-center list-none grid-cols-4 ">
            <ul className=" "> <button >Home</button></ul>
            <ul className=" " onClick={() => navigate('/Gizi')}><button>Articles</button></ul>
            <ul className=" "><button>About Us</button></ul>
            <ul className=" "><button>Contact</button></ul>
          </li>
          
        <div className="  flex text-sm  sm:text-base sm:grid grid-cols-3 font-light justify-items-end place-items-center ">
          <button className=" flex border-black rounded-full w-20">
            <p className="m-auto">Sign In</p>
          </button>
          <button className=" flex border-black   rounded-full w-20">
            <p className="m-auto">Sign Up</p>
          </button>
          <button className=" flex w-20  border-black  rounded-full">
            <img src={english}  className=" rounded-full -mr-2 m-auto w-5 h-5" alt="" />
            <p className="m-auto">ENG</p>
          </button>
        </div>

        <div className='  sm:hidden max-w-[20px] flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-sky-100  absolute justify-center top-16 right-0 mx-4  min-w-fit z-20 rounded-xl`}
          >
            <li className="  font text-center font-light  list-none ">
              <ul className=" "> <button >Home</button></ul>
              <ul className=" " onClick={() => navigate('/Gizi')}><button>Articles</button></ul>
              <ul className=" "><button>About Us</button></ul>
              <ul className=" "><button>Contact</button></ul>
            </li>
          </div>
          
          </div>

      </div>
  );
}

export default HeaderHome;  