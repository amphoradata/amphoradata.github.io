---
id: consume
title: Consume data from an Amphora
sidebar_label: Consume Data
---

> Amphora Data is currently in beta. These documents may change.

> You must have purchased an Amphora to consume it's data

You can consume data from an Amphora in several ways. You can download Amphora Files or Amphora Signals, either via the web application, or by using the REST API or any Amphora Data client SDK.

## Download an Amphora File

To consume an Amphora file (static file typically .txt or .csv) select `Files` on the top-right of the Amphora page. You should then see a screen like this. 

![Amphora File download Screenshot](/docs/assets/screenshots/Flat_file_download.png)

Then simply click `Download` next to the file you want.

## View an Amphora Signal

Amphora Signas represent time series data. To view an Amphora Signal click `Signals` in the top right of the Amphora page. You should see some interesting data like this.
![View Signals, Screenshot](/docs/assets/screenshots/DataMarketSignals.jpg)

This is an exploratory dashboard and it enables you to discover the data in a simple format. You can choose different signals, different time boxes, and filter by specific values or properties. 

> Note that not all Amphoras contain Signals.

## Get data via the API

All Amphora Data is available via our API. Check out the latest SDKs and sample code on [GitHub](https://github.com/amphoradata). We provide a public Open API specification at [beta.amphoradata.com/swagger](https://beta.amphoradata.com/swagger/). We currently generate and provide a C# SDK and Python SDK.
