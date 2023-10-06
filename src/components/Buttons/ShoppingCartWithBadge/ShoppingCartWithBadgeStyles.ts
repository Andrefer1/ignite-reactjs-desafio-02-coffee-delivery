import { styled } from "styled-components";

export const ShoppingCartWithBadgeContainer = styled.div`
  button {
    padding: 8px;
    color: ${(props) => props.theme.colors.brand.yellowDark};
    background: ${(props) => props.theme.colors.brand.yellowLight};
    display: flex;
    position: relative;
    max-height: 2.375rem;
    transition: background 0.2s, color 0.2s;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.brand.yellowLight};
      background: ${(props) => props.theme.colors.brand.yellow};
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
