# Fixing Webhook Phone Numbers: Add Country Codes Automatically

In today’s digital communication landscape, businesses rely on streamlined processes to connect with customers. WhatsApp is a preferred communication channel for many, but it requires a properly formatted phone number with an international country code to send messages or templates. When customer data enters the system from sources like Google Sheets or Webhooks, the lack of a country code can block the message flow, preventing successful WhatsApp interactions. \
\
In this guide, we’ll explore how a Number Correction API can help you automate number formatting, ensuring data in DoubleTick is WhatsApp-ready. We’ll also look at creating a bot to automate this correction, starting from the initial data source.\
\\

**How the Number Correction API Works**\
\
The Number Correction API functions as an intermediary that formats the phone number before it is stored or processed. Here’s a simplified workflow of how it works:

1. Receive the Raw Data: The lead/customer information is collected from Google Sheets, webhook, or another integration. This data may include unformatted phone numbers without country codes.
2. API Call to Correct the Number: Once the raw data is received, the Number Correction API is called. This API takes the phone number and a set of additional parameters (like the customer’s country) to automatically add the correct country code.
3. Validate the Number: The API verifies the phone number format according to the E.164 international standard, which WhatsApp uses. For example, a number for India will be formatted as “+91XXXXXXXXX.”
4. Update the Corrected Number in DoubleTick: The formatted number is then updated in DoubleTick, ready for use in WhatsApp communications.
5. Sending WhatsApp Templates: With the number correctly formatted, WhatsApp messages or templates can now be sent without interruption.\
   \
   **Implementing the Number Correction API in DoubleTick**\
   \
   &#x20;Step 1: Identify Incoming Data Sources \
   \
   First, identify where the customer data is coming from, whether it’s Google Sheets, a webhook, or another source. If you’re dealing with multiple data sources, ensure that the Number Correction API can be triggered every time new data is received.\
   &#x20;\
   Step 2: Set Up Your Bot Platform \
   \
   Use the Bot-Studio platform that integrates with your data source. For example: Google Sheets Integration: For Sheets set up the starting point of the Bot as On New Row google Sheet, that triggers the bot whenever a new entry is added. Webhook Integration: For webhooks, set up Starting point trigger as on Webhook that fires the bot whenever data is received from the source.\
   \
   a) Setup and call the Number Correction API \
   \
   Once the bot is triggered, it should pass the phone number and country details to the Number Correction API. Here’s how to create the API call : \
   \
   \-  Add the Call API action to the Bot, connect the same to the source node. \
   \-  Create the Number Correction API by clicking on the + Create New api button. \
   \\

   <figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FAdcn34ahvq0BGo003KKF%2FScreenshot%202024-11-19%20at%2015.28.48.png?alt=media&#x26;token=14bac1e3-8735-400d-87dc-d98f819b9511" alt=""><figcaption></figcaption></figure>

   \-  Add the details in the Pop up as shown in the image below \
   curl --location '<https://b1ge7k5vbf.execute-api.ap-south-1.amazonaws.com/prod>' \ --header 'Content- Type: application/json' \ --data '{ "defaultCountryCode": "IN", "numbers": \[ { "value": "07038896140" } ] }'

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F6amSNgHnfSYZ1mjg3PYa%2FScreenshot%202024-11-19%20at%2015.33.09.png?alt=media&#x26;token=95b286af-4efa-43c6-a37e-800a6e706d6d" alt=""><figcaption></figcaption></figure>

b) Next, create a new webhook and copy its URL. Link this to a second "Call API" action. In the second call, paste the webhook URL, set the body type to JSON, and add \`"phone": "[+918356867936](tel:+918356867936)"\`. Save the API. Map the phone number in the second API’s “phone” section by selecting “0.E164”—this will apply the country code to the phone number received from the first API.\
\\

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FFZnWHr2c1udsNZ1a7mqm%2FScreenshot%202024-11-19%20at%2015.36.42.png?alt=media&#x26;token=e7e04d61-953d-479b-b800-38f414608790" alt=""><figcaption></figcaption></figure>

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FtKcZvRxVnhF9bYLNpge1%2FUntitleddesign12-ezgif.com-video-to-gif-converter.gif?alt=media&#x26;token=aadb0440-526e-4576-8f53-5c1b0bddefbf" alt=""><figcaption></figcaption></figure>

Step 3 :  Capturing Response \
Finally, click “Capture Response” in the second webhook to retrieve the phone number with the country code applied.\
\\

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F45z07LuLjFQKwdnDLW53%2FUntitleddesign13-ezgif.com-video-to-gif-converter.gif?alt=media&#x26;token=d3af38f9-59f3-4fc9-9236-3e59f1b01fdb" alt=""><figcaption></figcaption></figure>
