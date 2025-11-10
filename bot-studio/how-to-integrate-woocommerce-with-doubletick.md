# How to Integrate WooCommerce with DoubleTick

**Step 1: Copy the Webhook URL from DoubleTick**\\

1. **Log into DoubleTick.**
2. Hover over the left-side menu and navigate to **Bot Studio**.
3. Click on **Create a New Bot**.
4. Select **Webhook** as the trigger.
5. A unique **Webhook URL** will be generated. Copy this URL to use later in the WooCommerce settings\
   \\

   <figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FUteNZcpJdcuHFGnoug6b%2FScreenshot%202024-11-21%20at%2020.20.07.png?alt=media&#x26;token=6433260e-6bcd-48ea-8606-43542c3928d5" alt="" width="135"><figcaption></figcaption></figure>

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F0X0pXwxf4ygbivZEIiWm%2FScreenshot%202024-11-21%20at%2020.21.26.png?alt=media&#x26;token=5194461d-c8c2-4a84-b680-3960f7e7c3c2" alt=""><figcaption></figcaption></figure>

**Step 2: Configure the Webhook in WooCommerce**\
\
1.**Log into WooCommerce.**\
**2.**&#x4E;avigate to: \*\*WooCommerce > Settings > Advanced > Webhooks\
\\

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FckCTPlnu8CKaeW5O9m0d%2FScreenshot%202024-11-21%20at%2020.26.20.png?alt=media&#x26;token=91c43b95-6ee2-4a30-9e34-a03ceffce491" alt=""><figcaption></figcaption></figure>

3. If you are setting up your first webhook, click on **Create a New Webhook**. For subsequent setups, click \*\*Add Webhook

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FZi5jFWTnwjObWe3MiPms%2FScreenshot%202024-11-21%20at%2020.27.21.png?alt=media&#x26;token=3874a97c-8469-4c29-8fdd-a97d86143b20" alt=""><figcaption></figcaption></figure>

4. Fill in the required fields:
   * **Name:** Enter a name for your webhook (e.g., “DoubleTick Integration”).
   * **Status:** Set to **Active** to enable the webhook.
   * **Topic:** Choose when the webhook should trigger (e.g., `Order Updated`, `Order Created`, etc.).
   * **Delivery URL:** Paste the Webhook URL copied from DoubleTick.
5. Save your settings by clicking **Save Webhook**.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FV8MXmtM5CTcsquZcriHR%2FScreenshot%202024-11-21%20at%2020.28.06.png?alt=media&#x26;token=ef15ac37-11cc-419e-8544-7191346ba057" alt=""><figcaption></figcaption></figure>

**Step 3: Link the Webhook Trigger to a Template in DoubleTick**

1. Return to **DoubleTick**.
2. In **Bot Studio**, link the **Webhook Trigger** to a **Send Template** action.
3. Customize the template to suit your automation needs (e.g., send order updates to customers)\
   \\

   <figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FKLVtqxC74Hoef2KyvH4m%2FScreenshot%202024-11-21%20at%2020.30.04.png?alt=media&#x26;token=50791ed1-92ec-4f25-99ae-4f5fea00f4d4" alt=""><figcaption></figcaption></figure>

**Step 4: Test the Integration**

1. In WooCommerce, create a **dummy order** or perform an action matching the topic you configured for the webhook (e.g., updating an order status).
2. DoubleTick will automatically process the webhook and trigger the bot workflow
