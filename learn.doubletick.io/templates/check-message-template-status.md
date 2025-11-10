# Check Message Template Status

### Template Approval Process 👇 <a href="#statuses" id="statuses"></a>

{% embed url="<https://youtu.be/4d2W5imx2IE>" %}

### Statuses <a href="#statuses" id="statuses"></a>

Templates can have the following statuses.

* **In-Review**: Indicates that the template is still under review. Review can take up to 24 hours.
* **Rejected**: The template has been rejected during Meta review process or violates one or more of our policies. See [<mark style="color:green;">Rejected Reasons</mark>](https://learn.doubletick.io/templates/fix-message-template-rejection)
* **Active - Quality pending**: The message template has yet to receive quality feedback or read-rate information from customers. Message templates with this status can be sent to customers. See [<mark style="color:green;">Quality Rating</mark>](https://learn.doubletick.io/whatsapp-business-api/manage-and-view-account-quality-on-meta#quality-rating).
* **Active - High Quality**: The template has received little to no negative customer feedback. Message templates with this status can be sent to customers. See [<mark style="color:green;">Quality Rating</mark>](https://learn.doubletick.io/whatsapp-business-api/manage-and-view-account-quality-on-meta#quality-rating).
* **Active - Medium Quality**: The template has received negative feedback from multiple customers, or low read-rates, but may soon become paused or disabled. Message templates with this status can be sent to customers. See [<mark style="color:green;">Quality Rating</mark>](https://learn.doubletick.io/whatsapp-business-api/manage-and-view-account-quality-on-meta#quality-rating).
* **Active - Low Quality**: The template has received negative feedback from multiple customers, or low read-rates. Message templates with this status can be sent to customers but are in danger of being paused or disabled soon, so we recommend that you address the issues that customers are reporting. See [<mark style="color:green;">Quality Rating</mark>](https://learn.doubletick.io/whatsapp-business-api/manage-and-view-account-quality-on-meta#quality-rating).
* **Paused**: The template has been paused due to recurring negative feedback from customers, or low read-rates. Message templates with this status cannot be sent to customers.&#x20;
* **Disabled**: The template has been disabled due to recurring negative feedback from customers. Message templates with this status cannot be sent to customers.

You can view a template's status by going to **WhatsApp Manager** > **Overview**, mousing over the suitcase icon (**Account tools**) and clicking **Message templates**.&#x20;

If you have multiple WhatsApp Business Accounts, select the account whose template statuses you want to view from the list of accounts in the dropdown menu in the top-right corner.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FYYhfQhUkZjjbY9Ui2LAs%2Fimage.png?alt=media&#x26;token=9bf0c461-a5d2-423c-9e27-6f449a77c2ad" alt=""><figcaption></figcaption></figure>

## Template Pausing&#x20;

If a message template reaches the lowest quality rating (a status of **Active - Low quality**), it will automatically be paused for a period of time to protect the quality rating of phone numbers that have used the template. Pausing durations are as follows:

* 1st Instance: **Paused** for 3 hours
* 2nd Instance: **Paused** for 6 hours
* 3rd Instance: **Disabled**

When a message template is paused (status of **Paused**) it can't be sent to customers, so you should halt any automated messaging campaigns that rely on that template. Although you won't be charged for attempting to send a paused message template to a customer, and the attempt won't count against your[ <mark style="color:green;">messaging limit</mark>](https://learn.doubletick.io/whatsapp-business-api/messaging-limits-in-whatsapp-api), the API will reject these attempts anyway. You should only resume these campaigns when the template's status has been set to **Active** again.

You may wish to edit a paused template if you feel that editing its content will reduce the amount of negative feedback it may receive and increase user engagement. Keep in mind, however, that once you edit a message template and resubmit it for approval, its status will change to **In Review** and it can't be sent to customers again until it has been re-approved and its status set to **Active**.

You may also wish to make changes to your business logic (targeting, delivery parameters, etc.) if you feel it is contributing to negative feedback or low engagement.

Pausing will initially not impact the business phone number from which the message template was sent, or cause the phone number's message limit to decrease. Other high quality message templates can continue to be sent from the phone number. However, if a business consistently sends message templates that reach a **Low quality** status, the phone number may eventually be impacted.

<mark style="color:green;">**A template will unpause on its own after satisfying the pause duration outlined above. Once unpaused, the template's status will be set to Active and you may begin sending it to customers again**</mark>.

## Check Template Status in DoubleTick

To access templates on the Doubletick platform, on left panel navigate to the Templates section.&#x20;

Click on "**Template Status**," and a dropdown menu will appear. From there, select the status you want to check, and you'll see the templates associated with that status.&#x20;

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FAF7XquhGfDRgR01obnsb%2FUntitled%20design%20(26).gif?alt=media&#x26;token=0b434286-1bd9-4481-b2ab-c28e0a5ea8f6" alt=""><figcaption></figcaption></figure>
