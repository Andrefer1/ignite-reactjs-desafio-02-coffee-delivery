import { styled } from "styled-components";

export const CoffeeCardsContainer = styled.div`
  width: 23rem;
  background: ${(props) => props.theme.colors.base.card};

  .card {
    padding: 0.24rem 0.5rem;

    display: flex;
    justify-content: space-between;

    .coffee {
      display: flex;
      align-items: center;
      gap: 1.25rem;

      img {
        width: 4rem;
        height: 4rem;
      }

      & > div {
        .title {
          margin-bottom: 0.5rem;
          color: ${(props) => props.theme.colors.base.subtitle};
        }

        .buttons {
          display: flex;
          gap: 0.5rem;
        }
      }
    }

    .price {
      font-weight: 700;
      color: ${(props) => props.theme.colors.base.text};
    }
  }
`;
