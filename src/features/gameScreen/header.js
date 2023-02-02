import { forwardRef, useEffect, useRef, useState } from "react";

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
  const msIntervalId = useRef("");
  const secondIntervalId = useRef("");
  const minuteIntervalId = useRef("");

  useEffect(() => {
    if (isGameOn && !msIntervalId.current) {
      msIntervalId.current = setInterval(() => {
        setMsCounter((prev) => {
          return (Number(prev) + 1)
            .toString()
            .slice(0, 2)
            .toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            });
        });
      }, 1);
    }

    return () => {
      clearInterval(msIntervalId.current);
      msIntervalId.current = null;
    };
  }, [isGameOn, setMsCounter]);

  useEffect(() => {
    if (isGameOn && !secondIntervalId.current) {
      secondIntervalId.current = setInterval(() => {
        setSecondCounter((prev) => {
          if (prev === "59") return "00";
          return (Number(prev) + 1)
            .toString()
            .slice(0, 2)
            .toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            });
        });
      }, 1000);
    }

    return () => {
      clearInterval(secondIntervalId.current);
      secondIntervalId.current = null;
    };
  }, [isGameOn, setSecondCounter]);

  useEffect(() => {
    if (isGameOn && !minuteIntervalId.current) {
      minuteIntervalId.current = setInterval(() => {
        setMinuteCounter((prev) => {
          if (prev === "59") return "00";
          return (Number(prev) + 1)
            .toString()
            .slice(0, 2)
            .toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            });
        });
      }, 60000);
    }

    return () => {
      clearInterval(minuteIntervalId.current);
      minuteIntervalId.current = null;
    };
  }, [isGameOn, setMinuteCounter]);

  return (
    <header
      className="sticky top-0 z-10 flex h-20 items-center justify-between bg-[#0e0c31]"
      ref={ref}
    >
      <h1 className="text-lg font-bold text-white lg:ml-4 lg:text-2xl">
        Where's <br /> <span className="text-[#ff0000]">Waldo</span>
      </h1>

      <div className="flex items-center gap-2 lg:gap-4">
        <div className="flex flex-col items-center gap-1">
          <img
            src={
              "https://res.cloudinary.com/du3oueesv/image/upload/v1672759163/Where%27s%20Waldo/cacodemon.1dad269c_ajnuga.png"
            }
            alt="Cacodemon"
            className="h-7 w-7 lg:h-10 lg:w-10"
          ></img>
          <span className="text-xs text-white lg:text-sm">Cacodemon</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img
            src={
              "https://res.cloudinary.com/du3oueesv/image/upload/v1672759181/Where%27s%20Waldo/bill-cipher.1e7e0fc4_jfln6r.png"
            }
            alt="Bill Cipher"
            className="h-7 w-7 lg:h-10 lg:w-10"
          ></img>
          <span className="text-xs text-white lg:text-sm">Bill Cipher</span>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <img
            src={
              "https://res.cloudinary.com/du3oueesv/image/upload/v1672759200/Where%27s%20Waldo/courage.200fe7a8_jkf3vs.png"
            }
            alt="Courage"
            className="h-7 w-7 lg:h-10 lg:w-10"
          ></img>
          <span className="text-xs text-white lg:text-sm">Courage</span>
        </div>
      </div>

      <div
        role={"timer"}
        className="text-lg font-bold text-white lg:mr-4 lg:text-2xl"
      >
        {minuteCounter}:{secondCounter}:{msCounter}
      </div>
    </header>
  );
});

export default Header;
