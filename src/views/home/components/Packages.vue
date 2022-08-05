<template>
    <div style="background-color: #fff;">
        <p class="package-header">
            We Deliver More Than Your Packages
        </p>
        <v-row style="width:90%; margin:auto; padding: 20px 0;">
            <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                <div class="packages-box d-flex justify-center align-center">
                    <img width="70%" height="auto" src="../../../assets/img/Layer_36.svg" />
                </div>
                <div class="pakages-text mt-4">
                    <h2>Safety</h2>
                    <p>Deliver your packages with peace of mind </p>
                </div>
            </v-col>
            <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                <div class="packages-box d-flex justify-center align-center">
                    <img width="70%" height="auto" src="../../../assets/img/track_delivery.svg" />
                </div>
                <div class="pakages-text mt-4">
                    <h2>Delivery Tracking</h2>
                    <p>Know where your package is at any time.</p>
                </div>
            </v-col>
            <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                <div class="packages-box d-flex justify-center align-center">
                    <img width="70%" height="auto" src="../../../assets/img/Layer_43.svg" />
                </div>
                <div class="pakages-text mt-4">
                    <h2>Swift Delivery</h2>
                    <p>Quick response from riders to deliver your
                        packages.</p>
                </div>
            </v-col>
            <v-col cols="12" md="3" sm="12" xs="12">
                <div class="packages-box d-flex justify-center align-center">
                    <img width="70%" height="auto" src="../../../assets/img/Easy_paymnt.svg" />
                </div>
                <div class="pakages-text mt-4">
                    <h2>Quick Payment</h2>
                    <p>Easy and fast payment for services on the app.</p>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'packages',
}
</script>

<style scoped>
.packages-box {
    width: 100%;
    height: 350px;
    background-color: #F3F5F7;
    border-radius: 12px;
}

.package-header {
    font-size: 3.4em;
    width: 90%;
    margin: auto;
    color: #042C5B;
    font-weight: 700;
}
.packages-text h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    color: #141414;
}

.packages-text p {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #525252;
}
@media only screen and (max-width: 600px) {
    .package-header {
        padding-top: 100px;
        width: 80%;
        font-size: 3em;
    }
}
</style>