---
id: python-upload-file
title: Uploading a file with Python
sidebar_label: Upload a file
---

> Amphora Data is currently in beta. These documents may change.

## Get a reference to your Amphora

> Make sure you're authenticating your api client, as shown in [the getting started with Python page](./python-getting-started)

```py
client = AmphoraDataRepositoryClient(credentials)

amphora_id="00000000-0000-0000-0000-00000000000" # use the id of the amphora you created previously

amphora = client.get_amphora(amphora_id) # gets the Amphora's metadata from Amphora Data
print(amphora.metadata) 
```

## Upload a file

The file uploader extension wraps some fundamental SDK calls, and simply let's you upload a file from disk. 

```py
override_file_name= "the_name_in_the_repository"
file_path="path/to/your/file"
amphora.push_file(amphora.amphora_id, file_path, file_name=override_file_name)
```

## View your file online

Your file should now be available on Amphora Data, in the Amphora you just referenced. Replace the id in the link below to check your file exists.

`https://app.amphoradata.com/Amphorae/Files?id=<YOUR AMPHORA ID>`

## Download the file

Downloading the file via the SDK is simple:

```py
amphora.get_file(override_file_name).pull("a_local_file.txt") # downloads the file to your local machine
```
