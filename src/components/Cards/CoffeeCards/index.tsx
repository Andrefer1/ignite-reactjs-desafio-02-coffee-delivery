import { Counter } from "../../Inputs";
import { Button } from "../../Buttons";

import { CoffeeCardsContainer } from './CoffeeCardsStyles'
import { Trash } from "phosphor-react";

export interface CoffeeCard {
    id: number;
    image: string
    price: number
    quantityItems: number
    title: string
}

interface CoffeeCardsProps {
    cards: CoffeeCard[]
}

export function CoffeeCards(props: CoffeeCardsProps) {
    return (
        <CoffeeCardsContainer>
            {props.cards.map((card: CoffeeCard) => (
                <div key={card.id} className='card'>
                    <div className="coffee">
                        <img
                            src={card.image}
                            alt={`
                                Imagem do café ${card.title} dentro de uma 
                                xícara e um prato branco por baixo.
                            `}
                        />

                        <div>
                            <div className="title medium">{card.title}</div>

                            <div className='buttons'>
                                <Counter value={card.quantityItems} />
                                <Button className="secondary">
                                    <Trash /> Remover
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="price medium">
                        R$ {card.price}
                    </div>
                </div>
            ))}
        </CoffeeCardsContainer>
    );
}