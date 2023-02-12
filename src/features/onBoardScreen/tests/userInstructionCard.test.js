import { render } from "@testing-library/react";
import UserInstructionCard from "../userInstructionCard";

test("UserInstructionCard component is rendered correctly", () => {
  const { container } = render(<UserInstructionCard />);

  expect(container).toMatchSnapshot();
});
