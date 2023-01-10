import { useState } from "react";
import Characters from "../onBoardScreen/characters";
import CharacterSelector from "./characterSelector";

export default function GameScreen() {
  const [counter, setCounter] = useState("00.00.00");

  const [showCharacterListTooltip, setShowCharacterListTooltip] =
    useState(false);

  const [showCharacterSelector, setShowCharacterSelector] = useState(false);

  const [targetLocation, setTargetLocation] = useState({
    x: 0,
    y: 0,
  });

  const handleTargetAreaClick = (e) => {
    setShowCharacterSelector(!showCharacterSelector);
    setTargetLocation({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const { x, y } = targetLocation;
  const location = {
    position: "absolute",
    left: x,
    top: y,
  };

  return (
    <div>
      <header className="flex h-16 items-center justify-around bg-[#0e0c31]">
        <h1 className="text-2xl font-bold text-white">
          Where's <span className="text-[#ff0000]">Waldo</span>
        </h1>
        <div role={"timer"} className="text-2xl font-bold text-white">
          {counter}
        </div>
        <div>
          <div
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#8d0c0c] text-2xl text-white"
            onClick={() =>
              setShowCharacterListTooltip(!showCharacterListTooltip)
            }
          >
            3
          </div>

          {showCharacterListTooltip && (
            <div className="absolute right-40 z-10 w-72 rounded-md bg-[#17134d] p-4 text-white transition-all">
              <Characters />
            </div>
          )}
        </div>
      </header>
      <img
        src="https://res.cloudinary.com/du3oueesv/image/upload/v1672759136/Where%27s%20Waldo/universe-113.0d4fe7c1_pfzqhw.jpg"
        alt="universe-113"
        className="cursor-[url('https://res.cloudinary.com/du3oueesv/image/upload/v1673284323/Where%27s%20Waldo/Where_s_Waldo_dot_k9q85x-media_lib_thumb_i9xieg.png'),auto]"
        onClick={handleTargetAreaClick}
      ></img>

      {showCharacterSelector && <CharacterSelector location={location} />}
    </div>
  );
}
