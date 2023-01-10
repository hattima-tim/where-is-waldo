import { render } from "@testing-library/react";
import UserInstructionCard from "../userInstructionCard";

jest.mock("../characters", () => () => {
  return (
    <>
      <p>Cacodemon</p>
      <p>Bill Cipher</p>
      <p>Courage</p>
    </>
  );
});

test("UserInstructionCard component is rendered correctly", () => {
  const { container } = render(<UserInstructionCard />);

  expect(container).toMatchSnapshot();
});
