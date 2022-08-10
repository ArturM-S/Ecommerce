import styled from '@emotion/styled';

export const Container = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    padding: 1rem;
    gap: 1rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const ProductList = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
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
    border-radius: 5px;

    :hover {
        transition: 0.2s;
        box-shadow: 8px 3px 3px rgba(0, 0, 0, 0.2);
        filter: brightness(1.2);
        color: gray;
    }
`;

export const FilterBar = styled.h1`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    max-width: 20%;
    min-width: 20%;

    border-right: 1px solid black;
`;

export const ProductImg = styled.img`
    height: 100px;
`;

export const ProductName = styled.h1`
    font-size: 1rem;
    min-height: 1.5rem;
    overflow: hidden;
`;

export const ProductPrice = styled.h1`
    display: flex;
    gap: 8px;
    font-size: 1.1rem;
    color: green;
`;
