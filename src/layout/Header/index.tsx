import { Container, Menu } from './styles';

export function Header() {
    return (
        <Container>
            <Menu>
                <a href="/">Inicio</a>
                <a href="/Store">Loja</a>
                <a href="/Cart">Cart</a>
            </Menu>
        </Container>
    );
}
