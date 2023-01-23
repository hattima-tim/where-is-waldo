import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import Characters from "../onBoardScreen/characters";

export default function CharacterSelector({ location, gameImgRef, headerRef }) {
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
          console.log("found");
        } else {
          console.log("wrong");
        }
        console.log(doc);
        console.log(doc.id, " => ", doc.data());
      });
    } else {
      console.log("no");
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

  return (
    <div className="flex" style={location}>
      <div className="flex h-16 w-16 items-center  justify-center rounded-full border-4 border-dashed border-white bg-[hsla(0,0%,100%,.3)]">
        <div className="relative h-1 w-1 rounded-full bg-red-600"></div>
      </div>

      <div className="z-10 w-72 rounded-md bg-[#17134d] p-4 text-white transition-all">
        <Characters handleCharacterSelection={handleCharacterSelection} />
      </div>
    </div>
  );
}
