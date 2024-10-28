<template>
  <div>
    <section class="all__products container">
      <h5>PRODUCTS</h5>
      <h2>SHOP ALL PRODUCTS</h2>

      <!-- Dynamic Category Tabs -->
      <div class="tabs">
        <!-- 'All' Tab for showing all products -->
        <div
          :class="['tab', { active: activeTab === -1 }]"
          @click="seeAllProducts"
        >
          All
        </div>
        <!-- Category Tabs -->
        <div
          v-for="(category, index) in categories"
          :key="category.id"
          :class="['tab', { active: index === activeTab }]"
          @click="filterProductsByCategory(category.id, index)"
        >
          {{ category.name }}
        </div>
      </div>

      <!-- Display Products -->
      <div class="products">
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-6"
            v-for="(product, index) in filteredProducts"
            :key="index"
          >
            <ProductCard :product="product" />
          </div>
        </div>
      </div>

      <div class="button__div">
        <button @click="seeAllProducts">SEE ALL PRODUCTS</button>
      </div>
    </section>

    <!-- Known For Section -->
    <section class="known__for container">
      <h5>PRODUCTS</h5>
      <h2>WHAT WE ARE KNOWN FOR</h2>
      <div class="row">
        <div
          class="col-lg-4 col-md-4"
          v-for="(feature, idx) in knownFor"
          :key="idx"
        >
          <div class="mission__pill">
            <h6>{{ feature.title }}</h6>
            <small>{{ feature.description }}</small>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { ProductCard },
  setup() {
    const products = ref([]);
    const categories = ref([]);
    const filteredProducts = ref([]);
    const activeTab = ref(-1); // Default to 'All' products view

    const fetchProducts = async () => {
      const res = await fetch("http://localhost/vault/getAllProducts.php");
      const json = await res.json();
      products.value = json.data;
      filteredProducts.value = json.data; // Initially show all products
    };

    const fetchCategories = async () => {
      const res = await fetch("http://localhost/vault/getCategories.php");
      const json = await res.json();
      categories.value = json.data;
    };

    const filterProductsByCategory = async (categoryId, index) => {
      activeTab.value = index;
      try {
        const res = await fetch(
          `http://localhost/vault/getProductsByCategory.php?id=${categoryId}`
        );
        const json = await res.json();
        if (json.status === "success") {
          filteredProducts.value = json.data; // Update filtered products
        } else {
          console.error("Failed to fetch products:", json.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const seeAllProducts = () => {
      filteredProducts.value = products.value; // Reset to all products
      activeTab.value = -1;
    };

    onMounted(() => {
      fetchProducts();
      fetchCategories();
    });

    return {
      categories,
      products,
      filteredProducts,
      filterProductsByCategory,
      seeAllProducts,
      activeTab,
      knownFor: [
        {
          title: "FAST SHIPPING",
          description: "Partnered with 100+ leading luxury brands",
        },
        {
          title: "WORLDWIDE DELIVERY",
          description: "Sign up and never miss a drop",
        },
        {
          title: "RETURNS ACCEPTED",
          description: "Returns accepted on all goods",
        },
        {
          title: "AUTHENTICITY GUARANTEED",
          description: "Partnered with 100+ leading luxury brands",
        },
        {
          title: "SELL OUT DROPS",
          description: "Sign up and never miss a drop",
        },
        {
          title: "REFUNDS AND RETURNS",
          description: "Returns accepted on all goods",
        },
      ],
    };
  },
};
</script>

<style scoped>
.tab.active {
  background-color: #333;
  color: #fff;
}

.button__div {
  text-align: center;
  margin-top: 20px;
}
</style>
