# Single Sign-On (SSO) in DoubleTick

We’re excited to introduce **Single Sign-On (SSO)** — a brand-new **add-on feature available only with the Enterprise Plan** in DoubleTick. With SSO, you can simplify user logins, improve security, and streamline team onboarding.

***

### 🔑 What is SSO?

**Single Sign-On (SSO)** lets your team members log in to DoubleTick using your organization’s identity provider (like **Microsoft Azure AD, Google Workspace, or any other supported provider**) instead of creating and remembering separate DoubleTick credentials.

This ensures a secure, smooth, and consistent login experience for all users in your organization.

***

### 🌟 Benefits of Using SSO in DoubleTick

* **Simplified Access** – Team members log in with their existing work accounts.
* **Enhanced Security** – Authentication is handled by your trusted provider.
* **Seamless Onboarding** – Add new members quickly with their official email IDs.
* **Enterprise Ready** – Perfect for large organizations managing multiple users.

***

### ⚙️ How to Enable SSO in DoubleTick

1. **Login as Admin**
   * Sign in to DoubleTick with your mobile number.
   * Select the organization that is on the **Enterprise Plan**.
2. **Go to SSO Settings**
   * Navigate to **Settings → Configure Single Sign-On** (scroll to the bottom of the settings page).
3. **Choose Authentication Method**
   * DoubleTick supports both **SAML** and **OIDC** protocols.
   * Depending on your provider (Microsoft, Google, or others), you’ll need to provide:
     * For **SAML**: Entity ID, SSO URL, and Certificate
     * For **OIDC**: Client ID, Client Secret, and SSO URL
   * Enter your organization’s **email domain** (e.g., @yourcompany.com).
4. **Upload Credentials & Enable SSO**
   * Upload the required certificate or client details.
   * Click **Update Details** to enable SSO.
5. **Invite Team Members**
   * Go to the **Team** section.
   * Add members using their official email IDs (mandatory for SSO).
   * Once added, members will log in using the **Login with SSO** option.
6. **Login Using SSO**
   * After SSO is enabled, team members can select **Login with SSO** on the login screen.
   * They’ll be redirected to your organization’s identity provider (e.g., Microsoft login page).
   * Once authenticated, they’ll be redirected back to your DoubleTick organization.

***

### 🎯 Example Use Case

If you have created a large team in DoubleTick, instead of asking everyone to manage new credentials, you can enable SSO. This way, they can log in directly with their company’s email and password, just like they do for other apps in your organization.

***

### 📌 Important Notes

* SSO is **only available on the Enterprise Plan**.
* It is an **add-on feature** and comes with an **additional charge**.
* Admins must configure SSO before inviting team members.
* Email ID is **mandatory** for SSO login.

***

✅ With SSO, you ensure your team has **secure, faster, and easier access to DoubleTick**, while your organization maintains tighter control over authentication.
