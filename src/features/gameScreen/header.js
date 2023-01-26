import { forwardRef, useState } from "react";
import Characters from "../onBoardScreen/characters";

const Header = forwardRef(function Header({ selectionResult }, ref) {
  const [counter, setCounter] = useState("00.00.00");
  const [showCharacterListTooltip, setShowCharacterListTooltip] =
    useState(false);

  return (
    <header
      className="flex h-16 items-center justify-around bg-[#0e0c31]"
      ref={ref}
    >
      <h1 className="text-2xl font-bold text-white">
        Where's <span className="text-[#ff0000]">Waldo</span>
      </h1>
      <div role={"timer"} className="text-2xl font-bold text-white">
        {counter}
      </div>
      <div>
        <div
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#8d0c0c] text-2xl text-white"
          onClick={() => setShowCharacterListTooltip(!showCharacterListTooltip)}
        >
          3
        </div>

        {showCharacterListTooltip && !selectionResult && (
          <div className="absolute right-40 z-10 w-72 rounded-md bg-[#17134d] p-4 text-white transition-all">
            <Characters />
          </div>
        )}
      </div>
    </header>
  );
});

export default Header;
