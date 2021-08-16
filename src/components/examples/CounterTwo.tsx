import { useReducer, FC } from 'react';
import { Button } from 'antd';

const initialState = {
    firstCounter: 0,
    secondCounter: 2
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
           return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
           return {...state, firstCounter: state.firstCounter - action.value};
        case 'increment2':
           return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
           return {...state, secondCounter: state.secondCounter - action.value};
        case 'reset':
            return initialState
        default:
            return state
    }

}


const Main: FC = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>FirstCounter = {count.firstCounter}</div>
            <div>SecondCounter = {count.secondCounter}</div>

            <Button onClick={()=>{dispatch({type: 'increment', value: 1})}}>Increment1</Button>
            <Button onClick={()=>{dispatch({type: 'decrement', value: 1})}}>Decrement1</Button>
            <Button onClick={()=>{dispatch({type: 'increment2', value: 6})}}>Increment6</Button>
            <Button onClick={()=>{dispatch({type: 'decrement2', value: 6})}}>Decrement6</Button>
            <Button onClick={()=>{dispatch({type: 'reset'})}}>Reset</Button>
        </div>
    )
}
export default Main