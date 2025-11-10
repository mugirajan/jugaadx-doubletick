# Streamline Appointment Booking on DoubleTick Using Zapier and Google Calendar

Managing appointments can be time-consuming and chaotic without the right tools. DoubleTick, a versatile communication platform, integrates seamlessly with Zapier and Google Calendar to create a streamlined appointment booking system. This guide will walk you through setting up an automated workflow to handle appointment scheduling efficiently.

**Why Integrate DoubleTick, Zapier, and Google Calendar?**

**DoubleTick** is a powerful tool for managing communications, but combining it with Zapier and Google Calendar enhances its functionality. Here’s why:

* **Automation**: Eliminate manual scheduling and update calendars automatically.
* **Centralized Communication**: Sync appointments across platforms to avoid missed meetings or double bookings.
* **Time-Saving**: Simplify workflows by automating repetitive tasks like confirmations and reminders.

### **What You'll Need**

1. **Google Calendar**: To manage and schedule appointments.
2. **DoubleTick**: A platform for sending automated confirmation messages.
3. **Zapier**: A tool that connects apps and automates workflows.

### **Step-by-Step Guide to Setting Up Appointment Booking**

#### **Step 1: Set Up Appointment Booking in Google Calendar**

Google Calendar is at the core of this workflow. It provides the interface where users or clients can book their appointments.

1. **Enable Appointment Booking**:
   * Open Google Calendar.
   * Click on the **+ Create** button.
   * Select **Appointment Schedule** and configure the time slots available for bookings.

     ![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FwcYGrLbI5LXuHDFLXyyK%2F0.png?alt=media)
2. **Customize the Schedule**:
   * Add details such as meeting descriptions, duration, and location (in-person or virtual).
   * Share the public booking page link with clients or embed it on your website.

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FKtqadYE0qQaGTSSu9ifP%2F1.png?alt=media)

#### **Step 2: Connect Google Calendar to Zapier**

Zapier allows you to trigger actions when new events (appointments) are added to Google Calendar.

1. **Create a New Zap**:
   * Log into Zapier and click **+ Create Zap**.
   * Set **Google Calendar** as the trigger app.
   * Choose the trigger event: **New Event Scheduled**.
2. **Configure Trigger Settings**:
   * Select the appropriate Google Calendar.
   * Test the trigger to ensure Zapier detects new appointments correctly.

     ![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2Frpzd2Yrmn3Px6aiJuzmH%2F2.png?alt=media)

#### **Step 3: Extract and Format Contact Numbers**

To ensure contact numbers are correctly formatted for messaging, Zapier's Formatter tool can extract and refine them.

1. **Add Zapier Formatter as a Step**:
   * In your Zap workflow, add **Zapier Formatter** as an action.
   * Select the event: **Text**.
2. **Extract the Contact Number**:
   * Choose the input field containing the contact details (e.g.,Summary).
   * Use text parsing or split text functions to isolate the phone number.

     ![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FsbT9x2t4gfRrLQO22n5v%2F3.png?alt=media)
3. **Add the Country Code Using Zapier AI Formatter**:
   * In another Formatter step, use the **Numbers** or **Text** action to modify the extracted phone number.
   * Configure the action to add the desired country code (e.g., "+1" for the USA or "+91" for India).
   * Test the step to confirm correct formatting.

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FvL4SZXRruZA5EuqKO3gX%2F4.png?alt=media)

#### **Step 4: Integrate DoubleTick for Automated Confirmations**

DoubleTick will send appointment confirmation messages automatically when a booking is made.

1. **Set DoubleTick as the Action App**:
   * In your Zap workflow, add **DoubleTick** as the action app.
   * Select the action event: **Send Template Message**.
2. **Customize the Message**:
   * Map Google Calendar data (e.g., appointment date, time, and client name) to the Template fields in DoubleTick.
   * Use personalized templates to include specific details such as:
     * “Hi \[Client Name], your appointment is confirmed for \[Date & Time].”

       ![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FGJ45RMczYzWzcRAk7JOO%2F5.png?alt=media)
3. **Test the Zap**:
   * Test the workflow to ensure the confirmation message is sent correctly upon booking.

     ![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F9X6FDcaZ35cq0O5zl1FF%2F6.png?alt=media)

#### **Step 5: Turn On and Monitor Your Workflow**

1. Activate the Zap to begin automating the process.
2. Monitor initial bookings to ensure the workflow operates as expected.
