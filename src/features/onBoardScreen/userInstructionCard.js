import Characters from "./character";

export default function UserInstructionCard({ setIsGameOn }) {
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
        <Characters />
        <button
          className="rounded-full bg-gradient-to-r from-[#2a2c80] via-[#fd1d1d] to-[#fcb045] py-2 px-4 font-bold uppercase text-white transition-transform duration-300 ease-in-out hover:scale-110"
          onClick={() => setIsGameOn(true)}
        >
          Start
        </button>
      </div>
    </div>
  );
}
