import { useState, useEffect } from "react";
import { InputHTMLAttributes } from "react";
import { CounterContainer } from "./CounterStyles";
import { Minus, Plus } from "phosphor-react";

interface CounterProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: number;
}

export function Counter({ value = 0, ...props }: CounterProps) {
    const [count, setCount] = useState(value);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
        }
    };

    useEffect(() => {
        setCount(value);
    }, [value]);

    return (
        <CounterContainer>
            <Minus weight="bold" size={14} onClick={decrement} />
            <input {...props} type="number" value={count} readOnly />
            <Plus weight="bold" size={14} onClick={increment} />
        </CounterContainer>
    );
}
