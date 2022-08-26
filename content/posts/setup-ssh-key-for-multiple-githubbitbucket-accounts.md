---
title: Setup SSH key for multiple Github/Bitbucket accounts
date: 2020-08-17 06:37:00 +05:30
categories:
- git
tags:
- Bitbucket
- Github
- ssh
- featured
author: [pawneshwer]
description: Setup SSH key for multiple Github/Bitbucket accounts. How to use one computer for multiple bitbucket/github account using ssh key. git ssh key on multiple pc.
comments: true
layout: post
draft: false
image: img/setup-ssh-key-for-multiple-githubbitbucket-accounts.png
---

## Setup SSH key for multiple Github/Bitbucket accounts
If you are working with multiple Github/Bitbucket accounts using ssh then you may face this problem, that you can't use same ssh key on another account.

I face this problem everytime i reinstall operating system on my computer. And i have to google to find way to fix this problem. So i'm writing this to help me and you also.

### Idea behind this fix
So basically we will generate multiple ssh keys on single computer and merge those all ssh keys in Config file. And that config file will behave like bridge to all bitbucket/github account and deliver ssh key to those accounts accordingly.

### Let's begin
- If you have already setup ssh key on your computer then skip this step, otherwise use below commands on terminal or command prompt to generate default ssh key.

```bash
ssh-keygen -t rsa
ssh-add ~/.ssh/id_rsa
```

- Now you have 2 file in .ssh folder, `id_rsa` and `id_rsa.pub`. 1st one is the secret key and second one is public key.
- Now next you have to create more ssh keys for other accounts

Let say if you are working with 3 company account and 1 is your personal account. So add your default ssh key to your personal account. And create 3 new ssh keys for your 3 companies.

- To add ssh key for company account use below command.

##### Generate key for 1st company
```bash
cd ~/.ssh
ssh-keygen -t rsa -C "company_name1" -f "company_name1"
ssh-add ~/.ssh/company_name1
```
##### Generate key for 2nd company
```bash
cd ~/.ssh
ssh-keygen -t rsa -C "company_name2" -f "company_name2"
ssh-add ~/.ssh/company_name2
```
##### Generate key for 3rd company
```bash
cd ~/.ssh
ssh-keygen -t rsa -C "company_name3" -f "company_name3"
ssh-add ~/.ssh/company_name3
```

- Now you have 4 ssh keys on your computer, next step is to create **Config** file, which will act as bridge for all accounts.
- create `config` file inside `~/.ssh` directory.
- You can create this file manually of use below command on Linux/Unix operating system.

```bash
nano ~/.ssh/config
```
This command will open `config` file in command line editor and if this file doesn't exist then it will create that file for you.

- Now you have to define some rules to map ssh keys with accounts.
- Paste below code in `config` file, and modify according to your need.

##### For bitbucket
```
Host bitbucket.org
  HostName bitbucket.org
  IdentityFile ~/.ssh/id_rsa
Host companyname1.bitbucket.org
  HostName bitbucket.org
  IdentityFile ~/.ssh/company_name1
Host companyname2.bitbucket.org
  HostName bitbucket.org
  IdentityFile ~/.ssh/company_name2
Host companyname3.bitbucket.org
  HostName bitbucket.org
  IdentityFile ~/.ssh/company_name3

```

##### For Github
```
Host github.com
  HostName github.com
  IdentityFile ~/.ssh/id_rsa
Host companyname1.github.com
  HostName github.com
  IdentityFile ~/.ssh/company_name1
Host companyname2.github.com
  HostName github.com
  IdentityFile ~/.ssh/company_name2
Host companyname3.github.com
  HostName github.com
  IdentityFile ~/.ssh/company_name3
```

As you can see i've mapped `company_name1` ssh key with account. Now add that `company_name1.pub`'s ssh key on you `companyname1.bitbucket.org` account.

I'm just giving dummy name, you can write anything which make sense to you and manageable for you.

### How to add ssh key on Bitbucket or Github?

#### In Bitbucket:

- Click on your user icon in the top right and select Bitbucket settings from the menu
- Click on SSH keys in the left hand menu
- Click the Add key button, enter whatever you want for label and paste your key into the box below.
- Click `Add key` and you are done

#### In Github:

- Click on your user icon in the top right and select Settings from the menu
- Click SSH and GPG keys in the left hand menu.
- Click the New SSH key button, enter whatever you want for title and paste your key in the box below
- Click Add key and you're done

Repeat process for the next account, except this time copy the another company_name

### How to Clone repositories?
Your personal project can be cloned same as before, but to clone project from any of the above company account you have to tweak then clone url.

##### For example
Suppose if clone url of your company account looks like below,

git clone git@bitbucket.org:companyname/company-project.git

Then you have to modify this to look like below url (just add ssh key name which you have mapped in config file)

git clone git@**company_name.**bitbucket.org:companyName/company-project.git

You need to change only bold part.

###### Now you have permission on all your company account to pull and push code from company project over ssh.