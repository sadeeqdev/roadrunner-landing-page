<template>
    <div style="background-color: #042C5B;">
        <v-row style="width:90%; margin:auto; padding: 80px 0;">
            <v-col md="7" xs="12">
                <p style="color:#fff; font-size:4em; font-weight: 700">
                    Download The Road Runner App Now
                </p>
            </v-col>
            <v-spacer></v-spacer>
            <v-col md="4" xs="12">
                <div class="d-flex flex-row justify-end justify-sm-start mt-5">
                    <div class="download-btn">
                    </div>
                    <div class="download-btn">
                    </div>
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
.download-btn {
    background-color: black;
    width: 180px;
    height: 70px;
    margin-right: 20px;
    color: white;
    border-radius: 12px;
    padding: 20px;
    cursor: pointer;
    background-size: 120px 50px;
    background-position: center;
}

.download-btn:first-child {
    background-image: url('../../../assets/img/download-apple-logo.svg');
}
.download-btn:last-child {
    background-image: url('../../../assets/img/download-android-logo.svg');
}
.download-btn:hover {
    background-color: #cfcfcf;
}

.link-text {
    text-decoration-line: underline;
    color: #F4842B;
}
@media only screen and (max-width: 600px) {
    .download-btn {
        width: 180px;
        height: 60px;
        background-size: 90px 40px;
    }
}
</style>