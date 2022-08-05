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
                <div class="d-flex flex-row justify-end mt-5">
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
.download-btn:hover {
    background-color: #042C5B;
}

.link-text {
    text-decoration-line: underline;
    color: #F4842B;
}
</style>