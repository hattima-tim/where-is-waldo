export default function Characters({
  handleCharacterSelection = null,
  componentNeededFor = null,
}) {
  const characters = [
    {
      src: "https://res.cloudinary.com/du3oueesv/image/upload/v1672759163/Where%27s%20Waldo/cacodemon.1dad269c_ajnuga.png",
      alt: "cacodemon",
      name: "Cacodemon",
      reference: "Doom",
    },
    {
      src: "https://res.cloudinary.com/du3oueesv/image/upload/v1672759181/Where%27s%20Waldo/bill-cipher.1e7e0fc4_jfln6r.png",
      alt: "bill cipher",
      name: "Bill Cipher",
      reference: "Gravity Falls",
    },
    {
      src: "https://res.cloudinary.com/du3oueesv/image/upload/v1672759200/Where%27s%20Waldo/courage.200fe7a8_jkf3vs.png",
      alt: "courage",
      name: "Courage",
      reference: "Courage the Cowardly Dog",
    },
  ];

  return (
    <>
      {componentNeededFor !== "selector" ? (
        <div className="flex gap-2 md:gap-4">
          {characters.map((character) => {
            return (
              <div
                key={character.name}
                className="relative w-1/2 rounded-xl border border-gray-100 p-4 shadow-xl md:p-8"
              >
                <div className="mt-4">
                  <img
                    className="h-12 w-12 md:h-20 md:w-20"
                    src={character.src}
                    alt={character.alt}
                  ></img>

                  <h3 className="mt-4 text-sm font-bold text-white md:text-xl">
                    {character.name}
                  </h3>

                  <span className="mt-2 hidden text-sm text-gray-500 sm:block">
                    {character.reference}
                  </span>
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
