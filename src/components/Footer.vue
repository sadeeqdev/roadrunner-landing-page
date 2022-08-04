<template>
    <v-card class="d-flex flex-column" style="width:90%; margin:80px auto" color="transparent" elevation="0"
        height="auto">
        <div class="d-flex flex-row pb-8" style="border-bottom:2px solid #F3F5F7">
            <img style="width: 98px; height:98px; padding-top: 10px;" src="../assets/img/Roadrunner-Logo.svg">
            <v-spacer></v-spacer>
            <div>
                <v-btn class="navbar-buttons" x-large text>
                    How it works
                </v-btn>
                <v-btn class="navbar-buttons" x-large text>
                    About Us
                </v-btn>
                <v-btn class="navbar-buttons" x-large text>
                    Work With Us
                </v-btn>
                <v-btn class="navbar-buttons" x-large text>
                    Support
                </v-btn>
                <v-btn class="navbar-buttons" x-large text>
                    Legal
                </v-btn>
                <v-btn class="navbar-buttons" x-large text>
                    FAQs
                </v-btn>
            </div>
        </div>
        <div class="d-flex flex-row mt-5 pb-2">
            <p style="font-weight: 400; color:#042C5B; margin-top: 15px;" class="mr-3">
                Copyright © 2022, Road Runner
            </p>
            <v-btn class="navbar-buttons" style="font-weight: 500;" x-large text>
                Privacy Policy
            </v-btn>
            <v-btn class="navbar-buttons" style="font-weight: 500;" x-large text>
                Terms & Conditions
            </v-btn>
            <v-spacer></v-spacer>
            <div class="d-flex flex-row">
                <v-btn width="45px" height="45px" elevation="0"
                    class="packages-box mr-2 d-flex justify-center align-center">
                    <img width="40%" height="50%" src="../assets/img/facebook-logo.svg" />

                </v-btn>
                <v-btn width="45px" height="45px" elevation="0"
                    class="packages-box d-flex justify-center align-center mr-2">
                    <img width="70%" height="50%" src="../assets/img/twitter-logo.svg" />

                </v-btn>
                <v-btn width="45px" height="45px" elevation="0" class="packages-box d-flex justify-center align-center">
                    <img width="70%" height="50%" src="../assets/img/instagram-logo.svg" />

                </v-btn>
            </div>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'Footer',

}
</script>

<style scoped>
.packages-box {
    width: 50px;
    height: 50px;
    background-color: #F3F5F7;
    border-radius: 12px;
}

.navbar-buttons {
    font-weight: 600;
    font-size: 18px;
    text-transform: capitalize;
    color: #042C5B
}
</style>
