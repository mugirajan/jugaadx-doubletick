# How to use Variables in Message Template

## Cheout the Video on How to use Variables ? 👇

{% embed url="<https://youtu.be/H6ZYLSpWa5I>" %}

***

WhatsApp Business API supports various variables that can be used to personalize messages and interactions with users. These variables allow businesses to dynamically insert user-specific information into their messages.&#x20;

Some common variables include: 👇

1. **{{1}}**, **{{2}}**, **{{3}}**, etc.: These are placeholders for dynamic content. They can be used to insert variables such as user's name, order number, transaction amount, etc.
2. **{{contact.name}}**: Inserts the name of the contact.
3. **{{contact.phone}}**: Inserts the phone number of the contact.
4. **{{contact.id}}**: Inserts the unique ID of the contact.
5. **{{datetime}}**: Inserts the date and time of the message.
6. **{{message.content}}**: Inserts the content of the message.
7. **{{company.name}}**: Inserts the name of the business.
8. **{{company.phone}}**: Inserts the phone number of the business.
9. **{{company.address}}**: Inserts the address of the business.

These variables can be used within message templates or dynamic message content to provide personalized experiences for users.

## Addition of Variable&#x20;

* Before submitting a template, it's crucial to include sample variables, if you've added variables within the message content.&#x20;
* Sample variables allow WhatsApp to understand how the message will appear with dynamic content inserted, ensuring that the template is correctly formatted and personalized for users.
* For example, if you have a message template that includes the variable **{{contact.name}}** to insert the contact's name, you should provide a sample variable like **"John"** or **"Jane"** to demonstrate how the message will look with the actual contact's name inserted.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FoFGTq8nZFOn6imRTGNE4%2Fimage.png?alt=media&#x26;token=38c6cbdf-3b18-48a1-bc07-428fb40e1927" alt=""><figcaption></figcaption></figure>
