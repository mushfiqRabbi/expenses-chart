import React from "react";

export default function Footer() {
  return (
    <div className="mt-4 pt-4 flex justify-between">
      <div className="">
        <div className="text-gray-500 text-sm font-normal tracking-wider">
          Total this month
        </div>
        <div className="text-3xl font-bold">&#36;478.33</div>
      </div>
      <div className="self-end text-right">
        <div className="font-bold text-md">+2.4%</div>
        <div className=" text-gray-500">from last month</div>
      </div>
    </div>
  );
}
