import React from "react";
import linkedin from "../Gambar/linkedin.png"
import insta from "../Gambar/ig.png"
import fb from "../Gambar/facebook.png"
import x from "../Gambar/x.png"

function FooterIsi() {
  return (
    <div className="w-full min-h-screen py-10 rounded-b-xl px-20 sm:min-h-full bg-gradient-to-b from-sky-800 to-sky-950 ">
      <div className="">
        <p className="worksans text-white text-2xl font-bold">  Health Care</p>
        <p className="-mt-2 text-sm font-thin text-slate-200">Health Article web</p>
      </div>

      <div className="text-white gap-x-10 gap-y-6 mt-12 grid grid-rows-6 grid-cols-1 sm:grid-cols-2 sm:grid-rows-4 ">
        <p className=" sm:col-span-2 tommy text-2xl ">Be one of us</p>
        <input className="border text-sm rounded-2xl bg-transparent px-3 border-white text-white " placeholder="Full Name"></input>
        <input className="border text-sm rounded-2xl bg-transparent px-3 border-white text-white " placeholder="Email@gmail.com"></input>
        <input className="border text-sm rounded-2xl bg-transparent px-3 border-white text-white " placeholder="Domicile"></input>
        <input className="border text-sm rounded-2xl bg-transparent px-3 border-white text-white " placeholder="+62 - _____"></input>
        <button className="border text-sm rounded-2xl w-1/2 font-bold h-10 text-teal-600 bg-white px-3 text-center  " >Submit</button>
      </div>

    <div className="border-b mt-14 border-white"> </div>

      <div className=" ">
        <p className="text-white tommy text-2xl mt-5">We Are On Social Media</p>
        <div className="mt-6 grid  justify-items-start items-center grid-cols-4 sm:w-2/6">
            <button className="bg-insta w-10 h-10  sm:w-12 sm:h-12 bg-cover"></button>
            <button className="bg-link bg-center w-10 h-10  sm:w-12 sm:h-12 bg-cover"></button>
            <button className="bg-fb bg-center w-8 h-8  sm:w-10 sm:h-10 bg-cover"></button>
            <button className="bg-x w-8 h-8  sm:w-10 sm:h-10 bg-center bg-cover"></button>
        </div>
        <p className="text-xs text-slate-400 mt-6">Copyright By Jeremya Pascal</p>
      </div>
    </div>
  );
}

export default FooterIsi;

