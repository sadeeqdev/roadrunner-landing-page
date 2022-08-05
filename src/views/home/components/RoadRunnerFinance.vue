<template>
    <div style="background-color: #fff;">
        <v-row style="width:95%; margin:auto; padding: 80px 0;">
            <v-col cols="12" class="d-flex flex-column justify-center">
                <p class="finance-header" style="">
                    With <span class="link-text">Roadrunner Finance</span> You Can Drive Your Dream Car, Bike, Or Van
                    With One Of Our
                    Partners.
                </p>
                <div class="d-flex mt-8 justify-center">
                    <v-btn style="text-transform: capitalize; font-size: 20px; font-weight: 500;" color="secondary"
                        width="300px" height="60px">Coming To You Soon <v-icon>mdi-arrow-right-thin</v-icon>
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'roadRunnerFinance.vue',
}
</script>

<style scoped>
.finance-header {
    color: #042C5B;
    text-align: center;
    font-size: 4em;
    font-weight: 700;
    margin-top: 70px;
}

.link-text {
    text-decoration-line: underline;
    color: #F4842B;
}
@media only screen and (max-width: 600px) {
    .finance-header {
        color: #042C5B;
        text-align: left;
        font-size: 3em;
        font-weight: 700;
        margin-top: 70px;
    }
}
</style>