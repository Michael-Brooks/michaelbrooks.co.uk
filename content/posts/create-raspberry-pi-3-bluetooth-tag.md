---
title: Create a Raspberry Pi 3 Bluetooth tag
date: 2016-08-09
published: true
tags: ['Raspberry Pi','tutorial','bluetooth']
canonical_url: false
description: "I found this MagPi Tutorial to be a really nice starting project for my newly purchased Pi 3. However, I did run into a few problems which I will address in this Blog post. You can pretty much follow either this post, or the MagPi one, but my post will address any issues I had when following their tutorial."
---

I found this [MagPi Tutorial](https://www.raspberrypi.org/magpi/create-a-raspberry-pi-3-bluetooth-tag/) to be a really nice starting project for my newly purchased Pi 3. However, I did run into a few problems which I will address in this Blog post. You can pretty much follow either this post, or the MagPi one, but my post will address any issues I had when following their tutorial.

So to start, they requested I find the Mac address for both my phone and PC. I followed their advice for looking on my phone, but the Mac address was long and full of dashes which looking at the Python script is not what they want. Instead, I used the Pi to search for my phone on Bluetooth and find the Mac address using the following in Terminal...

``` sudo bluetoothctl agent on scan on ```

This will use the Bluetooth module, turn Bluetooth on and then search for Bluetooth devices. Next, connect your phone to your Pi and copy the Mac address then paste into a text editor for later.

To pair your selected device type...

``` pair XX:XX:XX:XX:XX:XX ```

The x's will be your phone's mac address.

Now we need to grab your PC's mac address, you can do this through your router. My router's IP is 192.168.0.1, but your's might be different, log into your router and view your connected devices where you should find your PC's chosen Mac address. Keep this safe for later on.

Now we have our Mac addresses, we need to install all relevant software. I had trouble trying to install 'pybluez', so I will now tell you how I overcame this issue.

Firstly, we need to install Python dev and a Bluetooth library by typing the following into Terminal...

``` sudo apt-get install python-dev sudo apt-get install libbluetooth-dev ```

Then we can install the packages from MagPi...

``` sudo pip install pybluez sudo pip install wakeonlan ```

Now for the Python script, if you check out the original post, you will see this differs slightly as this code works perfect for me...

``` #!/usr/bin/python

import time import bluetooth from wakeonlan import wol

phone = "ff:ff:ff:ff:ff:ff"

def search(): devices = bluetooth.discover_devices(duration = 5, lookup_names = True) return devices

while True: results = search()

for addr, name in results: if addr == phone: wol.send_magic_packet('ff:ff:ff:ff:ff:ff') time.sleep(20) ```

To get this working automatically on reboot, we need to add the following to /usr/profile, to edit /usr/profile type...

\`\`\` sudo nano /usr/profile \`\`\`

Then right at the very bottom of this script we need to add the following...

\`\`\` sudo python /home/py/bluetooth_tag.py & \`\`\`

That is everything, be sure to run python on the script beforehand to ensure your phone can wake up your PC, when it does, the script should carry on working after a reboot.

If you have any questions regarding this tutorial, or think it could be improved, then please let me know.
