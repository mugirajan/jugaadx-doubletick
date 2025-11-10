# Tally Prime Integration

**What is Tally Prime?**

Tally Prime is the latest version of Tally software, designed to simplify business management with an enhanced user interface and advanced features. It streamlines accounting, inventory, payroll, and taxation processes, supporting GST, TDS, and compliance needs. With customizable reports, remote access, and multi-tasking capabilities, TallyPrime boosts productivity and adapts to growing business requirements. Ideal for SMEs, it offers ease of use, accuracy, and scalability for modern businesses.

**Benefits of Tally Integration with DoubleTick**

Integrating Tally with DoubleTick allows businesses to send invoices generated in Tally directly through DoubleTick in a seamless and efficient manner. This integration streamlines the process, reduces manual efforts, and ensures faster communication with clients. With just a few clicks, invoices can be shared, saving time and improving accuracy. Let’s explore the steps to set up and maximize this integration for your business operations.

**Steps for Integration**

Log in to your DoubleTick account, navigate to the **Settings** section, and select **Integrations**. Click on **Tally**, and you will see an option to download the TCP file. Simply click on it to proceed with the download.

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FSaboGVpNFDYqkE9GQ200%2F0.png?alt=media)

After downloading the file, open TallyPrime and click on **Help** in the top-right corner of the application. Select **TDLs & AddOns** and then click on **Manage Local TDLs**.

In the TDL configuration window, locate the option **Load Selected TDL Files on Startup** on the second line and toggle it to **Yes**. Navigate to the folder where you saved the TDL file, select it, and upload it. Once uploaded, the DoubleTick plugin will be added, as shown in the screenshot.

\\

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FnBPHJ7bxJtj1RUnJeqDS%2F1.png?alt=media" alt=""><figcaption></figcaption></figure>

In the TDL configuration, you will see the option **"Load Selected TDL Files on Startup"** on the second line.

Click the **Yes** button next to it. Then, navigate to the folder where you downloaded the TDL file, select it, and upload it. After uploading, the DoubleTick plugin will appear, as shown in the screenshot.

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FaVtUNxUMyBpedkmzhGbA%2F2.png?alt=media)

Return to the main menu and click on **Company** in the top-left corner. Then, select **Features**. Under Features, you will find the option **Configure DoubleTick Plugin**. Click on it and select **Yes**.

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FqIBQySp0iAaU3n2bkKjd%2F3.png?alt=media)

As shown in the screenshot, you'll see fields to enter details like **Webhook URL**, **FTP Address**, **Password**, and **Username**. These details can be found on the Integration page in your DoubleTick panel. Simply copy each piece of information and paste it into the respective fields one by one.

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FSThxDQvWWSiFQbfAXG9S%2F4.png?alt=media)

There are 8 triggers in Tally, and we will enable all of them by selecting **Yes** for each trigger.

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F147BVfSJKMV6uaXxe0hG%2F5.png?alt=media)

In the **Field Name** add “**media\_url”** , refer to the screenshot. The **Default Value** should be left blank. For **Tally Field Name**, select **File URL** since we want to share the PDF with the customer. Similarly, accept and activate all 8 triggers.

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2Fe6r4N1o0GsfyVOMeWWEb%2F6.png?alt=media)

Once you accept the automations, you'll be prompted to confirm the changes. Click **Yes** to accept. The DoubleTick plugin is now successfully configured in Tally.

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FR8zqlrRzVSXuUx9xdtHS%2F7.png?alt=media)

Next, we need to configure the same on DoubleTick. Return to your DoubleTick account, go to the **Bot Studio**, and click on **Create a New Bot**. You will see all 8 triggers that we enabled in TallyPrime.

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FT89RcEK7xznV8U93CmEq%2F8.png?alt=media)

Let's create a webhook for sales created in Tally. This means that whenever a new sale is recorded in Tally, the webhook will be triggered, and a sales confirmation template will be sent to the customer.

To do this, go to Tally and create a demo voucher. This will help us capture the details in the DoubleTick webhook. After creating the voucher, click **Capture Response** in the webhook. Map the first field to the customer’s phone number and the second field to your WABA number in the webhook. We map the phone number to ensure we have the customer’s contact information to send the template. You will also see in the Tally integration logs within DoubleTick that the voucher has been created.

Now that the data is captured in the webhook, we need to send a template whenever it’s triggered. To create the template, I suggest duplicating the DoubleTick tab to ensure that the captured data isn't lost. Create a utility template, add the message you want to send to the customer, and include a dummy PDF, which will later be replaced with the actual PDF from Tally via the webhook. Once the template is ready and approved, select **Send Template** from the actions and link it to the webhook node. This means that when the webhook is triggered, the template will be sent.

Next, to replace the dummy PDF with a dynamic one for each customer, click on **Enter URL** at the bottom of the template. Then, click on the green curly brackets (customer attribute), select **On Sales in Tally**, and choose the **Media URL** as shown in the screenshot. This URL will be captured from the Tally webhook and will replace the dummy PDF.

Once the mapping is complete, save and enable the bot. You can then create a sales voucher in Tally with a dummy account and check if the webhook is triggered successfully.

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FSFI7jjVpzBW1pUz0xqOm%2F9.png?alt=media)

By following these steps, you can fully integrate TallyPrime with DoubleTick, automating invoice management and improving operational efficiency.
