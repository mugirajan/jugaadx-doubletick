# Set Up Bot Triggers

***

* Triggers in bots are events that activate the bot to respond or carry out a task.&#x20;
* They can be activated by different conditions, like words typed by users, special commands, timing, or interactions with specific parts of a chat interface.&#x20;
* Triggers kickstart bot interactions with users, providing services through automated responses. They're essentially the beginning of the bot's journey, starting the conversation.&#x20;

Doubletick provides various triggers to improve bot performance and engagement 👇

<div align="left"><figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F01IKCdg3u8Qp6gLR4jXH%2Fimage.png?alt=media&#x26;token=d0e34751-d0d0-4509-8de8-3259a82c373b" alt="" width="182"><figcaption></figcaption></figure></div>

***

### &#x20;1. Lead from CTWA (Click to WhatsApp Ads)

The "Click to WhatsApp Ads" trigger activates when customers interact with advertisements on Facebook where WhatsApp is configured, prompting responses or workflows within a bot.

<div align="left"><figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FNZduIbfQDRiQ1d6MKnPn%2Fimage.png?alt=media&#x26;token=2aec76ae-450f-4385-8df3-3a9c71fa3efd" alt="" width="218"><figcaption></figcaption></figure></div>

***

### 2. On Agent Assign&#x20;

This trigger activates each time a chat is assigned to an agent, whether it's manually assigned or automated. The bot will activate immediately upon an agent being assigned to any chat.

<div align="left"><figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F4tTP0aNGnwG2Y2Qy1Woq%2Fimage.png?alt=media&#x26;token=52cc0598-d467-4827-a7e4-5d6c9f3f635e" alt="" width="230"><figcaption></figcaption></figure></div>

***

### 3.  On Attribute Change

Here attribute refers to Customer attributes; are details linked to a specific customer, such as preferences or demographics. They help personalize interactions and improve customer service. These attributes also aid in segmentation for targeted marketing efforts.&#x20;

The "On Attribute Change" trigger comprises three features:

1. **On Set First Time**: This triggers when an attribute is set for the first time for a customer.
2. **On Changed Anytime**: This activates whenever there's a change in the attribute value, regardless of whether it's the first time or subsequent changes.
3. **On Removed:** This trigger initiates when an attribute is removed or deleted from a customer's profile.

<div align="left"><figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FDeLWV8Do1qRx3j1M1rJT%2Fimage.png?alt=media&#x26;token=b9abf691-8098-41c1-b021-3a821843ec84" alt="" width="242"><figcaption></figcaption></figure></div>

***

### 4. Close Conversation

The trigger activates each time a conversation is marked as done. This can be done manually by agents or automatically through the "**Close Conversation**" action.

<div align="left"><figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FfOslVmsdY8H0IqZFV1nY%2Fimage.png?alt=media&#x26;token=f51ef01c-2efe-4266-80fc-2c2054ecdca7" alt="" width="216"><figcaption></figcaption></figure></div>

***

## 5. On Message&#x20;

* The "On Message" trigger involves setting specific keywords. When these keywords are used by the customer in a message, the bot will be triggered.
* To trigger the bot via keyword, the customer must select or enter the exact keyword as set in the "On Message" configuration
* In the "On Message" configuration, there's an option for "**Partially match**." When enabled, the bot will trigger even if the keyword is part of a sentence. However, it won't work for spelling mistakes.
* You can add multiple keywords to trigger the bot by clicking on the "**Add Keyword**" button.

<div align="left"><figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FTFgRicvmReLokXepPF4o%2Fimage.png?alt=media&#x26;token=b7e2d588-4090-4667-ae2f-6b166a7d8e00" alt="" width="263"><figcaption></figcaption></figure></div>

***

## 6. On New Lead

Upon receiving a new lead, the "On New Lead" trigger activates each time a new lead messages your WhatsApp API number. This trigger specifically applies to customers initiating contact for the first time, prompting the bot to engage with them

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FJROZjNJnctj0GNVBae9b%2Fimage.png?alt=media\&token=56f86d46-5906-497f-9b1d-ac1b0faefbc0)

***

## 7. On New Row Google Sheet&#x20;

When enabled, the 'On New Row Google Sheet' trigger integrates your Google Sheet with the bot. Whenever a new row containing customer data is added to the Google Sheet, the bot will be triggered.

Ensure to include the customer's phone number in the Google Sheet, along with the country code. Failure to do so will result in the bot malfunctioning

<div align="left"><figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2Fz4WiK0eR4aRiIC0K3jZg%2Fimage.png?alt=media&#x26;token=98016688-87a5-41a4-84da-a9cd1e0b4dec" alt="" width="265"><figcaption></figcaption></figure></div>

***

## 8. On Template Delivered

When activated, the 'On Template Delivered' trigger operates each time a template message is sent to customers, whether through a broadcast or individual sending. Regardless of the method, whenever the specified template is delivered, the bot will be triggered.

<div align="left"><figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2Fekuai4tcGA5TMxFam9sL%2Fimage.png?alt=media&#x26;token=2b6ddb67-ac2b-4afe-ba56-ad59a7788245" alt="" width="247"><figcaption></figcaption></figure></div>

***

## 9. On Webhook

A webhook is a method for receiving real-time data notifications from external sources, allowing systems to communicate and trigger automated actions based on these events. It serves as a bridge between different applications, enabling seamless integration and streamlined data exchange.

To use the "Webhook" trigger, you must copy and integrate the DoubleTick webhook into your web application to capture responses. Once integrated, make a call to the URL and click the "Capture Response" button to display the response.&#x20;

The bot will trigger each time a new response is received via the webhook

<div align="left"><figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F2TVPae9XUIB7Ju8bItXT%2Fimage.png?alt=media&#x26;token=b6a88c8d-63bd-4101-b3a4-206873143f60" alt="" width="263"><figcaption></figcaption></figure></div>

***
