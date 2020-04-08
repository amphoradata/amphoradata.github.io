---
id: email-amphora
title: Share Amphora through email
sidebar_label: Share Amphora through email
---

> Amphora Data is currently in beta. These documents may change.

## Description

You can easily share your favourite Amphora with any email address. Simply use
```py
amphora = client.get_amphora("id-of-your-favourite-amphora")
amphora.share_with("my_friends_email@gmail.com")
```
Note this feature currently only works with the python SDK and will be released end of April.