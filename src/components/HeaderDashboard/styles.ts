import styled from "styled-components";

export const HeaderMain = styled.header`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--gray-0);

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
`;
