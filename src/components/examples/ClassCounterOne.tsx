import { useState, useEffect } from "react";
import { Button,Input } from 'antd';

function ClassCounterOne() {

    const [name, setName] = useState({firstName: '', lastName: ''});

    const [count, setCount] = useState(0)

/// 有条件限制的useEffact
    useEffect(() => {
        console.log('useEffact - updating document title')
        document.title = `You clicked ${count} times`
    }, [count])

    return (
            <div>
                    <Button onClick={() => {setCount(prevCount =>prevCount + 1)}}>
                            Click {count} times.
                    </Button>
                    <Input value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}></Input>
            </div>
    );
}

export default ClassCounterOne
