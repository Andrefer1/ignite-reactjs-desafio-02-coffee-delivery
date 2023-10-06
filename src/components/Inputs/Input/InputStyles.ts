import { styled } from "styled-components";

export const InputContainer = styled.div`
  background: ${(props) => props.theme.colors.base.input};
  border-color: ${(props) => props.theme.colors.base.button};
  padding: 0.75rem;
  max-width: 35rem;
  min-width: 3.75rem;
  border-radius: 4px;
  gap: 0.25rem;

  display: flex;
  justify-content: space-between;

  &:focus-within {
    outline: 1px solid ${(props) => props.theme.colors.brand.yellowDark};
  }

  input {
    color: ${(props) => props.theme.colors.base.text};
    background: transparent;
    border: none;
    flex: 1;

    &::placeholder {
      color: ${(props) => props.theme.colors.base.label};
      opacity: 9;
    }

    &:focus {
      outline: none;

      &::placeholder {
        color: transparent;
      }

      &:focus ~ span,
      &:not(:placeholder-shown) ~ span {
        display: none;
      }
    }

    &:placeholder-shown ~ span {
      display: block;
    }
  }

  span {
    font-style: italic;
    font-size: 0.75rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.base.label};
  }
`;
