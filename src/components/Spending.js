import React from "react";
import Title from "./Title";
import Chart from "./Chart";
import Footer from "./Footer";

export default function Spending() {
  return (
    <div className="bg-orange-50 mt-4 rounded-lg p-4 divide-y-2">
      <div className="">
        <Title></Title>
        <Chart></Chart>
      </div>
      <Footer></Footer>
    </div>
  );
}
