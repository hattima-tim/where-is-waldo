export default function Characters() {
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
    <div>
      {characters.map((character) => {
        return (
          <div className="flex w-full flex-col">
            <p className="self-end">{character.difficultyLevel}</p>
            <div className="flex gap-4">
              <img
                src={character.src}
                alt={character.alt}
                className="w-8"
              ></img>
              <div>
                <h4>{character.name}</h4>
                <p>{character.reference}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
