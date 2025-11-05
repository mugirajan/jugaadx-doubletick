# Error: Message Can’t Be Displayed on WhatsApp Web/Desktop

If you are using **WhatsApp Web** or the **WhatsApp Desktop app** with DoubleTick, you may sometimes see this error:

**“This message can’t be displayed here. Please open WhatsApp on your phone to view the message.”**

***

### What does this mean?

This is not a DoubleTick issue. It is a **WhatsApp platform limitation**. Certain message templates are not supported on WhatsApp Web or Desktop, and they can only be viewed on a mobile device.

***

### When does this happen?

This limitation occurs specifically when:

* A template contains **four or more buttons**.
* A template has a **quick reply button combined with one or more buttons of another type**.

📸 *Example of the error on WhatsApp Web:*\\

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FNjrvcewkQOO1vbD9pzgt%2Fimage%20(94).png?alt=media&#x26;token=12790d3c-4c56-49f2-9550-46ea38101782" alt=""><figcaption></figcaption></figure>

***

### Examples

#### ✅ Templates that work fine on Web/Desktop

**Case 1: Up to 3 buttons of the same type**

```
Message: “Would you like to confirm your booking?”
Buttons: [Yes] [No] [Talk to Agent]
```

👉 This will display correctly on both **Web** and **Mobile**.

**Case 2: Only Quick Reply Buttons**

```
Message: “How was your experience with us?”
Quick Replies: [Excellent] [Good] [Needs Improvement]
```

👉 Supported on both **Web** and **Mobile**.

***

#### ❌ Templates that cause the error

**Case 1: 4 or more buttons**

```
Message: “Choose your preferred delivery time slot”
Buttons: [Morning] [Afternoon] [Evening] [Night]
```

👉 On Web/Desktop → Error message shown.\
👉 On Mobile → Displays correctly.

**Case 2: Mixing Quick Reply + Call to Action**

```
Message: “Would you like to continue shopping?”
Quick Reply: [Yes]  
CTA Buttons: [Visit Website] [Contact Support]
```

👉 On Web/Desktop → Error message shown.\
👉 On Mobile → Displays correctly.

***

### Why is this the case?

Meta has officially confirmed that this is expected behavior.

***“Templates composed of four or more buttons, or a quick reply button along with one or more buttons of another type, cannot be viewed on WhatsApp desktop clients. WhatsApp users receiving these template messages will be prompted to view the message on a phone instead.”***

🔗 [Read Meta Documentation – Message Template Limitations](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates#limitations)

***

### What should DoubleTick customers do?

If you or your customers face this error:

1. **Open WhatsApp on your phone** to view the full message.
2. **Check your template design** if you are sending messages:
   * Use a maximum of **3 buttons of the same type**.
   * Avoid combining **quick replies** with **call-to-action** buttons.
3. **Update your WhatsApp Desktop/Web** to the latest version, in case of version compatibility issues.

***

### Key Takeaway for DoubleTick Users

* This is a **WhatsApp restriction**, not a DoubleTick bug.
* To ensure smooth delivery across devices, design your templates with **simple button layouts**.
* If your customer sees this error, guide them to check the message on their phone.
