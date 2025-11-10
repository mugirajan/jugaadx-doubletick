# How to Record Customer Responses Using DoubleTick’s Bot Studio and  Google Sheets Integration

**Step-by-Step Guide**

* **Log In to DoubleTick** \
  \
  1\)Start by logging into your DoubleTick account to access the Bot Studio.\\

* **Navigate to Bot Studio** \
  \
  1\)Go to the Bot Studio section. \
  \
  2\)On the left-hand side, you'll see all available triggers and actions.\\

* **Create a New Bot** \
  \
  1\)Click on the "Create New Bot" button. \
  \
  2\)Select a Trigger (e.g., "Message Received" or "Button Clicked") that initiates the bot flow.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FXz6ECOuYKkNWERqZ5XPD%2FUntitleddesign31-ezgif.com-crop.gif?alt=media&#x26;token=7b44d503-e9cb-4711-b3ee-f4a0e71aa326" alt=""><figcaption></figcaption></figure>

* **Add a Question** \
  \
  1\)Add a Send Message component to the bot flow. \
  \
  2\)In the Body section, type your question. For instance: “What is your age." \
  \
  3\)Click on Response to specify that the customer’s reply will be captured\\

* **Create a Flow (Optional) If you have follow-up questions:** \
  \
  1\)Connect the Response component to additional Send Message components. \
  \
  2\)Repeat the process for each question you wish to include in the flow.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FGHCDtH0N4ED36CZ8bcIC%2FUntitleddesign32-ezgif.com-crop.gif?alt=media&#x26;token=2f604f47-e566-437d-8b6a-fdd09497c8ab" alt=""><figcaption></figcaption></figure>

* **Integrate Google Sheets**\
  &#x20;\
  1\) Step 1: Authenticate Google Account \
  \
  &#x20;   a)Add a Google Sheet Action to your bot flow. \
  \
  &#x20;   b)Click on "Sign In with Google" to authenticate. \
  \
  &#x20;   c)Select your Google account and grant the necessary permissions.           &#x20;

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FdHAx4MFDwAAZSK2GCLOK%2FUntitleddesign33-ezgif.com-crop.gif?alt=media&#x26;token=bf372156-c12f-4890-986f-010f79230116" alt=""><figcaption></figcaption></figure>

&#x20;       2\)Step 2: Choose a Spreadsheet \
\
&#x20;          a)Click on the "Select a Spreadsheet" button. \
\
&#x20;          b)A dropdown will appear showing available sheets. Choose the one where you want to store.     &#x20;

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FTQHGaBa6VxH8xl15fOb6%2FUntitleddesign34-ezgif.com-crop.gif?alt=media&#x26;token=1b3d45b9-12da-4c6d-85fc-480afc88a19f" alt=""><figcaption></figcaption></figure>

* **Step 3: Map Variables to Headers** \
  \
  1\)DoubleTick automatically reads the headers from the first row of the selected sheet.\
  \
  2\)Identify the variables you wish to capture from the conversation. For instance: \
  \
  &#x20;  a)**Age**: Click on the curly brackets {}, select the age component, and map it to the appropriate \
  &#x20;      header\
  &#x20;   b)**Address**: Repeat the same process for the address.\\

* Step 4: Save and Enable the Bot \
  \
  1\)Once your flow is ready and Google Sheets integration is complete, save the bot. \
  \
  2\)Enable the bot to make it live

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FIGNrXrqgXIy0kIYy9if0%2FUntitleddesign36-ezgif.com-crop.gif?alt=media&#x26;token=b532de65-e146-49dd-95da-479eb39c546d" alt=""><figcaption></figcaption></figure>

***

**Example Use** \
\
Case Let’s say you want to collect customer feedback. Here’s how the bot flow could look:

1. The bot asks, “How would you rate your experience with DoubleTick on a scale of 1-10?”
2. The customer responds with a number (e.g., 8).
3. The bot records this response in the Google Sheet under the header "Rating."
4. If there’s a follow-up question, the flow continues until all required data is collected
