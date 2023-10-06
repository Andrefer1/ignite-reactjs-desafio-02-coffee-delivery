import { styled } from "styled-components";

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;

  div {
    ${(props) => props.theme.typographies.tag}

    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    display: inline-block;

    color: ${(props) => props.theme.colors.brand.yellowDark};
    background: ${(props) => props.theme.colors.brand.yellowLight};
  }
`;
