<template>
    <div class="register-body">
        <p class="register-header" data-aos="fade-up">
            Get Started With Road Runner
        </p>
        <v-row style="width:90%; margin:20px auto; padding: 20px 0;" class="d-flex flex-row justify-space-between">
            <div data-aos="fade-up" data-aos-delay="100">
                <div class="register-packages-box d-flex justify-center align-center">
                    <img width="50%" height="auto" src="../../../assets/img/Customer.png" />
                </div>
                <div class="pakages-text mt-4">
                    <h2>Register as a Customer</h2>
                    <p>I want to order rides to deliver my packages.</p>
                    <span class="link-text">Get Started</span>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
                <div class="register-packages-box d-flex justify-center align-center">
                    <img width="50%" height="auto" src="../../../assets/img/Rider.png" />
                </div>
                <div class="pakages-text mt-4">
                    <h2>Register as a Rider</h2>
                    <p>I want to get requests to deliver packages.</p>
                    <span class="link-text">Get Started</span>
                </div>

            </div>
            <div data-aos="fade-up" data-aos-delay="300">
                <div class="register-packages-box d-flex justify-center align-center">
                    <img width="50%" height="auto" src="../../../assets/img/Business.png" />
                </div>
                <div class="pakages-text mt-4">
                    <h2>Register as a Business</h2>
                    <p>I am an individual/company with a fleet of riders
                    </p>
                    <span class="link-text" text>Get Started</span>
                </div>
            </div>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'register',
}
</script>

<style scoped>
.register-body {
    padding: 120px 0px;
    background-color: #FEF3EC;
}

.register-header {
    font-size: 3.4em;
    width: 90%;
    margin: auto;
    color: #042C5B;
    font-weight: 700;
}
.register-packages-box {
    width: 50px;
    height: 50px;
    background-color: #FFFCFA;
    border-radius: 12px;
}

.packages-text h2 {
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    color: #141414;
}

.packages-text p {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #525252;
}

.link-text {
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    text-decoration-line: underline;
    color: #F4842B;
}

@media only screen and (max-width: 600px) {
    .register-header {
        font-size: 2.4em;
        width: 90%;
    }

    .register-body {
        padding: 50px 0px;
    }

    .register-packages-box {
        margin-top: 40px
    }
}
</style>