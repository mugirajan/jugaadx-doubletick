# How to Set Up and Use the DoubleTick AI Bot

The **DoubleTick AI Bot** is one of the most awaited features — it helps you automate customer chats using OpenAI’s ChatGPT models.\
This guide will walk you through integrating, creating, configuring, and testing your AI Bot step by step.

### **1️ Integrate OpenAI with DoubleTick**

1. Log in to your **OpenAI account** and **copy your API key** from your [OpenAI API dashboard](https://platform.openai.com/account/api-keys).
2. In your DoubleTick dashboard, go to **Settings → Integrations → OpenAI**.
3. Paste your OpenAI API key in the provided field.
4. Click **Connect** to complete the integration.

***

### **2️ Create a New AI Bot**

1. In DoubleTick, go to the **AI Bot** section in your left panel.
2. Click **Create New AI Bot**.
3. Enter a **name** for your bot.
4. Select the **API number** the bot should work on:
   * If you have multiple WhatsApp Business API (WABA) numbers, you can assign a unique AI Bot for each.
   * Or you can create a single generic AI Bot for all numbers.
5. Click **Create** to proceed.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FPsA8jx6L4vy5vmmVajO0%2Floom_1080p%20(4).mp4.gif?alt=media&#x26;token=f1bde1a4-85a0-4e60-b670-efd829d38a75" alt=""><figcaption></figcaption></figure>

***

&#x20;**3️ Configure the AI Bot**

After creating your bot, you must complete the **Bot Settings**.

#### &#x20;**a) Default Intent Behavior**

* If your AI Bot does not know how to answer a question, it’s marked as **No Intent Found**.
* Click **Configure** to decide what happens next:
  * Automatically **assign a human agent**.
  * Or **send a fallback template message**.
* Tip: Use **Reassign Last Human Agent** to send unresolved chats back to the same agent who handled the chat earlier.

***

#### &#x20;**b) Generic Context**

Give your AI Bot a **clear context** so it knows its role.\
Example:

> *“You are an AI agent. You will onboard new customers by asking their name, phone number, and location.”*

***

#### &#x20;**c) Choose the AI Model**

Select which OpenAI model to use:

* **GPT-4.0**
* **GPT-4.0 Mini**\
  (The options depend on your API plan.)

***

#### &#x20;**d) Message Wait Time**

Set how long (in seconds) your AI Bot should wait before responding to the customer’s message.\
Example: 2–60 seconds.

***

#### **e) Context Message Count**

Decide how many previous messages your AI should keep in memory to understand the conversation context and give relevant answers.

***

### **4️ Add FAQs**

Train your bot to handle common questions:

* Click **Add FAQ** to manually enter a question and answer.
* Or **import FAQs** in bulk from a **CSV or Excel file** with question-answer columns.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FWn5dINGy3RMBDSble8K2%2FScreenshot%202025-06-30%20at%2017.20.05.png?alt=media&#x26;token=2c27da1d-319b-4721-824f-a94bf3a8b266" alt=""><figcaption></figcaption></figure>

***

### &#x20;**5️ Add Website Learning**

Let your AI Bot learn from your website or public documents:

1. Copy your website’s link.
2. Paste it into the **Website Learning** section.
3. The AI Bot will read and store the content to answer related queries in future chats.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2Fi9qGgKOjMYRE0zz91lOA%2FScreenshot%202025-06-30%20at%2017.21.04.png?alt=media&#x26;token=ec8d7ba5-43af-4c80-a0a1-0d2156f5bcc3" alt=""><figcaption></figcaption></figure>

***

### &#x20;**6️ Handle Unresolved Intents**

When customers ask new questions the bot can’t answer:

* These show up in the **Unresolved Intents** list.
* You can **create a new FAQ** for them, so the bot learns for next time.
* Or **ignore** questions that don’t need an answer.

***

### &#x20;**7️ Create Intent Filters**

Use **Intent Filters** to **capture important customer info** (e.g., name, phone number, location) during the chat.

* Click **Add Intent Filter**.
* Map the customer’s answers to your API or Google Sheet.
* To push this data to your CRM, click **Create Bot Journey**.
* Send a confirmation message to the customer if needed.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FM1BzOk7Lfa1OnlMAtKjj%2FScreenshot%202025-06-30%20at%2017.23.02.png?alt=media&#x26;token=bce73acf-bccc-4661-9833-9125c8d9019f" alt=""><figcaption></figcaption></figure>

***

### **8️ Test Your AI Bot**

Use the built-in **Testing Environment**:

* Test your AI Bot in the dashboard before using it live.
* Check if it asks for details like name, phone number, or location as expected.

***

### **9️ Assign the AI Bot in Chats**

There are 3 ways to assign the AI Bot to handle customer chats:

1️ **Manual Assignment**

* Open any customer chat.
* Click **Assign Agent**.
* Select your AI Bot from the list.

2️**Auto Assignment via Bot Studio**

* Create a trigger (e.g., when someone types “Hello”).
* Link it to **Assign Agent** → select your AI Bot.
* Chats will be assigned automatically when the trigger matches.

3️**Auto Assignment for Unassigned Chats**

* In **Settings → AI Bot**, enable the option to handle **all unassigned chats** automatically with the AI Bot.

***

### **10 Send or Edit AI Responses**

If an AI response is generated during a chat:

* Review it.
* If you’re satisfied, click **Send** to deliver it to the customer.

***

### &#x20;**How It Works in Action**

Here’s an example:

* A customer types **“Hello”**.
* The AI Bot replies with a **welcome message** and asks for their name.
* After the customer shares their name, the bot asks for their **phone number**, then **location**.
* The bot handles this flow automatically, saving you time!

***

### **You’re All Set!**

You’ve now learned how to:

* Integrate OpenAI,
* Create an AI Bot,
* Set up FAQs, context, and training,
* Handle unresolved queries,
* And assign your bot in live chats.
