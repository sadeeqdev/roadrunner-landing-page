<template>
    <div class="faqs-body">
        <div class="faqs-inner-body">
            <div class="faqs-inner-text">
                <p class="faqs-header-text">
                    Privacy Policy
                </p>
            </div>
            <div class="faqs-panel">
                <v-expansion-panels style="background-color: #F5F5F5;" flat color="#F5F5F5">
                    <v-expansion-panel style="background-color: #F5F5F5; border-bottom: 1px solid #cccccc;"
                        color="#F5F5F5" v-for="(item, i) in panelData" :key="i">
                        <v-expansion-panel-header class="faq-panel-header px-0">
                            {{ item.header }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content v-html="item.content" class="faq-panel-content">
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'privacypolicy',
    data: () => ({
        reverse: true,
        panelData: [
            {
                "header": "The Data We Process; Purposes of Processing", "content": `Depending on how you interact with us, we process different kinds of data and in different ways. Some data is automatically processed if you visit our Sites or use our Products. Other data is only processed if you actively submit it to us (like using our web forms to get in touch with us or uploading content to our Sites).
<br/><br/>
Data we process when you visit our Site:
<br/><br/>
Usage data: We collect data about how users interact with our services. This includes data such as access dates and times, app features or pages viewed, app crashes and other system activity, type of browser, and third-party sites or services used before interacting with our services. In some cases, we collect this data through cookies, pixels, tags, and similar tracking technologies that create and maintain unique identifiers. To learn more about these technologies, please see our Cookie Notice.
Even if you are only a visitor on our site, your computer or device automatically sends technical information to our web servers that we store in log files, including the following"Website Usage Data":
<br/><br/>
Date and time of the visit and the duration of use of the Site;
<br/>The IP address of your device as well as your internet service provider (ISP);
<br/>The referral/exit URL;
<br/>The visited subsites of the Site; Clickstream data; and
<br/>Information about your device (type of device, browser type and version, as well as settings, installed plug-ins, operating system).
<br/>We process Website Usage Data to allow you to surf the Site and to ensure its functionality. We also process Website Usage Data to perform analysis on the performance of the Site, to continuously improve the Site and correct errors, to ensure IT security and operation of our systems, as well as to prevent or uncover abuse. We further process this data in aggregated or pseudonymized form to analyze trends, administer the Sites, track users’ movements around the Site, and to gather demographic information about our user base as a whole or to improve marketing (including serving you personalized, interest-based ads) as well as the user experience on our Site and guaranteeing the safety of our IT systems.
<br/><br/>
Background check and identity verification: We collect background check and identity verification information for riders and delivery persons. This may include information such as rider history or criminal record (where permitted by law), and right to work. This information may be collected by an authorized vendor on Roadrunner’s behalf.
<br/><br/>
Customer Support Data: We collect the information users submit when they contact Roadrunner customer support, provide ratings or compliments for other users, riders or third party partners, or otherwise contact Roadrunner. This may include feedback, photographs or other recordings collected by users. You can use the contact forms to request technical assistance, request information on the status of your delivery, or otherwise reach out to our customer support team. In order to respond to your request, we will process your IP address and contact data as well as the content of your request. We will delete this data as soon as we have complied with your request.
<br/><br/>
Survey/Demographic Data: From time to time, we may conduct surveys in respect of our products and services. Participation in our surveys is optional. However, if you respond to one of our surveys, you may provide us with personal information about yourself. Unless you otherwise consent, we will only use this information to determine the types of Products that may be of interest to you and to operate and improve our Product offerings.
<br/><br/>
Email/Direct Mail Campaign Data: From time to time, we may contact our customers directly by mail, email, or telephone to inform you about upgrades, new products, promotions, or special offers that you told us you were interested in receiving (including our newsletters). However, we will not contact you with any commercial communications that are unrelated to the Products that you have purchased from us unless you have given us your prior explicit consent to receiving such information. Please note that, where you have given us your consent to receive marketing communications, you are free to withdraw your consent to receiving such communications at any point in time. When responding to one of these campaigns, you may have the option to provide us with personal information, which we will use for the purpose indicated.
<br/><br/>
Business Contact or Sales Prospect Data: If you are a business contact or sales prospect that has provided us your Personal Data, we will store your data in our database so that we can follow up on previous business conversations we’ve had with you, provide you additional information about our Products, or assist you in purchasing our Products. We may also share your Personal Data with sales representatives employed with our local affiliates or resellers so that they can work with you to complete any requested purchase of our Products.
<br/><br/>
Location data (riders and delivery recipients): We collect precise or approximate location data from riders’ and delivery recipients’ mobile devices if they enable us to do so. Roadrunner collects this data from the time a delivery is requested until it is finished, and any time the app is running in the foreground of their mobile device. We use this data to enhance your use of our app, including improving pick-up locations, enabling safety features, and preventing and detecting fraud.
<br/><br/>
Roadrunner collects driver location data, and links location data collected during a trip with their rider’s account, even if the rider has not enabled us to collect location data from their device. This enables us to offer services to the rider like receipt generation and customer support.
<br/><br/>
Transaction information: We collect transaction information related to the use of our services, including the type of services requested or provided, order details, delivery information, date and time the service was provided, amount charged, distance traveled, and payment method. Additionally, if someone uses your promotion code, we may associate your name with that person.
<br/><br/>
Data from other sources. This includes:
<br/><br/>
User feedback, such as ratings, feedback, or compliments.
<br/><br/>
Users participating in our referral programs. For example, when a user refers another person, we receive the referred person’s personal data from that user.
<br/><br/>
Users or others providing information in connection with claims or disputes.
<br/><br/>
Vendors who help us verify users’ identity, background information, and eligibility to work, for regulatory, safety, and security purposes.
<br/><br/>
Insurance, vehicle, or financial services providers for riders and/or delivery persons.
<br/><br/>
Partner transportation companies (for riders or delivery persons who use our services through an account associated with such a company).
<br/><br/>
Publicly available sources.
<br/><br/>
Marketing service providers.
<br/><br/>
Roadrunner may combine the data collected from these sources with other data in its possession.` },
            {
                "header": "How we use personal data", "content": `Roadrunner collects and uses data to enable reliable and convenient transportation, delivery, and other products and services. We also use the data we collect:
<br/><br/>
To enhance the safety and security of our users and services
<br/><br/>
For customer support
<br/><br/>
For research and development
<br/><br/>
To enable communications between users
<br/><br/>
To send marketing and non-marketing communications to users
<br/><br/>
In connection with legal proceedings
<br/><br/>
Roadrunner does not sell or share user personal data with third parties for their direct marketing, except with users’ consent.
<br/><br/>
Providing services and features: Rodrunner uses the data we collect to provide, personalize, maintain, and improve our products and services.
<br/><br/>
This includes using the data to:
<br/><br/>
Create and update users’ accounts.
<br/><br/>
Verify riders’ and delivery persons’ identity, background history, and eligibility to work.
<br/><br/>
Enable transportation, deliveries, and other services.
<br/><br/>
Offer, process, or facilitate payments for our services.
<br/><br/>
Offer, obtain, provide, or facilitate insurance, invoicing, or financing solutions in connection with our services.
<br/><br/>
Track and share the progress of rides or deliveries.
<br/><br/>
Enable features that allow users to share information with other people, such as when riders submit a compliment about a driver, when delivery recipients provide feedback for a delivery person, refer a friend to Roadrunner, or share ETA and location with their contacts.
<br/><br/>
Perform internal operations necessary to provide our services, including to troubleshoot software bugs and operational problems; to conduct data analysis, testing, and research; and to monitor and analyze usage and activity trends.
<br/><br/>
Safety and security: We use personal data to help maintain the safety, security, and integrity of our services and users. This includes:
<br/><br/>
Screening riders and delivery persons before enabling their use of our services and at subsequent intervals, including through reviews of background checks, where permitted by law, to help prevent use of our services by unsafe riders.
<br/><br/>
Using data from delivery persons’ devices to help identify unsafe riding behavior and to inform them of safer riding practices.
<br/><br/>
Using user ratings and feedback to encourage compliance with our Community Guidelines and as grounds for deactivating riders and delivery persons with low ratings or who otherwise violated such guidelines.
<br/><br/>
Customer support: Roadrunner uses the information we collect (including recordings of customer support calls with notice to and the consent of the user) to provide customer support, including to:
<br/><br/>
Direct questions to the appropriate customer support person
<br/><br/>
Investigate and address user concerns
<br/><br/>
Monitor and improve our customer support responses and processes.
<br/><br/>
Research and development: We may use the data we collect for testing, research, analysis, product development, and machine learning to improve the user experience. This helps us to improve and enhance the safety and security of our services, improve our ability to prevent the use of our services for illegal or improper purposes, develop new features and products, and facilitate insurance and finance solutions in connection with our services.
<br/><br/>
Marketing: Roadrunner may use the data we collect to market our services to our users. This includes sending users communications about Errandlr services, features, promotions, sweepstakes, studies, surveys, news, updates, and events.
<br/><br/>
We may also send communications to our users about products and services offered by Roadrunner partners. Although we may send users communications about Roadrunner partners’ products and services, we do not sell users’ personal data to, or share it with, such partners or others for purposes of their own direct marketing or advertising, except with users’ consent.
<br/><br/>
We may use the data we collect to personalize the marketing communications (including advertisements) that we send, including based on user location, past use of Rodrunner’s services, and user preferences and settings.
<br/><br/>
Non-marketing communications: Roadrunner may use the data we collect to generate and provide users with receipts; inform them of changes to our terms, services, or policies; or send other communications that aren’t for the purpose of marketing the services or products of Roadrunner or its partners.
<br/><br/>
Legal proceedings and requirements:We may use the personal data we collect to investigate or address claims or disputes relating to use of Roadrunner services, or as otherwise allowed by applicable law, or as requested by regulators, government entities, and official inquiries.` },
            { "header": "Data retention and deletion", "content": `We process and store your Personal Data as long as necessary for the fulfillment of our contractual or legal obligations. Thus, we store the data as long as our contractual relationship with you as our customer obliges us to do so. After termination of our contract, we will store Personal Data only to the extent and for as long as applicable law requires. All other data will be deleted immediately when you, as a customer, unsubscribe from our Products or other services. If the remaining data is no longer required for the fulfillment of legal obligations, it will be regularly deleted, unless its further processing is necessary for the preservation of evidence or the prevention of legal claims from becoming time-barred.` },
            {
                "header": "Grounds for processing", "content": `We only collect and use personal data where we have lawful grounds to do so. These include processing user personal data to provide requested services and features, for purposes of Roadrunner’s legitimate interests or those of other parties, to fulfill our legal obligations, or based on consent.
<br/>
We collect and use personal data only where we have one or more lawful grounds for doing so. Such grounds may vary depending on where our users are located, but generally include processing personal data:
<br/><br/>
To provide requested services and features:In order to provide our services, we must collect and use certain personal data.
<br/><br/>
This includes: User profile data, which we use to establish and maintain user accounts; verify user identity; communicate with users about their orders, deliveries and accounts; and enable users to make payments or receive earnings.
<br/><br/>
Background trip information, which is used to verify an applicant’s eligibility to be a delivery person
<br/><br/>
Delivery person location data, which we use to track trips and assist with navigation
<br/><br/>
Usage data, which is necessary to maintain, optimize, and enhance Roadrunner services, including determining incentives, connecting delivery persons and vendors/customers, and calculating costs of trips and rider earnings.
<br/><br/>
Transaction information. Information relating to customer support.
<br/><br/>
For purposes of the legitimate interests of Errandlr or other parties:This includes using personal data to maintain and enhance our users’ safety and security. For example, we use personal data to prevent use of our services by users who have engaged in inappropriate or dangerous behavior, such as by retaining data of banned users to prevent their use of Roadrunner apps.
<br/><br/>
This also includes purposes such as combating fraud; improving our services, direct marketing, research, and development; and enforcing Roadrunner Terms of Service.
<br/><br/>
In addition, it includes using personal data to the extent necessary for the interests of other people or the general public, such as in connection with legal or insurance claims, and to protect the rights and safety of others.
<br/><br/>
To fulfill Roadrunner legal obligations: Roadrunner is subject to laws and regulations that require it to collect and retain data about our users’ deliveries, and to provide copies of such data to the government or other authorities. We collect and use personal data to comply with such laws.
<br/><br/>
Roadrunner may also share data with law enforcement regarding criminal acts or threats to public safety, or requests by third parties pursuant to legal processes.
<br/><br/>
With consent: Roadrunner may collect and use personal data based on the user’s consent. For example, we may collect personal data through voluntary surveys. Responses to such surveys are collected on the basis of consent and will be deleted once no longer necessary for the purposes collected.` },
            { "header": "Updates to this notice", "content": `Roadrunner reserves the right to change this Privacy Statement. We will provide notification of the material changes to this Privacy Statement through our Sites at least 30 days prior to the change taking effect.` },
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