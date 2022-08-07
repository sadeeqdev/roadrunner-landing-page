<template>
    <div style="
    background-color: #F3F5F7
    " data-aos="fade-left">
        <div class="finance-body">
            <div class="coming-soon-content">
                <div class="d-flex flex-row justify-center">
                    <div class="coming-soon-header">
                        <p class="coming-soon-text">Coming soon <v-icon color="#F4842B">mdi-arrow-right-thin</v-icon>
                        </p>
                        Mobility Finance by RoadRunner
                    </div>
                </div>
                <p class="coming-soon-subheader">Introducing AutoLogistics by RoadRunner, your one stop shop<br />
                    designed to
                    meet all your automobile and
                    Logistics needs.</p>
                <div class="notify-area d-flex flex-row">
                    <v-text-field solo flat label="Enter Email Address" clearable class="notify-text-field"
                        height="60px" background-color="#fff">
                    </v-text-field>
                    <v-btn class="notify-btn" height="60px" color="secondary">Notify Me Early</v-btn>
                </div>
            </div>
        </div>
        <div class="acquire-bar" data-aos="fade-up">
            <v-row>
                <v-col cols="12" md="6" xs="12" class="d-flex flex-row align-center" data-aos="fade-up">
                    <div class="acquire-bar-text">
                        <div class="acquire-header">
                            Acquire New And Pre-Owned Vehicles In A Financially Convenient Manner.
                        </div>
                        <div class="acquire-subheader">
                            Payments via a Hire-purchase and Leasing scheme model
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="6" xs="12" data-aos="fade-up">
                    <div class="acquire-bar-img">
                        <img class="acquire-img rounded" src="../../assets/img/finance-img.svg" />

                    </div>
                </v-col>
            </v-row>
        </div>
        <div class="benefitsandperks-bar">
            <div class="bandf">
                <div class="bandf-header" data-aos="fade-up">
                    Benefits & Perks
                </div>
                <v-row class="benefits-box-bar">
                    <v-col data-aos="fade-up" cols="12" md="3" xs="12">
                        <div class="benefits-box">
                            <div class="benefits-logo">
                                <img class="benfits-img rounded" src="../../assets/img/benefits-img-1.svg" />
                            </div>
                            <div class="benefits-text">
                                Pre-Owned and Brand new vehicle Purchase Financing
                            </div>
                        </div>
                    </v-col>
                    <v-spacer></v-spacer>

                    <v-col data-aos="fade-up" cols="12" md="3" xs="12">
                        <div class="benefits-box">
                            <div class="benefits-logo">
                                <img class="benfits-img rounded" src="../../assets/img/benefits-img-2.svg" />
                            </div>
                            <div class="benefits-text">
                                Wide range of auto dealerships
                            </div>
                        </div>
                    </v-col>
                    <v-spacer></v-spacer>

                    <v-col data-aos="fade-up" cols="12" md="3" xs="12">
                        <div class="benefits-box">
                            <div class="benefits-logo">
                                <img class="benfits-img rounded" src="../../assets/img/benefits-img-3.svg" />
                            </div>
                            <div class="benefits-text">
                                Mobility access for logistics drivers (Driver-preneurs)
                            </div>
                        </div>
                    </v-col>
                    <v-spacer></v-spacer>

                    <v-col data-aos="fade-up" cols="12" md="3" xs="12">
                        <div class="benefits-box">
                            <div class="benefits-logo">
                                <img class="benfits-img rounded" src="../../assets/img/benefits-img-4.svg" />
                            </div>
                            <div class="benefits-text">
                                Fleet financing for logistics companies.
                            </div>
                        </div>
                    </v-col>
                    <v-spacer></v-spacer>

                    <v-col data-aos="fade-up" cols="12" md="3" xs="12">
                        <div class="benefits-box">
                            <div class="benefits-logo">
                                <img class="benfits-img rounded" src="../../assets/img/benefits-img-5.svg" />
                            </div>
                            <div class="benefits-text">
                                Competitive Rates
                            </div>
                        </div>
                    </v-col>
                    <v-spacer></v-spacer>

                    <v-col data-aos="fade-up" cols="12" md="3" xs="12">
                        <div class="benefits-box">
                            <div class="benefits-logo">
                                <img class="benfits-img rounded" src="../../assets/img/benefits-img-6.svg" />
                            </div>
                            <div class="benefits-text">
                                wide range of vehicle brands and Models.
                            </div>
                        </div>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col data-aos="fade-up" cols="12" md="3" xs="12">
                        <div class="benefits-box">
                            <div class="benefits-logo">
                                <img class="benfits-img rounded" src="../../assets/img/benefits-img-7.svg" />
                            </div>
                            <div class="benefits-text">
                                Vehicle inspection report and exclusive auto services
                            </div>
                        </div>
                    </v-col>
                    <v-spacer></v-spacer>

                    <v-col data-aos="fade-up" cols="12" md="3" xs="12">
                        <div class="benefits-box">
                            <div class="benefits-logo">
                                <img class="benfits-img rounded" src="../../assets/img/benefits-img-8.svg" />
                            </div>
                            <div class="benefits-text">
                                Up to 48 months tenor.
                            </div>
                        </div>
                    </v-col>

                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'fianance',
}
</script>

<style >
.finance-body {
    width: 100%;
    background-color: #010F1E;
    margin-top: 90px;
    padding-bottom: 150px
}

.notify-text-field {
    width: 50%;
    margin: auto;
    border-radius: 8px 0px 0px 8px;
    height: 60px;
}

.coming-soon-content {
    padding-top: 200px;
    width: 70%;
    margin: auto;
}

.notify-area {
    width: 50%;
    margin: 30px auto
}

.notify-btn {
    border-radius: 0px 8px 8px 0px;
    height: 60px;
}

.coming-soon-text {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #F4842B;
}

.coming-soon-header {
    font-weight: 700;
    font-size: 72px;
    line-height: 94px;
    color: #F3F5F7;
}

.coming-soon-subheader {
    font-weight: 500;
    font-size: 32px;
    line-height: 141%;
    text-align: center;
    color: #F3F5F7;
    margin-top: 20px
}

.acquire-bar {
    width: 90%;
    margin: auto;
    margin: 200px auto;
}

.acquire-header {
    font-weight: 700;
    font-size: 72px;
    color: #042C5B;
}

.acquire-subheader {
    font-weight: 500;
    font-size: 32px;
    line-height: 141%;
    color: #525252;
}

.acquire-img {
    width: 90%;
    float: right;
}

.benefitsandperks-bar {
    background-color: white;
}

.bandf {
    width: 90%;
    margin: auto;
    padding: 120px 0;
}

.bandf-header {
    font-weight: 700;
    font-size: 72px;
    line-height: 94px;
    color: #042C5B;
}

.benefits-box {
padding: 20px;
background-color: #FEF3EC;
border-radius: 8px;
width: 100%;
min-height: 200px;
}

.benefits-logo {
width: 50px;
height: 50px;
padding: 10px;
background-color: #FDE6D5;
border-radius:8px;
}

.benefits-text {
font-weight: 500;
font-size: 24px;
line-height: 141%;
color: #042C5B;
margin-top:15px
}

.benefits-box-bar{
margin-top: 50px;
}
@media only screen and (max-width: 600px) {
    .coming-soon-header {
        font-weight: 700;
        font-size: 52px;
        line-height: 94px;
        color: #F3F5F7;
    }

    .coming-soon-content {
        padding-top: 70px;
        width: 90%;
        margin: auto;
    }

    .notify-area {
        width: 100%;
        margin: 30px auto
    }

    .acquire-header {
        font-weight: 700;
        font-size: 52px;
        color: #042C5B;
    }

    .acquire-subheader {
        font-weight: 500;
        font-size: 32px;
        line-height: 141%;
        color: #525252;
    }

    .acquire-img {
        width: 100%;
        float: right;
    }
.acquire-bar {
    width: 90%;
    margin: auto;
    margin: 100px auto;
}
}
</style>