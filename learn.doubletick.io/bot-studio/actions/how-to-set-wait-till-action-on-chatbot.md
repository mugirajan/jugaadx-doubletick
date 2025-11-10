# How to Set Wait Till Action on Chatbot

To utilize the "Wait Till" action in your bot flow, follow these steps:

1. **Schedule Date:** Enter the date for the action to wait until. You can manually input the date, select it from a calendar interface, or choose a date variable such as a user's birthday.
2. **Schedule Time:** Enter the time for the action to wait until, using the 24-hour format (hh:mm). You can manually input the time or map a variable here if needed.
3. **Timezone**: Select Timezone from Dropdown

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F5vR7EKiGk12jXN6ehBMT%2FUntitled%20design%20(77).gif?alt=media&#x26;token=4c0f5495-435c-4ea1-b251-e64fd24043be" alt=""><figcaption></figcaption></figure>

By configuring the "Wait Till" action in this manner, you can effectively schedule automated actions in your bot flow to occur at specific dates and times, enhancing the efficiency and responsiveness of your conversational interactions.

***

### Trigger Before Schedule Time +

Next, you also have the option to set a trigger before the scheduled time. Clicking on "Setup trigger before scheduled time" opens a window where you can customize the following according to your preferences:

* Days before (default: 0)
* Hours before (default: 0)
* Minutes before (default: 0)

Additionally, there's a checkbox to enable setting a specific time manually in the 24-hour format. After configuring your preferences, click on the "<mark style="color:green;">**Confirm**</mark>" button to proceed.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FRgxFRnsEZa1BtIwFoGiX%2FUntitled%20design%20(78).gif?alt=media&#x26;token=bab49ae3-27e3-405f-992c-759bb728c8fb" alt=""><figcaption></figcaption></figure>

### **Scenario: Appointment Confirmation Bot**

**1. User Interaction:** A user schedules an appointment with a service provider through the Appointment Confirmation Bot.

**2. Bot Response - Appointment Confirmation:** Bot: "Thank you for scheduling your appointment with us! Your appointment is confirmed for \[date] at \[time]."

**3. Bot Action - Wait Till:** After confirming the appointment, the bot implements a Wait Till action to schedule a follow-up message to be sent the day before the appointment.

**4. Time Elapses**

**5. Scheduled Time - Follow-up Message:** On the day before the appointment, the bot automatically sends a follow-up message to the user.

**6. Bot Response - Follow-up Message:** Bot: "Hi \[User]! Just a friendly reminder that you have an appointment scheduled with us tomorrow at \[time]. If you need to reschedule or have any questions, feel free to reach out. We look forward to seeing you!"

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F8GIRwzbYT1ZMm67ihpdv%2FUntitled%20design%20(80).gif?alt=media&#x26;token=e0632b69-7b6e-421f-adaa-f369d8a60051" alt=""><figcaption></figcaption></figure>

**Explanation:** In this scenario, the Wait Till action allows the bot to schedule a follow-up reminder message to be sent the day before the appointment. This ensures that users receive timely reminders, increasing the likelihood of attendance and reducing the risk of missed appointments. By automating the reminder process, the bot enhances customer satisfaction and helps service providers manage their appointments effectively.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FE3dNGEgKbnOvDykInaFJ%2Fimage.png?alt=media&#x26;token=8bda22b3-539a-4beb-9447-a272bf60b78b" alt=""><figcaption></figcaption></figure>
