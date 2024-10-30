// stores/productStore.js
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    categories: [],
    loading: false,
    error: null,
    activeCategory: "POPULAR",
  }),

  getters: {
    filteredProducts: (state) => {
      if (state.activeCategory === "POPULAR") {
        return state.products;
      }
      return state.products.filter(
        (product) => product.category === state.activeCategory
      );
    },
  },

  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await fetch(
          "https://www.thevaultldn.com/api/getProducts.php"
        );
        const result = await response.json();
        if (result.status === "success") {
          this.products = result.data.map((product) => ({
            id: product.id,
            name: product.product_name,
            price: parseFloat(product.price),
            description: product.description,
            category: product.category,
            image: `https://www.thevaultldn.com/api/products/${product.image1}`,
            additionalImages: [
              product.image2,
              product.image3,
              product.image4,
              product.image5,
            ]
              .filter(Boolean)
              .map((img) => `https://www.thevaultldn.com/api/products/${img}`),
            minRange: parseFloat(product.min_range),
            maxRange: parseFloat(product.max_range),
          }));
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchCategories() {
      try {
        const response = await fetch(
          "https://www.thevaultldn.com/api/getCategories.php"
        );
        const result = await response.json();
        if (result.status === "success") {
          this.categories = result.data;
        }
      } catch (error) {
        this.error = error.message;
      }
    },

    setActiveCategory(category) {
      this.activeCategory = category;
    },
  },
});
