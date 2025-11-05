# Troubleshooting Guide for “Failed to fetch” Error on DoubleTick Login

The **"Failed to fetch"** error usually indicates that your browser or device is unable to communicate with DoubleTick servers. This is commonly caused by network/firewall restrictions, VPN interference, or browser-related issues.

Here’s a step-by-step guide to help you resolve it:

**✅ 1. Whitelist Required Domains**

Ensure the following domains are **not being blocked** by your firewall, antivirus, network proxy, or VPN:

<https://doubletick.io/>

<https://api.doubletickapi.com/>

<https://mini.doubletick.io/>

<https://ad-insight.doubletick.io/>

<https://q.clarity.ms/collect>

<https://eu.i.posthog.com/>

<https://api.canny.io/api/>

<https://securetoken.googleapis.com/>

<https://identitytoolkit.googleapis.com/>

**➕ Actions:**

* Ask your IT team to **allowlist** these URLs.
* Make sure **ports 443 (HTTPS) and 80 (HTTP)** are open.
* If you use SSL inspection or DPI (Deep Packet Inspection), **disable it** for the above domains.

**✅ 2. Check Your Internet Network**

If you're on a **corporate or restricted Wi-Fi**, try:

* Switching to a **mobile hotspot** or open network.
* Turning **off VPN** if active.
* Checking if other team members can access [https://web.doubletick.io](https://web.doubletick.io/)

**✅ 3. Clear Browser Cache and Cookies**

Corrupted browser data may block key scripts from loading.

**➕ Steps:**

* Go to browser settings → **Privacy & Security** → Clear browsing data
* Select **Cookies and Cached Files**
* Refresh the DoubleTick login page or restart your browser

**✅ 4. Try an Incognito Window or Different Browser**

Sometimes browser extensions or cache can interfere.

**➕ Actions:**

* Open **incognito/private mode** and try logging in
* Use another browser (Chrome, Firefox, Edge)
* Ensure JavaScript is enabled

**✅ 5. Ensure Correct Time & Date on Your Device**

An incorrect system time can block secure connections.

**➕ Actions:**

* Open your device settings
* Set the time and date to **automatic or sync with internet**
* Refresh and retry

**✅ 6. Disable Antivirus or Firewall Temporarily (If Safe)**

Security tools like Kaspersky, Norton, or enterprise software may silently block background scripts.

**➕ Actions:**

* Disable antivirus/firewall **temporarily** and try logging in
* If successful, add the DoubleTick URLs to the tool’s **safe list**
* Reactivate your protection after testing

**✅ 7. Device-Specific Troubleshooting**

* If you’re on **iOS or Android**, try updating your browser
* Restart your phone or switch networks
* Ensure app permissions are granted

**✅ 8. Check Browser Console for Errors (Advanced)**

To get technical logs:

* Open Chrome
* Right-click → **Inspect** → Go to **Console** tab
* Refresh the page and note any red error messages

You can send screenshots of these errors to <support@doubletick.io> for further help.
