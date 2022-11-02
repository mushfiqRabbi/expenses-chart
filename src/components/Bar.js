import React from "react";

export default function Bar({ day: { amount, day }, largest }) {
  return (
    <div className="flex flex-col items-center h-full justify-end gap-2">
      <div
        style={{
          height: `${
            Math.round((amount / largest) * 100) -
            Math.round((amount / largest) * 100) * 0.3
          }%`,
        }}
        className={`group w-8  bg-orange-500 rounded-sm relative`}
      >
        <div className="text-xs bg-black text-white px-1 py-1 rounded absolute -top-8 left-1/2 -translate-x-1/2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          &#36;{amount}
        </div>
      </div>
      <div className="text-sm text-gray-500">{day}</div>
    </div>
  );
}
