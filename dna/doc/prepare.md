<!--
@license
Copyright (c) 2025 tssuite

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# Prepare

- [Install Tools](#install-tools)
  - [Node](#node)
  - [PNPM](#pnpm)
  - [GitHub CLI](#github-cli)
  - [Vscode](#vscode)
- [Get access To GitHub](#get-access-to-github)
  - [Get a GitHub account](#get-a-github-account)
  - [Request organization access](#request-organization-access)
  - [Upload your public SSH key](#upload-your-public-ssh-key)
  - [Login with GitHub CLI](#login-with-github-cli)
- [Get access to NPM](#get-access-to-npm)
  - [Create an account on NPM](#create-an-account-on-npm)
  - [Request access to tssuite](#request-access-to-tssuite)
  - [Generate and install an access token](#generate-and-install-an-access-token)
- [Open template-project the first time](#open-template-project-the-first-time)
  - [Create a dev and tssuite folder](#create-a-dev-and-tssuite-folder)
  - [Clone code](#clone-code)
  - [Configure email address and user name](#configure-email-address-and-user-name)
  - [Open template-project with Vscode](#open-template-project-with-vscode)
  - [Install recommended extensions](#install-recommended-extensions)
  - [Activate PNPM for the project](#activate-pnpm-for-the-project)

## Install Tools

### Node

[Install Node on Windows](./install-node-win.md)

[Install Node on Mac](./install-node-mac.md)

### PNPM

On Windows:

Press `Windows`

Type `Cmd`

Select `Open as administrator`

Execute the the following commands

```bash
npm install --global corepack@latest
corepack enable pnpm
```

### GitHub CLI

Windows: Visit <https://cli.github.com>

Mac

Visit <https://github.com/>

In the top right corner, click `Sign up`

Restart Terminal when opened

### Vscode

Visit <https://code.visualstudio.com/download>

Download and install

## Get access To GitHub

### Get a GitHub account

If you have already an GitHub account, skip this step.

Visit <https://github.com/>

In the top right corner, click `Sign up`

Follow the instructions to get an account

#### Create an SSH key

If you already have created an SSH key, skip this step.

Visit <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account>

In the Tab bar select either `Mac`, `Windows` or `Linux`

Follow the instructions

### Request organization access

Ask an Administrator of the <https://github.com/tssuite> to give you access to
the tssuite GitHub organization by performing the following steps:

1. Visit <https://github.com/tssuite>

2. In the top menu, click `People`

3. Click the green `Invite member` button

4. Enter the new user's GitHub email address.

5. And click `Invite`

6. Wait until the new user has accepted the invitation

7. Assign the right role (member, outside contributor etc) to the new user

### Upload your public SSH key

### Login with GitHub CLI

We have installed the GitHub CLI before

Now its time to login

```bash
gh auth login
```

Select the following answers:

- ? Where do you use GitHub? `GitHub.com`
- ? What is your preferred protocol for Git operations on this host? `SSH`
- ? Upload your SSH public key to your GitHub account? `C:\Users\...`
- ? Title for your SSH key: (GitHub CLI) `Dell Laptop`
- ? How would you like to authenticate GitHub CLI? `Login with a web browser`

Copy the shown one-time code, right beside `First copy your one-time code`

Press `Enter`

Brows opens

Paste the code copied before

Make sure `tssuite` is selected

Click `Authorize GitHub`

## Get access to NPM

To publish tssuite packages to NPM, you need access.

### Create an account on NPM

Open <http://npmjs.com>

On the top right side, click `Sign up`

Follow the instructions to get an account.

### Request access to tssuite

Ask an administrator of the tssuite organization to perform the following steps:

1. Open <http://npmjs.com>
2. Login
3. Open <https://www.npmjs.com/settings/tssuite/members>
4. Click on `Invite Members`
5. Enter your `Username or email`
6. Click on `Invite`

Open your mails and accept the invitation and follow the instructions

Ask the administrator to assign you the right role by doing the following steps:

1. Open <https://www.npmjs.com/settings/tssuite/members>
2. Assigning the right role to you (`administrator`, `member`)

### Generate and install an access token

Open <http://npmjs.com>

Log in, when not already done

Click on the `avatar` at the top right corner

Click `Access Tokens`

Click `Generate New Token`

Select `Granular Access Tokens`

Select `Classic token`

Enter a `Token name`

Set an `Expiration`

Below `Packages and scopes`, `permissions`, select `Read and write`

Select `All packages` or the packages you are responsible for

Below `Organizations`, `permissions`, select `No access`

Click `Generate Token`

Copy the generated token

When not already existing, create a file `.npmrc` in your `user directory`

Add the following line

```bash
//registry.npmjs.org/:_authToken=your-auth-token
```

Replace `your-auth-token` by your token.

Now you should be able to publish package updates

## Open template-project the first time

### Create a dev and tssuite folder

tssuite consists of multiple repos, so we recommend to checkout all tssuite
projects into a `tssuite` folder. In this documentation we are using
`~/dev/tssuite` as the development folder.

```bash
mkdir tssuite
cd tssuite
```

### Clone code

```bash
git clone https://github.com/tssuite/template-project.git
```

### Configure email address and user name

Replace `first` an `last` by your first and last name and execute:

```bash
git config --global user.name "first last"
```

Replace `email` by your email and execute:

```bash
git config --global user.email "email"
```

### Open template-project with Vscode

```bash
code template-project
```

### Install recommended extensions

When opening this project the first time, you will be asked to install
recommended workspace extensions. Click on `install`.

If you do not see this step,

Press `Ctrl+Shift+P`.

Type `Extensions: Show Recommended Extensions` and press `Enter`.

The recommended extensions will be shown.

Make sure, all recommended extensions are installed.

### Activate PNPM for the project

```bash
corepack use pnpm
```
