import { Tags } from "../../Tags";
import { Counter } from "../../Inputs";
import { ShoppingCartSimpleComponent } from "../../Buttons";

import { CoffeeCatalogsContainer } from './CoffeeCatalogsStyles'

export interface CoffeeCatalogs {
    id: number;
    image: string
    price: number
    quantityItems: number
    subtitle: string
    tags: string[];
    title: string
}

export interface CoffeeCatalogsProps {
    catalogs: CoffeeCatalogs[]
}

export function CoffeeCatalogs(props: CoffeeCatalogsProps) {
    return (
        <CoffeeCatalogsContainer>
            {props.catalogs.map((card: CoffeeCatalogs) => (
                <div key={card.id} className="catalog">
                    <header>
                        <img
                            src={card.image}
                            alt={`
                                Imagem do café ${card.title} dentro de uma 
                                xícara e um prato branco por baixo.
                            `}
                        />

                        <Tags tags={card.tags} />
                    </header>

                    <main>
                        <h4>{card.title}</h4>

                        <p className='small'>{card.subtitle}</p>
                    </main>

                    <footer>
                        <div className="price small">
                            R$
                            <h3>
                                {card.price.toLocaleString('pt-BR')}
                            </h3>
                        </div>

                        <div className="cart">
                            <Counter value={card.quantityItems} />
                            <ShoppingCartSimpleComponent onClick={() => { }} />
                        </div>
                    </footer>
                </div>
            ))}
        </CoffeeCatalogsContainer>
    );
}