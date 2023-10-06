import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body { 
        background: ${(props) => props.theme.colors.base.background};
        -webkit-font-smoothing: antialiased
     }

    // TITLES

     h1 {
        ${(props) => props.theme.typographies.titles.extraLarge}
    }

     h2 {
        ${(props) => props.theme.typographies.titles.large}
    }

     h3 {
        ${(props) => props.theme.typographies.titles.medium}
    }

     h4 {
        ${(props) => props.theme.typographies.titles.small}
    }

    h5 {
        ${(props) => props.theme.typographies.titles.extraSmall}
    }

    // TEXT

    input, textarea, label, span, div, p {
        &.large {
            ${(props) => props.theme.typographies.text.large}
        }

        &.medium {
            ${(props) => props.theme.typographies.text.medium}
        }

        &.small {
            ${(props) => props.theme.typographies.text.small}
        }

        &.extra-small {
            ${(props) => props.theme.typographies.text.extraSmall}
        }

        &.tag {
            ${(props) => props.theme.typographies.tag}
        }
    }
`;
