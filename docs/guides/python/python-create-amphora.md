---
id: python-create-amphora
title: Creating an Amphora with Python
sidebar_label: Create an Amphora
---

> Amphora Data is currently in beta. These documents may change.

If you're providing data, most likely you'll want to be able to programmatically create an Amphora. This is possible using the Python SDK.

## Import the required modules

```py
import amphora_client
```

## Define your Amphora

> Make sure you're authenticating your api client, as shown in [the getting started with Python page](./python-getting-started)

```py
amphora_api = amphora_client.AmphoraeApi(authenticated_api_client)

# use meaningful name and descriptions for your Amphora
name = "Historical hay and feed yields"
desc = "Hay yields over a 10 year period from 1999 - 2009.\n Data is stored in csv format, and all measurements are in kg."

# use descriptive labels to appear on the Amphora such as data type, structure and other relevant information
labels = "csv,timeseries,hay,yields"

# set a price you think is fair. It will be billed monthly.
price = 10 

# set the correct location. These coordinates are Amphora Data's home office.
lat = -27.45714
lon = 153.07106

# create a Data Transfer Object (DTO) to be sent to Amphora Data
new_amphora_definition = amphora_client.CreateAmphoraDto(name=name, description=desc, labels=labels, price=price, lat=lat, lon=lon)
```

Now you've defined your new Amphora, it's time to create it, which you can do in a single call to Amphora Data.

```py
amphora_detail = amphora_api.amphorae_create(create_amphora_dto=new_amphora_definition)
print(amphora_detail)
```

## Save the Id of your new Amphora

Amphora Data automatically creates random identifiers for every new Amphora to prevent accidental duplications and inconsistencies. Its good practice to save the Ids of any new Amphora you create, so you can easily find them later.

```py
with open('amphora_id.txt', 'w') as f:
    f.write(f'{amphora_detail.id}\n')
```
Your Amphora is created, and ready to fill with data!
