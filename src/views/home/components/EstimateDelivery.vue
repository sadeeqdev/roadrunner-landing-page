<template>
    <v-row class="estimate-delivery-body">
        <v-col cols="12" md="6" sm="12" xs="12">
            <v-card class="estimate-delivery-box">
                <p style=" font-size:2em; color:#000; font-weight: 700;">
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
        <v-col md="6" sm="12" xs="12" class="d-flex justify-center">
            <p class="find-and-connect">
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

<style scoped>
 .estimate-delivery-box{
    width: 76%;
    margin: 0;
    padding: 40px 45px;
 }

 .find-and-connect {
     color: #042C5B;
     font-size: 4em;
     font-weight: 700;
 }
.estimate-delivery-body {
    width: 90%;
    margin: auto;
    padding: 150px 0;
}

 @media only screen and (max-width: 600px) {
.estimate-delivery-box {
    width: 100%;
    margin: 0;
    padding: 40px 25px;}

.estimate-delivery-body {
    width: 99%;
    margin: auto;
    padding: 0px 0px 80px 0px;
        display: flex;
        flex-direction: column-reverse;
        ;
    }
    
    .find-and-connect {
        color: #042C5B;
        font-size: 3em;
        font-weight: 700;
        padding: 00px 12px;
    }
    
    }
</style>