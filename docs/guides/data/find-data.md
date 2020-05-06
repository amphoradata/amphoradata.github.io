---
id: find-data
title: Find Data
sidebar_label: Find Data
---

You need to search the Amphora Data Catalogue to find the data you want. You need to purchase the Amphora after you find the one you want.
## Find an Amphora

To find an Amphora, click Discover in the header. This will take you to a list of all Amphoras on the platform. 

You can search this list multiple ways 

<kbd>
<img src="/docs/assets/screenshots/DataMarketSearch.jpg">
</kbd>

You can use the advanced search buttons to search for Amphora by 
1) Keywords
2) Location
3) Labels

## Search with map

You can also view the data sets on a map if there is a specific location you are looking for.

## Search programatically

You can search for Amphora by Organisation Id and location. We are expanding this feature to enable better programmatic search.

#### Search by organisation id
You can search for all Amphoras from an Organisation with
```py
search_search_amphorae_by_organisation
```
To do this use the code below
```py
from amphora_api_client import SearchApi

SearchApi().search_search_amphorae_by_organisation(org_id= "7b429e6c-2885-49cf-994d-4775ae170d64")
```
The Organisation Id shown here is our own. Edit for any Organisation Id you like

#### Search by location
You can search for all Amphoras near a given location by
```py
search_search_amphorae_by_location
```
To do this use the code below
```py
from amphora_api_client import SearchApi

SearchApi().search_search_amphorae_by_location(lat = -27.4676, lon = 153.0279, dist = 20)
```
This searches for Amphoras near Brisbane. Edit the latitude, longitude, and distance for any location you like.
