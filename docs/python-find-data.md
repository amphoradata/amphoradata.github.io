---
id: python-find-data
title: Find Data with python SDK
sidebar_label: Find Data
---

You need to search the Amphora Data Catalogue to find the data you want. You need to purchase the Amphora after you find the one you want.

You can search for Amphora with the python SDK (v0.10+). The command is
```py
search_for_amphorae
```
You can search for Amphora by labels, location, or a term. 

Full code for searching is below
```py
credentials = Credentials(username=your_username, password=your_password)
client = AmphoraDataRepositoryClient(credentials)

# Search by location
amphora_list = client.search_for_amphorae(lat = -28.641, lon = 153.445, dist = 50)

# Search by labels
amphora_list = client.search_for_amphorae(labels = 'forecast')

# Search by term
amphora_list = client.search_for_amphorae(term = 'rainfall')

```

The search return is Boolean OR so it returns Amphora that match to your label search OR location search OR term search. We will expand this functionality in the future.
