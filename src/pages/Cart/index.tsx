import { useState } from 'react';
import { Container } from '../../../shared/pages/Cart/styles';

export default function Cart() {
    const [items, setItems] = useState([]);
    fetch('https://fakestoreapi.com/carts')
        .then(res => res.json())
        .then(json => setItems(json));

    return (
        <>
            {items.map(item => (
                <Container key={item.id}>{item.id}</Container>
            ))}
        </>
    );
}
