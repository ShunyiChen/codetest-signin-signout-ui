import {useState} from "react";
import { Form,Input } from 'antd';

function HookCounterThree() {

    const [name,setName] = useState({firstName: '', lastName: ''});


    return (
        <>
            <Form>
                {/* <Input value={name.firstName} onChange={e => setName({firstName: e.target.value, lastName: name.lastName})}></Input>
                <Input value={name.lastName} onChange={e=> setName({firstName: name.firstName, lastName: e.target.value})}></Input> */}

                <Input value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}></Input>
                <Input value={name.lastName} onChange={e=> setName({...name, lastName: e.target.value})}></Input>

                <h2>Your first name is: {name.firstName}</h2>
                <h2>Your last name is: {name.lastName}</h2>
            </Form>
        </>
    );
}


export default HookCounterThree