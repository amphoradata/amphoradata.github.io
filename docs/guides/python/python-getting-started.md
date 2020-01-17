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
auth_api = amphora_client.AuthenticationApi(amphora_client.ApiClient(configuration))
token_request = amphora_client.TokenRequest(username=os.environ['username'], password=os.environ['password'] ) 
token = auth_api.authentication_request_token(token_request = token_request)
configuration.api_key["Authorization"] = "Bearer " + token # set the bearer token for all future authenticated requests
authenticated_api_client = amphora_client.ApiClient(configuration) 
```

## Check you're Authenticated

```py
users_api = amphora_client.UsersApi(authenticated_api_client) # use the configuration 
me = users_api.users_read_self()
print(me) # print's your own details

```
