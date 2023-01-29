import { useEffect, useState, useRef } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import Confetti from "react-confetti";
import Header from "./features/gameScreen/header";
import OnBoardScreen from "./features/onBoardScreen/onBoardScreen";
import GameScreen from "./features/gameScreen/gameScreen";
import ScoreCard from "./features/scoreCard/scoreCard";
import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyAjoovvOyvoRK2x9VTh6QW2et9ESVSPkfE",
  authDomain: "where-s-waldo-1017a.firebaseapp.com",
  projectId: "where-s-waldo-1017a",
  storageBucket: "where-s-waldo-1017a.appspot.com",
  messagingSenderId: "214691130134",
  appId: "1:214691130134:web:fd5f90f243727caf8abe37",
  measurementId: "G-T8E27ZKPDP",
};

initializeApp(firebaseConfig);

const auth = getAuth();
let userId;
signInAnonymously(auth)
  .then((result) => {
    // Signed in..
    userId = result.user.uid;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });

function App() {
  const gameImgRef = useRef(null);
  const gameImgHeight = useRef(null);
  const gameImgWidth = useRef(null);
  const headerRef = useRef(null);
  const headerHeight = useRef(null);

  const [isGameOn, setIsGameOn] = useState(false);
  const [selectedCharactersLocations, setSelectedCharactersLocations] =
    useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectionResult, setSelectionResult] = useState(null);
  const [showScoreCard, setShowScoreCard] = useState(false);

  useEffect(() => {
    if (isGameOn) {
      gameImgWidth.current = gameImgRef.current.getBoundingClientRect().width;
      gameImgHeight.current = gameImgRef.current.getBoundingClientRect().height;
      headerHeight.current = headerRef.current.getBoundingClientRect().height;
    }
  }, [isGameOn]);

  useEffect(() => {
    let timeoutId;
    if (selectionResult === "You have selected all characters!") {
      setSelectedCharactersLocations([]);
      setShowConfetti(true);
      setShowScoreCard(true);
      setTimeout(() => {
        timeoutId = setShowConfetti(false);
      }, 10000);
    }
    return () => {
      setShowConfetti(false);
      clearTimeout(timeoutId);
    };
  }, [selectionResult]);

  return (
    <div className="App">
      {showScoreCard && <ScoreCard />}

      {!isGameOn && (
        <OnBoardScreen isGameOn={isGameOn} setIsGameOn={setIsGameOn} />
      )}

      {isGameOn && (
        <>
          <Header selectionResult={selectionResult} ref={headerRef} />
          <GameScreen
            selectionResult={selectionResult}
            setSelectionResult={setSelectionResult}
            selectedCharactersLocations={selectedCharactersLocations}
            setSelectedCharactersLocations={setSelectedCharactersLocations}
            headerHeight={headerHeight}
            gameImgWidth={gameImgWidth}
            gameImgHeight={gameImgHeight}
            ref={gameImgRef}
          />
        </>
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

export default App;
