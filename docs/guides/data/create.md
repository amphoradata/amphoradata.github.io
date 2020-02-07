---
id: create
title: Create and manage an Amphora
sidebar_label: Create Amphora
---

> Amphora Data is currently in beta. These documents may change.


## Create your first Amphora

Navigate to the `Package` page, and you will get the screen below

![How to Navigate to Create Amphora, Screenshot](/docs/assets/screenshots/nav_create_amphora.png)

> At this stage, you can describe the Amphora, but *not yet* add any data. That comes later.

Give your Amphora a Name, Description, Price, and Geo-Location. You can search for locations, or just enter the Lat/Lon manually. These need to be entered into the fields below. You should also label it with data type, crop type etc and also select the appropriate Terms and Conditions.

As Amphoras have standardised metadata, please ensure all fields are correct so others can find and use your Amphora.

### Add an Amphora File

> The max file size for uploading through the web interface is currently 10MB. There is no size limit for uploading files through the API

You can add any kind of file to an Amphora - images, text files, csv, word documents etc. To upload a file from your computer, click the blue `upload` button, select a file, then click `upload`.

![Add a file to an Amphora, Screenshot](/docs/assets/screenshots/add_file_amphora.png)

> Note that you need a steady connection to upload files and some users have reported issues due to poor connection with their internet providers.

### Add a signal

[Signals](/docs/guides/models/signal.md) are numeric data that change over time. Add a signal by clicking `Signals` in the top right of your Amphora detail's page, then click the `+` button to add a new property (i.e. the name of the signal), e.g. temperature.

![Add a signal to an Amphora, Screenshot](/docs/assets/screenshots/add_signal_amphora.png)

Now you can submit a value for that signal (e.g. the current temperature) via the `New Values` button. Once submitted, you'll start seeting data on the graph.

> It may take up to a minute for the new value to be processed and to show on the graph.

![Viewing a signal on an Amphora, Screenshot](/docs/assets/screenshots/view_signal_amphora.png)


## Set terms and conditions

You can set the terms and conditions for each Amphora when you create it. You can either do this with the web interface or programatically with the API (just use the right ID).

If you need to create a new terms and conditions document, you can create it in your organisation page.

## Tips for best practice

There are several key features to include when creating a comprehensive and descriptive Amphora:

Name:

    Be descriptive but concise about the information contained in the Amphora

    Include the region, with state if applicable

    Try to avoid overly technical terms where possible


Description:

    Indicate where the data came from, including all sources, and what the target region is.

    Describe each signal contained in the Amphora including units.

Price:

    Be sure to put the correct monthly cost, or 0 for free data

Labels:

    Add several relevant labels to make searching processes easier. Include:

        structure of the data (e.g. tabular, image, time series)

        the data type (e.g. weather, NDVI)

        any other relevant information (e.g. crop type)

Ts&Cs:

    Check documents associated with the data source and publish the data under the right terms and conditions

    Visit this link and click 'Create' if the required Ts&Cs aren't already listed

GeoLocation:

    Use the search bar or directly enter latitude and longitude of the region for which the data are aggregated
    
    If there is no specific region for the Amphora then use the location of the body which generated the data (e.g. using the MLA office in North Sydney for their nation wide livestock data)

