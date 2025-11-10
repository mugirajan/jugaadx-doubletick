# How to Integrate My Operator with DoubleTick via Webhook to Send Templates

This guide will walk you through the process of integrating My Operator with Doubletick using webhooks. By completing this setup, you can seamlessly send templates and capture activities directly from My Operator into Doubletick. Follow the steps below to configure the integration:

**Step 1: Log in to My Operator**

Open the My Operator website.

Log in to your account using your credentials.

**Step 2: Navigate to Webhook Settings**

Go to the Settings section in your My Operator account.

Select Webhooks from the menu.

Click on Add a New Webhook to create a new webhook configuration.

**Step 3: Configure Webhook Details**

Method: Select GET as the HTTP method.

Target URL: Copy the "On Webhook URL" from your Doubletick account and paste it into the Target URL field in My Operator.

**Step 4: Leave Header and Credential Fields Blank**

Leave the Header and Credential (JSON) fields empty. No additional authentication is required for this integration.

**Step 5: Set the Log Criteria**

In the Log Criteria section:

Select Source as IVR.

Select Type as Call.

**Step 6: Add Query String Parameters**

Under Query String Parameters:

In the Name field, specify the parameter you wish to pass (e.g., Phone number).

In the Value field, enter the corresponding dynamic value (e.g., User's phone number or Recipient number) along with the country code.

This step ensures that any activity happening on My Operator gets captured in the webhook and transmitted to Doubletick.

**Use Cases:**

This integration can be utilized for various use cases on Doubletick, such as:

Capturing call data to trigger specific template messages.

Automating responses based on IVR call events.

Enhancing customer communication workflows.

By following these steps, you’ll successfully integrate My Operator with Doubletick via webhook. If you encounter any issues or have questions, feel free to reach out to Doubletick Support for assistance.

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FQcVM6LrBMjJLzdiyNnMF%2F1.png?alt=media)
