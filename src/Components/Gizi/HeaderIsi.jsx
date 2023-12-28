import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import menu from "../Gambar/menu.svg"
import close from "../Gambar/close.svg"

function HeaderIsi() {
const navigate = useNavigate()
const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="p-4 grid-row-2  grid sm:grid-cols-[270px_1fr_1fr]  sm:pt-8">
        
        <button onClick={() => navigate('/')} className="w-20 text-[17px] text-center leading-7    sm:w-40   worksans sm:text-[41px] font-bold"> 
        <p className="-mb-3 bg-clip-text text-transparent bg-gradient-to-r from-sky-800 to-sky-700  sm:mb-3">HEALTH</p> 
        <p className="text-2xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-sky-950 to-sky-800 -mb-1 " >CARE</p>
        </button>
                   
        <li className="hidden  sm:grid louis list-none grid-cols-3 grid-rows-2">
          <div className="leading-5 col-span-3">
            <p className="">A website dedicated for health</p>
            <p>Article base on data present</p>
          </div>
          <ul className="self-end text-xl"> <button onClick={() => navigate('/')}>Home</button></ul>
          <ul className="self-end text-xl"><button>Articles</button></ul>
          <ul className="self-end text-xl"><button>About Us</button></ul>
        </li>

        <div className="  sm:grid louis justify-end grid-rows-2">
          <section className="  ">
            <p><button className="underline ">Sign in</button> to participate</p>
          </section>

          <p className="  sm:text-right">
            NANTI SEARCHBOX
          </p>
        </div >


        <div className=' justify-self-end  sm:hidden max-w-[20px] flex flex-1 justify-end items-center'>
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
                  <li className=" sm:grid louis list-none grid-cols-3 grid-rows-2">          
                      <ul className="self-end text-xl"> <button onClick={() => navigate('/')}>Home</button></ul>
                      <ul className="self-end text-xl"><button>Articles</button></ul>
                      <ul className="self-end text-xl"><button>About Us</button></ul>
                  </li>
            </div>         
        </div>

        <div className="border-t-2 w-auto mt-[22px] bg-slate-100 col-span-3  border-black">
        </div>
        

      </div>
    </div>
  );
}

export default HeaderIsi;

