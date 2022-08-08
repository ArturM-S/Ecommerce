import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 32px;
    width: 100%;

    background-color: blue;
`;

export const Menu = styled.div`
    display: flex;
    gap: 1rem;
`;
export const CartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const ItemsCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    left: 60%;
    bottom: 30%;
`;
