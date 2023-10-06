import { InputHTMLAttributes } from "react";

import { PaymentMethodsContainer } from "./PaymentMethodsStyles";

export interface PaymentMethod {
    id: number;
    description: string;
    icon: string
}

interface PaymentMethodsProps extends InputHTMLAttributes<HTMLInputElement> {
    data: PaymentMethod[]
}

export function PaymentMethods({ data, ...props }: PaymentMethodsProps) {
    return (
        <PaymentMethodsContainer>
            {data?.map((element: PaymentMethod) => (
                <div key={element.id}>
                    <input
                        {...props}
                        id={`payment-method-${element.id}`}
                        type='radio'
                        name='payment-methods'
                    />

                    <label htmlFor={`payment-method-${element.id}`}>
                        <i className={element.icon} />
                        {element.description.toLocaleUpperCase()}
                    </label>
                </div>
            ))}
        </PaymentMethodsContainer>
    )
}
