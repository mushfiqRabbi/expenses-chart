import React from "react";
import logo from "../images/logo.svg";

export default function Balance() {
  return (
    <div className="bg-orange-500 text-white flex rounded-lg justify-between p-4 items-center">
      <div>
        <div className="font-light">My balance</div>
        <div className="text-2xl font-semibold">&#36; 921.48</div>
      </div>
      <div className="w-14 mr-2">
        <img src={logo} alt="not found" />
      </div>
    </div>
  );
}
