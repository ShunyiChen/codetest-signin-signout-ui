import React,{ useState } from 'react';
import ligthOn from './lightOn.png';
import lightOff from './lightOff.png';

export default function Bulbs() {
    const [on, setOn] = useState(false);
    const [count, setCount] = useState(1);
    
    const lightSwitch = () => setOn(on => !on);
    const addBulbs = () => setCount(count => count + 1);

    const bulb = <img src={on ? ligthOn : lightOff} />;
    const bulbs = Array(count).fill(bulb);

    return (
        <>
             <div>{bulbs}</div>
             <button onClick={lightSwitch}>开灯/关灯</button>
             <button onClick={addBulbs}>添加灯泡</button>
        </>
    );
}


