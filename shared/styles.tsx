import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = (
    <Global
        styles={css`
            html,
            body {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
                background: white;
                min-height: 100%;
                font-family: 'Poppins', sans-serif;
                font-size: 16px;
                color: black;
                line-height: 200%;
            }
        `}
    />
);

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HomeText = styled.h1``;
