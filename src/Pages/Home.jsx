import React from "react";

import HeaderHome from "../Components/Home/HeaderHome";
import IsiHome from "../Components/Home/IsiHome";

function Home() {
  return (
    <div className="bg-rs bg-cover min-w-full min-h-screen  ">
      <HeaderHome  className="z-10"/>
      <IsiHome className="z-10"/>
    </div>
  );
}

export default Home;
