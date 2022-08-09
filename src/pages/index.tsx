import Link from 'next/link';
import { Content, HomeText } from '../../shared/styles';

export default function Home() {
    return (
        <Content>
            <HomeText>Welcome to Ecommerce challenger!</HomeText>
            <span
                style={{
                    backgroundColor: 'lightgreen',
                    borderRadius: '5px',
                    padding: '8px',
                    textAlign: 'center',
                }}
            >
                <Link href="/Store">
                    <h1 style={{ cursor: 'pointer' }}>Comprar</h1>
                </Link>
            </span>
        </Content>
    );
}
