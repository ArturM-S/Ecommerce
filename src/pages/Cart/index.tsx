import { Container } from '../../../shared/pages/Cart/styles';
import { useCart } from '../../service/hooks/useCart';

export default function Cart() {
    const { cart } = useCart();

    const total = cart.items.reduce((sumTotal, product) => {
        // eslint-disable-next-line no-return-assign, no-param-reassign
        return (sumTotal += product.price);
    }, 0);

    return (
        <>
            {total}
            {cart.items.map(item => (
                <Container key={item.id}>{item.id}</Container>
            ))}
        </>
    );
}
