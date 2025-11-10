# How to Automate Reminders for Template Button  Selection in Your Bot

If your bot sends a template message consisting of buttons to users, there might be scenarios where users fail to interact with the buttons within a specified time frame. To ensure the conversation flow continues and to remind users to engage, you can set up an automated process to send a reminder template. . how to implement this step-by-step

**Step-by-Step Guide** \
\
**Step 1: Setting Up Customer Attributes**

1. In the "On Template Delivered" event, connect the button to the "Set Customer Attribute" component.
2. Select an attribute (e.g., Selected Bot Button) and assign a value that matches the button name in the template. \
   a) For instance, if your button is labeled "Get Started," set the value of Selected Bot Button to "Get Started."\
   This step helps the bot track whether the user interacts with a specific button.\\

**Step 2: Adding a Time Delay**

1. Connect the "On Template Delivered" event to a "Time Delay" component.
2. Set the desired duration for the delay. This defines the waiting period before the bot checks if the user has clicked any button. \
   a) Example: Set a delay of 5 minutes

**Step 3: Adding a Condition to Check User Interaction**

1. After the time delay, add a "Condition" component to verify if the user has clicked a button.
2. Configure the condition to check the value of the Selected Bot Button attribute. o\
   \
   a) If the attribute is not set (i.e., the user hasn’t clicked any button), proceed to the next step. \
   b) If the attribute is set (i.e., the user has clicked a button), end the flow or proceed with the conversation

**Step 4: Sending a Reminder Template**

1. If the user hasn’t clicked any button (based on the condition), connect the condition’s "False" path to another template message.
2. Craft a reminder template asking the user to select a button to continue the flow. \
   a) Example: "It seems you haven’t made a selection yet. Please choose an option below to proceed."
3. Include the same set of buttons or an updated list, depending on your flow requirements

**Step 5: Optional Logging and Tracking**

1. Optionally, log the user’s inactivity or track users who did not interact with the buttons. This can help you analyze engagement and refine your bot’s design

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F7IVdxZ2HsjzwxeZrxvvY%2Fimage.png?alt=media&#x26;token=830e30cf-1247-4e77-94c2-c17073a33b0d" alt=""><figcaption></figcaption></figure>
