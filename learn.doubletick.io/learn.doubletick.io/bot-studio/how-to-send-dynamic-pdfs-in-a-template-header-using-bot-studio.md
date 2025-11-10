# How to Send Dynamic PDFs in a Template Header Using Bot Studio

Many DoubleTick users want to share personalized PDFs (like invoices, reports, or certificates) with customers automatically. Instead of manually sending each file, you can use Bot Studio to dynamically pull a **PDF URL from Google Sheets/Webhooks and deliver it directly in the template header**.

**Here’s how you can set this up step by step.**

***

<mark style="color:green;">**Step 1: Prepare Your Google Sheet**</mark>

1. Create a **Google Sheet** with these columns:
2. Name → Customer’s name
3. Phone Number → Customer’s WhatsApp number
4. PDF URL → The link to the PDF you want to send

👉 Example:

| Name        | Phone Number | PDF URL                                    |
| ----------- | ------------ | ------------------------------------------ |
| Rahul Mehta | 919876543210 | <https://yourdomain.com/reports/rahul.pdf> |
| Asha Verma  | 918888888888 | <https://yourdomain.com/reports/asha.pdf>  |

***

<mark style="color:green;">**Step 2: Create a New Bot in Bot Studio**</mark>

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FDTkzMkfY94IyuRgTiUxy%2Fimage.png?alt=media&#x26;token=2089fa77-12cb-4724-8084-60c00eee253e" alt="" width="563"><figcaption></figcaption></figure>

1. Go to **Bot Studio** in your DoubleTick account.
2. Click **Create a New Bot**.

***

<mark style="color:green;">**Step 3: Set the Trigger**</mark>

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FS2I7SEyifcFPgajpFMJZ%2Fimage.png?alt=media&#x26;token=348ab0a7-a278-4a2c-abe9-9e7cae1d31af" alt="" width="563"><figcaption></figcaption></figure>

1. Choose the trigger **On New Row in Google Sheet**.
2. From the **Select Account** dropdown, log in with the **Google account** that owns the sheet.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FO7lHRmJdPPPHQ2v9OJ5L%2Fimage.png?alt=media&#x26;token=929ccf6c-437e-4d5a-a77b-e71e5b1fc5bc" alt="" width="563"><figcaption></figcaption></figure>

3. In the **Select Sheet** dropdown, choose your **prepared sheet**.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FT3lJQd5B48s56cn8Zyhm%2FUntitled%20design.gif?alt=media&#x26;token=ebdb65fe-4867-45f6-a59a-9c490883edda" alt=""><figcaption></figcaption></figure>

4. Under **Select Phone Column**, map the **Phone Number** column from your sheet.

This ensures that whenever a new row is added in the sheet, the bot picks the phone number from that row.

***

<mark style="color:green;">**Step 4: Add the Action – Send Template**</mark>

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FLnQe4zwKoSirnYlKmI1b%2F2.gif?alt=media&#x26;token=8033b793-7463-4f2d-97f4-89106d2b7088" alt="" width="563"><figcaption></figcaption></figure>

1. From the **Actions** section, drag and drop **Send Template** into the flow.
2. Connect your Google Sheet trigger node to this Send Template node.

***

<mark style="color:green;">**Step 5: Configure the Template with Dynamic PDF**</mark>

1. In the Send Template settings:

• Under Media, select Media.\
• In the **Select Template** dropdown, choose the template you want to use.\
• In the **Header Media** section, click on **Enter URL**.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FIFZIV0ik6SIWD6IKu0Oq%2F1.gif?alt=media&#x26;token=ae4f5a16-02b4-4b12-a282-843a68ba1313" alt="" width="563"><figcaption></figcaption></figure>

2. Click the **curly braces { }** icon.

• From the options, **select On New Row – Google Sheet**.\
• Map it to the **PDF URL column** from your sheet.

This way, the bot will fetch the correct PDF link for each customer dynamically.

***

<mark style="color:green;">**Step 6: Save and Enable**</mark>

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FsrjRFh36ryC4V4AhDs1u%2F3.gif?alt=media&#x26;token=13a199b6-07bb-4580-8fef-f1e274a388a1" alt="" width="563"><figcaption></figcaption></figure>

1. Click **Save**.
2. **Enable** the bot.

Now, whenever you add a new row in your Google Sheet with a customer’s name, phone number, and PDF link, the bot will automatically send that PDF in the template header to the mapped phone number on WhatsApp.

***

**Benefits of Sending Dynamic PDFs**

✅ **Personalized Communication** – Each customer gets their own unique PDF (invoice, certificate, report, etc.).\
✅ **Automation at Scale** – No manual effort; just update your Google Sheet.\
✅ **Professional Experience** – PDFs in the template header look polished and official.\
✅ **Saves Time & Effort** – Once set up, everything runs on autopilot.

***

With this setup, DoubleTick users can easily automate sending personalized PDFs through WhatsApp using template headers. Whether it’s invoices, progress reports, or certificates, this method saves time, reduces manual work, and ensures customers always get the right document instantly.

&#x20;
