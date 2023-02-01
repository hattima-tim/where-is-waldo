import { forwardRef, useEffect, useRef, useState } from "react";
import Characters from "../onBoardScreen/characters";

const Header = forwardRef(function Header(
  {
    msCounter,
    setMsCounter,
    secondCounter,
    setSecondCounter,
    minuteCounter,
    setMinuteCounter,
    isGameOn,
  },
  ref
) {
  const [showCharacterListTooltip, setShowCharacterListTooltip] =
    useState(false);
  const msIntervalId = useRef("");
  const secondIntervalId = useRef("");
  const minuteIntervalId = useRef("");

  useEffect(() => {
    if (isGameOn) {
      msIntervalId.current = setInterval(() => {
        setMsCounter((prev) =>
          (Number(prev) + 1).toString().slice(0, 2).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );
      }, 1);
    }

    return () => clearInterval(msIntervalId.current);
  }, [isGameOn, setMsCounter]);

  useEffect(() => {
    if (isGameOn) {
      secondIntervalId.current = setInterval(() => {
        setSecondCounter((prev) =>
          (Number(prev) + 1).toString().slice(0, 2).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );
      }, 1000);
    }

    return () => clearInterval(secondIntervalId.current);
  }, [isGameOn, setSecondCounter]);

  useEffect(() => {
    if (isGameOn) {
      minuteIntervalId.current = setInterval(() => {
        setMinuteCounter((prev) =>
          (Number(prev) + 1).toString().slice(0, 2).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );
      }, 60000);
    }

    return () => clearInterval(minuteIntervalId.current);
  }, [isGameOn, setMinuteCounter]);

  return (
    <header
      className="sticky top-0 flex h-20 items-center justify-between bg-[#0e0c31]"
      ref={ref}
    >
      <h1 className="ml-4 text-xl font-bold text-white">
        Where's <br /> <span className="text-[#ff0000]">Waldo</span>
      </h1>
      <div role={"timer"} className="text-2xl font-bold text-white">
        {minuteCounter}:{secondCounter}:{msCounter}
      </div>
      <div>
        <div
          className="mr-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#8d0c0c] text-2xl text-white"
          onClick={() => setShowCharacterListTooltip(!showCharacterListTooltip)}
        >
          3
        </div>

        {showCharacterListTooltip && (
          <div className="absolute right-4 z-10 mt-4 w-80 rounded-md bg-[#17134d] p-4 pr-8 text-white transition-all lg:right-8">
            <Characters />
          </div>
        )}
      </div>
    </header>
  );
});

export default Header;
