import { ReactNode } from 'react';
import { Header } from './Header';
import { Container, Content } from './styles';

interface AppLayoutProps {
    children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
    return (
        <Container>
            <Header />
            <Content>{children}</Content>
        </Container>
    );
}
