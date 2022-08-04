<template>
    <v-row style="width:90%; margin:auto; padding:150px 0;">
        <v-col cols="6">
            <v-card class="px-12 py-15" style="width:76%; margin:0">
                <p style="font-size:2em; color:#000; font-weight: 700;">
                    Estimate Delivery
                </p>
                <v-text-field outlined placeholder="Enter pick-up location">
                    <template v-slot:prepend-inner>
                        <v-icon color="primary">mdi-crosshairs-gps</v-icon>
                    </template>
                </v-text-field>
                <v-text-field outlined width="300px" placeholder="Enter drop-off location">
                    <template v-slot:prepend-inner>
                        <v-icon color="secondary">mdi-map-marker-outline</v-icon>
                    </template>
                </v-text-field>
                <p style="color:#F4842B; font-size:18px; font-weight:500">
                    <v-icon color="#F4842B">mdi-plus</v-icon>
                    Add Drop-off Location
                </p>
                <v-checkbox>Optimize ride</v-checkbox>

                <v-btn style="text-transform: capitalize; font-size: 24px; font-weight: 500;" color="secondary"
                    width="100%" height="60px">Estimate
                    Ride</v-btn>
            </v-card>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="6" class="d-flex justify-center">
            <p style="color:#042C5B; font-size:4em; font-weight: 700;">
                Find & connect to the<br /> nearest rider for your<br /> deliveries with<br /> Roadrunner.
            </p>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'estimateDelivery',
}
</script>

<style>
.download-btn:first-child {
    background-color: black;
    width: 180px;
    height: 70px;
    margin-right: 20px;
    color: white;
    border-radius: 12px;
    padding: 20px;
    cursor: pointer;
    background-image: url('../../../assets/img/download-apple-logo.svg');
    background-size: 120px 60px;
    background-position: center;
}

.download-btn:last-child {
    background-color: black;
    width: 180px;
    height: 70px;
    margin-right: 20px;
    color: white;
    border-radius: 12px;
    padding: 20px;
    cursor: pointer;
    background-image: url('../../../assets/img/download-android-logo.svg');
    background-size: 120px 50px;
    background-position: center;
}

.download-btn:hover {
    background-color: #042C5B;
}
</style>