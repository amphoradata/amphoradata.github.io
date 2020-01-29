---
id: python-upload-signal
title: Creating and uploading signals with Python
sidebar_label: Upload a Signal
---

> Amphora Data is currently in beta. These documents may change.

## What is a signal?

An Amphora can store data in one of two ways. We already saw how you can [store an arbitrary file](./python-upload-file) in an Amphora. However, many data are consistantly updating numeric time series - for example, the water levels in a river, or the number of cattle in a given area. For these kinda of data its best to use Amphora Signals.

## Import the required modules

```py
import amphora_client
from amphora_client import SignalDto
from datetime import datetime, timedelta
```

## Check your Amphora exists

> Make sure you're authenticating your api client, as shown in [the getting started with Python page](./python-getting-started)

```py
id="00000000-0000-0000-0000-00000000000" # use the id of the amphora you created previously

amphora_api = amphora_client.AmphoraeApi(authenticated_api_client)
amphora = amphora_api.amphorae_read(id) # get's the Amphora's metadata from Amphora Data
print(amphora) 
```

## Define signals on your Amphora

> Currently, Amphora are limited to 7 signals each.

Before you can upload data, you need to define the properties for which you'll be providing numeric values.

```py
signal_definitions = [
    SignalDto(_property='temperature', value_type='Numeric'), # numeric properties are for numeric data
    SignalDto(_property='description', value_type='String') # string properties are for string data. these will not be shown in graphs.
]

for s in signal_definitions:
    amphora_api.amphorae_create_signal(amphora.id, signal_dto= s) # this creates a signal property on Amphora Data

```

## Upload some data

```py
yesterday = datetime.now() + timedelta(hours=-24)
tomorrow = datetime.now() + timedelta(hours=24)

signals = [
    dict(
        t = yesterday, # use the 't' property to set a custom timestamp
        temperature = 27,
        description = 'Nice and Warm'
        ),
    dict(
        temperature = 17, # ignoring the timestamp means the values are interpreted as occurring now
        description = 'A Bit Chilly'
        ),
    dict(
        t = yesterday, # You can use times in the future
        temperature = 25 # properties are all optional
        )
]

amphora_api.amphorae_upload_signal_batch(amphora.id, request_body = signals) # this sends the data to Amphora Data
```

## View your data at Amphora Data

You're data should now be live in the Amphora you specified. Replace the following id with your Amphora's id, and visit the link.

`https://beta.amphoradata.com/Amphorae/Signals?id=<YOUR AMPHORA ID>`

Your data is now live!