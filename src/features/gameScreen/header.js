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
      className="sticky top-0 flex h-16 items-center justify-around bg-[#0e0c31]"
      ref={ref}
    >
      <h1 className="text-2xl font-bold text-white">
        Where's <span className="text-[#ff0000]">Waldo</span>
      </h1>
      <div role={"timer"} className="text-2xl font-bold text-white">
        {minuteCounter}:{secondCounter}:{msCounter}
      </div>
      <div>
        <div
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#8d0c0c] text-2xl text-white"
          onClick={() => setShowCharacterListTooltip(!showCharacterListTooltip)}
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
  );
});

export default Header;
