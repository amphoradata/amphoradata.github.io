---
id: python-query-signal
title: Querying signal data with Python
sidebar_label: Query Data
---

> Amphora Data is currently in beta. These documents may change.

## Import the required modules

```py
import amphora_client as a10a
```


## Check your Amphora exists

> Make sure you're authenticating your api client, as shown in [the getting started with Python page](./python-getting-started)

```py
id="57d6593f-1889-410a-b1fb-631b6f9c9c85" # the id for weather data in Albury-Wodonga

amphora_api = a10a.AmphoraeApi(authenticated_api_client)
amphora = amphora_api.amphorae_read(id) # get's the Amphora's metadata from Amphora Data
print(amphora) 
```

## Define your query

Amphora Data uses the [Time Series Query API](https://docs.microsoft.com/en-us/azure/time-series-insights/time-series-insights-update-tsq#time-series-query-tsq-apis) definition for all signal data. 

There are three types of signal queries:

- Get Events: the raw events as ingested by Amphora Data.
- Get Series: standardised data calcluated or interpolated from the raw events. The values that are returned are based on the variables that are provided inline.
- Aggregate Series: Achieves reductions in data by aggregating over time, e.g. maximum, minimum, and average.

In this example, we will get data using the `Get Series` API, which standardises the timestamps for us.

```py
ts_api = a10a.TimeSeriesApi(authenticated_api_client) # the API for interacting with signals , i.e. time series

# Create a DateTimeRange to describe over what period we want to query.
tomorrow = datetime.now() + timedelta(hours=24)
time_range = a10a.DateTimeRange(_from = datetime.now(), to= tomorrow)

# Create a variable dict, with variable object for getting temperature data
variables = {"temperature": a10a.NumericVariable( kind="numeric", # the kind must be specified
    value=a10a.Tsx(tsx="$event.temperature"), # we want the temperature values
    aggregation=a10a.Tsx(tsx = "it doesn't matter"))} # this won't be applied, but is required for the query syntax
```

Once the query is defined, we submit it to the API, and our data is returned.

> ### Be careful
> The Time Series API will return a **maximum of 10,000 rows.** The current work-around is to split your query up into chunks that will return less than the 10k maximum. In the future, a continuation token will be provided to simplify the process.

```py
get_series_query = a10a.GetSeries([id], search_span= time_range, inline_variables= variables) # the complete query
time_series_data = ts_api.time_series_query_time_series( a10a.QueryRequest(get_series= get_series_query))

print(f'Got {len(time_series_data.timestamps)} datapoints and {len(time_series_data.properties)} properties')
# > Got 536 datapoints and 2 properties
print(time_series_data)

# > {'continuation_token': None,
# > 'properties': [{'name': 'EventCount',
# >                 'type': 'Long',
# >                 'values': [None,
#                              ...
# >                            None]},
# >                {'name': 'temperature',
# >                 'type': 'Double',
# >                 'values': [32.0,
#                              ...
# >                            32.0]}],
# > 'timestamps': [datetime.datetime(2020, 1, 30, 10, 0, tzinfo=tzutc()),
#                  ...
# >                datetime.datetime(2020, 1, 30, 10, 0, tzinfo=tzutc())]}

```