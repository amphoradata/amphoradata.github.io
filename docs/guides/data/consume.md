---
id: consume
title: Consume data from an Amphora
sidebar_label: Consume Data
---

> Amphora Data is currently in beta. These documents may change.

> You must have bought an Amphora to consume it's data



You can consume data from an Amphora in three ways. You can either download a flat file, view a time series, or connect a live time-series through an API.

## Get a flat file

To consume a flat file (static file typically .txt or .csv) select `Files` on the top-right of the Amphora page. You should then see a screen like this. 

![Flat file download Screenshot](/docs/assets/screenshots/Flat_file_download.png)

Then simply click `Download` next to the file you want.

## View the time series

To view a time series, click `Signals` in the top right of the Amphora page. You should see some interesting data like this.
![View Signals, Screenshot](/docs/assets/screenshots/DataMarketSignals.jpg)

This is an exploratory dashboard and it enables you to discover the data in a simple format. You can choose different signals, different time boxes, and filter by specific values or properties. 

> Note that not all Amphoras contain time series.

## Get data through API

You can get data from the Amphora through our API. Check out the latest SDKs and sample code on [GitHub](https://github.com/amphoradata). We also have all info on connecting to our API [Here](https://beta.amphoradata.com/swagger/index.html#/). If you would like a SDK in a new language, please let us know over email or on GitHub. 
