import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  top: 0;
`;

export const ModalContainer = styled.div`
  margin-top: 17rem;
  width: 30rem;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.5);
  border-radius: 0.4rem;
  z-index: 10;

  .divNull {
    width: 100%;

    @media (min-width: 1024px) {
      width: 42rem;
    }
  }

  .sectionList {
    padding: 2rem;
    height: 32rem;
    width: 100%;
    background-color: var(--gray-0);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .divBtnRemoveAll {
      margin-top: 1.5rem;
    }

    .divTotal {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;

      h3 {
        font-size: 1.4rem;
        color: var(--gray-600);
      }

      span {
        font-size: 1.4rem;
        color: var(--gray-300);
      }
    }

    @media (min-width: 1024px) {
      width: 42rem;
    }
  }
`;

export const DivTitleModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 5.4rem;
  width: 100%;
  background-color: var(--color-primary);
  color: var(--gray-0);

  h2 {
    font-size: 1.7rem;
  }

  @media (min-width: 1024px) {
    width: 42rem;
  }
`;

export const ButtonCloseModal = styled.button`
  font-size: 1.4rem;
  color: var(--gray-0);
  background-color: var(--color-primary);
  border: none;
`;
