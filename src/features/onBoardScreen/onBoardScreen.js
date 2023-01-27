import UserInstructionCard from "./userInstructionCard";

export default function OnBoardScreen({isGameOn,setIsGameOn}) {
  return isGameOn ? null : (
    <div className="fixed h-full lg:p-20 z-10 flex w-full flex-col items-center justify-center gap-6 bg-[rgba(0,0,0,0.9)]">
      <h1 className="mt-8 text-lg font-bold text-white">Where's Waldo</h1>
      <p className="text-white">Find these characters on universe 113!</p>
      <UserInstructionCard setIsGameOn={setIsGameOn} />
    </div>
  );
}
