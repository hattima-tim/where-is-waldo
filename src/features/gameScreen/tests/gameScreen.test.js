import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { async } from "q";
import { toMatchDiffSnapshot } from "snapshot-diff";
import GameScreen from "../gameScreen";

expect.extend({ toMatchDiffSnapshot });

test("GameScreen is rendered correctly", () => {
  const { container } = render(<GameScreen />);

  expect(container).toMatchSnapshot();
});

jest.mock("../../onBoardScreen/characters", () => () => {
  return (
    <>
      <p>Cacodemon</p>
      <p>Bill Cipher</p>
      <p>Courage</p>
    </>
  );
});

test("clicking the circle with 3 written in it, shows a tooltip of characters", async () => {
  const user = userEvent.setup();
  const { asFragment } = render(<GameScreen />);
  const firstRender = asFragment();

  const circle = screen.getByText(/3/i);
  await user.click(circle);

  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

test("clicking on gameImage shows character selector", async () => {
  const user = userEvent.setup();
  const { asFragment } = render(<GameScreen />);
  const firstRender = asFragment();
  const gameImage = screen.getByRole("img");

  await user.click(gameImage);

  expect(firstRender).toMatchDiffSnapshot(asFragment());
});
