import styled from '@emotion/styled';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    padding: 1rem;
    gap: 1rem;
`;

export const ProductItem = styled.div`
    width: 200px;
    height: 200px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid lightgray;
    box-shadow: 10px 5px 5px gray;
    :hover {
        filter: brightness(1.2);
        color: gray;
    }
`;

export const FilterBar = styled.h1`
    height: 100%;
    width: 20%;
    border-right: 1px solid black;
`;

export const ProductImg = styled.img`
    height: 100px;
    width: 100px;
`;

export const ProductName = styled.h1`
    font-size: 1rem;
`;

export const ProductPrice = styled.h1`
    font-size: 1.1rem;
    color: green;
`;
