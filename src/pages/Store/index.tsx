import { FilterBar } from '../../components/FilterBar';
import { ProductList } from '../../components/ProductList';
import { Container } from '../../../shared/pages/Store/styles';

export default function Store() {
    return (
        <Container>
            <FilterBar />
            <ProductList />
        </Container>
    );
}
