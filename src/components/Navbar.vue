<template>
    <v-app-bar style="background-color:transparent" :class="{ 'setScrollColor': scrolled, 'white': scrolled }"
        elevate-on-scroll fixed class="nav-appbar">
        <div class="navbar-body d-flex flex-row">
            <img class="navbar-image" src="../assets/img/Roadrunner-Logo.svg">
            <v-spacer></v-spacer>
            <div class="navbar-buttons mt-4 d-none d-md-flex">
                <v-btn x-large text>
                    How it works
                </v-btn>
                <v-btn x-large text>
                    Company
                </v-btn>
                <v-btn x-large text>
                    Finance
                </v-btn>
                <v-btn x-large text>
                    FAQs
                </v-btn>
                <v-btn color="#042C5B"
                    style="margin-right:20px; border: 2px solid #042C5B; font-weight: 500; width:160px;" x-large
                    outlined>
                    Log In
                </v-btn>

                <v-btn color="#042C5B" style="color:white; font-weight: 500; width:160px" x-large>
                    Sign Up
                </v-btn>
            </div>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    name: 'Navbar',
    data: () => ({
        scrolled: false
    }),
    methods: {
        handleScroll() {
            if (window.scrollY > 50) {
                this.scrolled = true
            } else {
                this.scrolled = false
            }
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },

}
</script>

<style scoped>
.nav-appbar {
    height: 100px;
}

.navbar-image {
    width: 98px;
    height: 98px;
    padding-top: 10px;

}

.navbar-body {
    width: 92%;
    margin: auto;
}

.navbar-buttons {
    font-weight: 500;
    font-size: 18px;
}

.setScrollColor {
    background-color: white;
    height: 100px;
}

@media only screen and (max-width: 600px) {
    .navbar-body {
        width: 100%;
        margin: auto;
    }

    .navbar-image {
        width: 60px;
        height: 60px;
        padding-top: 0px;

    }
}
</style>
