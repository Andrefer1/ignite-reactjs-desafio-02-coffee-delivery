import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  border-radius: 6px;
  border: none;
  text-transform: uppercase;

  &.primary {
    ${(props) => props.theme.typographies.button.large}
    padding: 12px 40px;
    color: ${(props) => props.theme.colors.base.white};
    background: ${(props) => props.theme.colors.brand.yellow};
    transition: background 0.2s;

    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.colors.brand.yellowDark};
    }
  }

  &.secondary {
    ${(props) => props.theme.typographies.button.medium}
    padding: 4px 8px;
    color: ${(props) => props.theme.colors.base.text};
    background: ${(props) => props.theme.colors.base.button};
    max-height: 2rem;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    transition: background 0.2s;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.base.subtitle};
      background: ${(props) => props.theme.colors.base.hover};

      svg {
        color: ${(props) => props.theme.colors.brand.purpleDark};
      }
    }

    svg {
      color: ${(props) => props.theme.colors.brand.purple};
    }
  }

  &.shopping-cart {
    padding: 8px;
    color: ${(props) => props.theme.colors.brand.yellowDark};
    background: ${(props) => props.theme.colors.brand.yellowLight};
    transition: background 0.2s, color 0.2s;
    display: flex;
    position: relative;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.brand.yellowLight};
      background: ${(props) => props.theme.colors.brand.yellow};
    }
  }

  &.shopping-cart-simple {
    padding: 8px;
    color: ${(props) => props.theme.colors.base.card};
    background: ${(props) => props.theme.colors.brand.purpleDark};
    transition: background 0.2s;

    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.colors.brand.purple};
    }
  }
`;

export const BadgeContainer = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  margin-top: -10px;
  margin-right: -10px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.base.white};
  background: ${(props) => props.theme.colors.brand.yellowDark};

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
`;
