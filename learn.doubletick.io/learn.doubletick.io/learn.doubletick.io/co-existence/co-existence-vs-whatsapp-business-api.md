# Co-Existence vs WhatsApp Business API

#### Overview

Businesses today want flexibility — the ability to chat personally with customers while still automating large-scale messaging. Meta’s **Co-Existence** setup (available only in India) enables exactly that.

With Co-Existence, a business can use **the same number on both the WhatsApp Business App and DoubleTick (Cloud API)** — combining personal engagement with the power of automation.

This article explains how **Co-Existence** differs from the **standard WhatsApp Business API setup** and helps you decide which setup suits your business best.

***

### 🔍 **Feature Comparison**

| **Feature**                                | **Co-Existence (App + API)**                                                                                      | **WhatsApp Business API Only**                                                                        |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Number Usage**                           | ✅ Use the same number on both the WhatsApp Business App and DoubleTick API.                                       | ❌ The number can only be used through the API and not on the WhatsApp Business App.                   |
| **Voice & Video Calls**                    | ✅ Supported through the WhatsApp Business App. Great for personalized interactions, consultations, or demos.      | ❌ Not supported. The API only supports text, media, and template messages.                            |
| **1:1 Chats**                              | ✅ Fully supported via the WhatsApp Business App. Chats are mirrored on the API for record-keeping and automation. | ❌ Direct 1:1 chatting through mobile is not available. Only agents using the API interface can reply. |
| **Automation & Campaigns**                 | ✅ Automation continues via DoubleTick, while agents can chat manually on the App.                                 | ✅ Full automation support for all workflows, chatbots, and marketing campaigns.                       |
| **Group Chats**                            | ✅ Available only on the WhatsApp Business App.                                                                    | ❌ Not supported. Group messages don’t sync through the API.                                           |
| **Broadcast Lists**                        | ⚠️ Existing lists are visible but read-only. You cannot create new ones after enabling Co-Existence.              | ✅ Fully supported. Businesses can send bulk broadcasts via template messages.                         |
| **Status Uploads**                         | ✅ Supported through the WhatsApp Business App. Useful for posting daily updates or promotions.                    | ❌ Not supported via API.                                                                              |
| **Disappearing & View-Once Messages**      | ❌ Disabled once Co-Existence is enabled. These formats cannot be used through API or App.                         | ❌ Not supported on API.                                                                               |
| **Backups**                                | ❌ Chat backup through Google Drive/iCloud is disabled once API integration starts.                                | ❌ Same restriction. API messages aren’t stored in Google Drive backups.                               |
| **Data Sync & History**                    | ✅ Last six months of messages can be mirrored between the App and API.                                            | ✅ All data is stored through the API; sync with App is not applicable.                                |
| **Linked Devices**                         | ✅ Supports up to 4 companion devices (except Windows and WearOS).                                                 | ❌ Not supported. Access is only through DoubleTick or your connected CRM.                             |
| **Customer Service Window**                | ✅ 24-hour response window opens when users message your business.                                                 | ✅ Same Meta policy applies.                                                                           |
| **Message Revoking (Delete for Everyone)** | ❌ Not supported after onboarding Co-Existence.                                                                    | ❌ Not supported via API.                                                                              |
| **Best Suited For**                        | Small and medium businesses needing automation + personal engagement.                                             | Large enterprises managing high message volume and multiple teams via automation.                     |

***

### 🧭 **When to Choose Co-Existence**

Co-Existence is best suited for **small to mid-sized businesses (SMBs)** who want a balance between personal and automated communication.

**Choose Co-Existence if you:**

1. Need to **continue using WhatsApp on your phone** while managing campaigns through DoubleTick.
2. Want to **personally chat, call, or video consult** customers while automation runs in the background.
3. Run **region-based or smaller-scale marketing campaigns** where real-time human engagement matters.
4. Have a **limited number of agents or reps** who manage both customer support and sales conversations.
5. Want to maintain **existing customer history** and keep both app and API chats synchronized.
6. Need to **view messages from both systems in one place** for tracking and governance.
7. Prefer a smooth transition from App to API without losing your active number or contacts.

**Example Use Case:**\
A real estate agent uses the WhatsApp Business App to send property photos and voice notes directly to clients. Meanwhile, DoubleTick sends automated follow-ups, collects customer interest via forms, and syncs all messages back to the CRM — all on the same number.

***

### ⚙️ **When to Choose WhatsApp Business API Only**

The standard API setup is best for **large organizations** that depend on automation, chatbots, and integrations.

**Choose API Only if you:**

1. Run **large-scale marketing campaigns** with thousands of messages daily.
2. Rely heavily on **automated workflows, bots, and third-party CRMs.**
3. Do not require manual chats or calling via mobile devices.
4. Have a **dedicated customer support team** using web dashboards.
5. Need **complete control over data, templates, and reporting** through API tools.
6. Require **faster message throughput (80–100 MPS)** instead of Co-Existence’s capped 20 MPS limit.
7. Manage **international clients or teams** where WhatsApp App integration isn’t necessary.

**Example Use Case:**\
An e-commerce company sends order confirmations, shipping updates, and automated return notifications to thousands of customers daily — all powered by DoubleTick’s API integration and connected CRM workflows.

***

### 💡 **Choosing the Right Setup**

| **If You Want To...**                                         | **Recommended Setup** |
| ------------------------------------------------------------- | --------------------- |
| Chat with customers directly on WhatsApp + automate campaigns | **Co-Existence**      |
| Run voice/video calls from your WhatsApp number               | **Co-Existence**      |
| Fully automate marketing, support, and follow-ups             | **API Only**          |
| Send high-volume broadcast campaigns                          | **API Only**          |
| Keep personal touch with automation                           | **Co-Existence**      |
| Manage multiple agents and dashboards centrally               | **API Only**          |

***
