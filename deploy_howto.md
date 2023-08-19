---
title: How to Deploy a VisionScript App
layout: default.njk
---

There are two pre-built ways to deploy code written in VisionScript:

1. Using a VisionScript notebook
2. Using the command line

Below, we show how to deploy your app with both methods. Let's begin!

## Deploy via Notebook

VisionScript comes with an interactive deployment tool out-of-the-box in VisionScript Notebook.

To deploy a VisionScript app, first run VisionScript Notebook, the software through which you can create an interactive application. You can run VisionScript Notebook using the following code:

```visionscript --notebook
```
You will also need to start VisionScript Cloud, a web tool that lets you run VisionScript programs as web pages and via an API:

```visionscript --cloud
```
When VisionScript Cloud starts, a message will appear with your API key:

```Your API key is [API_KEY]
```
Take a note of your API key, as you will need it later.

Next, write your program in the notebook:

![A program in a VisionScript Notebook]()

Once you have written your program, click the "Use as Web App" button at the top of the page:

![A screenshot of a pop up with configuration options for your web app]()

You will be asked to provide:

1. A name for your app
2. The URL of your VisionScript Cloud server (see below for more information)
3. Your VisionScript API key
4. An application description (optional)

By default, your VisionScript Cloud URL will be:

```http://localhost:6999
```
Your API key is the key you were given when you started the VisionScript Cloud server.

After you have filled out the required information, click "Submit" in the deployment pop up in your notebook. A message will appear with the URL of your deployed application. If something went wrong during deployment, a message will appear explaining the issue.

## Deploy via CLI

First, start VisionScript Cloud, a web tool that lets you run VisionScript programs as web pages and via an API:

```visionscript --cloud
```
You can deploy a `.vic` file using the following command:

```visionscript --deploy --file=./filename.vic --name="App name" --description=="App description"
```
Replace the `file`, `name`, and `description` values as appropriate.

This command will return the URL to your deployed application. If something went wrong during deployment, a message will appear explaining the issue.