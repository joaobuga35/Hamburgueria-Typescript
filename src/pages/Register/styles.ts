import styled from "styled-components";

export const DivRegister = styled.div`
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  header {
    display: none;
  }

  @media (min-width: 1024px) {
    display: flex;
    gap: 10rem;
    header {
      display: block;
    }
  }
`;
