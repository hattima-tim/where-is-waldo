import { useEffect, useState } from "react";
import {
  getFirestore,
  setDoc,
  doc,
  getDocs,
  collection,
} from "firebase/firestore";

export default function ScoreCard({
  userId,
  msCounter,
  secondCounter,
  minuteCounter,
  userName,
  startTheGame,
}) {
  useEffect(() => {
    const timeTookForFinishingTheGame = {
      milliSecond: Number(msCounter),
      second: Number(secondCounter),
      minute: Number(minuteCounter),
    };

    async function pushUserInfoToFirebase() {
      const db = getFirestore();
      const userRef = doc(db, `users/${userId}`);

      try {
        await setDoc(userRef, {
          id: userId,
          name: userName,
          timeTookForFinishingTheGame: timeTookForFinishingTheGame,
        });
      } catch (error) {
        alert("Something went wrong!");
      }
    }

    pushUserInfoToFirebase();
  }, [userName, userId, msCounter, secondCounter, minuteCounter]);

  const [allUsersInfo, setAllUsersInfo] = useState([]);
  const getTopTenUsers = () => {
    const allUsersInfoCopy = [...allUsersInfo];

    const sortedUsers = allUsersInfoCopy.sort((a, b) => {
      const scoreOfA = a.timeTookForFinishingTheGame;
      const scoreOfB = b.timeTookForFinishingTheGame;
      return scoreOfA.minute > scoreOfB.minute ||
        scoreOfA.second > scoreOfB.second ||
        scoreOfA.milliSecond > scoreOfB.milliSecond
        ? 1 // sort a after b
        : -1; // sort a before b
    });
    sortedUsers.splice(10);

    return sortedUsers;
  };

  useEffect(() => {
    async function getUsersInfoFromFirestore() {
      const db = getFirestore();
      const usersCollectionRef = collection(db, "users");

      try {
        const allUsersInfoCopy = [];
        const usersSnapshot = await getDocs(usersCollectionRef);
        usersSnapshot.forEach((doc) => {
          allUsersInfoCopy.push(doc.data());
        });

        setAllUsersInfo(allUsersInfoCopy);
      } catch (error) {
        alert("Something went wrong!");
      }
    }
    getUsersInfoFromFirestore();
  }, []);

  const topTenUsers = getTopTenUsers(allUsersInfo);

  return (
    <div className="absolute z-50  flex h-full w-full items-center justify-center">
      <div className="flex items-center justify-around rounded-2xl bg-white p-12 sm:w-11/12 lg:w-1/2">
        <div>
          <h1 className="bold text-3xl">High Scores</h1>
          <ol className="m-4 list-decimal">
            {topTenUsers.map((user) => (
              <li key={user.id}>
                {user.name} {user.timeTookForFinishingTheGame.minute}:
                {user.timeTookForFinishingTheGame.second}:
                {user.timeTookForFinishingTheGame.milliSecond}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="bold text-3xl">Time</h2>
          <p className="bold text-2xl">2:3:4</p>
          <button
            className="rounded-full bg-gradient-to-r from-[#2a2c80] via-[#fd1d1d] to-[#fcb045] py-3 px-6 font-bold uppercase text-white transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={startTheGame}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
