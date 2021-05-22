import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// export const GlobalStyle = styled.div`
export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --font-size-s: 1rem;
    --font-size-m: 1.3rem;
    --font-size: 1.6rem;
    --font-size-l: 2.2rem;
    --logo-size: 10rem;
    --logo-size-s: 7rem;
    --color-primary: #e30914;
    --color-text: #2b2f34;
    --color-bg: #eee;
    --gradient-bg: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    --font-primary: "Kanit";
    --card-size: 23rem;
  }

  *, ::before, ::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: var(--color-bg);
    background: var(--gradient-bg);
    color: var(--color-text);
    font-family: var(--font-primary), serif;
    font-size: var(--font-size);
  }
    /* Media Queries */
    @media (max-width: 789px) {
      :root {
        --card-size: 17rem;
        --font-size-l: 1.4rem; 
      }
      html {
        font-size: 8px;
      }
    }
`;
