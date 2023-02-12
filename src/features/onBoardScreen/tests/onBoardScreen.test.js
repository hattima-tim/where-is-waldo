import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OnBoardScreen from "../onBoardScreen";
import App from "../../../App";

jest.mock("../../sharedComponents/characters", () => () => {
  return (
    <>
      <p>Cacodemon</p>
      <p>Bill Cipher</p>
      <p>Courage</p>
    </>
  );
});

jest.mock("../userInstructionCard", () => ({ setIsGameOn }) => {
  return (
    <div>
      <p>User Instruction Card</p>;
      <button
        onClick={() => {
          setIsGameOn(true);
        }}
      >
        Start
      </button>
    </div>
  );
});

test("renders onBoardScreen correctly", () => {
  const { container } = render(<OnBoardScreen />);

  expect(container).toMatchSnapshot();
});

test("clicking start button remove the OnBoardScreen", async () => {
  const user = userEvent.setup();
  render(<App />);
  const onBoardScreenInstruction = screen.getByText(
    "Find these characters on universe 113!"
  );

  const startBtn = screen.getByRole("button", { name: "Continue" });
  await user.click(startBtn);

  expect(onBoardScreenInstruction).not.toBeInTheDocument();
});
