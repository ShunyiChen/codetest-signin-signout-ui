import { Button, Tag } from "antd";
import React,{useState} from "react";

function HookCounterTwo() {

    const initVal = 0;
    const [count, setCount] = useState(initVal);

    const incrementFive = () => {
        for(let i=0; i < 5; i++) {
            setCount(a => a + 1);
        }
    }


    return (

        <div>
            <Tag>  Count: {count}  </Tag>

            <Button onClick={()=>{setCount(initVal)}}>Reset</Button>
            <Button onClick={()=>{setCount(prevCount => prevCount + 1)}}>Increment</Button>
            <Button onClick={()=>{setCount(prevCount => prevCount - 1)}}>Decrement</Button>
            <Button onClick={incrementFive}>IncrementFive</Button>
        </div>
           

    );
}

export default HookCounterTwo
