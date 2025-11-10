# How to Notify Agents on WhatsApp When Assigned a Lead in DoubleTick

&#x20;

1. Navigate to the chats section, copy any chat URL, then go to the templates section to create a new template for notifying the team member.

\\

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F1qIHuLZav0lA2S8EGvls%2FScreenshot%202024-11-08%20at%2012.05.18.png?alt=media&#x26;token=ec7f1d9f-fb9b-4b31-9e63-e0b1816d584f" alt=""><figcaption></figcaption></figure>

2. Create a new template and  assign a name to the template and enter the content for the message, for example:\
   Hey {{team}},

&#x20;      A conversation from DoubleTick CRM has been assigned to you."

3. Add the Visit Website Button with Dynamic Customer Number
   * Copy any chat URL and paste it into the button’s link.
   * Add the customer's phone number in curly braces (e.g., `{{customer_phone_number}}`), as this will be a dynamic field. You can use an example variable for testing.
   * Submit the template after saving.

\\

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F6shJ8PgnOKmPvK38dt4Y%2FScreenshot%202024-11-08%20at%2012.17.48.png?alt=media&#x26;token=1fe1e5dc-6396-42af-9e5b-46ce08ce6028" alt=""><figcaption></figcaption></figure>

4. Set Up the Bot Trigger

   * Now, go to the bot and choose the “On Agent Assigned” trigger.
   * Link this trigger to the "Send Template" action.

   <figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FkAvCtNmzM9uMUKXhl6dJ%2FScreenshot%202024-11-08%20at%2012.24.43.png?alt=media&#x26;token=f37c134f-5e40-499a-94dd-47c29e595a10" alt=""><figcaption></figcaption></figure>
5. Send the Template to a Specific Number

* In the "Send Template" action, click the three vertical dots (ellipsis) and choose "Send to Specific Number."
* From the customer attributes, select the customer’s phone number.
* This will notify the team member when a lead from DoubleTick CRM is assigned to them.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FVt7vEmKOkj4Qt4YztDeH%2FUntitled%20design.gif?alt=media&#x26;token=41ff9bcd-4c83-4676-9803-b6c133718f09" alt=""><figcaption></figcaption></figure>
