<template>
    <v-row style="width:90%; margin:auto">
        <v-col cols="12" lg="4" md="5" xs="12">
            <v-card flat color="transparent">
                <p class="deliver-packages-header">
                    Deliver Your<br />
                    Packages<br />
                    Comfortably
                </p>
                <p class="deliver-packages-text">
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
        <v-col cols="12" lg="7" md="7" xs="12">
            <div class="banner-image">
                <img width="100%" height="auto" src="../../../assets/img/group-14.png" />
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
.deliver-packages-header {
    color: #042C5B;
    font-size: 4.5em;
    font-weight: 700;
    padding-top: 250px;
}

.deliver-packages-text {
    color: #525252;
    font-size: 2em;
    font-weight: 500;
}
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
    background-color: #042C5B;
}

@media only screen and (max-width: 1650px) {
    .deliver-packages-header {
        padding-top: 150px;
        font-size: 72px;
    }

    .deliver-packages-text {
        font-size: 2em;
    }
}


@media only screen and (max-width: 1500px) {
    .deliver-packages-header {
        padding-top: 180px;
        font-size: 55px;
    }

    .deliver-packages-text {
        font-size: 20px;
    }
}
@media only screen and (max-width: 600px) {
.deliver-packages-header {
padding-top: 150px;
    font-size: 45px;
    font-weight: 800;
}

.deliver-packages-text {
    font-size: 20px;
}
.download-btn {
    width: 180px;
    height: 60px;
    background-size: 90px 40px;
}
}
</style>