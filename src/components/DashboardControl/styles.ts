import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 10px auto;
  display: flex;
  gap: 16px;

  button {
    background: transparent;
    border: 1px solid rgba(204, 204, 204, 0.5);
    padding: 8px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    &.active {
      border-bottom-color: #d73035;
      border-bottom-width: 4px;
    }
  }
`;
