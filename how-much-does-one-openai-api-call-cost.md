# How Much Does One OpenAI API Call Cost?

The cost of a single API call depends on **three main factors**:\
1️The **model** you use (e.g., GPT-3.5 Turbo vs GPT-4 Turbo)\
2️The size of your **input prompt** (number of tokens)\
3️ The length of the **output response** (number of tokens)

***

#### &#x20;**Current Pricing (as of May 2025)**

| Model         | Input Cost (per 1,000 tokens) | Output Cost (per 1,000 tokens) |
| ------------- | ----------------------------- | ------------------------------ |
| GPT-3.5 Turbo | $0.0015                       | $0.002                         |
| GPT-4 Turbo   | $0.01                         | $0.03                          |

***

#### **Example Calculation**

&#x20;**Example Scenario:**

* Input Prompt: 500 tokens
* Output Response: 300 tokens

**GPT-3.5 Turbo**

* 500 input tokens = 0.5K → $0.00075
* 300 output tokens = 0.3K → $0.0006
* **Total:** \~$0.00135 per call

**GPT-4 Turbo**

* 500 input tokens = 0.5K → $0.005
* 300 output tokens = 0.3K → $0.009
* **Total:** \~$0.014 per call

***

#### &#x20;**Average Cost Range**

| Model         | Typical Cost per Call |
| ------------- | --------------------- |
| GPT-3.5 Turbo | \~$0.001 – $0.005     |
| GPT-4 Turbo   | \~$0.01 – $0.05       |

**Note:** Actual cost varies depending on how long your prompts and responses are.

***

#### &#x20;**How to Reduce Cost**

&#x20;Use shorter prompts and responses\
&#x20;Choose GPT-3.5 Turbo for simple tasks\
&#x20;Limit the maximum tokens in your API call

***

#### &#x20;**How to Estimate Your Own Cost**

**Formula:**\
Cost = (Input Tokens ÷ 1,000) × Input Rate + (Output Tokens ÷ 1,000) × Output Rate
