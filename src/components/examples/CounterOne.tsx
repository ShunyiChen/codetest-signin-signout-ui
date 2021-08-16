import { useReducer, FC } from 'react';
import { Button } from 'antd';

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
           return state + 1
        case 'decrement':
           return state - 1;
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
            <div>Count = {count}</div>
            <Button onClick={()=>{dispatch('increment')}}>Increment</Button>
            <Button onClick={()=>{dispatch('decrement')}}>Decrement</Button>
            <Button onClick={()=>{dispatch('reset')}}>Reset</Button>
        </div>
    )
}
export default Main