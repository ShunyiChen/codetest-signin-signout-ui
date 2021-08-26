import React,{ useReducer,FC} from 'react';
import { Button } from 'antd'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const CountContext = React.createContext({});

const initValue = {
    firstValue : 1,
    secondValue : 2
};


const Main: FC<{}> = () => {

    const reducer = (state, action) => {
        switch(action.type) {
            case 'increment': 
                return {...state, firstValue: state.firstValue + action.v}
            case 'decrement':
                return {...state, firstValue: state.firstValue - action.v}
            case 'increment2': 
                return {...state, secondValue: state.secondValue + action.v}
            case 'decrement2':
                return {...state, secondValue: state.secondValue - action.v}
            case 'reset':
                return initValue
            default:
                return state
        }
    }

    const [count, dispatch] = useReducer(reducer, initValue)
    const [count2, dispatch2] = useReducer(reducer, initValue)

    return (
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
            <div>
                Count - {count}
                <ComponentA></ComponentA>
                <ComponentB></ComponentB>
                <ComponentC></ComponentC>
            </div>
        </CountContext.Provider>



        // <div>
        //      {/* <div> Value = {count.firstValue}</div>
        //     <div> Value = {count2.secondValue}</div>
        //     <Button onClick={() =>dispatch({v: 1, type: 'increment'})}>Increment</Button>
        //     <Button onClick={() =>dispatch({v: 1, type: 'decrement'})}>Decrement</Button>
        //     <Button onClick={() =>dispatch2({v: 2, type: 'increment2'})}>Increment2</Button>
        //     <Button onClick={() =>dispatch2({v: 2, type: 'decrement2'})}>Decrement2</Button>
        //     <Button onClick={() =>dispatch({v: 1, type: 'reset'})}>Reset</Button> */}



            // <ComponentA></ComponentA>
            // <ComponentB></ComponentB>
            // <ComponentC></ComponentC>
        // </div>
    )
}
export default Main