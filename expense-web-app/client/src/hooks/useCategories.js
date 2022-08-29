import { useContext } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";

class Categories {
  #categories = [];
  constructor(categories) {
    this.#categories = categories;
  }
  get categories() {
    return this.#categories;
  }

  getCategory(id) {
    return this.#categories.find((item) => item.id === id);
  }
}

const useCategories = () => {
  const categoriesCtx = useContext(CategoriesContext);
  return new Categories(categoriesCtx);
};

export default useCategories;
