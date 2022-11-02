import Balance from "./components/Balance";
import Spending from "./components/Spending";
import React, { useEffect } from "react";
import { useState } from "react";

export const AppContext = React.createContext();

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((val) => setData(val));
  }, []);

  if (data) {
    return (
      <AppContext.Provider value={data}>
        <div className="bg-orange-200 h-screen flex justify-center items-center">
          <div className="sm:max-w-sm w-11/12">
            <Balance></Balance>
            <Spending></Spending>
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}
