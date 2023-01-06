import { render } from "@testing-library/react";
import Character from "../character";

test("Character component is rendered correctly", () => {
  const { container } = render(
    <Character
      difficultyLevel={"easy"}
      src={
        "https://res.cloudinary.com/du3oueesv/image/upload/v1672759163/Where%27s%20Waldo/cacodemon.1dad269c_ajnuga.png"
      }
      alt={"cacodemon"}
      characterName={"Cacodemon"}
      reference={"Doom"}
    />
  );

  expect(container).toMatchSnapshot();
});
