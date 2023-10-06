import { ShoppingCartSimple } from "phosphor-react";

import { Button } from "../Button";

import { ShoppingCartSimpleComponentContainer } from "./ShoppingCartSimpleComponentStyles";
import { MouseEventHandler } from "react";

interface ShoppingCartSimpleComponentProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export function ShoppingCartSimpleComponent(props: ShoppingCartSimpleComponentProps) {
    return (
        <ShoppingCartSimpleComponentContainer>
            <Button onClick={props.onClick}>
                <ShoppingCartSimple size={22} weight="fill" />
            </Button>
        </ShoppingCartSimpleComponentContainer>
    )
}
