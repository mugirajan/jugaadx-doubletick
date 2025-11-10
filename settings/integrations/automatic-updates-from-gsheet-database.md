# Automatic updates from Gsheet Database

**Automating Order Tracking with Doubletick, Google Sheets, and Zapier**

Managing customer orders efficiently is critical to providing an exceptional customer experience. By integrating **Doubletick**, **Google Sheets**, and **Zapier**, businesses can automate order tracking and any other kind of inventory updates. This guide is an example on how you can set up a workflow to:

1. Collect order IDs from customers on Doubletick.
2. Populate the order data in Google Sheets.
3. Monitor updates on the order status.

**Step 1: Collecting Order IDs from Customers**

Doubletick enables businesses to communicate with customers directly through WhatsApp. Here’s how to start:

1. **Set Up an Input BOT flow**\
   Design a BOT flow in Doubletick where customers can provide their Order ID. Use send message **“on response”** section for structured data collection.
2. **Capture Order IDs in Google Sheets**
   * Action: **Google Sheet**\
     Each new order ID is saved in **Sheet 1** with fields such as:
     * Customer Name
     * Order ID
     * Contact Number

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FS5Sr9Mu6TO7XKaCzj4lJ%2F0.png?alt=media)

**Step 2: Monitoring Order Status Updates**

Once the order data is in **Sheet 1**, updates to the order status (e.g., "Processing," "Shipped," "Delivered") are managed in **Sheet 2**. For seamless tracking:

1. **Link Sheets for Status Updates**\
   A backend team updates the order status in **Sheet 2**. This sheet can have:
   * Order ID
   * Updated Status
   * Remarks (if any)
2. **Automate Updates in Sheet 3**\
   Use Zapier to automate transferring updates to **Sheet 3** for processing by the bot:
   * Trigger: **match value in order ID in sheet 1 with order id column in Sheet 2**.
   * Action: **Create/Update Row** in Sheet 3.\
     In Sheet 3, include columns for:
     * Order ID
     * Status
     * Customer Details
     * Bot Response Status (for tracking sent notifications)

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FAT78pcr43dbq4gulzW8c%2F1.png?alt=media)

**Step 3: Sending Updates to Customers via Doubletick**

Once the order status is populated in **Sheet 3**, Doubletick can notify customers using a pre-configured message template:

1. **Connect Google Sheets and Doubletick**
   * Trigger: **On New Row** Google Sheet in Sheet 3.
   * Action: **Send Template Message** in Doubletick.

     ![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FPeiskuHQTz95XnkoojED%2F2.png?alt=media)
2. **Craft a Template Message**\
   The message can be customized to include placeholders like:
   * Customer Name
   * Order ID
   * Updated Status\
     Example:

**Hello {{customer\_name}},**

**Your order {{order\_id}} is now {{order\_status}}. Thank you for choosing us!**

1. **Send Notifications Automatically**\
   Once the bot receives the update from Sheet 3, it sends the message to the customer on Doubletick.

**Benefits of This Workflow**

* **Automation:** Reduces manual effort by automating communication.
* **Real-Time Updates:** Ensures customers receive prompt information about their orders.
* **Scalability:** Works seamlessly with large datasets, making it ideal for businesses of any size.
* **Enhanced Customer Satisfaction:** Timely updates improve transparency and trust.
