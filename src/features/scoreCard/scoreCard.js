export default function ScoreCard() {

  return (
    <div className="absolute z-50  flex h-full w-full items-center justify-center">
      <div className="flex items-center justify-around rounded-2xl bg-white p-12 sm:w-11/12 lg:w-1/2">
        <div>
          <h1 className="bold text-3xl">High Scores</h1>
          <ol className="m-4 list-decimal">
            <li>EWW 00:00:00</li>
            <li>EWW 00:00:00</li>
            <li>EWW 00:00:00</li>
            <li>EWW 00:00:00</li>
            <li>EWW 00:00:00</li>
            <li>EWW 00:00:00</li>
            <li>EWW 00:00:00</li>
            <li>EWW 00:00:00</li>
            <li>EWW 00:00:00</li>
            <li>EWW 00:00:00</li>
          </ol>
        </div>
        <div className="flex gap-4 flex-col items-center">
          <h2 className="bold text-3xl">Time</h2>
          <p className="bold text-2xl">2:3:4</p>
          <button className="rounded-full bg-gradient-to-r from-[#2a2c80] via-[#fd1d1d] to-[#fcb045] py-3 px-6 font-bold uppercase text-white transition-transform duration-300 ease-in-out hover:scale-110">
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
