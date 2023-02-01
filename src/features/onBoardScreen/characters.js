export default function Characters({
  handleCharacterSelection = null,
  componentNeededFor = null,
}) {
  const characters = [
    {
      difficultyLevel: "easy",
      src: "https://res.cloudinary.com/du3oueesv/image/upload/v1672759163/Where%27s%20Waldo/cacodemon.1dad269c_ajnuga.png",
      alt: "cacodemon",
      name: "Cacodemon",
      reference: "Doom",
    },
    {
      difficultyLevel: "medium",
      src: "https://res.cloudinary.com/du3oueesv/image/upload/v1672759181/Where%27s%20Waldo/bill-cipher.1e7e0fc4_jfln6r.png",
      alt: "bill cipher",
      name: "Bill Cipher",
      reference: "Gravity Falls",
    },
    {
      difficultyLevel: "hard",
      src: "https://res.cloudinary.com/du3oueesv/image/upload/v1672759200/Where%27s%20Waldo/courage.200fe7a8_jkf3vs.png",
      alt: "courage",
      name: "Courage",
      reference: "Courage the Cowardly Dog",
    },
  ];

  return (
    <>
      {componentNeededFor !== "selector" ? (
        <div>
          {characters.map((character) => {
            return (
              <div
                key={character.name}
                className="mb-3 flex w-full flex-col lg:m-4"
              >
                <p
                  className={`self-end ${
                    (character.difficultyLevel === "hard" && "text-red-600") ||
                    (character.difficultyLevel === "medium" &&
                      "text-yellow-600") ||
                    (character.difficultyLevel === "easy" && "text-green-600")
                  }`}
                >
                  {character.difficultyLevel}
                </p>
                <div className="flex gap-4 lg:gap-8">
                  <img
                    src={character.src}
                    alt={character.alt}
                    className="h-12 w-12 lg:h-16 lg:w-16"
                  ></img>
                  <div className="text-center">
                    <h4>{character.name}</h4>
                    <span>{character.reference}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {characters.map((character) => (
            <h4
              key={character.name}
              className="cursor-pointer"
              onClick={() => handleCharacterSelection(character.name)}
            >
              {character.name}
            </h4>
          ))}
        </div>
      )}
    </>
  );
}
