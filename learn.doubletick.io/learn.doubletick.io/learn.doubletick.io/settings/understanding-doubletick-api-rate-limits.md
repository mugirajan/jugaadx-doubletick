# Understanding DoubleTick API Rate Limits

When you send messages or perform actions using DoubleTick, there are limits on how many requests you can make per second or per minute. These limits are called **rate limits**, and they help keep the system stable and prevent delays for everyone.

If you’re not very technical, don’t worry—this article will explain everything in simple terms and show you the key numbers you need to know.

***

### What Are Rate Limits?

Think of DoubleTick as a busy post office. You can send letters (messages, media, or updates), but if you try to send too many at once, the system slows down to handle the load.

A **rate limit** tells you:

* How many requests you can send
* How fast you can send them

If you exceed the limit, the system will temporarily block your extra requests until it’s safe to continue. This keeps your messages reliable and prevents errors.

***

### Common Actions and Their Rate Limits

Here’s a simple table showing the most common things you can do in DoubleTick and how often you can do them.

<table><thead><tr><th width="210.3333740234375">Action</th><th width="228">Rate Limit</th><th>Explanation</th></tr></thead><tbody><tr><td>Send Template Message</td><td>1 request per 600 seconds</td><td>Templates are official messages that follow WhatsApp rules. Only 1 template request every 10 minutes.</td></tr><tr><td>Send Text Message</td><td>150 requests per second</td><td>Quick text messages are faster to send.</td></tr><tr><td>Send Video Message</td><td>15 requests per second</td><td>Videos take more resources, so fewer can be sent at once.</td></tr><tr><td>Send Audio Message</td><td>15 requests per second</td><td>Audio messages are similar to video in size.</td></tr><tr><td>Send Image Message</td><td>100 requests per second</td><td>Images are faster than video but slower than text.</td></tr><tr><td>Send Document</td><td>25 requests per second</td><td>Documents include PDFs, spreadsheets, etc.</td></tr><tr><td>Send Location</td><td>5 requests per second</td><td>Locations need extra processing, so the limit is lower.</td></tr><tr><td>Send Interactive Message</td><td>100 requests per second</td><td>Messages like buttons or menus can be sent quickly.</td></tr><tr><td>Broadcast Message</td><td>5 requests per second</td><td>Sending to multiple people at once requires more resources.</td></tr><tr><td>Export Chats</td><td>1 request per second</td><td>Chat exports take time to process, so the limit is low.</td></tr><tr><td>Check Wallet Balance</td><td>100 requests per second</td><td>Quick checks on your balance can happen more often.</td></tr><tr><td>Manage Teams &#x26; Roles</td><td>1–25 requests per second</td><td>Assigning team members or roles happens occasionally, not every second.</td></tr><tr><td>Upload Media</td><td>100 requests per second</td><td>Media like images, videos, or audio can be uploaded fairly quickly.</td></tr><tr><td>Register or Manage Webhooks</td><td>1 request per second</td><td>Webhooks are advanced notifications for your system.</td></tr></tbody></table>

> ⚠️ Tip: If you’re sending multiple messages at once, try to **space them out** instead of sending all at once. This prevents hitting the rate limit and ensures your messages go through smoothly.

***

### Why This Matters for You

* **Reliable Messaging**: Following rate limits ensures all your messages are delivered.
* **Avoid Errors**: Sending too many requests at once can cause errors or failed messages.
* **Better Planning**: Knowing these limits helps you schedule campaigns and automations without interruptions.

***

### Quick Tips for Non-Tech Users

1. **Use Automated Campaigns Carefully** – When sending broadcasts or campaigns, don’t exceed the recommended limits.
2. **Media Messages Take More Time** – Videos, audio, and documents need extra processing. Send in smaller batches.
3. **Check Before Sending Templates** – Since templates have very strict limits, plan their use wisely.
4. **Ask for Help** – If you’re unsure about limits or face errors, reach out to DoubleTick Support before sending a large batch.

***

By keeping these limits in mind, you can make the most out of DoubleTick while keeping your messages reliable, fast, and safe.
