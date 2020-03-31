---
id: python-upload-signal
title: Creating and uploading signals with Python
sidebar_label: Upload a Signal
---

> Amphora Data is currently in beta. These documents may change.

## What is a signal?

An Amphora can store data in one of two ways. We already saw how you can [store an arbitrary file](./python-upload-file) in an Amphora. However, many data are consistantly updating numeric time series - for example, the water levels in a river, or the number of cattle in a given area. For these kinda of data its best to use Amphora Signals.

## Setup your client

```py
from amphora.client import AmphoraDataRepositoryClient, Credentials

# provide your login credentials
credentials = Credentials(username="username", password="your password")
# create a client for interacting with the public Amphora Data Repository
client = AmphoraDataRepositoryClient(credentials)
```

## Check your Amphora exists

> Make sure you're authenticating your api client, as shown in [the getting started with Python page](./python-getting-started)

```py
amphora_id="00000000-0000-0000-0000-00000000000" # use the id of the amphora you created previously

amphora = client.get_amphora(amphora_id) # gets a reference to the Amphora
print(amphora.metadata) 
```

## Define signals on your Amphora

> Currently, Amphora are limited to 10 signals each.

Before you can upload data, you need to define the properties for which you'll be providing numeric values.

```py
amphora.create_signal("temperature", attributes={"units":"celcius", "custom":"any string"}) # units are a special attribute
amphora.create_signal("description", value_type="String") # override the default 'Numeric' value type

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

amphora.push_signals_dict_array(amphora.amphora_id, signals) # this sends the data to Amphora Data
```

## View your data at Amphora Data

You're data should now be live in the Amphora you specified. Replace the following id with your Amphora's id, and visit the link.

`https://app.amphoradata.com/Amphorae/Signals?id=<YOUR AMPHORA ID>`

Your data is now live!

## Use Pandas DataFrames

You can upload Signal data from Pandas DataFrames. By setting the column names, the sdk can automatically create the Signal definitions for you, by inferring the value type from the data.

```py
import pandas as pd

# make some timestamps
yesterday = datetime.now() + timedelta(hours=-24)
now = datetime.now()
tomorrow = datetime.now() + timedelta(hours=24)

# intialise data of lists.
data  = [['tom', 10], ['nick', 15], ['juli', 14]] 
df = pd.DataFrame(data, columns = ['name', 'age'])

amphora.push_signals_df(df, auto=True) # setting auto to true will automatically create the signal definitions for you.
```
