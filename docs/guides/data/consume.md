---
id: consume
title: Consume data from an Amphora
sidebar_label: Consume Data
---

> You must have purchased an Amphora to consume it's data

You can consume data from an Amphora in several ways. You can download Amphora Files or Amphora Signals, either via the web application, or by using the REST API or any Amphora Data client SDK.

## Download an Amphora File

To consume an Amphora file (static file typically .txt or .csv) select `Files` on the left of the Amphora page. You will then see a a list of all the files in the Amphora. 

![Amphora File download Screenshot](/docs/assets/screenshots/Flat_file_download.png)

Simply click `Download` next to the file you want.

## View an Amphora Signal

Amphora Signas represent time series data. To view an Amphora Signal click `Signals` on the left of the Amphora page. You will see a set of time series similar to below.

![View Signals, Screenshot](/docs/assets/screenshots/view_signal_amphora.png)

This is an exploratory dashboard and it enables you to discover the data in a simple format. You can choose different signals, different time boxes, and filter by specific values or properties. 

> Note that not all Amphoras contain Signals.

## Get data programmatically 

Most of the time you will want to consume data programmatically.  You can check out the latest SDKs, sample code and tutorials at [GitHub](https://github.com/amphoradata). We provide a public Open API specification at [amphoradata.com/swagger](https://beta.amphoradata.com/swagger/). We currently generate and provide a C# SDK, Node.js SDK, and Python SDK.
