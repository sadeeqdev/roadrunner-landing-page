<template>
    <div class="home-body">
        <div class="welcome-banner">
            <WelcomeBanner />
        </div>
        <EstimateDelivery />
        <GetStarted />
        <Packages />
        <Register />
        <RoadRunnerFinance />
        <DownloadRunner />
    </div>
</template>

<script>
import EstimateDelivery from './components/EstimateDelivery.vue'
import WelcomeBanner from './components/WelcomeBanner.vue'
import GetStarted from './components/GetStarted.vue'
import Packages from './components/Packages.vue'
import Register from './components/Register.vue'
import RoadRunnerFinance from './components/RoadRunnerFinance.vue'
import DownloadRunner from './components/DownloadRunner.vue'
// import Navbar from '../../components/Navbar.vue'
export default {
    name: "home",
    components: { WelcomeBanner, EstimateDelivery, GetStarted, Packages, Register, RoadRunnerFinance, DownloadRunner }
}
</script>

<style scoped>
.home-body {
    width: 100%;
    background-color: #F3F5F7;
    /* margin: auto;
    background-image: url('../../assets/img/roadrunner-background.png');
    background-size: 100% 1000px;
    background-repeat: no-repeat; */
}

.welcome-banner {
    width: 100vw;
    height: auto;
    padding-bottom: 100px;
    background-image: url('../../assets/img/roadrunner-background.png');
    background-size: 100vw auto;
    background-repeat: no-repeat;
}
@media only screen and (max-width: 1300px) {
    .welcome-banner {
        width: 100vw;
        height: auto;
        padding-bottom: 100px;
        background-image: url('../../assets/img/roadrunner-background.png');
        background-size: 300vw 900px;
        background-repeat: no-repeat;
    }
}
</style>
