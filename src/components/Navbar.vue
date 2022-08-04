<template>
    <v-app-bar style="background-color:transparent" :class="{ 'setScrollColor': scrolled, 'white': scrolled }"
        elevate-on-scroll fixed height="100px">
        <div style="width:92%; margin:auto;" class="d-flex flex-row">
            <img style=" width: 98px; height:98px; padding-top: 10px;" src="../assets/img/Roadrunner-Logo.svg">
            <v-spacer></v-spacer>
            <div class="navbar-buttons mt-4">
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
.navbar-buttons {
    font-weight: 500;
    font-size: 18px;
}

.setScrollColor {
    background-color: white;
}
</style>
