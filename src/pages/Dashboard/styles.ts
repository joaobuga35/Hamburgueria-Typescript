import styled from "styled-components";

export const DivDash = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1.5rem;

  .divHeader {
    border-bottom: 1px solid var(--gray-100);
  }

  main {
    @media (min-width: 1024px) {
      max-width: 100rem;
      margin: 0 auto;
    }
  }
`;
