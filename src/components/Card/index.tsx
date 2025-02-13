import formatCurrency from "../../utils/formatCurrency";

interface CardProps {
    img?: string;
    altImg?: string;
    title: string;
    description?: string;
    price: number | null | undefined;
    currency?: string;
    handleAdd: () => void;
    handleRemove: () => void;
}

export function Card({
    price,
    title,
    altImg,
    description,
    img,
    currency,
    handleAdd,
    handleRemove,
}: CardProps) {
    return (
        <section>
            <header>
                <img src={img} alt={altImg} width={300} />
            </header>
            <main>
                <h3>{title}</h3>
                <p>{description}</p>
            </main>
            <footer>
                <small>
                    {formatCurrency(
                        "pt-BR",
                        {
                            style: "currency",
                            currency,
                        },
                        Number(price)
                    )}
                </small>
                <button onClick={handleAdd}>Adicionar no carrinho</button>
                <button onClick={handleRemove}>Remover no carrinho</button>
            </footer>
        </section>
    );
}
