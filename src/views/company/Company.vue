<template>
    <div class="company-body" data-aos="fade-left">
        <div class="company-inner-body">
            <div class="company-inner-text">
                <p class="company-header-text">
                    About Roadrunner
                </p>
            </div>
            <v-row class="mission-statement d-flex flex-row justify-space-between">
                <v-col cols="12" md="7" xs="12" class="d-flex flex-row align-center">
                    <div>
                        <p class="mission-header">
                            Our Mission Statement
                        </p>
                        <p class="mission-text">
                            Our mission is to deliver a positive, reliable experience to each and every one of our
                            clients
                            while offering exceptional value in the marketplace and setting the standard for
                            professionalism
                            in the logistic solutions we provide.
                        </p>
                    </div>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" md="5" xs="12" class="d-flex justify-end">
                    <img class="message-bar-img rounded" src="../../assets/img/timeline-img-4.png" />
                </v-col>
            </v-row>
        </div>
        <div class="message-bar" data-aos="fade-up">
            <v-row class="message-bar-container d-flex flex-row justify-space-between">
                <v-col cols="12" md="5" xs="12" data-aos="fade-up">
                    <img class="message-bar-img" src="../../assets/img/ceo-img.png" />

                </v-col>
                <v-col cols="12" md="7" xs="12" class="d-flex flex-row align-center" data-aos="fade-up">
                    <div>
                        <p class="message-header">
                            Message From The CEO
                        </p>
                        <p class="message-text">
                            "At Roadrunner, our operating philosophy is founded on maintaining the highest level of
                            quality
                            service in the most efficient manner possible. We are committed to continuous process
                            improvement through leadership, innovation, and technology"
                        </p>
                        <p class="message-sub-text">
                            Mustapha Ibrahim
                        </p>
                        <p class="message-end-text">
                            Founder/CEO, Road Runner.
                        </p>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        reverse: true,
    }),
}
</script>

<style scoped>
.company-body {
    background-color: #F5F5F5;
}

.company-header-text {
    font-weight: 700;
    font-size: 52px;
    color: #042C5B;
}

.company-inner-body {
    width: 90%;
    margin: auto;
    padding-top: 140px;
}

.mission-header {
    font-weight: 700;
    font-size: 32px;
    color: #042C5B;
}

.mission-statement {
    margin: 100px auto;
}

.mission-text {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.04em;
    color: #141414;
}

.message-bar {
    background: #042C5B;

}

.message-bar-img {
    width: 80%;
    height: auto
}

.message-bar-container {
    width: 90%;
    padding: 70px 0;
    margin: auto
}

.message-header {
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    color: #FFFFFF;
}

.message-text {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */

    letter-spacing: 0.04em;

    /* Primary/Midnight blue/100 */

    color: #CDD5DE;
}

.message-sub-text {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;

    /* Frame color */

    color: #FEF3EC;
}

.message-end-text {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;

    /* Secondary/Tango */

    color: #F4842B;
}

@media only screen and (max-width: 1000px) {
.message-bar-img {
        width: 100%;
        height: auto
    }
}
</style>