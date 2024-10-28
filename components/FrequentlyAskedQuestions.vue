<template>
    <section class="text-center faq">
        <h5>FAQ</h5>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>

        <div class="questions d-flex justify-content-center align-items-center flex-column">
            <div class="question row" @click="toggleDropdown(n)" v-for="n in 7" :key="n">
                <div class="col-11">
                    <h6>How can i get refund on streetwears</h6>
                </div>
                <div class="col-1 d-flex justify-content-center align-items-center arrow">
                    <img src="../assets/images/arrow-down.svg" alt="arrow-down" v-if="!(faqIsOpen === n)">
                    <img src="../assets/images/arrow-up.svg" alt="arrow-up" v-else>
                </div>
                <div class="row">
                    <div class="col-11">
                        <p v-if="faqIsOpen === n">
                            Proudly partnered with over 100+ luxury brands, 
                            we guarantee 100% authenticity in every box. 
                            Both standard and plus box types offers carefully 
                            curated selections, guaranteed a designed range of 
                            value and a set of items inside.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const faqIsOpen = ref(null);

const toggleDropdown = (num) => {
    if (faqIsOpen.value === num) {
        faqIsOpen.value = null
    } else {
        faqIsOpen.value = num
    }
}
</script>
<style>
    
</style>