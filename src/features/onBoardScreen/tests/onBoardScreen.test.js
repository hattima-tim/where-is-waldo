import { render } from "@testing-library/react";
import OnBoardScreen from "../onBoardScreen";

jest.mock('../character',()=>({characterName})=>{
    return <p>{characterName}</p>
});

jest.mock('../userInstructionCard',()=>()=>{
    return <p>User Instruction Card</p>
})

test('renders onBoardScreen correctly',()=>{
    const {container} = render(<OnBoardScreen/>);

    expect(container).toMatchSnapshot();
})