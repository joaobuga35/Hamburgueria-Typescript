import styled from "styled-components";

export const CartItem = styled.li`
  display: flex;
  height: 8rem;
  margin-bottom: 1rem;
  img {
    height: 6rem;
    width: 6rem;
    background-color: var(--gray-100);
  }

  .divAlign {
    margin-left: 1rem;
  }

  .divTitleItem {
    display: flex;
    gap: 4rem;

    @media (min-width: 1024px) {
      gap: 14rem;
    }
  }

  .btnTrash {
    border: none;
  }

  .trash {
    color: var(--gray-300);
  }

  .divBtnAddRemove {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;

    button {
      height: 3.4rem;
      width: 3.4rem;
      border: none;
      color: var(--color-secundary);
      font-size: 1.4rem;
    }
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--gray-600);
  }
`;
