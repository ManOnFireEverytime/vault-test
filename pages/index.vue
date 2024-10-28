<template>
  <div class="index__page">
    <section class="hero">
      <div class="container">
        <div class="row hero__content">
          <div class="col-lg-7 col-md-10">
            <h1>STREETWEAR BOX</h1>
            <h1 class="crimson-text">NOW LIVE</h1>
            <p>
              A curated luxury street ware boxes featured guaranteed Amiri, Off
              white , Palm angels, Heron,preston and more in every box
            </p>
            <NuxtLink :to="{ name: 'Products' }">
              <button class="gradient__bg">Shop Now</button>
            </NuxtLink>
          </div>

          <div class="hero__card__div">
            <div class="hero__card">
              <div class="row">
                <div class="col-5">
                  <img
                    src="../assets/images/hero-card-image.png"
                    alt="hero card image"
                    class="img-fluid"
                  />
                </div>
                <div class="col-7 d-flex flex-column justify-content-between">
                  <small>Mens</small>
                  <h6>STREETWEAR BOX</h6>
                  <p class="crimson-text">$400</p>
                  <div class="hero__card__small__div">
                    <small class="d-block"
                      >Guaranteed value : $300 - $500</small
                    >
                    <small class="d-block">Contains : 2 - 3 items</small>
                    <small class="d-block"
                      >Featuring : off white, palm angels , amiri and heron
                      preston</small
                    >
                  </div>
                  <NuxtLink :to="{ name: 'Products' }">
                    <button class="gradient__bg">SHOP NOW</button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <OurMission />

    <NuxtLink :to="{ name: 'AboutUs' }">
      <div class="button__div">
        <button>LEARN MORE</button>
      </div>
    </NuxtLink>

    <section class="partners__section">
      <h5>PARTNERS</h5>
      <h3>OUR TOP BRANDS</h3>
      <div class="marquees">
        <div class="marquee">
          <div class="marquee__card">
            <img
              src="../assets/images/brand-1.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-2.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-3.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-4.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-5.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-6.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-7.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-8.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-9.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>

          <div class="marquee__card">
            <img
              src="../assets/images/brand-1.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-2.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-3.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-4.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-5.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-6.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-7.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-8.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-9.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
        </div>
        <div class="marquee">
          <div class="marquee__card">
            <img
              src="../assets/images/brand-1.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-2.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-3.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-4.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-5.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-6.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-7.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-8.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-9.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>

          <div class="marquee__card">
            <img
              src="../assets/images/brand-1.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-2.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-3.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-4.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-5.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-6.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-7.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-8.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-9.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
        </div>
        <div class="marquee">
          <div class="marquee__card">
            <img
              src="../assets/images/brand-1.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-2.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-3.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-4.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-5.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-6.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-7.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-8.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-9.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>

          <div class="marquee__card">
            <img
              src="../assets/images/brand-1.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-2.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-3.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-4.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-5.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-6.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-7.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-8.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
          <div class="marquee__card">
            <img
              src="../assets/images/brand-9.png"
              class="img-fluid"
              alt="brand 1"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="products__section container">
      <h5>PRODUCTS</h5>
      <h3>STREETWEARS</h3>
      <div class="products">
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-6"
            v-for="(product, index) in store.productItems"
            :key="index"
          >
            <ProductCard :product="product" v-if="index < 8" />
          </div>
        </div>
      </div>
      <NuxtLink :to="{ name: 'Products' }">
        <div class="button__div">
          <button>SEE ALL PRODUCTS</button>
        </div>
      </NuxtLink>
    </section>
    <section class="get__notified">
      <div class="get__notified__box">
        <h6>Join our notification list</h6>
        <h2>STAY NOTIFIED ON NEW DROPS</h2>
        <input type="text" placeholder="EMAIL ADDRESS" />
        <button class="gradient__bg">CONTINUE</button>
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
    const store = ref({
      productItems: [],
    });

    const fetchStreetwearProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost/vault/getProductByCategory.php?category=Streetwear"
        );
        const data = await response.json();
        if (data.status === "success") {
          store.value.productItems = data.data; // Assuming data.data is the array of products
        } else {
          console.error("Failed to fetch products:", data.message);
        }
      } catch (error) {
        console.error("Error fetching streetwear products:", error);
      }
    };

    onMounted(fetchStreetwearProducts);

    return {
      store,
    };
  },
};
</script>
<style></style>
