import {useState} from "react";
import { Button } from 'antd';


function HookCounterFour() {

    const optArry: any[] = []

    const [items, setItems] = useState(optArry);


    const addItem = () => {

        setItems([ ...items, {
            id: items.length, 
            value: Math.floor(Math.random() * 10 ) + 1
        }])
    }

    return (
            <div>
                <Button onClick = {addItem}>Add a number</Button>
                <Button onClick = {() => {setItems(optArry)}}>clear</Button>
                <ul>
                    {
                        items.map(item => (
                            <li key={item.id}>{item.value}</li>
                        ))
                    }
                </ul>
            </div>
    );

}


export default HookCounterFour