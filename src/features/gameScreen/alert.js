export default function Alert({
  location,
  selectionResult,
  handleAlertRemoval,
}) {
  let alertType = "singleSuccess";
  if (selectionResult === "Wrong! Try again.") alertType = "failure";
  if (selectionResult === "You have selected all characters!")
    alertType = "gameFinished";

  return (
    <>
      {alertType === "failure" && (
        <div
          role="alert"
          className="flex gap-4 rounded border-l-4 border-red-500 bg-red-50 p-4"
          style={location}
        >
          <p className="text-sm text-red-700">{selectionResult}</p>
          <button
            className="text-gray-500 transition hover:text-gray-600"
            onClick={handleAlertRemoval}
          >
            <span className="sr-only">Dismiss popup</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {alertType === "singleSuccess" && (
        <div
          role="alert"
          className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
          style={location}
        >
          <div className="flex items-start gap-4">
            <span className="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>

            <div className="flex-1">
              <strong className="block font-medium text-gray-900">
                {" "}
                Correct!{" "}
              </strong>

              <p className="mt-1 text-sm text-gray-700">{selectionResult}</p>
            </div>

            <button
              className="text-gray-500 transition hover:text-gray-600"
              onClick={handleAlertRemoval}
            >
              <span className="sr-only">Dismiss popup</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {alertType === "gameFinished" && (
        <div
          role="alert"
          className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
          style={location}
        >
          <div className="flex items-start gap-4">
            <span className="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>

            <div className="flex-1">
              <strong className="block font-medium text-gray-900">
                {" "}
                Congratulations!{" "}
              </strong>

              <p className="mt-1 text-sm text-gray-700">{selectionResult}</p>
              
              <button className="inline-flex mt-2 items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
                <span className="text-sm"> See Scoreboard </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </button>
            </div>

            <button
              className="text-gray-500 transition hover:text-gray-600"
              onClick={handleAlertRemoval}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
