<template>
    <div class="contactus-body" data-aos="fade-left">
        <div class="contactus-inner-body">
            <div class="contactus-inner-text">
                <p class="contactus-header-text">
                    Contact Us
                </p>
                <v-text-field class="contact-search-bar" prepend-inner-icon="mdi-magnify" outlined
                    placeholder=" Search for a question">
                </v-text-field>
            </div>
            <div class="contactus-list d-flex">
                <div>
                    <div class="list-header">
                        Support
                    </div>
                    <div class="list-text">
                        Support@roadrunner.com
                    </div>
                    <div class="list-text">
                        09010020018
                    </div>
                    <div class="list-text">
                        09031126416
                    </div>
                    <div class="list-header">
                        Location
                    </div>
                    <div class="list-text">
                        1st Avenue,Gwarimpa Abuja
                    </div>
                    <div class="list-header">
                        Legal
                    </div>
                    <div link to="/termsandconditions" class="list-text" style="text-decoration-line:underline">
                        Terms & Conditions
                    </div>
                </div>
                <div class="d-flex justify-center" style="display: flex; justify-content:center; width:100%">
                    <video class="contact-bar-bar-vid rounded d-flex justify-center"  width="auto" height="400px" controls>
                        <source src="../../assets/img/road-runner-mobile-animation.mp4" type="video/mp4">
                        Your browser does not support the video
                    </video>
                </div>
                
            </div>
        </div>
        <div class="feedback-bar" data-aos="fade-up">
            <div class="feedback-body">
                <v-row>
                    <v-col cols="12" md="6" xs="12" class="d-flex align-center">
                        <div class="feedback-text">
                            Send In Your Feedback, Complaints & Get Instant Response.
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" xs="12">
                        <v-card class="complain-form">
                            <label>Full Name</label>
                            <v-text-field outlined placeholder="Enter full name"></v-text-field>
                            <label>Email Address</label>
                            <v-text-field outlined placeholder="Enter address"></v-text-field>
                            <label>What Is Your Complain</label>
                            <v-text-field outlined placeholder="Enter complain"></v-text-field>
                            <label>Package Description</label>
                            <v-textarea multiline rows="3" outlined placeholder="Enter description"></v-textarea>
                            <v-btn width="100%" height="50px"
                                style="font-size: 18px; font-weight: 500; line-height: 31px; color: #FEF3EC;"
                                color="secondary">Submit
                                Complain</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contactus',
    data: () => ({
        reverse: true,
    }),
}
</script>

<style scoped>
.contactus-body {
    background-color: #fff;
}

.contactus-header-text {
    font-weight: 700;
    font-size: 52px;
    color: #042C5B;
}

.contactus-inner-body {
    width: 90%;
    margin: auto;
    padding-top: 140px;
}

.contactus-list {
    margin-top: 50px;
    padding-bottom: 50px;
}

.list-header {
    margin-top: 30px;
    font-size: 28px;
    font-weight: 600;
    color: #042C5B;
}

.list-text {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.04em;
    color: #F4842B;
}

.feedback-bar {
    background-color: #F3F5F7;
}

.feedback-body {
    width: 90%;
    margin: 50px auto;
    padding: 70px 0;
}

.feedback-text {
    font-weight: 700;
    font-size: 72px;
    color: #042C5B;
}

.complain-form {
    padding: 60px;
    width: 80%;
    float: right;
}

.complain-form label {
    font-weight: 700;
    font-size: 16px;
    color: #525252;
    padding-bottom: 10px;
}

.contact-search-bar {
    width: 70%;
    margin: auto
}

@media only screen and (max-width: 1000px) {
    .contact-search-bar {
        width: 100%;
    }

    .complain-form {
        padding: 40px 20px;
        width: 100%;
        float: right;
    }
}

@media only screen and (max-width: 1000px) {
.contact-bar-vid {
        width: 100%;
        height: auto
    }
}
</style>