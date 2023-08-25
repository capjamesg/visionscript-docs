---
title: Use VisionScript with Roboflow
layout: default.njk
---

VisionScript has a built-in integration with [Roboflow](https://roboflow.com), which provides all the tools you need to train and deploy custom computer vision models, and runs a vast community of open models and datasets.

With this integration, you can use a curated list of Roboflow models and add any of the 50,000+ models available on [Roboflow Universe](https://universe.roboflow.com) for use in a VisionScript program, and models you have privately trained on Roboflow.

<div class="callout info">
<i class="fa-solid fa-circle-info"></i>&nbsp; Information
<ul>
<li>This integration is not yet available in VisionScript Notebooks.</li>
<li>This integration requires an internet connection for setup, unless using Inference (see Using Inference at the bottom of the document for more information).</li>
<li>This integration supports `Detect[]` and `Segment[]`.</li>
</ul>
</div>

## Using VisionScript with Roboflow

To use VisionScript with Roboflow, first create a free Roboflow account. Once you have a Roboflow account, click on the "Settings" icon on the Roboflow dashboard, then click "Roboflow API":

![Roboflow API key menu](/assets/rf_api_menu.png)

Next, copy the "Private API key":

![Roboflow API key](/assets/rf_api_key.png)

Open up a terminal window on your computer through which you are going to run VisionScript programs, then run the following command:

```
export ROBOFLOW_API_KEY=""
```

Add in the private API key you copied from Roboflow.

Now you can run Roboflow models with VisionScript! The following models are available out of the box

| Model Name | VisionScript ID |
| --- | --- |
| Rock Paper Scissors | roboflow rock paper scissors |

To use a model in a script, add the following VisionScript function before you use any `Detect[]` or `Segment[]` commands that you want to use the model:

```
Use["roboflow {id}"]
```

Replace `{id}` with the model ID from the table above, or the ID for custom models you have loaded. Here is an example:

```
Use["roboflow rock paper scissors"]
```

When you run a `Detect[]` or `Segment[]` call with a model hosted on Roboflow, a request will be made to Roboflow with the image you have taken. You can also run models on your own device, which is recommended for all scenarios in which visual data must be used on a particular computer or in a specific network. See "Using Inference" below for more information.

## Loading Custom Models

You can load any of the 50,000+ computer vision models on Roboflow into a VisionScript program. These models are hosted on Roboflow Universe, a large community where people publish computer vision datasets and models.

![Roboflow Universe](/assets/rf_universe.png)

You can find many models on the homepage, browse category pages, or use the search bar to find models. Add `model` to your search query to find models.

Here is an example of a money counter model:

![Cash counter dataset and model homepage on Roboflow Universe](/assets/rf_cash_counter.png)

When you have found a model you want to use, copy the URL of the page. Then, open a terminal window and run the following command:

```
visionscript --roboflow {url} --roboflow-name {name}
```

Where:

- `url` is the URL of the model you want to use, and;
- `name` is what you want the model to be called when you use it in VisionScript. This name can be anything you want.

Here is an example command for enabling VisionScript to use the coin counter model above:

```
visionscript --roboflow https://universe.roboflow.com/alex-hyams-cosqx/cash-counter --roboflow-name cash counter
```

Now we can use the model in VisionScript programs like this:

```
Use["roboflow cash counter"]
```

## Using Inference

[Roboflow Inference](https://github.com/roboflow/inference) is a self-hosted tool you can use to run models on your own device. Inference is used by enterprises around the world for computer vision applications. For non-commercial use, Inference is free. Roboflow Inference is recommended for all scenarios in which visual data must be used on a particular computer or in a specific network.

To install Inference, you will need to have Docker running on your computer. Refer to the [official Docker installation instructions](https://docs.docker.com/engine/install/) for guidance on how to install Docker. Then, follow the installation and setup instructions in the Roboflow Inference Docker documentation. 

Here is an example of how to run Inference on a Raspberry Pi *(Note: at least 32 GB of storage is required for using Inference on the Raspberry Pi)*:

```
docker pull roboflow/roboflow-inference-server-arm-cpu
```

This will start a Roboflow Inference server at `http://localhost:9001`. You can use this server to run inference on device.

Then, run the following commands in the environment where you want to run VisionScript with Roboflow:

```
export ROBOFLOW_API_KEY=""
export ROBOFLOW_INFER_SERVER="http://localhost:9001"
```

Add your API key into the first command. See the Using VisionScript with Roboflow section for guidance on how to find your API key.

After running these commands, inferences in VisionScript sessions run in the current terminal session will run through your local inference server. You will need to run these commands when you open new terminal windows to run VisionScript.