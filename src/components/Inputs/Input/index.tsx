import { InputHTMLAttributes } from "react";

import { InputContainer } from "./InputStyles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export function Input({ label, ...props }: InputProps) {
    return (
        <InputContainer>
            <input {...props} type="text" placeholder={label} />
            {!props.required && <span className='small'>Opcional</span>}
        </InputContainer>
    )
}
