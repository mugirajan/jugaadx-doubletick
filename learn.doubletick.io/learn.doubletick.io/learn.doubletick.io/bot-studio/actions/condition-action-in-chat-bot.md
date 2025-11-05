# Condition Action In Chat Bot

**Purpose of the Condition Node**

The **Condition Node** is used to evaluate a specific condition and route the workflow based on whether the condition is **true** or **false**. It helps in creating decision-making points within your automation.

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FGpyy0CoMrkxIrH84Uyr8%2F0.png?alt=media)

**Components of the Node**

1. **Condition Field (Type attribute value)**:

   * This is where you specify the **attribute** or **variable** you want to evaluate.
   * Example: You might input a variable like {{customer\_status}} or a value from a previous step.\\

   <figure><img src="https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FdDP3Ev91vwW2rakHVOYD%2F1.png?alt=media" alt=""><figcaption></figcaption></figure>
2. **Select Condition (Dropdown)**:

This dropdown allows you to define the logical operator to apply to the attribute.:

![](https://2303112206-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F53n17VnOICC1LtDqlENV%2Fuploads%2FWFyjprYvcAgubmR0B7WJ%2F2.png?alt=media)

 **> (Greater Than)**:

* Checks if the attribute value is greater than a specified value.
* Example: {{order\_quantity}} > 10 (True if order\_quantity is more than 10).

 **>= (Greater Than or Equal To)**:

* Checks if the attribute value is greater than or equal to a specified value.
* Example: {{order\_amount}} >= 100 (True if order\_amount is 100 or more).

 **contains**:

* Checks if the attribute contains a specific substring or value.
* Example: {{customer\_notes}} contains "urgent" (True if "urgent" is found in customer\_notes).

 **ends with**:

* Checks if the attribute value ends with a specified string.
* Example: {{email}} ends with "@gmail.com" (True if the email ends with "@gmail.com").

 **equals**:

* Checks if the attribute value exactly matches a specified value.
* Example: {{status}} equals "Active" (True if status is exactly "Active").

 **equals ignore case**:

* Checks if the attribute value matches a specified value, ignoring case sensitivity.
* Example: {{status}} equals ignore case "active" (True for "Active", "ACTIVE", or "active").

 **exists**:

* Checks if the attribute exists or is defined (not null or empty).
* Example: {{customer\_id}} exists (True if customer\_id is present).

 **starts with**:

* Checks if the attribute value starts with a specified string.
* Example: {{name}} starts with "Dr." (True if the name begins with "Dr.").

1. **True and False Outputs**:
   * **True**: The workflow will proceed along this path if the condition evaluates to true.
   * **False**: The workflow will proceed along this path if the condition evaluates to false.

**Example Usage**

**Scenario:**

You want to send a follow-up message only if a customer’s order status is "Pending."

1. **Condition Field**: Input the variable: {{order\_status}}
2. **Select Condition**: Choose: Equals
3. **Value**: Enter: Pending
4. **True Path**: Set up an action to send a reminder message.
5. **False Path**: End the workflow or proceed with a different action.
