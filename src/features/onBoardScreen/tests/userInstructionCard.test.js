import { render } from "@testing-library/react";
import UserInstructionCard from "../userInstructionCard";

jest.mock('../character',()=>({characterName})=>{
  return <p>{characterName}</p>
});

test('UserInstructionCard component is rendered correctly',()=>{
  const {container} = render(<UserInstructionCard/>);

  expect(container).toMatchSnapshot();
})