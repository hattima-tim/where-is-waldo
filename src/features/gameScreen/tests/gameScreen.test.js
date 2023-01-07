import { render, screen } from "@testing-library/react";
import GameScreen from "../gameScreen";

test("GameScreen is rendered correctly", () => {
  const { container } = render(<GameScreen />);

  expect(container).toMatchSnapshot();
});
