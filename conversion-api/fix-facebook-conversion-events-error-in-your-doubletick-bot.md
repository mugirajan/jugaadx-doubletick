# Fix: Facebook Conversion Events error in your DoubleTick bot

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2Fs1dYaQQkKixs9FwCwH3x%2Fimage.png?alt=media&#x26;token=9f3ad7ac-837e-49fe-b76a-1429cb771e51" alt=""><figcaption></figcaption></figure>

Your bot tried to send a “Purchase / Lead Submitted” event to Facebook, but Facebook replied with an error saying the object (dataset/pixel) does not exist or you don’t have permission. That means Facebook isn’t accepting the event because the dataset/pixel isn’t correctly connected to your Ad Account or the Business Manager settings are missing permissions.

***

\
Below is an easy guide to fix this by connecting the right dataset/pixel to your ad account in Meta Business Settings, and then verifying the event.

### Detailed step-by-step (follow exactly)

#### Step A — Open Business Settings

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FLQaLIMUF6eS81UarChwR%2Fimage.png?alt=media&#x26;token=df0e6b94-e2e0-48cb-a676-2cf7b33a51e5" alt=""><figcaption></figcaption></figure>

1. Open your browser and go to **Meta Business Suite** (business.facebook.com).
2. In the top-left or top bar, click the **Business Settings** icon (gear / building icon).

#### Step B — Find Datasets & Pixels

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FlbTsHgsxlXajMXZXtASu%2Fimage.png?alt=media&#x26;token=fb1edf99-8952-4de5-ad52-83fc0c881fda" alt=""><figcaption></figcaption></figure>

1. In Business Settings, click **Data sources** in the left menu.
2. Click **Datasets and Pixels** (you’ll see a list of all datasets and pixels your Business Manager has).

#### Step C — Connect the dataset/pixel to your Ad Account

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FawQSfaRBjAJehotnmMlR%2Fimage.png?alt=media&#x26;token=6f8b87ed-c441-4973-8143-d47cabe8a74f" alt=""><figcaption></figcaption></figure>

1. Click on the **Dataset asset** and then select **Connected assets.**\\

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FsVALop81lRszoh7Uyddr%2Fimage.png?alt=media&#x26;token=b35045a9-187c-42da-93a9-1411e9a37db3" alt=""><figcaption></figcaption></figure>

2. Click the **Connect asset** button.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FRGXgIRNPBGwro2sWrK8j%2Fimage.png?alt=media&#x26;token=134687f3-9903-4255-8c62-beb023c84eca" alt=""><figcaption></figcaption></figure>

3. Choose **Other business assets** when the options appear.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FEe1gucWeM0eDWXkNUwVN%2Fimage.png?alt=media&#x26;token=65992522-a660-4658-9d59-cb5882d4f633" alt=""><figcaption></figcaption></figure>

4. Go to the **Ad Accounts** section, choose the **ad account** you use for ads (check the box), and then click **Add**.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2Fyzqkbptfy0vCYSCtE7t1%2Fimage.png?alt=media&#x26;token=28538de7-37c9-4ad8-af79-61c0a0a84f34" alt=""><figcaption></figcaption></figure>

5. Click **Done**.

> **Note: If you don’t see your ad account in the list, it means the ad account is in a different Business Manager or you don’t have permission. See the “If this step fails” section below.**

***

### If something goes wrong — simple checks & fixes

* **I don’t see the dataset/pixel** in Business Settings:
  * Make sure you are in the right **Business Manager** (the one that owns the ad account).
  * Ask a colleague who is Business Admin to confirm the dataset/pixel exists.
* **Ad account not visible to select:**
  * Your ad account might be in a different Business Manager or you don’t have permission. Ask the Business Admin to add the ad account or give you access.
* **Still getting the same error after connecting:**
  * Wait 5–15 minutes for Facebook to update permissions, then test again.
  * Double-check the **Object ID** shown in the error matches the dataset/pixel you connected. If it doesn’t match, connect the correct one.
* **Missing permissions message:**
  * You need **Admin** or appropriate access on Business Manager to make these changes. If you don’t have this, ask your Business Admin to follow the steps, or provide the details to DoubleTick support so we can help.\\
