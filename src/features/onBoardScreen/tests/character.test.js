import { render } from "@testing-library/react";
import Characters from "../characters";

test("Character component is rendered correctly", () => {
  const { container } = render(
    <Characters />
  );

  expect(container).toMatchSnapshot();
});
