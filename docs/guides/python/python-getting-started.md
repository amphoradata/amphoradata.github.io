---
id: python-getting-started
title: Getting Started with Python
sidebar_label: Python Quickstart
---

> Amphora Data is currently in beta. These documents may change.

## Install the Amphora Python SDK

### Prerequisites

* An Amphora Data account.
* Python 3.6 or higher

In your shell (Windows, Mac, or Linux):

```sh
pip install amphoradata
```

## Import the required modules

```py
import amphora_client
from amphora_client.configuration import Configuration
configuration = Configuration()
```



## Authenticate with Amphora Data

Firstly, in your shell, set your username and password. This helps prevent leaking your credentials.

```sh
username="YOUR_AMPHORADATA_USERNAME" # probably your email address
password="YOUR_PASSWORD"
```

```py
import os
from amphora.client import AmphoraDataRepositoryClient, Credentials

# provide your login credentials
credentials = Credentials(username=os.environ['username'], password=os.environ['password'])
# create a client for interacting with the public Amphora Data Repository
client = AmphoraDataRepositoryClient(credentials)
```

## Check you're Authenticated

```py
# print information about the logged in user
print(client.get_self())
```
