<template>
    <div class="faqs-body" data-aos="fade-left">
        <div class="faqs-inner-body">
            <div class="faqs-inner-text">
                <p class="faqs-header-text">
                    Terms and Conditions
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
                            <!-- {{ item.content }} -->
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'termsandconditions',
    data: () => ({
        reverse: true,
        panelData: [
            {
                "header": "Contractual Relationship", "content": `These Terms of Use (“Terms”) govern the access or use by you, an individual, from within any state in the Federal Republic of Nigeria. The implication of signing up with Roadrunner, whether through a mobile device, mobile application or computer (collectively, the “Service”) is that you agree to be bound by
<br/>(i) these Terms of Use,<br/>
(ii) Privacy Policy, Arbitration Procedures (if applicable to you) and Safety Tips, each of which is incorporated by reference into this Agreement, and
<br/>(iii) any terms disclosed and agreed to by you if you purchase additional features, products or services we offer on the Service (collectively, this "Agreement").
<br/><br/>
PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING THE SERVICES.<br/>
Your access and use of the Services constitutes your agreement to be bound by these Terms, which establishes a contractual relationship between you and Roadrunner. If you do not agree to these Terms, you may not access or use the Services. These Terms expressly supersede prior agreements or arrangements with you. Roadrunner may immediately terminate these Terms or any Services with respect to you, or generally cease offering or deny access to the Services or any portion thereof, at any time for any reason.
<br/><br/>
Supplemental terms may apply to certain Services, such as policies for a particular event, activity or promotion, and such supplemental terms will be disclosed to you in connection with the applicable Services. Supplemental terms are in addition to, and shall be deemed a part of, the Terms for the purposes of the applicable Services. Supplemental terms shall prevail over these Terms in the event of a conflict with respect to the applicable Services.
<br/><br/>
Roadrunner may amend the Terms related to the Services from time to time. Amendments will be effective upon Roadrunner’s posting of such updated Terms at this location or the amended policies or supplemental terms on the applicable Service. Your continued access or use of the Services after such posting constitutes your consent to be boundby the Terms, as amended. Our collection and use of personal information in connection with the Services is as provided in Roadrunner’s Privacy Policy located at www.Roadrunner.com may provide to a claims processor or an insurer any necessary information (including your contact information) if there is a complaint, dispute or conflict, which may include an accident, involving you and a Third Party Provider, including a logistics network company rider, and such information or data is necessary to resolve the complaint, dispute or conflict.<br/><br/>` },
            {
                "header": "The Services", "content": `The Services constitute a technology platform that enables users of Roadrunner’s mobile applications or websites provided as part of the Services to arrange and schedule logistics services with independent third party providers of such services, including independent third party transportation providers and independent third party logistics providers under agreement with Roadrunner.
<br/><br/>
License.
<br/><br/>
Subject to your compliance with these Terms, Roadrunner grants you a limited, non-exclusive, non-sublicensable, revocable, non-transferable license to:
(i) access and use the Applications on your personal device solely in connection with your use of the Services; and
(ii) access and use any content, information and related materials that may be made available through the Services, in each case solely for your personal, noncommercial use. Any rights not expressly granted herein are reserved by Roadrunner and Roadrunner’s licensors.
<br/><br/>
Restrictions.
<br/><br/>
You may not:<br/>
(i) remove any copyright, trademark or other proprietary notices from any portion of theServices;<br>
(ii) reproduce, modify, prepare derivative works based upon, distribute, license, lease, sell, resell, transfer, publicly display, publicly perform, transmit, stream, broadcast or otherwise exploit the Services except as expressly permitted by Roadrunner;
<br/>(iii) decompile, reverse engineer or disassemble the Services except as may be permitted by applicable law;
<br/>(iv) link to, mirror or frame any portion of the Services;
<br/>(v) cause or launch any programs or scripts for the purpose of scraping, indexing, surveying, or otherwise data mining any portion of the Services or unduly burdening or hindering the operation and/or functionality of any aspect of the Services; or
<br/>(vi) attempt to gain unauthorized access to or impair any aspect of the Services or its related systems or networks
<br/><br/>
Third Party Services and Content.
<br/><br/>
The Services may be made available or accessed in connection with third party services and content (including advertising) that Roadrunner does not control. You acknowledge that different terms of use and privacy policies may apply to your use of such third party services and content. Roadrunner does not endorse such third party services and content and in no event shall Roadrunner be responsible or liable for any products or services of such third party providers.
<br/><br/>
Ownership.
<br/><br/>
The Services and all rights therein are and shall remain Roadrunner’s property or the property of Roadrunner’s licensors. Neither these Terms nor your use of the Services convey or grant to you any rights:
<br/>(i) in or related to the Services except for the limited license granted above; or
<br/>(ii) to use or reference in any manner Roadrunner’s company names, logos, product and service names, trademarks or services marks or those of Roadrunner’s licensors` },
            {
                "header": "Your Use Of The Services", "content": `User Accounts
<br/><br/>
In order to use most aspects of the Services, you must register for and maintain an active personal user Services account (“Account”). You must be at least 18 years of age, to obtain an Account. Account registration requires you to submit to Roadrunner certain personal information, such as your name, address, mobile phone number and age, as well as at least one valid payment method (either a credit card or accepted payment partner). You agree to maintain accurate, complete, and up-to-date information in your Account. Your failure to maintain accurate, complete, and up-to-date Account information, including having an invalid or expired payment method on file, may result in your inability to access and use the Services or Roadrunner’s termination of these Terms with you. You are responsible for all activity that occurs under your Account, and you agree to maintain the security and secrecy of your Account email and password at all times.
<br/><br/>
User Requirements and Conduct
<br/><br/>
The Service is not available for use by persons under the age of 18. You may not authorize third parties to use your Account, and you may not allow persons under the age of 18 to receive logistics services from Third Party Providers unless they are accompanied by you or a person of legal age. You may not assign or otherwise transfer your Account to any other person or entity. You agree to comply with all applicable laws when using the Services, and you may only use the Services for lawful purposes (e.g., no transport of unlawful or hazardous materials). You will not, in your use of the Services, cause nuisance, annoyance, inconvenience, or property damage, whether to the Third Party Provider or any other party. In certain instances you may be asked to provide proof of identity to access or use the Services, and you agree that you may be denied access to or use of the Services if you refuse to provide proof of identity
<br/><br/>
Text Messaging.
<br/><br/>
By creating an Account, you agree that the Services may send you text (SMS) messages as part of the normal business operation of your use of the Services. You may opt-out of receiving text (SMS) messages from Roadrunner at any time by following the directions found at https://www.Roadrunner.comYou acknowledge that opting out of receiving text (SMS) messages may impact your use of the Services.
<br/><br/>
Email Messaging.
<br/><br/>
By creating an Account, you agree that the Services may send you email messages as part of the normal business operation of your use of the Services. You may opt-out of receiving email messages from Roadrunner at any time by following the directions found at the bottom of the email sent to you. You acknowledge that opting out of receiving email messages may impact your use of the Services.
<br/><br/>
Promotional Codes.
<br/><br/>
Roadrunner may, in Roadrunner’s sole discretion, create promotional codes that may be redeemed for Account credit, or other features or benefits related to the Services and/or a Third Party Provider’s services, subject to any additional terms that Roadrunner establishes on a per promotional code basis (“Promo Codes”). You agree that Promo Codes:
<br/>(i) must be used for the intended audience and purpose, and in a lawful manner
<br/>(ii) may not be duplicated, sold or transferred in any manner, or made available to the general public (whether posted to a public form or otherwise), unless expressly permitted by Roadrunner
<br/>(iii) may be disabled by Roadrunner at any time for any reason without liability to Roadrunner
<br/>(iv) may only be used pursuant to the specific terms that Roadrunner establishes for such Promo Code
<br/>(v) are not valid for cash and
<br/>(vi) may expire prior to your use. Roadrunner reserves the right to withhold or deduct credits or other features or benefits obtained through the use of Promo Codes by you or any other user in the event that Roadrunner determines or believes that the use or redemption of the Promo Code was in error, fraudulent, illegal, or in violation of the applicable Promo Code terms or these Terms.
<br/><br/>
User Provided Content.
<br/><br/>
Roadrunner may, in Roadrunner’s sole discretion, permit you from time to time to submit,upload, publish or otherwise make available to Roadrunner through the Services textual, audio, and/or visual content and information, including commentary and feedback related to the Services, initiation of support requests, and submission of entries for competitions and promotions (“User Content”). Any User Content provided by you remains your property. However, by providing User Content to Roadrunner, you grant Roadrunner a worldwide, perpetual, irrevocable, transferrable, royalty-free license, with the right to sublicense, to use, copy, modify, create derivative works of, distribute, publicly display, publicly perform, and otherwise exploit in any manner such User Content in all formats and distribution channels now known or hereafter devised (including in connection with the Services and Roadrunner’s business and on third-party sites and services), without further notice to or consent from you, and without the requirement of payment to you or any other person or entity.
You represent and warrant that:<br/>
(i) you either are the sole and exclusive owner of all User Content or you have all rights, licenses, consents and releases necessary to grant Roadrunner the license to the User Content as set forth above
<br/>(ii) neither the User Content nor your submission, uploading, publishing or otherwise making available of such User Content nor Roadrunner’s use of the User Content as permitted herein will infringe, misappropriate or violate a third party’s intellectual property or proprietary rights, or rights of publicity or privacy, or result in the violation of any applicable law or regulation.
<br/><br/>
You agree to not provide User Content that is defamatory, libelous, hateful, violent, obscene, pornographic, unlawful, or otherwise offensive, as determined by Roadrunner in its sole discretion, whether or not such material may be protected by law. Roadrunner may, but shall not be obligated to, review, monitor, or remove User Content, at Roadrunner’s sole discretion and at any time and for any reason, without notice to you.
<br/><br/>
Network Access and Devices.
<br/><br/>
You are responsible for obtaining the data network access necessary to use the Services. Your mobile network’s data and messaging rates and fees may apply if you access or use the Services from a wireless-enabled device and you shall be responsible for such rates and fees. You are responsible for acquiring and updating compatiblehardware or devices necessary to access and use the Services and Applications and any updates thereto. Roadrunner does not guarantee that the Services, or any portion thereof, will function on any particular hardware or devices. In addition, the Services may be subject to malfunctions and delays inherent in the use of the Internet and electronic communications.` },
            {
                "header": "Payment", "content": `You understand that use of the Services may result in charges to you for the services or goods you receive from a Third Party Provider (“Charges”). After you have received services or goods obtained through your use of the Service, Roadrunner will facilitate your payment of the applicable Charges on behalf of the Third Party Provider as such Third Party Provider’s limited payment collection agent. Payment of the Charges in such manner shall be considered the same as payment made directly by you to the Third Party Provider. Charges paid by you are final and non-refundable, unless otherwise determined by Roadrunner. You retain the right to request lower Charges from a Third Party Provider for services or goods received by you from such Third Party Provider at the time you receive such services or goods. Roadrunner will respond accordingly to any request from a Third Party Provider to modify the Charges for a particular service
<br/><br/>
All Charges are due immediately and payment will be facilitated by Roadrunner using the preferred payment method designated in your Account, after which Roadrunner will send you a receipt by email. If your primary Account payment method is determined to be expired, invalid or otherwise not able to be charged, you agree that Roadrunner may, as the Third Party Provider’s limited payment collection agent, use a secondary payment method in your Account, if available.
<br/><br/>
As between you and Roadrunner, Roadrunner reserves the right to establish, remove and/or revise Charges for any or all services or goods obtained through the use of the Services at any time in Roadrunner’s sole discretion. Further, you acknowledge and agree that Charges applicable in certain geographical areas may increase substantially during times of high demand. Roadrunner will use reasonable efforts to inform you of Charges that may apply, provided that you will be responsible for Charges incurred under your Account regardless of your awareness of such Charges or the amounts thereof. Roadrunner may from time to time provide certain users with promotional offers and discounts thatmay result in different amounts charged for the same or similar services obtained through the use of the Services, and you agree that such promotional offers and discounts, unless also made available to you, shall have no bearing on your use of the Services or the Charges applied to you. You may elect to cancel your request for services or goods from a Third Party Provider at any time prior to such Third Party Provider’s arrival, in which case you may be charged a cancellation fee.
<br/><br/>
This payment structure is intended to fully compensate the Third Party Provider for the services or goods provided. Any representation by Roadrunner (on Roadrunner’s website, in the Application, or in Roadrunner’s marketing materials) to the effect that tipping is “voluntary,” “not required,” and/or “included” in the payments you make for services or goods provided is not intended to suggest that Roadrunner provides any additional amounts, beyond those described above, to the Third Party Provider. You understand and agree that, while you are free to provide additional payment as a gratuity to any Third Party Provider who provides you with services or goods obtained through the Service, you are under no obligation to do so. Gratuities are voluntary. After you have received services or goods obtained through the Service, you will have the opportunity to rate your experience and leave additional feedback about your Third Party Provider.` },
            {
                "header": "Disclaimers; Limitation of Liability; Indemnity.", "content": `DISCLAIMER.
<br/><br/>

THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” ROADRUNNER DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS, IMPLIED OR STATUTORY, NOT EXPRESSLY SET OUT IN THESE TERMS, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN ADDITION, ROADRUNNER MAKES NO REPRESENTATION, WARRANTY, OR GUARANTEE REGARDING THE RELIABILITY, TIMELINESS, QUALITY, SUITABILITY OR AVAILABILITY OF THE SERVICES OR ANY SERVICES REQUESTED THROUGH THE USE OF THE SERVICES, OR THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. ROADRUNNER DOES NOT GUARANTEE THE QUALITY, SUITABILITY, SAFETY OR ABILITY OF THIRD PARTY PROVIDERS. YOU AGREE THAT THE ENTIRE RISK ARISING OUT OF YOUR USE OF THE SERVICES, AND ANY SERVICE OR GOOD REQUESTED IN CONNECTIONTHEREWITH, REMAINS SOLELY WITH YOU, TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW.
<br/><br/>

LIMITATION OF LIABILITY.
<br/><br/>

ROADRUNNER SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOST DATA, PERSONAL INJURY OR PROPERTY DAMAGE RELATED TO, IN CONNECTION WITH, OR OTHERWISE RESULTING FROM ANY USE OF THE SERVICES, EVEN IF ERRANDLR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ROADRUNNER SHALL NOT BE LIABLE FOR ANY DAMAGES, LIABILITY OR LOSSES ARISING OUT OF:(i) YOUR USE OF OR RELIANCE ON THE SERVICES OR YOUR INABILITY TO ACCESS OR USE THE SERVICES; OR(ii) ANY TRANSACTION OR RELATIONSHIP BETWEEN YOU AND ANY THIRD PARTY PROVIDER, EVEN IF ERRANDLR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ROADRUNNER SHALL NOT BE LIABLE FOR DELAY OR FAILURE IN PERFORMANCE RESULTING FROM CAUSES BEYOND ROADRUNNER’S REASONABLE CONTROL. IN NO EVENT SHALL ROADRUNNER’S TOTAL LIABILITY TO YOU IN CONNECTION WITH THE SERVICES FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION EXCEED TWENTY THOUSAND NAIRA (N20,000). ROADRUNNER’S SERVICES MAY BE USED BY YOU TO REQUEST AND SCHEDULE GOODS OR LOGISTICS SERVICES WITH THIRD PARTY PROVIDERS, BUT YOU AGREE THAT ROADRUNNER HAS NO RESPONSIBILITY OR LIABILITY TO YOU RELATED TO ANY GOODS OR LOGISTICS SERVICES PROVIDED TO YOU BY THIRD PARTY PROVIDERS OTHER THAN AS EXPRESSLY SET FORTH IN THESE TERMS.THE LIMITATIONS AND DISCLAIMER IN THIS SECTION DO NOT PURPORT TO LIMIT LIABILITY OR ALTER YOUR RIGHTS AS A CONSUMER THAT CANNOT BE EXCLUDED UNDER APPLICABLE LAW.
<br/><br/>

Indemnity.
<br/><br/>

You agree to indemnify and hold Roadrunner and its officers, directors, employees and agents harmless from any and all claims, demands, losses, liabilities, and expenses(including attorneys’ fees) arising out of or in connection with:
<br/>(i) your use of the Services or services or goods obtained through your use of the Services
<br/>(ii) your breach or violation of any of these Terms
<br/>(iii) Roadrunner’s use of your User Content
<br/>(iv) your violation of the rights of any third party, including Third Party Providers.` },
            {
                "header": "Refunds", "content": `All charges for services on Roadrunner are final and nonrefundable except at the discretion and approval of Roadrunner. However, in the event that a refund is approved to a customer and where the customer does not have an existing account, he or she may be refunded through their bank account,10% of the refundable amount and a deduction of a service fee of N50. Such refund requests must be made within fourteen (14) days of the transaction date.
<br/><br/>
There shall be no approval of refunds for partial use of the service. Therefore in the event that either a pick-up is made or a delivery is fulfilled on behalf of a customer using their provided address and contact details, in no circumstance shall he or she receive an approval for refund for either of the services if the other could not be fulfilled due to the customer's unavailability.
<br/><br/>
Customers shall provide complete and accurate addresses and contact details of pick-ups and deliveries to ensure that orders are completed appropriately. Every means of communication shall be employed to contact the customer to fulfill his or her order. Therefore, customers must endeavor to provide and make available every or any means of contact during the use of the service and while goods are in transit to ensure their orders are fulfilled. However, if for any reason, every means of communication provided by the customer fails, Roadrunner shall not be held liable for the failure to fulfill such order(s). In the event that an order is unfulfilled due to unavailability of the customer, the customer shall not be entitled to a refund. However, a partial refund may be approved only at the discretion of Roadrunner.` },
            {
                "header": "Governing Law Arbitration.", "content": `Every and all matters concerning Roadrunner shall be governed under the extant laws of the Federal Republic of Nigeria. For the purposes of clarification, every reference to applicable law in this agreement means laws applicable under the Federal Republic of Nigeria. The exclusive means of resolving any dispute or claim arising out of or relating to this Agreement (including any alleged breach thereof) or the Service shall be arbitration and shall be governed by the Arbitrators and Conciliators Act Chapter A18 LFN 2004. However, you agree that you will not under any circumstances commence, or maintain, or participate in, against Roadrunner, any class action, or other representative action or proceeding against Roadrunner. Any dispute, conflict, claim or controversy arising out of or broadly in connection with or relating to the Services or these Terms, including those relating to its validity, its construction or its enforceability (any “Dispute”) shall be first mandatorily submitted to mediation proceedings under the Nigerian Arbitrators and Conciliators Act. If such Dispute has not been settled after three meetings after a request for mediation has been submitted under the mediation rules, such Dispute can be referred to and shall beexclusively and finally resolved by arbitration under the Rules of Arbitration of the Arbitrators and Conciliators Act. The existence and content of the mediation and arbitration proceedings, including documents and briefs submitted by the parties, correspondence from and to the arbitrating body, correspondence from the mediator, and correspondence, orders and awards issued by the sole arbitrator, shall remain strictly confidential and shall not be disclosed to any third party without the express written consent from the other party unless:
<br/>(i) the disclosure to the third party is reasonably required in the context of conducting the mediation or arbitration proceedings
<br/>(ii) the third party agrees unconditionally in writing to be bound by the confidentiality obligation stipulated herein.` },
            {
                "header": "Other Provisions", "content": `Claims of Copyright Infringement.
<br/><br/>
Claims of copyright infringement should be sent to Roadrunner’s designated agent. Please visit Roadrunner’s web page at https://www.Roadrunner.com legal for the designated address and additional information.
<br/><br/>
Notice.
<br/><br/>
Roadrunner may give notice by means of a general notice on the Services, electronic mail to your email address in your Account, or by written communication sent to your address as set forth in your Account. You may give notice to Roadrunner by written communication to Roadrunner’s e-mail address at support@Roadrunner.com.
<br/><br/>
General.
<br/><br/>
You may not assign or transfer these Terms in whole or in part without Roadrunner’s prior written approval. You give your approval to Roadrunner for it to assign or transfer these Terms in whole or in part, including to:
<br/>(i) a subsidiary or affiliate
<br/>(ii) an acquirer of Roadrunner’s equity, business or assets
<br/>(iii) a successor by merger. No joint venture, partnership, employment or agency relationship exists between you, Roadrunner or any Third Party Provider as a result of the contract between you and Roadrunner or use of the Services.
<br/><br/>
If any provision of these Terms is held to be illegal, invalid or unenforceable, in whole or in part, under any law, such provision or part thereof shall to that extent be deemed not to form part of these Terms but the legality, validity and enforceability of the other provisions in these Terms shall not be affected. In that event, the parties shall replace the illegal, invalid or unenforceable provision or part thereof with a provision or part thereof that is legal, valid and enforceable and that has, to the greatest extent possible, a similar effect as the illegal, invalid or unenforceable provision or part thereof, given the contents and purpose of these Terms. These Terms constitute the entire agreement and understanding of the parties with respect to its subject matter and replaces and supersedes all prior or contemporaneous agreements or undertakings regarding such subject matter. In these Terms, the words “including” and “include” mean “including, but not limited to` },
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