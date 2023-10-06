import { styled } from "styled-components";

export const CounterContainer = styled.div`
  background: ${(props) => props.theme.colors.base.button};
  padding: 0.5rem;
  width: 4.5rem;
  max-height: 2rem;
  gap: 0.25rem;
  border-radius: 6px;

  display: flex;
  align-items: center;

  /* Impedir a seleção do valor do input */
  user-select: none;

  input {
    ${(props) => props.theme.typographies.text.medium}

    width: 1.25rem;
    border: none;
    text-align: center;
    background: transparent;
    color: ${(props) => props.theme.colors.base.title};

    &:focus {
      outline: 0;
    }

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type="number"] {
      appearance: textfield;
    }
  }

  svg {
    cursor: pointer;
    color: ${(props) => props.theme.colors.brand.purple};

    &:active {
      color: ${(props) => props.theme.colors.brand.purpleDark};
    }
  }
`;
