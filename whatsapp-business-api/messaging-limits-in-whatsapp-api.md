# Messaging Limits in WhatsApp API

***

A business-initiated [<mark style="color:green;">conversation</mark>](https://learn.doubletick.io/whatsapp-business-api/whatsapp-api-conversations-and-categories) kicks off when the initial template message is delivered to a customer and concludes 24 hours later.

For unverified business numbers, there's a cap of 250 business-initiated conversations in a rolling 24-hour period.&#x20;

Verified Business numbers can initiate conversations with a varying number of unique customers in a rolling 24-hour period:

* 1K unique customers
* 10K unique customers
* 100K unique customers
* An unlimited number of unique customers

This starting point at 1K unique customers automatically adjusts based on phone number status, [<mark style="color:green;">quality rating</mark>](https://learn.doubletick.io/manage-and-view-account-quality-on-meta#quality-rating)<mark style="color:green;">,</mark> and how frequently you initiate conversations with unique customers.

It's essential to note that even if you meet these criteria, having a low-quality rating for your business phone number may keep you restricted to 250 business-initiated conversations until the rating improves

***

### Checking Your Limit <a href="#checking-your-limit" id="checking-your-limit"></a>

You can check your current messaging limits in the **WhatsApp Manager** > **Overview Dashboard** > **Insights** tab.. The panel depicted below will only show your current limit if your messaging limit has increased from the default limit of 250.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FNSQyjR5hsJcaU6aIuA7X%2Fimage.png?alt=media&#x26;token=4ef2c9c0-55d9-4308-80f2-2a36cc770ced" alt=""><figcaption></figcaption></figure>

You can also view your current messaging limits in the **DoubleTick** > **Home** > **WhatsApp Account Review**

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2F4x4fakwlBIIxOaVh2U58%2Fimage.png?alt=media&#x26;token=2146cda3-35a1-49ea-aa3e-94be6f57bdd9" alt=""><figcaption></figcaption></figure>

***

### Boosting Your Limit

Whenever you start a new conversation with a distinct customer, Meta assess whether your limit should be raised. This evaluation relies on the following criteria:

* Your phone number status is Connected.
* Your phone number quality rating is Medium or High.
* In the past 7 days, you have initiated X or more conversations with unique customers, where X is your current messaging limit divided by 2.

If you satisfy all these conditions, Meta will enhance your messaging limit by one level within 24 hours.

#### Examples <a href="#examples" id="examples"></a>

Messaging limit increased from 1K to 10K in 2 days:

<table><thead><tr><th width="204"></th><th>Day 1</th><th>Day 2</th><th>Day 3</th><th>Day 4</th><th>Day 5</th></tr></thead><tbody><tr><td>Business-initiated conversations (new)</td><td>500</td><td>500</td><td></td><td></td><td></td></tr><tr><td>Business-initiated conversations in last 7 days</td><td>500*</td><td>1,000</td><td></td><td></td><td></td></tr><tr><td>Messaging limit</td><td>1K</td><td>10K</td><td></td><td></td><td></td></tr></tbody></table>

\* If the 500th conversation is initiated at 3pm (for example), the messaging limit is increased at 3pm the following day (i.e. 24 hours later).

Messaging limit increased from 1K to 10K in 4 days:

<table><thead><tr><th width="205"></th><th>Day 1</th><th>Day 2</th><th>Day 3</th><th>Day 4</th><th>Day 5</th></tr></thead><tbody><tr><td>Business-initiated conversations (new)</td><td>100</td><td>200</td><td>200</td><td>300</td><td></td></tr><tr><td>Business-initiated conversations in last 7 days</td><td>100</td><td>300</td><td>500*</td><td>800</td><td></td></tr><tr><td>Messaging limit</td><td>1K</td><td>1K</td><td>1K</td><td>10K</td><td></td></tr></tbody></table>

\* If the 500th conversation is initiated at 7pm (for example), the messaging limit is increased at 7pm the following day (i.e. 24 hours later).

***

### Reducing Your Limit

Whenever you commence a new conversation with a unique customer, Meta will examine your phone number quality rating. If the rating has been Flagged over the past 7 days, Meta will promptly lower your messaging limit by one level.
