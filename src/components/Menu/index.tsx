import { useEffect, useState } from "react";
import { Category } from "../../types/Category";
import { Product } from "../../types/Product";
import { api } from "../../utils/api";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import {
  Button,
  Categories,
  CategoryContainer,
  Container,
  Icon,
  MenuContainer,
  ProductContainer,
  ProductDetails,
  ProductImage,
  Products,
} from "./styles";

export function Menu() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryId, setCategoryId] = useState<string>("");

  useEffect(() => {
    api.get("/categories").then(({ data }) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    const route = !categoryId
      ? "/products"
      : `/categories/${categoryId}/products`;

    api.get(route).then(({ data }) => {
      setProducts(data);
    });
  }, [categoryId]);

  function handleSelectCategory(selected: string) {
    selected === categoryId ? setCategoryId("") : setCategoryId(selected);
  }

  return (
    <MenuContainer>
      <Container className="categories">
        <strong>Categorias</strong>

        <Categories>
          {categories.map((category) => (
            <CategoryContainer
              key={category._id}
              onClick={() => handleSelectCategory(category._id)}
            >
              <Icon>{category.icon}</Icon>
              <span>{category.name}</span>
            </CategoryContainer>
          ))}

          <CategoryContainer>
            <Icon>
              <PlusCircle />
            </Icon>
            <span>Adicionar</span>
          </CategoryContainer>
        </Categories>
      </Container>

      <Container>
        <strong>Produtos</strong>
        <Products>
          <Button>
            <PlusCircle /> Cadastrar novo produto
          </Button>

          {products.map((product) => (
            <ProductContainer key={product._id}>
              <ProductImage
                src={`http://localhost:3001/uploads/${product.imagePath}`}
              />

              <ProductDetails>
                <strong>{product.name}</strong>
                <span>{product.description}</span>
                <strong>{formatCurrency(product.price)}</strong>
              </ProductDetails>
            </ProductContainer>
          ))}
        </Products>
      </Container>
    </MenuContainer>
  );
}
