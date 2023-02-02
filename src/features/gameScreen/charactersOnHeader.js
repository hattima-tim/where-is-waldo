export default function CharactersOnHeader() {
  return (
    <div className="flex items-center gap-2 lg:gap-4">
      <div className={`flex flex-col items-center gap-1`}>
        <img
          src={
            "https://res.cloudinary.com/du3oueesv/image/upload/v1672759163/Where%27s%20Waldo/cacodemon.1dad269c_ajnuga.png"
          }
          alt="Cacodemon"
          className="h-7 w-7 lg:h-10 lg:w-10"
        ></img>
        <span className="text-xs text-white lg:text-sm">Cacodemon</span>
      </div>

      <div className={`flex flex-col items-center gap-1`}>
        <img
          src={
            "https://res.cloudinary.com/du3oueesv/image/upload/v1672759181/Where%27s%20Waldo/bill-cipher.1e7e0fc4_jfln6r.png"
          }
          alt="Bill Cipher"
          className="h-7 w-7 lg:h-10 lg:w-10"
        ></img>
        <span className="text-xs text-white lg:text-sm">Bill Cipher</span>
      </div>

      <div className={`flex flex-col items-center gap-1`}>
        <img
          src={
            "https://res.cloudinary.com/du3oueesv/image/upload/v1672759200/Where%27s%20Waldo/courage.200fe7a8_jkf3vs.png"
          }
          alt="Courage"
          className="h-7 w-7 lg:h-10 lg:w-10"
        ></img>
        <span className="text-xs text-white lg:text-sm">Courage</span>
      </div>
    </div>
  );
}
