import { IoTrashOutline } from 'react-icons/io5';
import {
    BuyButton,
    CartImage,
    CartInfo,
    CartItem,
    CartList,
    CartPrice,
    Container,
    RemoveButton,
    Resume,
    ResumeItem,
    ResumeText,
    ResumeTitle,
} from '../../../shared/pages/Cart/styles';
import { useCart } from '../../service/hooks/useCart';

export default function Cart() {
    const { cart, removeItem } = useCart();
    function handleRemoveProduct(electronic) {
        removeItem(electronic.id);
    }

    const total = cart.items.reduce((sumTotal, product) => {
        // eslint-disable-next-line no-return-assign, no-param-reassign
        return (sumTotal += product.price);
    }, 0);

    return (
        <Container>
            <h1>Checkout</h1>
            <span
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-around',
                    margin: '10% 0 0 5%',
                }}
            >
                <CartItem
                    style={{
                        border: 'none',
                        justifyContent: 'flex-start',
                        gap: '60%',
                        padding: '0 2% 0 2%',
                    }}
                >
                    <span
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <CartInfo>Produto</CartInfo>
                    </span>
                    <span
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <CartInfo>Valor</CartInfo>
                        remover
                    </span>
                </CartItem>
            </span>
            <span
                style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'space-around',
                }}
            >
                <CartList>
                    {cart.items.map((item, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <CartItem key={index}>
                            <span
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                }}
                            >
                                <CartImage src={item.image} />
                                <CartInfo>{item.title}</CartInfo>
                            </span>
                            <span
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                }}
                            >
                                <CartPrice>R$ {item.price},00</CartPrice>
                                <RemoveButton
                                    type="button"
                                    onClick={() => handleRemoveProduct(item)}
                                >
                                    <IoTrashOutline />
                                </RemoveButton>
                            </span>
                        </CartItem>
                    ))}
                </CartList>

                <Resume>
                    <ResumeTitle>Resumo</ResumeTitle>
                    <ResumeItem>
                        <ResumeText>Produtos</ResumeText>
                        <ResumeText>R$ {total},00</ResumeText>
                    </ResumeItem>
                    <ResumeItem>
                        <ResumeText>Descontos</ResumeText>
                        <ResumeText>R$ 00,00</ResumeText>
                    </ResumeItem>
                    <ResumeItem style={{ borderBottom: '1px solid gray' }}>
                        <ResumeText>Frete</ResumeText>
                        <ResumeText>R$ 00,00</ResumeText>
                    </ResumeItem>
                    <h4>Total:R$ {total},00</h4>
                    <BuyButton>Finalizar compra</BuyButton>
                </Resume>
            </span>
        </Container>
    );
}
