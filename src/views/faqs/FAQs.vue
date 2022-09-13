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
                            <div v-html="item.content"></div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>

            </div>
        </div>
    </div>
</template>

<script>

import { panelData } from './panelData'; 

export default {
    data: () => ({
        reverse: true,
        panelData: panelData
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