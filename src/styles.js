import { createGlobalStyle, styled } from "styled-components";
import { normalize } from "styled-normalize";

// export const GlobalStyle = styled.div`
export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 62.5%;
    background-color: var(--color-bg);
    background: var(--gradient-bg);
    color: var(--color-text);
    font-family: var(--font-primary), serif;

    /* Variables */
    --font-size: 1.6rem;
    --logo-size: 10rem;
    --logo-size-s: 7rem;
    --color-primary: #e30914;
    --color-text: #2b2f34;
    --color-bg: #eee;
    --gradient-bg: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    --font-primary: "Kanit";
    --card-size-m: 23rem;

    /* Media Queries */
    @media (min-width: 688px) {
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1312px) {
    }
  }
`;
