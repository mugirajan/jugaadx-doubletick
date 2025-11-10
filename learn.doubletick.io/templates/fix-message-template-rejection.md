# Fix Message Template Rejection

***

## Solution of Rejected Template 👇

{% embed url="<https://youtu.be/yKkPNRQa58o>" %}

* **Variable parameters** **are missing** **or have mismatched curly braces**. The correct format is <mark style="color:green;">`{{1}}`</mark>.
* **Template starts or ends with a variable,** e.g., <mark style="color:green;">`{{1}}`</mark> thanks!
* **Variable parameters are not sequential.** For example, <mark style="color:green;">`{{1}}`</mark><mark style="color:green;">,</mark> <mark style="color:green;"></mark><mark style="color:green;">`{{2}}`</mark><mark style="color:green;">,</mark> <mark style="color:green;"></mark><mark style="color:green;">`{{4}}`</mark><mark style="color:green;">,</mark> <mark style="color:green;"></mark><mark style="color:green;">`{{5}}`</mark> are defined but <mark style="color:green;">`{{3}}`</mark> does not exist on the template.
* **Variable parameters appear directly next to each other, e.g.,** <mark style="color:green;">{{1}} {{2}}</mark>.
* **Variable parameters contain special characters** such as a <mark style="color:green;">`#`</mark><mark style="color:green;">,</mark> <mark style="color:green;"></mark><mark style="color:green;">`$`</mark><mark style="color:green;">, or</mark> <mark style="color:green;"></mark><mark style="color:green;">`%`</mark>.
* **The purpose of your template is unclear and variable parameters are not defined.** All parameters must have a known purpose. Your template will be rejected if it is not clear what goes into a specific parameter. A sample template will help with your submission.
* **Spelling or grammatical errors.** Messages with misspellings or grammatical errors may prompt customers to view these messages as spam or a hoax.
* **Language defined does not match the content.** E.g., Spanish was selected but the content is in English or the content is a mixture of languages containing both Spanish and English.
* **Submission format for testing your API connection is incorrect.** The correct format is:
  * **Message template name:** test
  * **Content:** <mark style="color:green;">Hello</mark> <mark style="color:green;"></mark><mark style="color:green;">`{{1}}`</mark>
* **The URLs for your links are shortened.** Short links obscure the intended link destination.
* **The URL domain in your links does not belong to your business.**
* **The body of your template has more than two consecutive new line characters (\n).**
* **Text headers include emojis, asterisks, formatting markup, or the \n newline characters.**
* **Media headers (video, image, document) didn’t include a sample with submission.**
* **Call to action button URL contains a direct link to WhatsApp** (e.g., *<https://wa.me/14154443344>*).
* **The content contains potentially abusive or threatening content**, such as threatening a customer with legal action or threatening to publicly shame them.
* **The template’s content is identical to that of an existing template**. If a template is submitted with the same wording in the body and footer as an existing template, the duplicate template will be rejected. A rejection notification that includes the rejection reason will appear in Account Quality on WhatsApp Manager and be sent via email. You may refer to the Account Quality notification to see the name and language of the existing template with the same content as the rejected duplicate template. You may also choose to edit the template and resubmit.
* **The message template(s) contains content that violates WhatsApp’s Commerce Policy**: When you offer goods or services for sale, all messages and media related to your goods or services, including any descriptions, prices, fees, taxes, and/or any required legal disclosures, are considered as transactions. Transactions must comply with the [<mark style="color:green;">WhatsApp Commerce Policy</mark>](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fcommerce-policy%2F\&h=AT0o0FbzuE9lvOTKMm1Lx-UPGFb0jzK2Bd5X3_xWGaNoNFZVFCxQooOT4Er4VyR8gjycCzGXICiD7FHICmCz596g80sLdZ8B0fA1Qn2gFVj6oik0qYZ-UvMwJ6rHy9-VVr8)<mark style="color:green;">.</mark>
* **The message template(s) contain content that violates WhatsApp’s Business Policy**: Do not request sensitive identifiers from users. E.g., do not ask people to share full-length individual payment card numbers, financial account numbers, National Identification numbers, or other sensitive identifiers. This also includes not requesting documents from users that might contain sensitive identifiers. Requesting partial identifiers (e.g., the last 4 digits of their Social Security Number) is acceptable. All messaging must comply with the [<mark style="color:green;">WhatsApp Business Policy</mark>](https://www.whatsapp.com/legal/business-policy).
