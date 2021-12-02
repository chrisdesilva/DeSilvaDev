import styled, { createGlobalStyle } from "styled-components";

export const VisuallyHidden = styled.div`
  position: absolute;
  visibility: hidden;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0px none;
`;

export const GlobalStyle = createGlobalStyle`
    html {
        --black: rgb(15, 7, 8);
        --brown: rgb(119, 62, 72);
        --dark-brown: rgb(64, 28, 34);
        --dark-green: rgb(17, 29, 22);
        --light-green: rgb(120, 194, 146);
        --sky-blue: rgb(106, 171, 214);
        --transparent-dark-brown-90: rgba(64, 28, 34, 0.90);
        --transparent-dark-green-90: rgba(17, 29, 22, 0.90);
        --transparent-white-75: rgba(255, 255, 255, 0.75);
        --white: rgb(234, 234, 234);

        --box-shadow: 1.5px 3px 3px hsl(0deg 0% 0% / 0.45);
        --container-radius: 16px;
        --card-radius: 8px;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html, body {
        height: 100%;
    }

    body {
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        font-family: 'Outfit', Tahoma, Geneva, Verdana, sans-serif;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
        font-weight: 400;
    }
    input, button, textarea, select {
        font: inherit;
    }

    code,
    pre {
        background: var(--dark-green);
        color: var(--light-green);
        font-size: 16px;
        padding: 0;
    }

    pre {
        padding: 16px;
        border-radius: 8px;
        margin: 16px 0;
    }
`;
