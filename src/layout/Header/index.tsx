import Link from 'next/link';
import { BsCart4 } from 'react-icons/bs';
import { useCart } from '../../service/hooks/useCart';
import { CartContainer, Container, ItemsCount, Menu } from './styles';

export function Header() {
    const { cart } = useCart();
    const cartSize = cart?.items ? cart.items.length : 0;

    return (
        <Container>
            <Menu>
                <Link href="/">Inicio</Link>
                <Link href="/Store">Loja</Link>
                <Link href="/Cart">Cart</Link>
            </Menu>
            <CartContainer>
                <BsCart4 size={24} color="white" />
                <ItemsCount>{cartSize}</ItemsCount>
            </CartContainer>
        </Container>
    );
}
