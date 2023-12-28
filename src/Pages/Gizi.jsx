import React from "react";
import HeaderIsi from "../Components/Gizi/HeaderIsi";
import "../css.css"
import Isi from "../Components/Gizi/Isi";
import FooterIsi from "../Components/Gizi/FooterIsi";

function Gizi() {
  return (
    <div className="bg-gradient-to-r from-white to-slate-50">
      <div className=" sm:max-w-screen-lg m-auto ">
            <HeaderIsi/>
            <Isi/>
            <FooterIsi/>
        </div>
    </div>
  );
}

export default Gizi;
