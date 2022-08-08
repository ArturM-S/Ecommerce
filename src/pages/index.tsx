import Link from 'next/link';
import { Content, HomeText } from '../../shared/styles';

export default function Home() {
    return (
        <Content>
            <HomeText>Welcome to Ecommerce challenger!</HomeText>
            <Link href="/Store">to sales</Link>
        </Content>
    );
}
