# Template Categories in WhatsApp API

Template messages are the only type of message that can be sent to customers who have yet to message you, or who have not sent you a message in the last 24 hours. Templates must be approved before they can be sent in template messages.

## Checkout Our Video On Template Categories 👇

{% embed url="<https://youtu.be/4d2W5imx2IE>" %}

***

### Template Categories <a href="#template-categories-1" id="template-categories-1"></a>

Templates must be categorized as one of the following categories. Categories factor into [pricing](https://app.gitbook.com/o/DuSsqwQc8unkybYR76no/s/53n17VnOICC1LtDqlENV/~/changes/38/whatsapp-business-api/conversation-charge)​[ ](https://app.gitbook.com/o/DuSsqwQc8unkybYR76no/s/53n17VnOICC1LtDqlENV/~/changes/38/whatsapp-business-api/conversation-charge)and the category you designate will be validated at the time of template creation.

{% tabs %}
{% tab title="Marketing Template" %}
Marketing templates are our most flexible. They can enable businesses to achieve a wide range of goals, from generating awareness to driving sales and more.

<table><thead><tr><th width="157">Objective</th><th width="210">Business Goal</th><th>Example Templates</th></tr></thead><tbody><tr><td><strong>Awarenes</strong></td><td>Generate awareness of your business, products, or services among customers who have subscribed to receive messages from your business on WhatsApp.</td><td><ul><li>"Did you know? We installed a new tower in your area so you can enjoy a better network experience. To learn more, visit our site {{1}}."</li><li>"Diwali is around the corner! Join us at {{1}} on October 24 to celebrate with friends and family. For more details about our event, click {{2}}."  </li></ul></td></tr><tr><td><strong>Sales</strong></td><td>Send general promotional offers to customers related to sales events, coupons or other content intended to drive sales.</td><td><ul><li>"As a thank you for your last order, please enjoy 15% off your next order. Use code LOYAL15 at checkout. Visit our site here {{1}}."</li></ul><ul><li>"Upgrade to our Premium cabin to enjoy more benefits, like additional legroom and priority boarding. Click {{1}} or log into our app to upgrade."</li></ul></td></tr><tr><td><strong>Retargeting</strong></td><td>Promote relevant offers or other call-to-actions to customers who may have visited your website, used your app, or engaged with your products and services.</td><td><ul><li>"Don't miss out on your favorite shows! Re-subscribe now: {{1}}"</li><li>"You left items in your cart! Don’t worry, we saved them for you. Click here to checkout now: {{1}}."</li></ul></td></tr><tr><td><strong>App Promotion</strong></td><td>Request customers to install or take a specific action with your app.</td><td><p></p><ul><li>"In-app only: 20% off this week! Use code SUMMER20 to save on select styles. To download our app, click here: {{1}}."</li><li>"Thank you for using our app. We noticed you have not used our latest feature, {{1}}. Click here {{2}} to learn more about how this benefits you!"</li></ul></td></tr><tr><td><strong>Build Customer Relationships</strong></td><td>Strengthen customer relationships through personalized messages or by prompting new conversations.</td><td><ul><li>"{{1}}, did you think we’d forget? No way! Happy birthday! We wish you the best in the year ahead."</li><li>"As we approach the end of the year, we reflect on what drives us: You. Thank you for being a valued customer. We look forward to continuing to serve you"</li></ul></td></tr></tbody></table>

**Also considered marketing templates are**:

* *Templates with mixed content (e.g. Both utility and marketing, such as order update with a promo or offer).*
* *Templates where contents are unclear (e.g., contents are only “{{1}}” or “Congratulations!”)*.
  {% endtab %}

{% tab title="Utility Template" %}
Utility templates are typically triggered by a user action or request. They must include specificity about the active or ongoing transaction, account, subscription or interaction to which they relate. For example, an order confirmation must contain an order number.

<table><thead><tr><th width="164">Objective</th><th width="243">Business Goal</th><th>Example Templates</th></tr></thead><tbody><tr><td><strong>Opt-In Management on WhatsApp</strong></td><td>Confirm opt-in for receiving messages on WhatsApp as a follow-up to opt-in collected via other channels (e.g., website, email). Also confirm opt-out.</td><td><ul><li>"Thanks for confirming opt-in! You’re in. You’ll now receive notifications via WhatsApp."</li><li>"Thank you for confirming your opt-out preference. You will no longer receive messages from us on WhatsApp."</li></ul></td></tr><tr><td><strong>Order Management</strong></td><td>Confirm, update, or cancel an order or transaction with a customer using specific order or transaction details in the body of your message.</td><td><ul><li>"Thank you! Your order {{1}} is confirmed. We will let you know once your package is on its way."</li><li>"Hooray! Your package from order {{1}} is on its way. Your tracking number is {{2}} and expected delivery date is {{3}}."</li></ul></td></tr><tr><td><strong>Account Alerts or Updates</strong></td><td><p>Send important account updates, including time-sensitive alerts, safety information, payment reminders, and other information relevant to already-purchased or subscribed products and services.</p><p>These messages should not intend to upsell or cross-sell new products or services.</p></td><td><p></p><ul><li>"Reminder: Your monthly payment for your subscription to {{1}} will be billed on {{2}} to the card you have saved on file."</li><li>"To finish setting up your profile, you need to upload a photo. Please click here to upload: {{1}}."</li></ul></td></tr><tr><td><strong>Feedback Surveys</strong></td><td><p>Collect feedback on previous orders, interactions or ongoing relationships with customers.</p><p>These messages should not be about requesting feedback related to potential upsell or cross-sell opportunitie</p></td><td><p></p><ul><li>"Your feedback ensures we continually improve. Please click here {{1}} to share your thoughts on your recent visit at our {{2}} location. Thank you in advance!"</li></ul></td></tr><tr><td><strong>Continue a Conversation on WhatsApp</strong></td><td><p>Send a message to start an interaction on WhatsApp that began in another channel.</p><p>These messages should not be initiated without a user having requested the conversation to be moved to WhatsApp.</p></td><td><ul><li>"Hi! I see you requested support via our online chat. I am the virtual assistant on WhatsApp. How can I help?"</li><li>"Hi {{1}}, we are following up on your call with customer service on {{2}}. Your case has progressed to the next step. Please log into your account to continue: {{3}}."</li></ul></td></tr></tbody></table>
{% endtab %}

{% tab title="Authentication" %}
Authentication templates enable businesses to authenticate users with one-time passcodes (usually 4-8 digit alphanumeric codes), potentially at multiple steps in the login process (e.g., account verification, account recovery, integrity challenges).

Authentication templates are our most restricted. For a template to be classified as authentication, a business must:

* Use WhatsApp’s preset authentication message templates, which include optional add-ons like security disclaimers and expiry warnings
* Configure a one-time password button (copy-code or one-tap)
* Follow content restrictions: URLs, media, and emojis are not allowed for authentication template content or parameters. Additional length restrictions of 15 characters also apply to parameters.

<table><thead><tr><th width="227">Definition</th><th>Examples</th></tr></thead><tbody><tr><td><strong>Authentication code</strong></td><td><ul><li>"{{1}} is your verification code."</li><li>"{{1}} is your verification code. For your security, do not share this code."</li><li>"{{1}} is your verification code. This code expires in 15 minutes."</li></ul></td></tr></tbody></table>
{% endtab %}
{% endtabs %}

***
