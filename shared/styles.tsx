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
                height: 100vh;
                max-width: 100vw;
                font-family: 'Poppins', sans-serif;
                font-size: 16px;
                color: black;
                line-height: 200%;
            }
            a {
                text-decoration: none;
                color: white;
            }
            button {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 8px;
                border: none;
                border-radius: 5px;
                :hover {
                    filter: brightness(0.9);
                }
            }
        `}
    />
);

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HomeText = styled.h1``;
