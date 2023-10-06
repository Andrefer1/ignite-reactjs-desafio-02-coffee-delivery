import { MouseEventHandler } from "react";
import { ShoppingCart } from "phosphor-react";

import { Button } from "../Button";

import { BadgeContainer, ShoppingCartWithBadgeContainer } from "./ShoppingCartWithBadgeStyles";

interface ShoppingCartWithBadgeProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export function ShoppingCartWithBadge(props: ShoppingCartWithBadgeProps) {
    return (
        <ShoppingCartWithBadgeContainer>
            <Button onClick={props.onClick}>
                <ShoppingCart size={22} weight="fill" />
                <BadgeContainer>3</BadgeContainer>
            </Button>
        </ShoppingCartWithBadgeContainer>
    )
}
