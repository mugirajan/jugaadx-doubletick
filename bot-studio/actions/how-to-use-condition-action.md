# How to Use Condition Action

In the world of automated workflows, the **Condition Action** is like a smart decision-maker. It helps you set rules so your automated processes can make choices based on specific conditions

Let's take a closer look at how it works and why it's so useful

The **Condition** **Action** allows you to establish a condition within the flow. You can input a value directly or select one from a variable.&#x20;

Then, choose your comparison condition from the dropdown list, which includes options such as:

* **<**: Less than
* **<=**: Less than or equal to
* **>**: Greater than
* **>=**: Greater than or equal to
* **Contains**: Checks if the value contains a specific substring
* **Ends with**: Verifies if the value ends with a particular substring
* **Equals**: Determines if the value is exactly equal to another value
* **Equals ignore case**: Checks for equality regardless of case sensitivity
* **Exists**: Validates if the value exists
* **Starts with**: Verifies if the value starts with a particular substring

After selecting the comparison condition, enter or select the value to compare with.&#x20;

Finally, you'll have buttons for "**True**" and "**False**" to define the actions to take based on whether the condition evaluates to true or false.  &#x20;

### **Example Scenario:**

1. **Initial Template Message:** The bot sends an initial template message to the customer, presenting them with various buttons representing different categories or options to choose from (e.g., Interested, Not Interested').
2. **Customer Interaction:** The customer receives the template message and views the options presented.
3. **Customer Response Handling - Customer Attribute Action:** Upon selecting one of the buttons, the bot captures the customer's response using the <mark style="color:green;">**Customer Attribute Action**</mark>. The selected category is stored as a customer attribute for future reference.
4. **Time Delay Action:** After a specified period (e.g., 1 hour) has passed since the initial message was sent, the bot implements a Time Delay action to allow the customer time to respond.
5. **Check Customer Response - Conditional Logic:** Following the time delay, the bot evaluates whether the customer has responded by checking if there is any data stored in the customer attribute related to their category selection.
6. **Conditional Branching:**
   * If the customer has responded (i.e., data is present in the customer attribute), the bot proceeds with the next steps in the conversation flow, such as providing further information or assistance related to the selected category.
   * If the customer has not responded (i.e., no data is present in the customer attribute), the bot triggers another template message to re-engage the customer and prompt them to make a selection again.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FonAzjubnIfLqUW40qXWr%2FcustomerAttribute%20(3).gif?alt=media&#x26;token=36ff24f0-2758-47f3-9d8f-5733f6d177a9" alt=""><figcaption></figcaption></figure>
