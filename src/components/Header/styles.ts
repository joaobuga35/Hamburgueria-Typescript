import styled from "styled-components";

export const HeaderStyle = styled.header`
  margin-bottom: 1.4rem;

  .divContent {
    width: 35rem;
    height: 9.5rem;
    margin-top: 2rem;
    border: 1px solid var(--gray-100);
    border-radius: 0.5rem;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    display: flex;
    gap: 1.5rem;

    h2 {
      width: 16rem;
      height: 7rem;
      background: rgba(39, 174, 96, 0.1);
      border-radius: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        color: var(--color-primary);
      }
    }

    p {
      font-size: 1.4rem;
      color: var(--gray-300);

      strong {
        color: #000;
      }
    }
  }
`;
