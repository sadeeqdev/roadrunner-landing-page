<template>
    <div>
        <v-app-bar class="navbar" height="90px" style="background-color:transparent"
            :class="{ 'setScrollColor': scrolled, 'white': scrolled }" elevate-on-scroll fixed>
            <div class="navbar-body d-flex flex-row">
                <img @click="$router.push('/')" class="navbar-image" src="../assets/img/Roadrunner-Logo.svg">
                <v-spacer></v-spacer>
                <v-btn @click="drawer = true" class="d-flex d-sm-none" icon>
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                <div class="navbar-buttons mt-4 d-none d-md-flex">
                    <v-btn x-large text link to="/howitworks">
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
                    <v-btn x-large text link to="/finance">
                        Finance
                    </v-btn>
                    <v-btn x-large text link to="/faqs">
                        FAQs
                    </v-btn>
                    <v-btn color="#042C5B" link to="/signup"
                        style="margin-right:20px; border: 2px solid #042C5B; font-weight: 500; width:160px;" x-large
                        outlined>
                        Log In
                    </v-btn>

                    <v-btn color="#042C5B" link to="/signup" style="color:white; font-weight: 500; width:160px" x-large>
                        Sign Up
                    </v-btn>
                </div>
            </div>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" fixed temporary>
            <div class="d-flex flex-row justify-center">
                <img @click="$router.push('/')" style="width:70px; margin-top: 10px; "
                    src="../assets/img/Roadrunner-Logo.svg">
            </div>
            <v-list nav dense class="px-0">
                <v-list-item-group link>
                    <v-list-item link to="/howitworks" class="py-0">
                        <v-list-item-icon>
                            <v-icon color="#042C5B">
                                mdi-arrow-right-thin
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>How It Works</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="/contactus">
                        <v-list-item-icon>
                            <v-icon color="#042C5B">
                                mdi-arrow-right-thin
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Contact Us</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="/about">
                        <v-list-item-icon>
                            <v-icon color="#042C5B">
                                mdi-arrow-right-thin
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>About</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="/finance">
                        <v-list-item-icon>
                            <v-icon color="#042C5B">
                                mdi-arrow-right-thin
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Finance</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="/faqs">
                        <v-list-item-icon>
                            <v-icon color="#042C5B">
                                mdi-arrow-right-thin
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>FAQs</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="/signup">
                        <v-list-item-icon>
                            <v-icon color="#042C5B">
                                mdi-arrow-right-thin
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Login</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="/signup">
                        <v-list-item-icon>
                            <v-icon color="#042C5B">
                                mdi-arrow-right-thin
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Sign Up</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data: () => ({
        scrolled: false,
        drawer: false,
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

.v-list-item--active {
    background-color: #042C5B;
    color: #F3F5F7
}

.v-btn--active,
.v-list-item--active {
    color: #F4842B;
    background-color: #fff !important;
    ;
    background: none !important;
    ;
}

.v-btn::before,
.v-list-item::before {
    background-color: transparent;
}

.v-btn:hover,
.v-list-item:hover {
    color: #042C5B;
}

.v-btn--active:hover,
.v-list-item--active {
    color: #F4842B;
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
        width: 50px;
            height: 50px;
        padding-top: 0px;
        margin-top: 0;
    }
.v-app-bar {
    height: 75px !important;
}
}
</style>
