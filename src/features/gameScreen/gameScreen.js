import { useRef, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import Characters from "../onBoardScreen/characters";
import CharacterSelector from "./characterSelector";
import Alert from "./alert";

export default function GameScreen() {
  const gameImgRef = useRef(null);
  const headerRef = useRef(null);

  const [counter, setCounter] = useState("00.00.00");
  const [showCharacterListTooltip, setShowCharacterListTooltip] =
    useState(false);
  const [showCharacterSelector, setShowCharacterSelector] = useState(false);
  const [targetLocation, setTargetLocation] = useState({
    x: 0,
    y: 0,
  });
  const [selectionResult, setSelectionResult] = useState(null);

  const handleTargetAreaClick = (e) => {
    setShowCharacterSelector(!showCharacterSelector);
    setSelectionResult(null);
    setTargetLocation({
      x: e.pageX - 32, // 32 is the lalf of the target circle
      y: e.pageY - 32, // so,here I am moving the target circle to the center
      // of clicked point
    });
  };

  const { x, y } = targetLocation;
  const location = {
    position: "absolute",
    left: x,
    top: y,
  };

  const initialGameImgWidth = 1366;
  const initialGameImgHeight = 1931.6;

  const returnAdjustedLocation = () => {
    const currentImgWidth = gameImgRef.current.getBoundingClientRect().width;
    const currentImgHeight = gameImgRef.current.getBoundingClientRect().height;
    const headerHeight = headerRef.current.getBoundingClientRect().height;

    // adjust the location for different screens with above information
    const clickedLocationLeftSideLengthOnGameImg = Math.trunc(
      (initialGameImgWidth / currentImgWidth) * (location.left + 32) // see gamescreen.js for why 32 is added
    );

    const clickedLocationTopSideLengthOnGameImg = Math.trunc(
      (initialGameImgHeight / currentImgHeight) *
        (location.top - headerHeight + 32)
    ); // since location.top is calculated with pageY, it contains header height

    return {
      clickedLocationLeftSideLengthOnGameImg,
      clickedLocationTopSideLengthOnGameImg,
    };
  };

  const isCharacterSelectionRight = async (
    characterName,
    clickedLocationLeftSideLengthOnGameImg,
    clickedLocationTopSideLengthOnGameImg
  ) => {
    const db = getFirestore();
    const charactersRef = collection(db, "characters");
    const q = query(
      charactersRef,
      where(
        "coordinates",
        "array-contains",
        `${clickedLocationLeftSideLengthOnGameImg},${clickedLocationTopSideLengthOnGameImg}`
      )
    );

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        if (doc.id === characterName) {
          setSelectionResult(`${characterName} is found!`);
        } else {
          setSelectionResult("Wrong! Try again.");
        }
      });
    } else {
      setSelectionResult("Wrong! Try again.");
    }
  };

  const handleCharacterSelection = async (characterName) => {
    const adjustedLocation = returnAdjustedLocation();
    const clickedLocationLeftSideLengthOnGameImg =
      adjustedLocation.clickedLocationLeftSideLengthOnGameImg;
    const clickedLocationTopSideLengthOnGameImg =
      adjustedLocation.clickedLocationTopSideLengthOnGameImg;

    await isCharacterSelectionRight(
      characterName,
      clickedLocationLeftSideLengthOnGameImg,
      clickedLocationTopSideLengthOnGameImg
    );
  };

  const handleAlertRemoval = () => {
    setSelectionResult(null);
    setShowCharacterSelector(false);
  };

  return (
    <div>
      <header
        className="flex h-16 items-center justify-around bg-[#0e0c31]"
        ref={headerRef}
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
            onClick={() =>
              setShowCharacterListTooltip(!showCharacterListTooltip)
            }
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

      <img
        src="https://res.cloudinary.com/du3oueesv/image/upload/v1672759136/Where%27s%20Waldo/universe-113.0d4fe7c1_pfzqhw.jpg"
        alt="universe-113"
        ref={gameImgRef}
        onClick={handleTargetAreaClick}
      ></img>

      {selectionResult && (
        <Alert
          location={location}
          selectionResult={selectionResult}
          handleAlertRemoval={handleAlertRemoval}
        />
      )}

      {showCharacterSelector && !selectionResult && (
        <CharacterSelector
          location={location}
          handleCharacterSelection={handleCharacterSelection}
        />
      )}
    </div>
  );
}
