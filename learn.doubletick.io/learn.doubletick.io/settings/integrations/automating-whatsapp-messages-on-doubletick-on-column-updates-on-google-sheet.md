# Automating WhatsApp messages on DoubleTick on column updates on Google Sheet

Streamlining your communication workflows can save time and enhance customer satisfaction. This guide demonstrates how to send WhatsApp template messages via **DoubleTick** whenever a specific column in Google Sheets is updated to a particular value, using **Zapier** to connect the tools seamlessly.

**What You’ll Need**

1. **Google Sheets**: The data source to trigger messages.
2. **Zapier**: The automation tool to connect your apps.
3. **DoubleTick**: A platform to send pre-approved WhatsApp template messages.
4. **Pre-approved WhatsApp templates**: Templates comply with WhatsApp Business API policies.

**Setting Up the Automation**

**Step 1: Prepare Your Google Sheet**

Prepare or create your Google Sheet with the following:

* Each row represents a unique record (e.g., customer or task).
* A column (e.g., *Status*) will trigger the WhatsApp message when updated.
* Include phone numbers in international format (e.g., +1XXXXXXXXXX).

Example:

| **Name**   | **Phone Number** | **Status** | **Last Updated** |
| ---------- | ---------------- | ---------- | ---------------- |
| John Doe   | +91934567890     | Pending    | 2024-11-20       |
| Jane Smith | +91987654321     | Approved   | 2024-11-21       |

**Step 2: Configure DoubleTick**

1. Define your WhatsApp templates:
   * **Template Name**: status\_update
   * **Content**: Hello {{Name}}, your status has been updated to {{Status}}.\\

**Step 3: Crete a Zap in Zapier**

1. **Log in to Zapier** and click **Create Zap**.

**Trigger: Google Sheets**

* **App**: Google Sheets
* **Event**: *Updated Row*
* **Set Up Trigger**:
  * Select your spreadsheet.
  * Choose the worksheet.
  * Identify the column to monitor for updates (e.g., *Status*).

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2Fcv5GVIh0qZTj68E2IGBL%2F0.png?alt=media)

**Step 4: Add a Filter in Zapier**

Filters ensure your Zap proceeds only when specific conditions are met.

1. **Add Action**: *Filter by Zapier*.
2. **Set Up Filter**:
   * **Condition**:
     * Select the column to monitor (e.g., *Status*).
     * Choose the condition: *Text Exactly Matches*.
     * Enter the value to match (e.g., *Approved*).

This ensures that the Zap continues only when the "Status" column updates to the specified value.

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FErcMCOAMxWkwVgLYFDAs%2F1.png?alt=media)

**Step 5: Action: Connect Zapier with DoubleTick**

Zapier directly supports DoubleTick, making it easy to send WhatsApp messages.

1. **App**: DoubleTick
2. **Event**: *Send WhatsApp Template Message*
3. **Set Up Action**:
   * **Template Name**: Select the template you configured in DoubleTick (e.g., status\_update).
   * **Recipient Phone Number**: Map the phone number column from your Google Sheet (e.g., *Phone Number*).
   * **Template Variables**: Map the variables in the template:
     * Variable 1: Map the name column (e.g., *Name*).
     * Variable 2: Map the status column (e.g., *Status*).

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F4dmzPu2JNfgyx92EP6gm%2F2.png?alt=media)

**Step 6: Test Your Zap**

1. Update a row in your Google Sheet and ensure the monitored column (e.g., "Status") is updated to the specified value (e.g., "Approved").
2. Verify that the WhatsApp message is sent to the correct recipient with the mapped template and variables.

**Use Cases**

* **Order Status Updates**: Notify customers about order progress (e.g., shipped, delivered).
* **Appointment Confirmations**: Confirm appointments when the status changes to "Confirmed."
* **Task Assignments**: Notify team members about new tasks.

By integrating Google Sheets, Zapier, and DoubleTick, you can automate WhatsApp messages efficiently. Directly connecting Zapier with DoubleTick simplifies the setup, allowing you to map templates and variables seamlessly for real-time communication.
