import React from "react";
import { useNavigate } from "react-router-dom";
import WHO from "../Gambar/WHO.png"

function IsiHome() {
const navigate = useNavigate()
  return (
    <div className=" min-h-full px-6 mt-16 sm:px-6  sm:max-w-screen-xl m-auto sm:mt-32 ">
        <div className=" max-w-md ">
            <div className="text-4xl hacuia">Every Life Is Important</div>
            <h1 className="mt-4 text-md worksans  ">Welcome to our Health Care Hub, your trusted source for insightful articles covering a wide spectrum of health topics and information. Explore our diverse range of health articles designed to empower you with knowledge and guide you on your journey to a healthier and happier life.</h1>
        </div>

        <button  onClick={() => navigate('/Gizi')} className=" bg-sky-900 mt-6 flex rounded-xl  text-white font-bold  h-12 w-32">
            <p className="m-auto" > New Article</p>
        </button>

        <div className="flex flex-col bg-white sm:bg-sky-100 sm:bg-opacity-75 mt-32 min-h-full pb-2 px-6 max-w-[45rem] rounded-xl
        ">
            <h2 className=" mb-2">Trusted By :</h2>
            <div className="grid grid-row-3 gap-10 sm:grid-cols-3 sm:gap-4 max-w-[42rem] ">       
                <img  className="rounded-md"src={WHO} alt="" />  
                <img  className="rounded-md"src={WHO} alt="" />  
                <img  className="rounded-md"src={WHO} alt="" />  
            </div>
        </div>
        <p className="text-xs text-black mt-2 ">Copyright By Jeremya Pascal</p>
    </div>
    
  );
}

export default IsiHome;  