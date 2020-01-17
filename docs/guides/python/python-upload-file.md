---
id: python-upload-file
title: Uploading a file with Python
sidebar_label: Upload a file
---

> Amphora Data is currently in beta. These documents may change.

## Import the required modules

```py
import amphora_client
from amphora_extensions import file_uploader
```

## Check your Amphora exists

> Make sure you're authenticating your api client, as shown in [the getting started with Python page](./python-getting-started)

```py
id="c5a6f676-84d2-4736-8ee8-ca2f83ecc543" # use the id of the amphora you created previously

amphora_api = amphora_client.AmphoraeApi(authenticated_api_client)
amphora = amphora_api.amphorae_read(id) # get's the Amphora's metadata from Amphora Data
print(amphora) 
```

## Upload a file user the file uploader extension

The file uploader extension wraps some fundamental SDK calls, and simply let's you upload a file from disk. 

```py
uploader = FileUploader(amphora_api) # requires an authenticated AmphoraApi object.

file_path="path to your file"
uploader.create_and_upload_file(amphora.id, file_path)
```

## View your file online

Your file should now be available on Amphora Data, in the Amphora you just referenced. Replace the id in the link below to check your file exists.

`https://beta.amphoradata.com/Amphorae/Files?id=<YOUR AMPHORA ID>`