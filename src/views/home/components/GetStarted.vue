<template>
    <div style="background-color: #fff;">
        <v-row style="width:90%; margin:auto; padding: 80px 0;">
            <v-col cols="6">
                <p style="color:#042C5B; font-size:4em; font-weight: 700; margin-top: 180px;">
                    Earn Over<br /> ₦50,000 Monthly<br /> As A Rider.
                </p>
                <v-btn style="text-transform: capitalize; font-size: 20px; font-weight: 500;" color="secondary"
                    width="250px" height="60px">Get Started
                </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="6">
                <div class="get-started-bg">
                    <img width="100%" height="auto" src="../../../assets/img/get-started-bg.png" />
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'getStarted',
}
</script>

<style>
.download-btn:hover {
    background-color: #042C5B;
}
</style>