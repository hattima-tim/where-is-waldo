import Character from "./character";

export default function UserInstructionCard({setIsGameOn}) {
  return (
    <div className="flex w-11/12 border bg-white lg:w-3/5">
      <img
        src="https://res.cloudinary.com/du3oueesv/image/upload/v1672759136/Where%27s%20Waldo/universe-113.0d4fe7c1_pfzqhw.jpg"
        alt="universe-113"
        className="w-1/2"
      ></img>
      <div className="flex flex-col items-center gap-4 p-4">
        <h2>Universe 113</h2>
        <p>by Egor Klyuchnyk</p>
        <Character
          difficultyLevel={"easy"}
          src={
            "https://res.cloudinary.com/du3oueesv/image/upload/v1672759163/Where%27s%20Waldo/cacodemon.1dad269c_ajnuga.png"
          }
          alt={"cacodemon"}
          characterName={"Cacodemon"}
          reference={"Doom"}
        />

        <Character
          difficultyLevel={"medium"}
          src={
            "https://res.cloudinary.com/du3oueesv/image/upload/v1672759181/Where%27s%20Waldo/bill-cipher.1e7e0fc4_jfln6r.png"
          }
          alt={"bill cipher"}
          characterName={"Bill Cipher"}
          reference={"Gravity Falls"}
        />

        <Character
          difficultyLevel={"hard"}
          src={
            "https://res.cloudinary.com/du3oueesv/image/upload/v1672759200/Where%27s%20Waldo/courage.200fe7a8_jkf3vs.png"
          }
          alt={"courage"}
          characterName={"Courage"}
          reference={"Courage the Cowardly Dog"}
        />

        <button 
          className="rounded-full bg-gradient-to-r from-[#2a2c80] via-[#fd1d1d] to-[#fcb045] py-2 px-4 font-bold uppercase text-white transition-transform duration-300 ease-in-out hover:scale-110"
          onClick={()=>setIsGameOn(true)}
          >
          Start
        </button>
      </div>
    </div>
  );
}
