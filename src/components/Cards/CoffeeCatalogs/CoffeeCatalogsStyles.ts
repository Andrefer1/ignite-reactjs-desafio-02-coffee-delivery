import { styled } from "styled-components";

export const CoffeeCatalogsContainer = styled.div`
  .catalog {
    background: ${(props) => props.theme.colors.base.card};
    height: 19.375rem;
    width: 16rem;
    border-radius: 6px 36px 6px 36px;
    padding: 0 1.25rem 0.625rem 1.25rem;

    header {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 1rem;

      img {
        margin-top: -1.25rem;
        width: 7.5rem;
        height: 7.5rem;
      }
    }

    main {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 2rem;

      h4 {
        color: ${(props) => props.theme.colors.base.subtitle};
      }

      p {
        text-align: center;
        color: ${(props) => props.theme.colors.base.label};
      }
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .price {
        display: flex;
        align-items: baseline;
        gap: 0.25rem;
        color: ${(props) => props.theme.colors.base.text};
      }

      .cart {
        display: flex;
        gap: 0.5rem;

        div:first-child {
          max-height: 2.375rem;
        }
      }
    }
  }
`;
