import { useState } from "react";
import Character from "../onBoardScreen/character";

export default function GameScreen() {
  const [counter, setCounter] = useState("00.00.00");
  const [showCharacterListTooltip, setShowCharacterListTooltip] =
    useState(false);

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
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8d0c0c] text-2xl text-white"
            onClick={() =>
              setShowCharacterListTooltip(!showCharacterListTooltip)
            }
          >
            3
          </div>

          {showCharacterListTooltip && (
            <div className="absolute right-40 z-10 w-72 rounded-md bg-[#17134d] p-4 text-white transition-all">
              <Character
                difficultyLevel={"easy"}
                src={
                  "https://res.cloudinary.com/du3oueesv/image/upload/v1672759163/Where%27s%20Waldo/cacodemon.1dad269c_ajnuga.png"
                }
                alt={"cacodemon"}
                characterName={"Cacodemon"}
                reference={"Doom"}
              />

              <Character
                difficultyLevel={"medium"}
                src={
                  "https://res.cloudinary.com/du3oueesv/image/upload/v1672759181/Where%27s%20Waldo/bill-cipher.1e7e0fc4_jfln6r.png"
                }
                alt={"bill cipher"}
                characterName={"Bill Cipher"}
                reference={"Gravity Falls"}
              />

              <Character
                difficultyLevel={"hard"}
                src={
                  "https://res.cloudinary.com/du3oueesv/image/upload/v1672759200/Where%27s%20Waldo/courage.200fe7a8_jkf3vs.png"
                }
                alt={"courage"}
                characterName={"Courage"}
                reference={"Courage the Cowardly Dog"}
              />
            </div>
          )}
        </div>
      </header>
      <img
        src="https://res.cloudinary.com/du3oueesv/image/upload/v1672759136/Where%27s%20Waldo/universe-113.0d4fe7c1_pfzqhw.jpg"
        alt="universe-113"
      ></img>
    </div>
  );
}
