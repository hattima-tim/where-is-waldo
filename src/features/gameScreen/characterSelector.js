import Characters from "../onBoardScreen/characters";

export default function CharacterSelector({ location, handleCharacterSelection}) {
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
