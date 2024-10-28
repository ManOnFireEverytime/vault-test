<template>
    <div class="container-fluid">
        <div class="header">
            <h2>Terms And Conditions</h2>
            <p>last updated january 2024</p>
        </div>
        <div class="content-wrapper">
            <div class="content-left">
                <h4 id="head">Terms And Condition</h4>
                <h4>privacy</h4>
                <h4>Returns</h4>
            </div>
            <div class="content-right">
                <p>Welcome to Vault. By accessing and using this website, you agree to be bound by the following terms and conditions. Please read them carefully before making any purchase.
                 If you do not agree with these terms, you should not use our site.
                </p>
                <ol>
                    <li>General InformationVault is an e-commerce platform, and all purchases made on this site are subject to these terms and conditions. You can contact us at support@vault.com for any inquiries.Our business operates from [insert address], and all products are sold and shipped from this location.</li>
                    <li>Eligibility to UseBy using our website, you confirm that you are at least 18 years of age, or you have the consent of a legal guardian to use the platform. You also agree to provide accurate, up-to-date account information when registering or making a purchase.</li>
                    <li>Products and PricingVault offers a wide range of products, and all prices are listed in [currency]. We reserve the right to modify product pricing, availability, and descriptions at any time without prior notice. If there is an error in the pricing or description, we reserve the right to cancel any orders affected by these errors.</li>
                    <li> OrdersAll orders placed on Vault are subject to our acceptance. We may cancel or refuse orders for any reason, including stock limitations, errors in product information, or concerns regarding potential fraud. Once your order is confirmed, we will send you an email detailing the order and shipping information.</li>
                    <li> Payment MethodsWe accept various payment methods, including [list methods]. All payments must be made in full at the time of purchase, and your order will not be dispatched until we receive the payment.</li>
                    <li>Shipping and DeliveryShipping fees are calculated based on your location and will be displayed at checkout. While we aim to ship orders within [number] working days, delivery times may vary depending on the destination. Vault is not responsible for any delays caused by postal services or customs.</li>
                    <li>Intellectual PropertyAll content on Vault’s website, including images, text, and logos, is owned by Vault and is protected under copyright and intellectual property laws. Any unauthorized use, reproduction, or distribution of this content is strictly prohibited</li>
                    <li>Changes to TermsVault reserves the right to modify these terms and conditions at any time. It is your responsibility to check this page for any updates. Your continued use of the website indicates acceptance of any changes made.If you have any questions regarding these terms and conditions, feel free to contact us at support@vault.com.</li>
                </ol>
            </div>  
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container-fluid{
    padding: 80px;
    background: #092120;
    margin-left: auto;
    margin-right: auto;

}
.header{
 text-align: center;

}
.header h2{
    color: #fff;
    font-size: 2.5rem;
    text-transform: uppercase;
    padding-top: 2rem;
    padding-bottom: 1rem;
}
.header p{
    color: #738584;
    font-size: 1.5rem;
}
.content-wrapper{
    display: flex;
    padding-top: 4%;
}
.content-left{
    flex-basis: 30%;
    text-align: right;
    padding-right: 20px;
}
.content-left #head{
    text-decoration: underline;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 100;
    padding-bottom: 10px;
    
}
.content-left h4{
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 100;
    padding-bottom: 10px;
}
.content-right{
    flex-basis: 50%;
    padding-left: 20px;
    border-left: 1px solid;
}
.content-right p{
    padding-bottom: 10px;
    line-height: 1.5;
}
.content-right ol li{
    display: list-item;
    list-style-position: inside;
    list-style-type: decimal;
    padding-bottom: 15px;
    line-height: 1.5;
}

</style>