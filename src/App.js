import { useState } from "react";
import { initializeApp } from "firebase/app";
import OnBoardScreen from "./features/onBoardScreen/onBoardScreen";
import GameScreen from "./features/gameScreen/gameScreen";
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

function App() {
  const [isGameOn, setIsGameOn] = useState(false);

  return (
    <div className="App">
      {!isGameOn && (
        <OnBoardScreen isGameOn={isGameOn} setIsGameOn={setIsGameOn} />
      )}
      
      {isGameOn && <GameScreen />}
    </div>
  );
}

export default App;
