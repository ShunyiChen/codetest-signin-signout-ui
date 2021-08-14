import { useState,useEffect } from "react";
import { Button,Input } from 'antd';
import HookMouse from './HookMouse';

export default function MouseContainer() {


    const [display, setDisplay] = useState(true);

 
    return (

            <div>   
                <Button onClick={() => setDisplay(!display)}>Toggle display</Button>
                {display && <HookMouse/>}
            </div>

    );
}