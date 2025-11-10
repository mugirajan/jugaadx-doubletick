# Understanding and Troubleshooting the "New Bot Failure Alert" Email

When you receive the "New Bot Failure Alert" email, it signifies an error in the active bot you have created. This guide will walk you through understanding and resolving this issue, with an example based on a bot named "Jain Shadi."

What Does the Error Indicate?

The error message specifies that a "chat window is closed." This occurs when the bot tries to send a message to a closed chat window. In such cases, the customer has not responded, and the chat window remains closed. To proceed, you need to send a **template message**

#### Steps to Troubleshoot and Resolve the Issue

**1. Check the Bot Name**

* The email provides the name of the bot experiencing the issue. In this example, the bot name is "Jain Shadi."

**2. Review Logs**

* Click on the **View Logs** link in the email.
* The logs provide a detailed history of the bot's actions and where the error occurred. For example:
  * The bot starts with a "template delivered."
  * After a time delay, it checks a condition and then attempts to send a message.
  * If the message bounces back, it indicates the need to use a template message instead.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FD5LAnQvHR88zQbpMTBeN%2FUntitled%20design%20(26).gif?alt=media&#x26;token=93f42daa-e033-4dec-af1c-475500dd0d92" alt=""><figcaption></figcaption></figure>

**3. Debugging in Bot Studio**

* Open **Bot Studio** and search for the bot name (e.g., "Jain Shadi").
* Analyze the bot’s flow. For instance:
  * The bot sends a template.
  * There’s a time delay followed by a condition.
  * After the condition, the bot sends a message, which could fail if the chat window is closed.

**Fix the Bot Flow**

* **Add Quick Reply Buttons**: To improve customer interaction, consider adding quick reply buttons. If the customer clicks a button, the bot can then send a follow-up message.
* **Adjust Time Delays**: Ensure there is sufficient time for the customer to respond before sending additional messages.
* **Add a Template**:
  1. Delay the send message component.
  2. Insert a template message before the send message component.
  3. Either duplicate an existing template or select a new one from the action column and link it.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2Ffgh5pZjvCWdJr5evXcWW%2FUntitled%20design%20(27).gif?alt=media&#x26;token=e3a1e451-75a9-4581-b027-39442ff2fd4e" alt=""><figcaption></figcaption></figure>
