# WhatsApp API Conversations & Categories

Meta charge per conversation, not per individual message. Conversations are 24-hour message threads between you and your customers. They are opened and charged when messages you send to customers are delivered.&#x20;

***

### Conversation Categories <a href="#conversation-categories" id="conversation-categories"></a>

Conversations are categorized with one of the following categories:

* **Marketing** — Enables you to achieve a wide range of goals, from generating awareness to driving sales and retargeting customers. Examples include new product, service, or feature announcements, targeted promotions/offers, and cart abandonment reminders.
* **Utility** — Enables you to follow-up on user actions or requests. Examples include opt-in confirmation, order/delivery management (e.g., delivery update); account updates or alerts (e.g., payment reminder); or feedback surveys.
* **Authentication** — Enables you authenticate users with one-time passcodes, potentially at multiple steps in the login process (e.g., account verification, account recovery, integrity challenges).
* **Service** — Enables you to resolve customer inquiries.

*<mark style="color:green;">Note: Marketing, utility, and authentication conversations can only be opened with template messages.</mark>*

***

### Free Tier Conversations <a href="#free-tier-conversations" id="free-tier-conversations"></a>

Each WhatsApp Business Account gets 1,000 free [<mark style="color:green;">service conversations</mark>](https://developers.facebook.com/docs/whatsapp/pricing/#conversation-categories) each month across all of its business phone numbers.&#x20;

*<mark style="color:green;">Marketing, utility and authentication conversations are not part of the free tier.</mark>*

***

### Customer Initiated Conversation: Service Windows <a href="#customer-service-windows" id="customer-service-windows"></a>

When a customer messages you, a 24-hour timer called a customer service window starts. If you are within the window, you can send free-form messages or template messages. If you are outside the window, you can only send template messages.

***

### Free Entry Point Conversations <a href="#free-entry-point-conversations" id="free-entry-point-conversations"></a>

A free entry point conversation is opened if&#x20;

1. A customer using a device running Android or iOS messages you via a <mark style="color:green;">Click to WhatsApp Ad</mark> or <mark style="color:green;">Facebook Page Call-to-Action</mark> button
2. You respond within 24 hours. If you do not respond within 24 hours, a free entry point conversation is not opened and you must use a template to message the customer, which opens a marketing, utility, or authentication conversation, per the category of the template.

The free entry point conversation is opened as soon as your message is delivered and lasts 72 hours. When a free entry point conversation is opened, it automatically closes all other open conversations between you and the customer, and no new conversations will be opened until the free entry point conversation expires.

Once the free entry point conversation is opened, you can send any type of message to the customer without incurring additional charges. However, you can only send free-form messages if there is an open customer service window between you and the customer.

For example, if the customer messages you via a Click to WhatsApp Ad at 10am and you respond via a template message at 10pm the same day:

* The free-entry point conversation starts at 10pm and lasts 72 hours.
* You can send template messages at no charge in those 72 hours.
* You can send free-form messages until 10am the next day, at which point the customer service window closes, as it is independent of the free entry point conversation (if the customer messages you again, however, it opens another 24-hour customer service window in which you can send free-form messages).

***

### Rates <a href="#rates" id="rates"></a>

Rates vary based on conversation category and country/region rate.&#x20;

Click the attached link to checkout rates by country/region for each conversation category. 👇

{% embed url="<https://doubletick.io/conversation-cost>" fullWidth="false" %}

These rates apply for any conversation opened on or after June 1, 2023&#x20;

### Country Calling Codes <a href="#country-calling-codes" id="country-calling-codes"></a>

Charges for conversations are based on the country of the user’s phone number. Meta rely on your customer's country calling code to determine their country.&#x20;

These rates apply for any conversation opened on or after June 1, 2023&#x20;
