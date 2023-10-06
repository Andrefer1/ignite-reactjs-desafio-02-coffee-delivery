import { styled } from "styled-components";

export const PaymentMethodsContainer = styled.div`
  input {
    display: none;
  }

  input:checked ~ label {
    background: ${(props) => props.theme.colors.brand.purpleLight};
    outline: 1px solid ${(props) => props.theme.colors.brand.purple};
  }

  label {
    ${(props) => props.theme.typographies.button.medium}
    color: ${(props) => props.theme.colors.base.text};
    background: ${(props) => props.theme.colors.base.button};

    height: 3.1875rem;
    width: 11.125rem;
    border-radius: 6px;
    padding: 1rem;

    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.base.subtitle};
      background: ${(props) => props.theme.colors.base.hover};
    }

    i {
      font-size: 1rem;
      margin-right: 0.75rem;
      color: ${(props) => props.theme.colors.brand.purple};
    }
  }
`;
