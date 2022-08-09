<template>
    <v-row style="width:90%; margin:auto" class="welcome-banner-row">
        <v-col cols="12" data-aos="zoom-out">
            <v-card flat color="transparent">
                <p class="deliver-packages-header">

                    404 - Page Not Found
                </p>
                <p class="deliver-packages-text">
                    Return to <router-link link to="home">Home</router-link>
                </p>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'pagenotfound'
}
</script>

<style scoped>
.deliver-packages-header {
    color: #042C5B;
    font-size: 72px;
    font-weight: 700;
    padding-top: 250px;
    text-align: center;
}

.deliver-packages-text {
    color: #525252;
    font-size: 2em;
    font-weight: 500;
    text-align: center;
}

.welcome-banner-row {
    padding-bottom: 100px;
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

@media only screen and (max-width: 1000px) {
    .deliver-packages-header {
        font-size: 45px;
        font-weight: 800;
    }

    .deliver-packages-text {
        font-size: 20px;
    }

    .welcome-banner-row {
        padding-bottom: 300px;
    }
}
</style>