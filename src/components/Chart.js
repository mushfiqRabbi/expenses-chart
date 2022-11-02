import React from "react";
import Bar from "./Bar";
import { AppContext } from "../App";
import { useContext } from "react";

export default function Chart() {
  const nums = useContext(AppContext).map((obj) => {
    return Math.round(obj.amount);
  });

  const largest = Math.max(...nums);

  const [sat, sun, mon, tue, wed, thu, fri] = useContext(AppContext);
  return (
    <div className="flex w-full h-48 justify-between mt-6">
      <Bar day={sat} largest={largest}></Bar>
      <Bar day={sun} largest={largest}></Bar>
      <Bar day={mon} largest={largest}></Bar>
      <Bar day={tue} largest={largest}></Bar>
      <Bar day={wed} largest={largest}></Bar>
      <Bar day={thu} largest={largest}></Bar>
      <Bar day={fri} largest={largest}></Bar>
    </div>
  );
}
