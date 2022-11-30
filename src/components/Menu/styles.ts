import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  font-size: 14px;
`;

export const Container = styled.div`
  border: 1px solid rgba(204, 204, 204, 0.5);
  padding: 16px;
  border-radius: 16px;
  height: fit-content;
  width: 100%;

  & > strong {
    display: block;
    text-align: center;
    margin-bottom: 16px;
  }

  &.categories {
    flex: 1;
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

  cursor: pointer;
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

export const Products = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(2, 1fr);
  max-height: 260px;
  overflow: auto;
`;

export const ProductContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  border-bottom: 1px solid rgba(204, 204, 204, 0.5);
  padding-bottom: 6px;
`;

export const ProductImage = styled.img`
  width: 96px;
  height: 64px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  border: 1px solid rgba(204, 204, 204, 0.5);
  background: transparent;
  color: #d73035;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 8px;
`;
