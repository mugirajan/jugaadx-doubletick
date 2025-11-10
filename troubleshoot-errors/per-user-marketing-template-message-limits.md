# Per-User Marketing Template Message Limits

## What is it? <a href="#what-is-it" id="what-is-it"></a>

WhatsApp may limit the number of marketing template messages a person receives from any business in a given period of time, starting with a small number of conversations that are less likely to be read. Soon, they might also start to deliver fewer marketing conversations to those users who are less likely to engage with them.

## Why it’s important <a href="#why-it-s-important" id="why-it-s-important"></a>

WhatsApp has found that per-user marketing template limits maximize message engagement and improve the user experience, measured through improvements in user read rates and sentiment. This limit helps WhatsApp users find business messaging more valuable and feel less like they receive too many business messages.

## How this Applies to Your Business <a href="#how-this-applies-to-your-business" id="how-this-applies-to-your-business"></a>

The limit only applies to **marketing template messages** that would normally open a new marketing conversation. If a marketing conversation is already open between you and a WhatsApp user, you may send one additional marketing template message. Further marketing template messages can only be sent in an open marketing conversation if the person responds to any message.

Example:

* The first marketing template message is delivered and opens a new [24-hour marketing conversation](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-messages#customer-service-windows) customer service window. The per-user marketing template message limit applies
* A second marketing template message can be sent in an existing conversation.
* Each time the WhatsApp user responds in an existing conversation window, you can send one additional marketing template message. You can also send unlimited [free-form](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-messages) messages.

## &#x20;How We Notify: Via Error Message

If a marketing template message is not delivered to a given user due to the limit,  you will receive the following error message 👇

{% hint style="danger" %}
***This message was not delivered to maintain a healthy ecosystem.***
{% endhint %}

## Troubleshooting <a href="#troubleshooting" id="troubleshooting"></a>

1. Avoid immediately resending the template message. Doing so will only result in another error response since the limit may be in effect for differing periods of time.
2. Instead, retry sending the message in increasingly larger time increments until it is delivered.
3. **Avoid Using Marketing Templates in Bot Flows**: Instead of  marketing templates, use **interactive messages** that engage the customer.
4. **Adding Buttons**: If you do use a marketing template, ensure it includes buttons or other interactive elements to allow the customer to take action.
5. **Sequential Template Handling**: If there are multiple marketing templates in bot flow, the **second template might not be delivered** until the customer interacts with the first one. This helps ensure a more engaging experience
