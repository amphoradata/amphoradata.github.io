---
id: js-get-started
title: Getting started with Javascript
sidebar_label: Get Started
---

## Axios

The Amphora Data javascript SDK uses [Axios](https://github.com/axios/axios) as an HTTP client.

## Authentication

Most Amphora Data API calls must be authenticated. The Amphora Data API accepts JSON Web Tokens (JWTs) to authenticate requests. There are two ways to acquire a JWT.

### Authenticate using the Authentication API

> This option may be removed in the future.

You should choose this option if you need to acquire a token _without_ user interaction.

```ts
import { AuthenticationApi } from "amphoradata";

const authenticator = new AuthenticationApi();
authenticator.authenticationRequestToken({
    username: "username",
    password: "password",
});
```

As you can see, this option requires plaintext access to a username/ password. As such, this authentication option is not preferred from a security perspective.

### Authenticate using OAuth

> This authentication option requires a paid Amphora Data account

To authenticate using OAuth, you need to register your application. Registering your application has two important effects:

1. `identity.amphoradata.com` becomes aware of your application, and will allow users to login to it by recirecting back to your web application via the OAuth Code flow.

2. `api.amphoradata.com` becomes aware of your application, and will allow cross origin requests from your domain.

> We recommend using `react-amphora` to handle the Authentication process for react apps.

## Using the JWT

Once you've acquired a JWT, it must be included in every request to the Amphora Data API for that request to be authenticated. When using Axios, you can add the token to the default client like so:

```js
import axios from "axios";

// include the JWT in your axios client
axios.defaults.headers.common.Authorization = "Bearer " + token;
```
