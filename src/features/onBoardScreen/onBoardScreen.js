import Characters from "./characters";

export default function OnBoardScreen({ startTheGame }) {
  return (
    <div className="fixed z-20 flex h-full w-full flex-col justify-center gap-6 bg-[#0e0c31] p-2 md:p-8 lg:p-12 lg:px-20">
      <h1 className="text-center text-2xl font-bold text-white">
        Where's <span className="text-red-600"> Waldo</span>
      </h1>

      <p className="text-center text-white">
        Find these characters on universe 113!
      </p>

      <Characters />

      <div className="relative overflow-hidden rounded-xl text-white opacity-90">
        <img
          src="https://res.cloudinary.com/du3oueesv/image/upload/v1672759136/Where%27s%20Waldo/universe-113.0d4fe7c1_pfzqhw.jpg"
          className="h-24 w-full object-cover md:h-full md:w-full"
          alt="universe-113"
        />
      </div>

      <div className="mt-8 flex justify-end">
        <button
          className="inline-flex w-28 cursor-pointer items-center justify-center rounded  bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 px-8 py-3 text-white transition hover:scale-110 focus:outline-none focus:ring"
          onClick={startTheGame}
        >
          <span>Start</span>
        </button>
      </div>
    </div>
  );
}
