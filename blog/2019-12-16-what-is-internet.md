---
id: what-is-the-internet
title: What is the Internet?
author: Natalie Cyreus
author_title: System/web engineer @ Swedish Public Television (SVT)
author_url: /nataliecyreus
author_image_url: https://scontent-arn2-1.cdninstagram.com/vp/fe95e87873515561d07ccc1978efa8f5/5E6C3CF8/t51.2885-19/s320x320/67524515_1050566435333937_1374925911710760960_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com
tags: [internet, web, client, server, IP-adress, DNS]
---

<!--truncate-->

## Client - Internet - Server
<img src="/img/client-server.jpg" />
A typical wesite is hosted on a web server. Servers are usually large computers in a server center conected to a network.

## DNS - IP Address
When you type in a website name in the adress field, your computer makes a DNS search. 
Each website has a uique number, called a IP-adress, which is similar to a phone number.

DNS `Domain Name Servers` are like phone books. The DNS servers connect you to the right server.

If you search in a terminal by writing `host` and a website name:

    $ host google.com

You get back the IP adress:

    google.com has IPv6 address 2a00:1450:400f:806::200e

## IP-adress - Server - Website
Your computer uses the IP-adress to find the right web server and sends a request for the page.

The server process the request and find the right files.
The server then send the right files to your computer. Websites are usually buildt with HTML, CSS, JavaScript and media files. 

## Browser display the page

Your browser builds together all the files for the website and displays it. There are different types of browsers. Some of the most popular are `Google Chrome`, `Safari`, `Firefox`, `Internet Explorer` and `Microsoft Edge`.

## What is the "Cloud"

Cloud Computing means that data can be stored on several maschines at differet locations, instead of just locally on a device.
For cloud applications to work they need to be connected to the internet.