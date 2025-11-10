# How to Set Customer Attributes

We've got you covered for storing customer responses/details for future reference.

DoubleTick offers the "**Customer Attribute**" action, allowing you to seamlessly store customer responses within your bot flow.

> To utilize the Customer Attribute Action, you'll need an existing Customer Attribute to store the response, or you can create a new one from [<mark style="color:green;">**Custom Contact Fields**</mark>](https://learn.doubletick.io/settings/how-to-use-custom-contact-fields).

* Choose the attribute where you'd like to store the response.
* In the "Value" field, you can either manually enter data to store or select the response/data from a variable
* If you want to store customer button selection data, you have the option to connect all buttons to the attribute action. From the variable dropdown, select the connected block name, and then choose the "**SelectedButton**" option.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FoCR1iiTXyU7N5nxOTAyg%2FcustomerAttribute%20(1).gif?alt=media&#x26;token=f035a88d-8afd-4deb-b6c2-e4cea773044e" alt=""><figcaption></figcaption></figure>

***

### **Example Scenario:**

1. **Initial Template Message:** The bot sends an initial template message to the customer, presenting them with various buttons representing different categories or options to choose from (e.g., Interested, Not Interested').
2. **Customer Interaction:** The customer receives the template message and views the options presented.
3. **Customer Response Handling - Customer Attribute Action:** Upon selecting one of the buttons, the bot captures the customer's response using the <mark style="color:green;">**Customer Attribute Action**</mark>. The selected category is stored as a customer attribute for future reference.
4. **Time Delay Action:** After a specified period (e.g., 1 hour) has passed since the initial message was sent, the bot implements a Time Delay action to allow the customer time to respond.
5. **Check Customer Response - Conditional Logic:** Following the time delay, the bot evaluates whether the customer has responded by checking if there is any data stored in the customer attribute related to their category selection.
6. **Conditional Branching:**
   * If the customer has responded (i.e., data is present in the customer attribute), the bot proceeds with the next steps in the conversation flow, such as providing further information or assistance related to the selected category.
   * If the customer has not responded (i.e., no data is present in the customer attribute), the bot triggers another template message to re-engage the customer and prompt them to make a selection again.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FpRomvgVBYolPrObibDl1%2FcustomerAttribute.gif?alt=media&#x26;token=38784b97-69b7-4685-8e31-acf0e0479333" alt=""><figcaption></figcaption></figure>

By implementing this scenario, the bot can effectively track customer responses, re-engage with customers who have not responded initially, and provide a seamless and personalized experience based on their preferences.

<figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2Fwkeof1GVWm2rpaCcGrWu%2Fimage.png?alt=media&#x26;token=774627c1-190b-48c7-b6bd-5f428c547425" alt=""><figcaption></figcaption></figure>
