<template>
    <v-app-bar height="90px" style="background-color:transparent"
        :class="{ 'setScrollColor': scrolled, 'white': scrolled }" elevate-on-scroll fixed class="nav-appbar">
        <div class="navbar-body d-flex flex-row">
            <img @click="$router.push('/')" class="navbar-image" src="../assets/img/Roadrunner-Logo.svg">
            <v-spacer></v-spacer>
            <v-btn class="d-flex d-sm-none" icon>
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <div class="navbar-buttons mt-4 d-none d-md-flex">
                <v-btn @click="$router.push('/howitworks')" x-large text>
                    How it works
                </v-btn>
                <v-menu rounded offset-y>
                    <template v-slot:activator="{ attrs, on }">
                        <v-btn v-bind="attrs" v-on="on" x-large text>
                            Company<v-icon>mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item link to="/about">
                            <v-list-item-title>About</v-list-item-title>
                        </v-list-item>
                        <v-list-item link to="/contactus">
                            <v-list-item-title>Contact Us</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-btn @click="$router.push('/finance')" x-large text>
                    Finance
                </v-btn>
                <v-btn @click="$router.push('/faqs')" x-large text>
                    FAQs
                </v-btn>
                <v-btn @click="$router.push('/signup')" color="#042C5B"
                    style="margin-right:20px; border: 2px solid #042C5B; font-weight: 500; width:160px;" x-large
                    outlined>
                    Log In
                </v-btn>

                <v-btn @click="$router.push('/signup')" color="#042C5B"
                    style="color:white; font-weight: 500; width:160px" x-large>
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
    width: 90px;
    height: 90px;
        margin-top: 5px;
    cursor: pointer

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
        margin-top: 0;
    }
}
</style>
