import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { toMatchDiffSnapshot } from "snapshot-diff";
import GameScreen from "../gameScreen";

expect.extend({ toMatchDiffSnapshot });

test("GameScreen is rendered correctly", () => {
  const { container } = render(
    <GameScreen
      selectionResult={""}
      setSelectionResult={""}
      selectedCharactersLocations={[]}
      setSelectedCharactersLocations={() => {}}
      handleSeeScoreboardBtnClick={() => {}}
      headerHeight={100}
      gameImgWidth={100}
      gameImgHeight={100}
      startTheGame={() => {}}
      ref={{ current: null }}
    />
  );

  expect(container).toMatchSnapshot();
});

jest.mock("../../sharedComponents/characters", () => () => {
  return (
    <>
      <p>Cacodemon</p>
      <p>Bill Cipher</p>
      <p>Courage</p>
    </>
  );
});

test("clicking on gameImage shows character selector", async () => {
  const user = userEvent.setup();
  const { asFragment } = render(
    <GameScreen
      selectionResult={""}
      setSelectionResult={() => {}}
      selectedCharactersLocations={[]}
      setSelectedCharactersLocations={() => {}}
      handleSeeScoreboardBtnClick={() => {}}
      headerHeight={100}
      gameImgWidth={100}
      gameImgHeight={100}
      startTheGame={() => {}}
      ref={{ current: null }}
    />
  );
  const firstRender = asFragment();

  const gameImage = screen.getByAltText("universe-113");

  await user.click(gameImage);

  expect(firstRender).toMatchDiffSnapshot(asFragment());
});
