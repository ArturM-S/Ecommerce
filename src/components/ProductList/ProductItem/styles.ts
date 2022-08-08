import styled from '@emotion/styled';

export const Container = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 10px 5px 5px gray;
    :hover {
        filter: brightness(1.2);
        color: gray;
    }
`;
export const ProductImg = styled.img`
    max-height: 80%;
    height: 80%;

    width: 100%;
`;

export const ProductName = styled.h1``;

export const ProductPrice = styled.h1`
    color: green;
`;
