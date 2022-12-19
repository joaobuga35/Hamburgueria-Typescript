import styled from "styled-components";

export const HeaderMain = styled.header`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-background);

  .divIcons {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .buttonAllIcon {
    border: none;
  }

  .cartIcon {
    height: 3rem;
    width: 3rem;
    color: var(--gray-300);
  }

  a {
    text-decoration: none;
    color: var(--gray-300);
  }

  @media (min-width: 1024px) {
    max-width: 100rem;
    margin: 0 auto;
  }
`;
