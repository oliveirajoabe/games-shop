import { useEffect } from "react";
import { Card } from "../../components/Card";
import { useProduct } from "../../context/ProductContext";

export default function Home() {
    const {
        data,
        error,
        loading,
        handleFetchGetProducts,
        handleAddProductCart,
        handleRemoveProductCart,
    } = useProduct();

    console.log(data);

    useEffect(() => {
        handleFetchGetProducts();
    }, [handleFetchGetProducts]);

    return (
        <div>
            <h1>bom dia</h1>

            <hr />

            {loading && <h2>carregando...</h2>}

            {!error && <h2>Um erro ocorreu... {error}</h2>}

            {!loading &&
                data &&
                data.map((product) => (
                    <Card
                        img={product.images[0]}
                        handleAdd={() => handleAddProductCart(product)}
                        handleRemove={() => handleRemoveProductCart(product)}
                        price={
                            product.default_price &&
                            typeof product.default_price === "object"
                                ? Number(product.default_price.unit_amount)
                                : null
                        }
                        title={product.name}
                        currency={
                            product.default_price &&
                            typeof product.default_price === "object"
                                ? product.default_price.currency // Mantendo como string
                                : undefined // Corrigindo para o tipo esperado
                        }
                    />
                ))}
        </div>
    );
}
