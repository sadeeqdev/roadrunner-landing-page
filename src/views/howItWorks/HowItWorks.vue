<template>
    <div class="how-body">
        <div class="how-inner-body">
            <div class="how-inner-text">
                <p class="how-header-text">
                    How Roadrunner Works
                </p>
                <p class="how-sub-header">
                    Our main goal is your convenience, we help deliver your package to your desired destination
                </p>
            </div>
            <v-timeline reverse>
                <v-timeline-item large fill-dot>
                    <template v-slot:icon>
                        <div
                            style="width:100%; height:100%; background-color:#FEF3EC; color:#F4842B; font-size:20px; padding-top: 10px; font-weight: 700; border-radius:50px; border:2px solid #F4842B; text-align: center;">
                            <span>1</span>
                        </div>

                    </template>
                    <v-card flat color=" transparent">
                        <img class="timeline-img" style="float: right;" src="../../assets/img/timeline-img-1.png" />
                    </v-card>
                    <v-card color="transparent" flat slot="opposite">
                        <p class="timeline-header-text">
                            Customer opens roadrunner app
                        </p>
                        <p class="timeline-text">
                            Customer opens the app and selects the vehicle type and inputs where their pick-up
                            location
                            and drop-off locations are.
                        </p>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
            <v-timeline>
                <v-timeline-item large fill-dot>
                    <template v-slot:icon>
                        <div
                            style="width:100%; height:100%; background-color:#FEF3EC; color:#F4842B; font-size:20px; padding-top: 10px; font-weight: 700; border-radius:50px; border:2px solid #F4842B; text-align: center;">
                            <span>2</span>
                        </div>
                    </template>
                    <v-card slot="opposite" color="transparent" flat>
                        <p class="timeline-header-text">
                            Customer gets a driver
                        </p>
                        <p class="timeline-text">
                            Customer will select the rider they want to deliver their packages.
                        </p>

                    </v-card>
                    <v-card flat color="transparent">
                        <img class="timeline-img" src="../../assets/img/timeline-img-4.png" />
                    </v-card>
                </v-timeline-item>
            </v-timeline>
            <v-timeline reverse>
                <v-timeline-item large fill-dot>
                    <template v-slot:icon>
                        <div
                            style="width:100%; height:100%; background-color:#FEF3EC; color:#F4842B; font-size:20px; padding-top: 8px; font-weight: 700; border-radius:50px; border:2px solid #F4842B; text-align: center;">
                            <span>3</span>
                        </div>
                    </template>
                    <v-card flat color="transparent">
                        <img class="timeline-img" style="float: right;" src="../../assets/img/timeline-img-3.png" />
                    </v-card>
                    <v-card color="transparent" flat slot="opposite">
                        <p class="timeline-header-text">
                            The Rider picks up the package
                        </p>
                        <p class="timeline-text">
                            Both parties verify each other before the rider onloads the vehicle.
                        </p>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
            <v-timeline>
                <v-timeline-item large fill-dot>
                    <template v-slot:icon>
                        <div
                            style="width:100%; height:100%; background-color:#FEF3EC; color:#F4842B; font-size:20px; padding-top: 8px; font-weight: 700; border-radius:50px; border:2px solid #F4842B; text-align: center;">
                            <span>4</span>
                        </div>
                    </template>
                    <v-card slot="opposite" color="transparent" flat>
                        <p class="timeline-header-text">
                            Rider delivers the package
                        </p>
                        <p class="timeline-text">
                            The app guides the rider through every corner throughout the trip to get to the destination
                            on time.
                        </p>

                    </v-card>
                    <v-card flat color="transparent">
                        <img class="timeline-img" src="../../assets/img/timeline-img-2.png" />
                    </v-card>
                </v-timeline-item>
            </v-timeline>
            <v-timeline reverse>
                <v-timeline-item reverse large fill-dot>
                    <template v-slot:icon>
                        <div
                            style="width:100%; height:100%; background-color:#FEF3EC; color:#F4842B; font-size:20px; padding-top: 8px; font-weight: 700; border-radius:50px; border:2px solid #F4842B; text-align: center;">
                            <span>5</span>
                        </div>
                    </template>
                    <v-card flat color="transparent">
                        <img class="timeline-img" style="float: right;" src="../../assets/img/timeline-img-4.png" />
                    </v-card>
                    <v-card flat class="" color="transparent" slot="opposite">
                        <div>
                            <p class="timeline-header-text">
                                The customer rates the rider
                            </p>
                            <p class="timeline-text">
                                After the ride, the customer rates the rider based on their experience with the rider.
                            </p>
                        </div>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
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
.how-body {
    background-color: #F5F5F5;
    padding-bottom: 50px;
}

.how-header-text {
    font-weight: 700;
    font-size: 52px;
    color: #042C5B;
}

.how-inner-body {
    width: 90%;
    margin: auto;
    padding-top: 140px;
}

.timeline-header-text {
    font-weight: 700;
    font-size: 22px;
    color: #000;
}

.timeline-text {
    font-weight: 500;
    font-size: 18px;
    color: #525252;
}

.theme--light.v-timeline:before {
    background: transparent;
    border-right: 1px dashed #5CBAF6;
}

.how-sub-header {
    font-weight: 500;
    font-size: 22px;
    color: #525252;
}

.timeline-img {
    width: 80%;
    margin: 0 50px;
    height: auto;
}

@media only screen and (min-width: 1800px) {
    .timeline-img {
        width: 500px;
        margin: 0 0px;
        height: auto;
    }
}
@media only screen and (max-width: 600px) {
    .timeline-img {
        width: 100%;
        margin: 0 0px;
        height: auto;
    }
}
</style>