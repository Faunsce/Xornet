![Xornet Logo](https://cdn.discordapp.com/attachments/851974319370010655/854669456793534494/unknown.png)

# The Stack
![Stack](https://cdn.discordapp.com/attachments/806300597338767450/860977347631775774/unknown.png)
 - Vue.js: We use Vue for our front-end framework!
 - Vite: We use Vite because it lets us quickly inspect our changes!
 - Windi: We use Windi to make our lifes easier when it comes to writing CSS!
 - Node.js: Our backend is coded with Node.js!
 - Rust: Our reporter software is coded in rust for maximum performance!
 - MongoDB: We use MongoDB for our database because who doesn't like 🥭🥭!

# Information
We are XORNET this is a fun little project started by @Geoxor for people who have servers and don’t have shit to do with them, our goal is to let people use our software to manage their servers!


Heres the discord server for you to join
https://discord.gg/geoxor

# Dashboard
![Xornet Dashboard](https://cdn.discordapp.com/attachments/806300597338767450/859424475706556456/xornet.png)

# Installation 
Make sure you have Node.js v14+
  1. Client: 
     1. `npm i` to install dependancies
     2. `npm run dev` to run locally (assuming you're running the backend locally as well)
     3. `npm run staged` to use the xornet backend if you're only planning on working on the front end
  2. Reporter: 
     1. `npm i` to install dependancies
     2. `npm run dev` to run locally (assuming you're running the backend locally as well)
     4. `npm run staged` to make the reporter connect to the backend instead of your local backend
  3. Server:
     1. `npm i` to install dependancies
     2. `npm run dev` to run locally (prod is only for the master server)

# Information for pull requests
Theres some scripts you should run before doing pull requests
  `npm run prettify` on each folder to fix the formatting so it matches the rest of the repo

# Reporter
The reporter is the main binary app that you can easily download and install on your VMs or servers, it takes care of reporting system information to https://xornet.cloud!

![Reporter](https://cdn.discordapp.com/attachments/806300597338767450/850248559760506940/unknown.png)

The compiled binaries work on the following operating systems:
  - Debian
  - Windows 10
  - Windows Server 2019
  - MacOS

The decompiled reporter can be ran using node.js at least on:
  - Debian
  - Ubuntu
  - Manjaro
  - Raspbian
  - Windows 10
  - Windows Server 2019
  - MacOS
  - HiveOS
  
# Disclaimer
We don't know how to code, so don't be mean to us owo.
