# How To Capture Details Using Webhooks And Condition

Capture customer details based on their interaction (replying or clicking a button in the template) and store them in Google Sheets.

#### **Steps**

**1. Set Up Webhook Trigger**

* Configure the workflow to be triggered by a webhook.
* Copy the provided **Webhook URL** and paste it into the required **Webhooks Section** of your platform.

**2. Map the Incoming Data**

* In the workflow configuration, identify the field where customer data is stored.
* For the **Phone Number Field**, select **"From"** as the source.

**3. Add a Condition for Button Interaction**

* Attach the condition to the **Webhook Trigger**.
* Set up the condition as follows:
  * **Field**: message.type
  * **Operator**: Contains
  * **Value**: BUTTON (case-sensitive, ensure exact match or copy from bot logs).

**4. True Branch: Store Clicked Button Data**

* If the condition evaluates to **True** (customer clicked a button):
  * Extract the relevant details (e.g., phone number, message content).
  * Save the data into the designated **Google Sheet**.

**5. False Branch: Store No Interaction Data**

* If the condition evaluates to **False** (customer did not click any button):
  * Save the details into a **Separate Google Sheet** to keep track of non-interactive customers.

#### **Summary**

* The workflow will differentiate between customers who clicked buttons and those who didn’t.
* Two separate Google Sheets will maintain records for **interactive** and **non-interactive** customers.
* Ensure data mapping and webhook integration are correctly tested before going live.\\

![IMG\_256](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FA6PH5IeYVVrYgqr9FjXq%2F0.png?alt=media)
