import {
  AddCategoriesContainer,
  Categories,
  CategoryContainer,
  Form,
  Icon,
  ModalBody,
  Overlay,
} from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";
import { useEffect, useState } from "react";
import { Category } from "../../types/Category";
import { api } from "../../utils/api";
import { PlusCircle } from "../Icons/PlusCircle";
import EmojiPicker from "emoji-picker-react";
import { CheckCircle } from "../Icons/CheckCircle";

interface MenuManagementModalProps {
  visible: boolean;
  onClose: () => void;
}

export function MenuManagementModal({
  visible,
  onClose,
}: MenuManagementModalProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [openAddCategories, setOpenAddCategories] = useState(false);

  const [categoryLabel, setCategoryLabel] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");

  useEffect(() => {
    api.get("/categories").then(({ data }) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    const element = document.getElementById("categories");
    if (!element) return;

    function handleWheel(event: WheelEvent) {
      event.preventDefault();
      element?.scrollBy({
        left: event.deltaY < 0 ? -10 : 10,
      });
    }

    element.addEventListener("wheel", handleWheel);

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  });

  async function handleAddCategory() {
    await api.post("/categories", {
      icon: selectedEmoji,
      name: categoryLabel,
    });

    setOpenAddCategories(false);
    setSelectedEmoji("");
    setCategoryLabel("");
  }

  if (!visible) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Gerenciar Menu</strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} />
          </button>
        </header>

        <div className="menu-container">
          <div className="categories">
            <small>Categorias</small>

            <Categories id="categories">
              {categories.map((category) => (
                <CategoryContainer key={category._id}>
                  <Icon>{category.icon}</Icon>
                  <span>{category.name}</span>
                </CategoryContainer>
              ))}

              <CategoryContainer
                onClick={() => setOpenAddCategories(!openAddCategories)}
              >
                <Icon>
                  <PlusCircle />
                </Icon>
                <span>Adicionar</span>
              </CategoryContainer>
            </Categories>

            <AddCategoriesContainer
              className={openAddCategories ? "visible" : "hidden"}
            >
              <Form>
                <input
                  type="text"
                  placeholder="Categoria"
                  value={categoryLabel}
                  onChange={(event) => setCategoryLabel(event.target.value)}
                />
                <button
                  type="button"
                  disabled={!selectedEmoji || !categoryLabel}
                  onClick={handleAddCategory}
                >
                  <CheckCircle />
                </button>
              </Form>

              <small>
                {`Selecione o ícone da categoria ${selectedEmoji}`}{" "}
              </small>
              <EmojiPicker
                width="auto"
                height={100}
                onEmojiClick={(emoji) => setSelectedEmoji(emoji.emoji)}
              />
            </AddCategoriesContainer>
          </div>

          <div className="products">
            <small>Produtos</small>
          </div>
        </div>
      </ModalBody>
    </Overlay>
  );
}
