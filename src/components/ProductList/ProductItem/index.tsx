import { useEffect, useState } from 'react';
import { Container, ProductImg, ProductName, ProductPrice } from './styles';

export function ProductItem() {
    const [eletronics, setEletronics] = useState([]);
    const [cart, setCart] = useState([]);
    fetch('https://fakestoreapi.com/products/category/electronics?limit=5')
        .then(res => res.json())
        .then(json => setEletronics(json));
    console.log(eletronics);

    const addCart = () =>
        fetch('https://fakestoreapi.com/carts', {
            method: 'POST',
            body: JSON.stringify({
                products: [{ eletronics }],
            }),
        })
            .then(res => res.json())
            .then(json => console.log(json));

    return (
        <>
            {eletronics.map(eletronic => (
                <Container key={eletronic.id} onClick={addCart}>
                    <ProductImg src={eletronic.image} alt={eletronic.title} />
                    <ProductName to={`/product/${eletronic.id}`}>
                        {eletronic.title}
                    </ProductName>
                    <ProductPrice>R$:{eletronic.price},00</ProductPrice>
                </Container>
            ))}
        </>
    );
}
