import {screen,render,fireEvent} from '@testing-library/react';
import Counter from './Counter';
test('check initial value-0', () => { 
    const {getByTestId} =render(<Counter initialValue={0}/>);
    const count= getByTestId("count").textContent;

    expect(Number(count)).toEqual(0)

 });
 test("check counter onclick",()=>{
     const {getByTestId,getByRole} = render(<Counter initialValue={0}/>)
     const count=getByTestId("count").textContent;
     expect(Number(count)).toEqual(0);
     const incrementBtn= getByRole("button",{name:"Increment Counter"});
     
     fireEvent.click(incrementBtn);
     const countInc=getByTestId("count").textContent;
     expect(Number(countInc)).toEqual(1);
 });
