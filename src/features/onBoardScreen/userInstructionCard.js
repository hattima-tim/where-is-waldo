export default function UserInstructionCard({ startTheGame }) {
  return (
    <div className="fixed z-50 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div
        className="rounded-2xl  border border-blue-100 bg-white p-6 shadow-lg lg:w-1/3 lg:p-8"
        role="alert"
      >
        <div className="items-center sm:flex">
          <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-400 text-white">
            <svg
              className="h-3 w-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                fillRule="evenodd"
              />
            </svg>
          </span>

          <p className="mt-3 text-lg font-medium sm:mt-0 sm:ml-3">
            Some Important Info:
          </p>
        </div>

        <ol className="mt-4 list-decimal text-gray-500">
          <li className="m-4">You can select a character by clicking on it.</li>
          <li className="m-4">
            After selecting a character you will see a notification alert at the
            center of the screen. So, if you zoom in on the image, make sure to
            zoom out to see the alert.
          </li>
          <li className="m-4">
            Finish the game as fast as possible. Your finishing time will
            determine your rank on the scoreboard.
          </li>
        </ol>

        <div className="mt-6">
          <button
            className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
            onClick={startTheGame}
          >
            Let's Start
          </button>
        </div>
      </div>
    </div>
  );
}
