import styled from "styled-components";

export const LiStyle = styled.li`
  min-width: 25rem;
  height: 34.6rem;
  border: 2px solid var(--gray-100);
  border-radius: 4px;
  background-color: var(--color-background);

  :hover {
    border: 2px solid var(--color-primary);
  }

  .divImg {
    width: 100%;
    height: 16.2rem;
    background-color: var(--gray-0);
    display: flex;
    justify-content: center;
  }

  img {
    width: 10rem;
    height: 10rem;
  }

  .divDescription {
    padding-top: 2rem;
    padding-left: 1.5rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;

    h2 {
      color: var(--gray-600);
      font-weight: 700;
      font-size: 1.8rem;
    }

    .type {
      color: var(--gray-300);
      font-size: 1.2rem;
    }

    .price {
      color: var(--color-primary);
      font-size: 1.4rem;
    }
  }
`;
