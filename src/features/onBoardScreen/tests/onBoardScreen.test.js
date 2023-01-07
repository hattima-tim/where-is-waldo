import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OnBoardScreen from "../onBoardScreen";

jest.mock("../character", () => ({ characterName }) => {
  return <p>{characterName}</p>;
});

jest.mock("../userInstructionCard", () => ({setIsGameOn}) => {
  return (
    <div>
      <p>User Instruction Card</p>;
      <button onClick={()=>{setIsGameOn(true)}}>Start</button>
    </div>
  )
  
});

test("renders onBoardScreen correctly", () => {
  const { container } = render(<OnBoardScreen />);

  expect(container).toMatchSnapshot();
});

test('clicking start button remove the OnBoardScreen',async()=>{
  const user = userEvent.setup()
  render(<OnBoardScreen/>);
  const onBoardScreenHeader = screen.getByRole('heading',{name:"Where's Waldo"})

  const startBtn = screen.getByRole('button',{name:"Start"});
  await user.click(startBtn);

  expect(onBoardScreenHeader).not.toBeInTheDocument();
})