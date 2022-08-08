import { Content, HomeText } from '../../shared/styles';
import { Button } from '../components/Global/Button';

export default function Home() {
    return (
        <Content>
            <HomeText>Welcome to Ecommerce challenger!</HomeText>
            <a href="/Store">
                <Button />
            </a>
        </Content>
    );
}
