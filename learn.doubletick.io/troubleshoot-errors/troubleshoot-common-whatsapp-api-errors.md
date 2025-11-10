# Troubleshoot Common WhatsApp API Errors

## **Temporarily blocked for policies violations**

{% hint style="danger" %}
**Description:**

The WhatsApp Business Account has been restricted or disabled for violating a platform policy.

**Possible Solutions:**

See the [<mark style="color:green;">Policy Enforcement</mark>](https://developers.facebook.com/docs/whatsapp/overview/policy-enforcement/) document to learn about policy violations and how to resolve them.
{% endhint %}

***

## **Account has been locked**

{% hint style="danger" %}
**Description:**

The WhatsApp Business Account associated with the app has been restricted or disabled for violating a platform policy, or we were unable to verify data included in the request against data set on the WhatsApp Business Account (e.g, the two-step pin included in the request is incorrect).

**Possible Solutions:**

See the [<mark style="color:green;">Policy Enforcement</mark>](https://developers.facebook.com/docs/whatsapp/overview/policy-enforcement/) document to learn about policy violations and how to resolve them.
{% endhint %}

***

## **User's number is part of an experiment**

{% hint style="info" %}
**Description**

Meta occasionally run experiments to help them assess the impact of messaging on WhatsApp user experience and engagement.&#x20;

Starting June 14, 2023, roughly 1% of WhatsApp users will not receive marketing template messages from any business unless one of the following conditions is met:

* A customer service window exists between the customer and the business
* An open marketing conversation exists between the customer and the busines

If you send a marketing template message to a customer who is part of the experiment group, your message will not be sent and **you will not be billed for it** since no conversation was created

**Possible Solutions**:

If you must deliver the marketing template message to the customer, Meta recommend's that you contact the customer by some other, non-WhatsApp means, and ask them to message you so you can resend the message within the customer service window.
{% endhint %}

***

## **Something went wrong**

{% hint style="info" %}
**Description**:

Message failed to send due to an unknown error

**Possible Solutions**:

Try again. If the error persists, contact [<mark style="color:green;">DoubleTick Support</mark>](https://wa.me/917977814605?text=Error%20received%3A%20Something%20went%20wrong.%20%0AKindly%20Assist)
{% endhint %}

***

## **Message Undeliverable**

{% hint style="info" %}
**Description**:

Unable to deliver message. Reasons can include:

* The recipient phone number is not a WhatsApp phone number.
* Sending an [authentication template](https://developers.facebook.com/docs/whatsapp/business-management-api/authentication-templates) to a WhatsApp user who has a +91 country calling code (India). Authentication templates currently cannot be sent to WhatsApp users in India.
* Recipient has not accepted our new Terms of Service and Privacy Policy.
* Recipient using an old WhatsApp version; must use the following WhatsApp version or greater:
  * Android: 2.21.15.15
  * SMBA: 2.21.15.15
  * iOS: 2.21.170.4
  * SMBI: 2.21.170.4
  * KaiOS: 2.2130.10
  * Web: 2.2132.6
* The message was not delivered to create a high quality user experience.&#x20;

**Possible Solutions:**

Using a non-WhatsApp communication method, ask the WhatsApp user to:

* Confirm that they can actually send a message to your WhatsApp business phone number.
* Confirm that they have accepted our latest Terms of Service (**Settings** > **Help**, or **Settings** > **Application information** will prompt them to accept the latest terms/policies if they haven't done so already)
* Update to the latest version of the WhatsApp client
  {% endhint %}

***

## **Template does not exist**

{% hint style="info" %}
**Description:**

The template does not exist in the specified language or the template has not been approved.

**Possible Solutions**:

Make sure your template has been approved and the template name and language locale are correct.
{% endhint %}

***

## **Template is Disabled**

{% hint style="info" %}
**Description**:

Template has been paused too many times due to [<mark style="color:green;">low quality</mark>](https://learn.doubletick.io/whatsapp-business-api/manage-and-view-account-quality-on-meta) and is now permanently disabled.

**Possible Solutions:**

Create a new template with different content.
{% endhint %}

***
