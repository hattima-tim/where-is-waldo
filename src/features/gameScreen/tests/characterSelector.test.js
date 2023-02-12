import { render } from "@testing-library/react";
import CharacterSelector from "../characterSelector";

jest.mock("../../sharedComponents/characters", () => () => {
  return (
    <>
      <p>Cacodemon</p>
      <p>Bill Cipher</p>
      <p>Courage</p>
    </>
  );
});

test("CharacterSelector component renders correctly", () => {
  const { container } = render(<CharacterSelector />);

  expect(container).toMatchSnapshot();
});
