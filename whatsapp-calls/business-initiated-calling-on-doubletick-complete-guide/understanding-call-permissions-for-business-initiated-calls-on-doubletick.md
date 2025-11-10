# Understanding Call Permissions for Business-Initiated Calls on DoubleTick

**Business-Initiated Calling** on DoubleTick allows your team to place outbound WhatsApp calls to customers.\
However, **customer consent is mandatory** — WhatsApp ensures users always remain in control of who can call them.

This guide explains how call permissions work, the limits in place, and how interactions are managed.

***

#### 1. What is Call Permissioning?

Before a business can call a WhatsApp user, it must first receive **temporary permission** from that user.

Even after granting permission, users can revoke it anytime.\
If a user declines a permission request, they can grant permission later — until the original request expires.

**Key Points:**

* All permissions are temporary.
* There are now **only two permission options**:
  * **Temporarily Allow (valid for 7 days)**
  * **Decline**
* Users always have full control over allowing or rejecting calls.
* Businesses must respect user decisions to remain compliant with WhatsApp policies.

***

#### 2. How to Obtain Calling Permission

A WhatsApp user can provide call permissions to a business in **three ways**:

**a) Call Permission Request from the Business**

* The business sends a **free-form message** or **templated message** requesting call permission.
* The user responds by **temporarily allowing** (for 7 days) or **declining** the call request.

**b) Callback Permission via User-Initiated Call**

* If a user calls the business first, temporary call permission is **automatically granted**.
* To enable this, the **callback setting** must be activated on the business number.

**c) Via Business Profile**

* Users can grant or revoke call permission directly from the **business’s WhatsApp profile**.

***

#### 3. Limits on Call Permissions

To protect users and maintain a safe calling experience, WhatsApp enforces the following limits per **business + user pair**:

**⏱️ Temporary Permissions**

* Granted for **7 calendar days (168 hours)** from the time of user approval.
* Businesses can make up to **5 connected calls every 24 hours**.

**📩 Permission Request Limits**

* Maximum **1 permission request per 24 hours.**
* Maximum **2 permission requests within 7 days.**
* Limits reset if a connected call (business-initiated or user-initiated) occurs.
* Applies to both **free-form** and **template messages.**

**📞 Unanswered or Rejected Calls**

* **2 consecutive unanswered calls** trigger a system message suggesting the business reconsider permission usage.
* **4 consecutive unanswered calls** automatically revoke the granted permission.
* Users can update their permissions again at any time.

***

#### 4. Expiration of Call Permission Requests

A permission request expires when any of the following occurs:

* The user interacts with a new permission request from the same business.
* **7 days** after the user accepted or declined the permission.
* **7 days** after the permission request was delivered with no response.

Expired permissions prevent repetitive or spammy requests, ensuring users remain in control.

***

#### 5. Why These Rules Matter

These rules are designed to:

* Protect users from unwanted or spam calls.
* Ensure businesses respect user consent and preferences.
* Maintain a trusted and user-first communication experience.
* Help businesses engage efficiently without violating WhatsApp policies.

***

#### 6. User Interface Behavior

* Users now see only two clear options when receiving a call permission request:
  * **Temporarily Allow (7 days)**
  * **Decline**
* System notifications appear after consecutive unanswered calls to guide businesses on next steps.
* Expired requests are automatically marked in the **DoubleTick dashboard** for easy tracking.

***

#### 7. Summary

Business-Initiated Calls on DoubleTick offer an excellent way to connect with customers — **but only with proper consent**.

By following WhatsApp’s updated permission rules, your business ensures:

* **Compliance** with WhatsApp policies
* **Better customer experience**
* **Respectful and effective outreach**

With these best practices, your team can use Business-Initiated Calling confidently while keeping users safe, informed, and in control.
