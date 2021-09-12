import { useEffect,useRef,FC} from 'react';
 

function FocusInput() {

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    return(
        <div>
            <input type="text" placeholder="aa" />
            <input ref={inputRef} type="text" placeholder="bb"/>
            <input type="text" placeholder="cc" />
        </div>
    )
}

export default FocusInput