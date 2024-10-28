<template>
    <section class="about__us container">
        <h5>ABOUT US</h5>
        <h2>HOW IT WORKS</h2>

        <div class="about__video">
            <!-- <img src="../assets/images/product-3.png" alt="image"> -->
        </div>

        <div class="row mission__notes">
            <div class="col-lg-6 col-md-6 row">
                <div class="col-1 d-flex flex-column align-items-center">
                    <h4>01.</h4>
                    <div class="line"></div>
                </div>
                <div class="col-11">
                    <h5>AUTHENTICITY PARTNERSHIP</h5>
                    <h6>Proudly partnered with over 100+ luxury brands, we guarantee 100% authenticity in every box. Both standard and plus box types offers carefully curated selections, guaranteed a designed range of value and a set of items inside.</h6>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 row">
                <div class="col-1 d-flex flex-column align-items-center">
                    <h4>02.</h4>
                    <div class="line"></div>
                </div>
                <div class="col-11">
                    <h5>YOUR STYLE PROFILE</h5>
                    <h6>Proudly partnered with over 100+ luxury brands, we guarantee 100% authenticity in every box. Both standard and plus box types offers carefully curated selections, guaranteed a designed range of value and a set of items inside.</h6>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 row">
                <div class="col-1 d-flex flex-column align-items-center">
                    <h4>03.</h4>
                    <div class="line"></div>
                </div>
                <div class="col-11">
                    <h5>SELL OUT DROPS</h5>
                    <h6>Proudly partnered with over 100+ luxury brands, we guarantee 100% authenticity in every box. Both standard and plus box types offers carefully curated selections, guaranteed a designed range of value and a set of items inside.</h6>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 row">
                <div class="col-1 d-flex flex-column align-items-center">
                    <h4>04.</h4>
                    <div class="line"></div>
                </div>
                <div class="col-11">
                    <h5>WORLDWIDE SHIPPING</h5>
                    <h6>Proudly partnered with over 100+ luxury brands, we guarantee 100% authenticity in every box. Both standard and plus box types offers carefully curated selections, guaranteed a designed range of value and a set of items inside.</h6>
                </div>
            </div>
        </div>
    </section>

    <OurMission />

    <FrequentlyAskedQuestions />

    <div class="still__got d-flex justify-content-center">
        <div class="row">
            <div class="col-6 d-flex flex-column justify-content-between">
                <h6>Still got more questions?</h6>
                <h6>contact us today</h6>
            </div>
            <div class="col-6">
                <NuxtLink :to="{ name: 'ContactUs' }">
                    <button>CONTACT US</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>