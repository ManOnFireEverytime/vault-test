<template>
  <div class="product__id" v-if="product">
    <div class="row">
      <div class="col-lg-6 col-md-6 left">
        <div class="row">
          <!-- Main Product Image -->
          <div class="col-12">
            <img
              :src="getImageUrl(product.image1)"
              class="img-fluid main-image"
              :alt="product.product_name"
              @error="handleImageError"
            />
          </div>

          <!-- Additional Product Images -->
          <div
            v-for="(image, index) in additionalImages"
            :key="index"
            class="col-3 bottom__image"
          >
            <img
              :src="getImageUrl(image)"
              :alt="`${product.product_name} - view ${index + 2}`"
              class="img-fluid"
              @error="handleImageError"
            />
          </div>
        </div>
      </div>

      <div
        class="col-lg-6 col-md-6 right d-flex flex-column justify-content-between"
      >
        <div>
          <h5>{{ product.product_name }}</h5>
          <h6 class="desc">{{ product.description }}</h6>
          <!-- <small>Contains: {{ product.contains }} items</small> -->
          <h5 class="crimson-text">£{{ parseInt(product.price) }}</h5>
          <small class="featuring"
            >Guaranteed value: £{{ parseInt(product.min_range) }} - £{{
              parseInt(product.max_range)
            }}</small
          >
          <button class="gradient__bg">SHOP NOW</button>
        </div>

        <div class="pills">
          <div class="mission__pill">
            <h6>AUTHENTICITY GUARANTEED</h6>
            <small>Partnered with 100+ leading luxury brands</small>
          </div>
          <div class="mission__pill">
            <h6>GUARANTEED VALUE</h6>
            <small>Partnered with 100+ leading luxury brands</small>
          </div>
          <div class="mission__pill">
            <h6>REFUNDS AND RETURNS ACCEPTED</h6>
            <small>Partnered with 100+ leading luxury brands</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const product = ref(null);
    const route = useRoute();
    const baseUrl = "http://localhost/vault/products/";

    const getImageUrl = (imageName) => {
      if (!imageName) return null;
      return `${baseUrl}${imageName}`;
    };

    const handleImageError = (event) => {
      event.target.src = "/path/to/fallback-image.jpg"; // Add a fallback image path
      console.error("Image failed to load:", event.target.src);
    };

    const additionalImages = computed(() => {
      if (!product.value) return [];

      const images = [];
      // Only add images that exist
      for (let i = 2; i <= 5; i++) {
        const image = product.value[`image${i}`];
        if (image) {
          images.push(image);
        }
      }
      return images;
    });

    const fetchProductDetails = async () => {
      try {
        const res = await fetch(
          `http://localhost/vault/getProductById.php?id=${route.params.id}`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (data.status === "success") {
          product.value = data.data;
        } else {
          console.error("Failed to fetch product details:", data.message);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    onMounted(fetchProductDetails);

    return {
      product,
      additionalImages,
      getImageUrl,
      handleImageError,
    };
  },
};
</script>

<style scoped>
.product__id .main-image {
  width: 100%;
  height: 650px; /* Adjust the height for the desired aspect ratio */
  object-fit: cover;
  background: no-repeat;
  margin-bottom: 15px;
}

/* Thumbnail Images Styling */
.product__id .bottom__image img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  background: no-repeat;
  margin-top: 10px;
}

/* Thumbnail Container Styling */
.bottom__image {
  cursor: pointer;
  padding: 0 5px; /* Add padding between thumbnails */
}

/* Hover Effect for Thumbnails */
.bottom__image img:hover {
  opacity: 0.8;
  transition: opacity 0.2s ease;
}
</style>
