import UserInstructionCard from "./userInstructionCard";

export default function OnBoardScreen({ startTheGame }) {
  return (
    <div className="fixed z-10 flex h-full w-full flex-col items-center justify-center gap-6 bg-[rgba(0,0,0,0.9)] lg:p-20">
      <h1 className="mt-8 text-lg font-bold text-white">Where's Waldo</h1>
      <p className="text-white">Find these characters on universe 113!</p>
      <UserInstructionCard startTheGame={startTheGame} />
    </div>
  );
}
