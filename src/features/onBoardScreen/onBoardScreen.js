import UserInstructionCard from "./userInstructionCard";

export default function OnBoardScreen() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-black">
      <h1 className="mt-8 text-lg font-bold text-white">Where's Waldo</h1>
      <p className="text-white">Find these characters on universe 113!</p>
      <UserInstructionCard />
    </div>
  );
}
