<template>
    <div class="faqs-body" data-aos="fade-left">
        <div class="faqs-inner-body">
            <div class="faqs-inner-text">
                <p class="faqs-header-text">
                    Frequently Asked Questions
                </p>
                <p class="faqs-subheader">
                    Here are some questions that have been asked.
                </p>
            </div>
            <div class="faqs-panel">
                <v-text-field prepend-inner-icon="mdi-magnify" outlined placeholder=" Search for a question"
                    width="100%">

                </v-text-field>
                <v-expansion-panels style="background-color: #F5F5F5;" flat color="#F5F5F5">
                    <v-expansion-panel style="background-color: #F5F5F5; border-bottom: 1px solid #cccccc;"
                        color="#F5F5F5" v-for="(item, i) in panelData" :key="i">
                        <v-expansion-panel-header class="faq-panel-header px-0">
                            {{ item.header }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="faq-panel-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        reverse: true,
        panelData: [
            { "header": "How can I create a new account?", "content": "" },
            { "header": "How can I request for a delivery?", "content": "" },
            { "header": "Can you deliver more than one package or multiple deliveries?", "content": "" },
            { "header": "Can I track my Rider?", "content": "" },
            { "header": "Can I manage my fleet of vehicles?", "content": "" },
            { "header": "How do I withdraw my money?", "content": "" },
            { "header": "What's the percentage commission for Roadrunner?", "content": "" },
            { "header": "Is my information protected?", "content": "" },
            { "header": "Are my card details safe on the app?", "content": "" }
        ]
    }),
}
</script>

<style scoped>
.faqs-body {
    background-color: #F5F5F5;
}

.faqs-header-text {
    font-weight: 700;
    font-size: 52px;
    color: #042C5B;
}

.faqs-inner-body {
    width: 90%;
    margin: auto;
    padding-top: 140px;
    padding-bottom: 100px;
}

.faqs-panel {
    width: 70%;
    margin: 70px auto;
}

.faqs-subheader {
    font-weight: 500;
    font-size: 22px;
    color: #525252;
}

.faq-panel-header {
    font-weight: 500;
    font-size: 20px;
    line-height: 31px;
    color: #141414;
}

/* .faq-panel-content {} */


@media only screen and (max-width: 600px) {
    .faqs-panel {
        width: 100%;
        margin: 70px auto;
    }
}
</style>