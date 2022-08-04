<template>
    <v-row style="width:90%; margin:auto">
        <v-col cols="4">
            <v-card flat color="transparent">
                <p class="deliver-packages-header" style="color:#042C5B; font-size:4.5em; font-weight: 700;">
                    Deliver Your<br />
                    Packages<br />
                    Comfortably
                </p>
                <p class="deliver-packages-text" style="color:#525252; font-size: 2em; font-weight:500;">
                    Deliver Your Packages The Right Way
                </p>
                <div class="d-flex flex-row mt-10">
                    <div class="download-btn">
                    </div>
                    <div class="download-btn">
                    </div>
                </div>
            </v-card>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="7">
            <div class="banner-image">
                <img width="100%" height="auto" src="../../../assets/img/roadrunner-bike.png" />
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'welcomeBanner'
}
</script>

<style scoped>
.download-btn:first-child {
    background-color: black;
    width: 180px;
    height: 70px;
    margin-right: 20px;
    color: white;
    border-radius: 12px;
    padding: 20px;
    cursor: pointer;
    background-image: url('../../../assets/img/download-apple-logo.svg');
    background-size: 120px 60px;
    background-position: center;
}

.download-btn:last-child {
    background-color: black;
    width: 180px;
    height: 70px;
    margin-right: 20px;
    color: white;
    border-radius: 12px;
    padding: 20px;
    cursor: pointer;
    background-image: url('../../../assets/img/download-android-logo.svg');
    background-size: 120px 50px;
    background-position: center;
}

.download-btn:hover {
    background-color: #042C5B;
}
</style>