import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;

        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;

        background-color: #333333;
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
    }
`;

export default GlobalStyles;
