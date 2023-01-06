export default function Character({
  difficultyLevel,
  src,
  alt,
  characterName,
  reference,
}) {
  return (
    <div className="flex w-full flex-col">
      <p className="self-end">{difficultyLevel}</p>
      <div className="flex gap-4">
        <img src={src} alt={alt} className="w-8"></img>
        <div>
          <h4>{characterName}</h4>
          <p>{reference}</p>
        </div>
      </div>
    </div>
  );
}
