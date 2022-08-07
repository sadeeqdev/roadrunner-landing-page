<template>
    <div style="background-color: #fff;">
        <v-row class="get-started-body d-flex d-column-reverse" data-aos="fade-up">
            <v-col cols="12" md="6" sx="12">
                <p class="earn-monthly">
                    Earn Over<br /> ₦50,000 Monthly<br /> As A Rider.
                </p>
                <v-btn style="text-transform: capitalize; font-size: 20px; font-weight: 500;" color="secondary"
                    width="250px" height="60px">Get Started
                </v-btn>
            </v-col>
            <v-col cols="12" md="6" xs="12" data-aos="fade-down">
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

<style scoped>
.get-started-body {
    width: 90%;
    margin: auto;
    padding: 80px 0;
}

.earn-monthly{
    color: #042C5B;
    font-size: 4em;
    font-weight: 700;
    margin-top: 180px;
}

@media only screen and (max-width: 600px) {
.get-started-body {
    width: 95%;
    margin: auto;
    padding: 0px 0;
    text-align: center;
        display: flex;
        flex-direction: column-reverse;
}

.earn-monthly {
    color: #042C5B;
    font-size: 3em;
    font-weight: 700;
    text-align: center;
    margin-top: 50px;
}
}
</style>