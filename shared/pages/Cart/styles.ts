import styled from '@emotion/styled';

interface RemovedMgsProps {
    isRemoved: boolean;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RemovedMsg = styled.div<RemovedMgsProps>`
    position: absolute;
    display: ${props => (props.isRemoved ? 'flex' : 'none')};
    transition: 0.3s;
    align-self: center;
    justify-self: center;
    border-radius: 5px;
    background-color: lightcoral;
    color: white;
    font-size: 1rem;
`;

export const CartList = styled.div`
    width: 70%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const CartItem = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid lightgray;
    padding: 8px;
    border-radius: 5px;

    :hover {
        transition: 0.2s;
        filter: brightness(1.5);
        box-shadow: 8px 3px 3px rgba(0, 0, 0, 0.2);
    }
`;
export const CartImage = styled.img`
    height: 50px;
    width: 50px;
`;
export const CartInfo = styled.div`
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 700px;
`;
export const CartPrice = styled.div`
    color: green;
`;
export const Resume = styled.div`
    width: 150px;
    max-height: 330px;
    display: flex;
    padding: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgray;
    box-shadow: 8px 3px 3px rgba(0, 0, 0, 0.2);
    background-color: #f3f6f4;
    border-radius: 5px;
`;

export const ResumeTitle = styled.h1`
    font-size: 1.1rem;
`;
export const ResumeText = styled.h2`
    font-size: 0.7rem;
`;

export const ResumeItem = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const RemoveButton = styled.button`
    :hover {
        background-color: red;
        color: white;
    }
`;

export const BuyButton = styled.button`
    background-color: blue;
    border-radius: 5px;
    color: white;
    padding: 8px;
    :hover {
        filter: brightness(1.2);
    }
`;
