import { useEffect, useRef, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import Header from "./header";
import CharacterSelector from "./characterSelector";
import Alert from "./alert";
import Rive from "@rive-app/react-canvas";
import Confetti from "react-confetti";

export default function GameScreen() {
  const gameImgRef = useRef(null);
  const gameImgHeight = useRef(null);
  const gameImgWidth = useRef(null);
  const headerRef = useRef(null);
  const headerHeight = useRef(null);

  const [showCharacterSelector, setShowCharacterSelector] = useState(false);
  const [targetLocation, setTargetLocation] = useState({
    x: 0,
    y: 0,
  });
  const [selectionResult, setSelectionResult] = useState(null);
  const [selectedCharactersLocations, setSelectedCharactersLocations] =
    useState([]);

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

  useEffect(() => {
    gameImgWidth.current = gameImgRef.current.getBoundingClientRect().width;
    gameImgHeight.current = gameImgRef.current.getBoundingClientRect().height;
    headerHeight.current = headerRef.current.getBoundingClientRect().height;
  }, []);

  const initialGameImgWidth = 1366;
  const initialGameImgHeight = 1931.6;

  const returnAdjustedLocation = () => {
    gameImgWidth.current = gameImgRef.current.getBoundingClientRect().width;
    gameImgHeight.current = gameImgRef.current.getBoundingClientRect().height;
    headerHeight.current = headerRef.current.getBoundingClientRect().height;

    // adjust the location for different screens with above information
    const clickedLocationLeftSideLengthOnGameImg = Math.trunc(
      (initialGameImgWidth / gameImgWidth.current) * (location.left + 32) // see gamescreen.js for why 32 is added
    );

    const clickedLocationTopSideLengthOnGameImg = Math.trunc(
      (initialGameImgHeight / gameImgHeight.current) *
        (location.top - headerHeight.current + 32)
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
          selectedCharactersLocations.length === 2
            ? setSelectionResult("You have selected all characters!")
            : setSelectionResult(`${characterName} is found!`);

          setSelectedCharactersLocations([
            ...selectedCharactersLocations,
            location,
          ]);
        } else {
          setSelectionResult("Wrong! Try again.");
        }
      });
    } else {
      setSelectionResult("Wrong! Try again.");
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const handleCharacterSelection = async (characterName) => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  const handleAlertRemoval = () => {
    setSelectionResult(null);
    setShowCharacterSelector(false);
  };

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (selectedCharactersLocations.length === 3) {
      setShowConfetti(true);
      setTimeout(() => {
        timeoutId = setShowConfetti(false);
      }, 10000);
    }
    return () => {
      setShowConfetti(false);
      clearTimeout(timeoutId);
    };
  }, [selectedCharactersLocations]);

  return (
    <div>
      <Header selectionResult={selectionResult} ref={headerRef} />

      <img
        src="https://res.cloudinary.com/du3oueesv/image/upload/v1672759136/Where%27s%20Waldo/universe-113.0d4fe7c1_pfzqhw.jpg"
        alt="universe-113"
        ref={gameImgRef}
        onClick={handleTargetAreaClick}
      ></img>

      {selectionResult && selectedCharactersLocations.length !== 3 && (
        <Alert
          location={location}
          selectionResult={selectionResult}
          handleAlertRemoval={handleAlertRemoval}
        />
      )}

      {selectionResult && selectedCharactersLocations.length === 3 && (
        <Alert
          location={location}
          selectionResult={"You have selected all characters!"}
          handleAlertRemoval={handleAlertRemoval}
        />
      )}

      {showCharacterSelector && !selectionResult && (
        <CharacterSelector
          location={location}
          handleCharacterSelection={handleCharacterSelection}
        />
      )}

      {!selectionResult &&
        selectedCharactersLocations.map((location) => {
          return (
            <span
              key={location.left}
              className="text-green-600"
              style={location}
            >
              {/* location.left is used as key because simply setting location
              itself as a key, is giving 'same key' error
            */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-16 w-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          );
        })}

      {isLoading && (
        <Rive
          src="https://public.rive.app/community/runtime-files/1586-3103-epar-loading-v4.riv"
          autoPlay={true}
          style={{ width: "60px", height: "60px", ...location }}
        />
      )}

      {showConfetti && (
        <Confetti
          numberOfPieces={200}
          width={gameImgWidth.current}
          height={gameImgHeight.current + headerHeight.current}
        />
      )}
    </div>
  );
}
