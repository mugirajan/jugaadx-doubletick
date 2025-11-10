# Push Notification Troubleshooting by Phone Model

Sometimes, push notifications don’t show up on your phone because of **battery optimization, background app restrictions, or notification settings** specific to your brand of device. Different phone brands handle apps differently, so it’s important to follow the right steps for your device.

***

### <mark style="color:green;">🚨 Why This Happens</mark>

We’ve observed that many recent complaints of missing notifications occur due to:

* **Blockers set at the device/power management level**
* **Customized Android operating systems** used by certain brands like Oppo, Vivo, and iQOO

Unlike stock Android, these brands use their own **custom skins** that aggressively restrict background apps, leading to delayed or missing notifications. This problem is not limited to DoubleTick — it also affects many other apps like Gmail, WhatsApp, and banking apps.

***

### 🖥️ <mark style="color:green;">Understanding Custom OS (For Oppo, Vivo, iQOO Users)</mark>

* **ColorOS** – Used by **Oppo** and, in some regions, **OnePlus** and **Realme**.\
  Includes strict battery optimization rules that may block notifications.
* **Funtouch OS** – Used by **Vivo** and **iQOO** (a sub-brand of Vivo).\
  It controls background apps aggressively, which often interrupts notifications.
* **iQOO UI** – A custom layer on Funtouch OS, with the same restrictions.

👉 Although ColorOS and Funtouch OS share some codebase (since Oppo, Vivo, OnePlus, and iQOO are all under BBK Electronics), they are managed separately. Still, **the common issue is aggressive background process control**, which directly impacts DoubleTick notifications..

***

#### <mark style="color:green;">**Xiaomi Phones (MIUI)**</mark>

Xiaomi devices are aggressive in saving battery, which often causes apps like DoubleTick to stop running in the background.

1. **Battery Optimization**

This prevents MIUI from putting DoubleTick to sleep when the phone is idle.

* Go to **Settings → Battery Optimization**.
* Search for **DoubleTick** in the list.
* Select **No restrictions**.

2. **Auto-start Permission**

Without this, DoubleTick won’t start automatically after you restart your phone.

* Go to **Settings → Permissions → Auto-start**.
* Find **DoubleTick** and turn it **ON**.

3. **App Notifications**

This ensures notifications appear on top and aren’t delayed.

* Go to **Settings → Notifications → App Notifications**.
* Open **DoubleTick** and enable **Show Notification** and **Priority**.

***

#### <mark style="color:green;">**Vivo Phones**</mark>

Vivo phones often block background activity to save battery, which can delay notifications.

1. **Auto-start**

Ensures DoubleTick runs after a restart.

* Go to **Settings → Permissions → Auto-start**.
* Turn on auto-start for **DoubleTick**.

2. **Battery Consumption Settings**

Prevents Vivo’s battery saver from stopping DoubleTick in the background.

* Go to **Settings → Battery → High background power consumption**.
* Allow **DoubleTick** here.

***

#### <mark style="color:green;">**Oppo Phones**</mark>

Oppo uses "Protected Apps" to control which apps can run freely.

1. **Protected Apps**

This keeps DoubleTick safe from being force-stopped by the system.

* Go to **Settings → Advanced Settings → Battery Manager → Protected Apps**.
* Enable **DoubleTick**.\\

2. **Notification Settings**

Without this, messages might arrive silently or not at all.

* Go to **Settings → Notification Panel & Status Bar → Notification Center**.
* Enable **DoubleTick** for both notification and priority display.

***

#### <mark style="color:green;">**OnePlus Phones**</mark>

OnePlus users often face delayed notifications because of aggressive “Battery Optimization.”

1. **Battery Optimization**

Prevents DoubleTick from being killed in the background.

* Go to **Settings → Battery → Battery Optimization**.
* Find **DoubleTick → Don’t Optimize**.\\

2. **Recent App Management**

Deep Clear removes DoubleTick from memory, so messages won’t arrive until you reopen the app.

* Go to **Settings → Advanced → Recent App Management**.
* Select **Normal Clear** instead of “Deep Clear.”

***

#### <mark style="color:green;">**Lenovo Phones**</mark>

Lenovo devices need apps to be manually whitelisted.

1. **Background App Management**

Allows DoubleTick to start automatically and keep running in the background.

* Go to **Settings → Power Manager → Background App Management**.
* Enable **DoubleTick**.

***

#### <mark style="color:green;">**Asus Phones**</mark>

Asus has strict memory and power management rules.

1. **Background App Management**

   * Go to **Settings → Power Manager → Background App Management**.
   * Enable **DoubleTick**.

2. **Protected App List**

&#x20;Keeps DoubleTick active even during memory clean-ups.

* Open **Mobile Manager → Boost → Super Boost**.
* Add **DoubleTick** to the **Protected App List**.

***

#### <mark style="color:green;">**Samsung Phones**</mark>

Samsung usually delivers notifications well, but sometimes settings get turned off by mistake.

1. **App Notifications**&#x20;

This ensures system-wide permission for DoubleTick alerts.

* Go to **Settings → Apps → DoubleTick → App Settings**.
* Toggle the **Allow Notifications** button.

2. **Lock Screen Notifications**

Lets DoubleTick messages appear even when your phone is locked.

* Go to **Settings → Lock Screen & Security → Notifications on Lock Screen**.
* Set to **Show Content**.

***

👉 **Pro Tip:** After changing these settings, restart your phone once. This makes sure the new permissions take effect.
