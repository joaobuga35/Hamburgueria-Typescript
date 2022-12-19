import styled from "styled-components";

export const UlStyle = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: nowrap;
  max-width: 90%;
  overflow-x: scroll;
  margin-top: 3rem;
  margin-left: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    max-width: 70%;
    overflow-x: hidden;
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 725px) {
    max-width: 90%;
  }
`;
