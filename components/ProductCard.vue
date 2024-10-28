<template>
  <div class="product__card">
    <img
      :src="`http://localhost/vault/products/${product.image1}`"
      class="img-fluid"
      :alt="product.product_name"
    />
    <div class="product__details">
      <!-- <small class="mens">{{ product.gender }}</small> -->
      <h6>{{ product.product_name }}</h6>
      <h6 class="crimson-text">£{{ parseInt(product.price) }}</h6>
      <small class="deets"
        >Guaranteed value: £{{ parseInt(product.min_range) }} - £{{
          parseInt(product.max_range)
        }}</small
      >
      <!-- <small class="deets">Contains : {{ product.contains }} items</small>
            <small class="deets">Featuring : {{ product.featuring }}</small> -->
      <NuxtLink :to="{ name: 'product-id', params: { id: product.id } }">
        <button class="gradient__bg">SHOP NOW</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any necessary CSS styling */

.product__card img {
  width: 100%;
  height: 250px; /* Set a fixed height */
  object-fit: contain;
  background: no-repeat; /* Ensures images are cropped to fit within dimensions */
  border-radius: 8px; /* Optional: Add rounded corners */
}
</style>
