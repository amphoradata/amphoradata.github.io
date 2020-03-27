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

## Convert Signals to a Pandas DataFrame

```py
client = AmphoraDataRepositoryClient(credentials)

# get a reference to an Amphora
amphora = client.get_amphora("e6097df0-952c-46a6-84b0-ccc29bf1b0f7")

# get a reference to the Amphora's signals
signals = amphora.get_signals()

# download some signals and convert to a pandas dataframe
df = signals.pull().to_pandas()
print(df)

#                            temperature  rainProb  windSpeed  windDirection  cloudCover  pressure  rainfallRate
# t                                                                                                             
# 2020-03-26 02:00:00+00:00         24.0       5.0       11.0          135.0        13.0    1024.6           0.0
# 2020-03-26 03:00:00+00:00         25.0       5.0       10.0          135.0        10.0    1023.9           0.0
# 2020-03-26 04:00:00+00:00         26.0       5.0        9.0          135.0        11.0    1023.2           0.0
# 2020-03-26 05:00:00+00:00         27.0       5.0        9.0          158.0        11.0    1022.6           0.0
# 2020-03-26 06:00:00+00:00         27.0       7.0        8.0          203.0        10.0    1022.0           0.0
# ...                                ...       ...        ...            ...         ...       ...           ...
# 2020-03-26 11:00:00+00:00         18.0       6.0        5.0           90.0        41.0    1023.7           0.0
# 2020-03-26 12:00:00+00:00         17.0       7.0        4.0           90.0        19.0    1023.9           0.0
# 2020-03-26 13:00:00+00:00         16.0       6.0        5.0           68.0        20.0    1024.0           0.0
# 2020-03-26 14:00:00+00:00         15.0       7.0        4.0           68.0        16.0    1024.2           0.0
# 2020-03-26 15:00:00+00:00         14.0       7.0        4.0           68.0        16.0    1024.1           0.0
```

> The Event Count will always contain NaN values.