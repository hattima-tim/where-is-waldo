import Characters from "../onBoardScreen/characters";

export default function CharacterSelector({ location }) {
  return (
    <div className="flex" style={location}>
      <img
        src="https://res.cloudinary.com/du3oueesv/image/upload/v1673284323/Where%27s%20Waldo/Where_s_Waldo_dot_k9q85x-media_lib_thumb_i9xieg.png"
        alt="targetCircle"
        className="max-h-16 w-16"
      ></img>

      <div className="z-10 w-72 rounded-md bg-[#17134d] p-4 text-white transition-all">
        <Characters />
      </div>
    </div>
  );
}
