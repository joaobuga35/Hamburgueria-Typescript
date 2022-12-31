import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  margin-top: 17rem;
  width: 30rem;
  height: 23rem;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 0.4rem;
  z-index: 10;

  .divNull {
    width: 100%;
    height: 23rem;
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
`;

export const ButtonCloseModal = styled.button`
  font-size: 1.4rem;
  color: var(--gray-0);
  background-color: var(--color-primary);
  border: none;
`;
