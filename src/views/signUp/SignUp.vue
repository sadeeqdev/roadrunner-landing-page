<template>
    <div class="signup-body" data-aos="fade-left">
        <v-row>
            <v-col cols="12" md="6" xs="12" class="form-side">
                <div class="signup-content">
                    <v-card flat class="signup-form">
                        <v-btn large icon class="mb-2" @click="$router.go(-1)">
                            <v-icon color="black">mdi-arrow-left</v-icon>
                        </v-btn>
                        <div class="signup-form-header">
                            Let’s Get You started
                        </div>
                        <label>Full Name</label>
                        <v-text-field outlined placeholder="Enter full name"></v-text-field>
                        <label>Email Address</label>
                        <v-text-field outlined placeholder="Enter Email"></v-text-field>
                        <label>Phone Number</label>
                        <v-text-field outlined placeholder="Enter Phone Number"></v-text-field>
                        <label>State Of Residence</label>
                        <v-text-field outlined placeholder="Enter State Of Residence"></v-text-field>
                        <label>Password</label>
                        <v-text-field outlined placeholder="Enter Password"></v-text-field>
                        <v-btn width="100%" height="50px"
                            style="font-size: 18px; font-weight: 500; line-height: 31px; color: #FEF3EC;"
                            color="secondary">Continue
                            Sign Up</v-btn>
                        <p class="mt-4">By clicking request ride, you have agreed to our terms & conditions and privacy
                            policy</p>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="12" md="6" xs="12" class="signup-image d-flex flex-column align-center justify-center">
                <div class="signup-image-content">
                    <div class="signup-image-header mb-15 pb-16">
                        Make deliveries across your city
                    </div>
                    <img width="50%" height="auto" src="../../assets/img/login-img.svg" />
                    <div class="mt-16 pt-16">
                        Request for bikes, tricycles, cars, mini-vans, and trucks.
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'signup',
    data: () => ({
        reverse: true,
    }),
}
</script>

<style scoped>
.signup-body {
    background-color: #FEF3EC;
    }
    
    .form-side {
    background-color: #fff;
}
.signup-content {
    width: 100%;
    margin-left: 10%;
}

.signup-image-content {
    width: 90%;
    margin: auto
}

.signup-image {
    background-color: #FEF3EC;
    text-align: center;
    height: 100vh;
}

.signup-form {
    margin: 110px 0;
    width: 70%;
}

.signup-form label {
    font-weight: 700;
    font-size: 16px;
    color: #525252;

}

.signup-form-header {
    font-weight: 700;
    font-size: 32px;
    color: #000000;
    padding-bottom: 30px;
}

.signup-image-header {
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    color: #042C5B;
    margin: 150px 0;
}

@media only screen and (max-width: 1000px) {
    .signup-image-content {
        width: 90%;
        margin: auto
    }

    .signup-content {
        width: 90%;
            margin: auto;
    }

    .signup-form {
        margin: 215px 0;
        width: 100%;
    }
.signup-image-header {
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    color: #042C5B;
    margin: 215px 0;
}
}
</style>