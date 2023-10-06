import { styled } from "styled-components";

export const ShoppingCartSimpleComponentContainer = styled.div`
  button {
    padding: 8px;
    color: ${(props) => props.theme.colors.base.card};
    background: ${(props) => props.theme.colors.brand.purpleDark};
    max-height: 2.375rem;
    transition: background 0.2s;

    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.colors.brand.purple};
    }
  }
`;
