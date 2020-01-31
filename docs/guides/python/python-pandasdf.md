---
id: python-pandasdf
title: Converting Amphora Signals to a Pandas DataFrame
sidebar_label: Pandas DataFrame
---

> Amphora Data is currently in beta. These documents may change.

## Pandas Data Frame

Pandas is a very popular Python package for working with data. [Pandas Data Frames](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html) form the core of Pandas. Many data scientists love working with Data Frames, and many tools can import from this standard.

## Import the required modules

The `amphoradata` package does not come with pandas or numpy. You *must* install them yourself to use this module.

```sh
pip install numpy
pip install pandas
```

```py
import amphora_client as a10a
# Import this to convert to Pandas.DataFrame
import amphora_extensions.pandas as a10a_pd
```

## Convert to a Pandas DataFrame

[This page](./python-query-signal) shows you how to query signals. We assume you have already queried the Amphora Signals, and have created an `amphora_client.QueryResultPage`

```py
# time_series_data is of type amphora_client.QueryResultPage

# Convert to a pandas dataframe!
df = a10a_pd.to_df(time_series_data)
print(df)

#                            EventCount  temperature
# 2020-01-31 12:00:00+00:00         NaN         33.0
# 2020-01-31 13:00:00+00:00         NaN         32.0
# 2020-01-31 14:00:00+00:00         NaN         31.0
# 2020-01-31 15:00:00+00:00         NaN         31.0
# 2020-01-31 16:00:00+00:00         NaN         30.0
# ...                               ...          ...
# 2020-02-01 07:00:00+00:00         NaN         42.0
# 2020-02-01 08:00:00+00:00         NaN         41.0
# 2020-02-01 09:00:00+00:00         NaN         38.0
# 2020-02-01 10:00:00+00:00         NaN         35.0
# 2020-02-01 11:00:00+00:00         NaN         34.0

# [552 rows x 2 columns]
```

> The Event Count will always contain NaN values.