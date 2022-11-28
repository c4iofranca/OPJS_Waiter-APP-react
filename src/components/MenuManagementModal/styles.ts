import styled from "styled-components";

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      border: 0;
      background: transparent;
      line-height: 0;
    }
  }

  .menu-container {
    .categories,
    .products {
      margin-top: 8px;
    }
  }
`;

export const Categories = styled.div`
  display: flex;
  gap: 16px;
  overflow: auto;

  span {
    font-size: 14px;
    min-width: max-content;
  }
`;

export const CategoryContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  :last-child {
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  background: #fff;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-bottom: 8px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddCategoriesContainer = styled.div`
  margin-top: 8px;
  &.visible {
    height: min-content;
    transition: display 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
  }

  &.hidden {
    display: none;
    transition: display 0.3s ease-in-out;
  }

  aside {
    margin-top: 8px;
    .epr-preview {
      display: none;
    }

    .epr-body ul {
      li:first-child {
        display: none;
      }

      li .epr-emoji-category-label {
        display: none;
      }
    }
  }

  .epr-header {
    .epr-header-overlay {
      display: none;
    }

    .epr-category-nav {
      padding: 4px;
      button:first-child {
        display: none;
      }
    }
  }
`;

export const Form = styled.div`
  display: flex;
  gap: 8px;
  input {
    flex: 1;
    border: 1px solid rgba(204, 204, 204, 0.5);
    padding: 4px;
    border-radius: 4px;
  }

  button {
    border: 1px solid rgba(204, 204, 204, 0.5);
    background: #d73035;
    border-radius: 4px;
  }
`;
