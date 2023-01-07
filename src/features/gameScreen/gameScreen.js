import { useState } from "react";

export default function GameScreen() {
  const [counter, setCounter] = useState("00.00.00");

  return (
    <div>
      <header className="flex h-16 items-center justify-around bg-[#0e0c31]">
        <h1 className="text-2xl font-bold text-white">
          Where's <span className="text-[#ff0000]">Waldo</span>
        </h1>
        <div role={"timer"} className="text-2xl font-bold text-white">
          {counter}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8d0c0c] text-2xl text-white">
          3
        </div>
      </header>
      <img
        src="https://res.cloudinary.com/du3oueesv/image/upload/v1672759136/Where%27s%20Waldo/universe-113.0d4fe7c1_pfzqhw.jpg"
        alt="universe-113"
      ></img>
    </div>
  );
}
