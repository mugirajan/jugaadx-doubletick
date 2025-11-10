# Understanding the Meta Error: New English Content Cannot Be Added While the Existing English Content

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2Fr16f7HCpkStVYpQoa98Y%2F1%20(2).jpg?alt=media&#x26;token=b83f4ad9-ee61-437e-b7d6-b4963e1b8266" alt=""><figcaption></figcaption></figure>

If you work with **WhatsApp Business API (Meta)** or Meta’s **template management system**, you may occasionally encounter this error:

> “New English content cannot be added while the existing English content is being deleted. Try again in less than a minute or consider creating a new message template.”

This error can be confusing, but it has a **specific cause** tied to how Meta handles template updates and deletions. Let’s break it down.

***

### 1. Why This Error Occurs

Meta enforces a **one-at-a-time operation rule** for template content in a specific language:

* When you delete existing content (for example, an English version of a template), Meta marks it as **pending deletion**.
* During this pending state, **no new content in the same language can be added** until the deletion process is fully completed.

This safeguard prevents conflicts between old and new template versions and ensures data consistency across all WhatsApp users and systems.

**In short:** the error appears when you try to update or add new English content while the previous English content is still being deleted.

***

### 2. How Long Does It Take?

* Typically, Meta completes the deletion process of templates in **4 Weeks**.

***

### 3. Recommended Solutions

#### **Create a New Template with a Different Name and Language**

* To proceed quickly, create a new message template using a different name and in a different language instead of English.
* This avoids the conflict caused by the ongoing deletion process and allows you to submit the new template for approval immediately without waiting for the previous content to be fully deleted.

***

### 4. Conclusion

This Meta error is **not a bug**—it’s an intentional safeguard to prevent overwriting template content in a particular language before the previous version is fully removed.

By **waiting briefly**, **creating a new template**, or **staggering your edits**, you can easily resolve the issue and maintain smooth template operations on WhatsApp.
