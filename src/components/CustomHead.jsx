import React from "react";
import Head from "@docusaurus/Head";

export const CustomHead = (props) => (
    <Head>
        <meta
            property="og:description"
            content="An advanced platform for sharing data and knowledge."
        />
        <meta charSet="utf-8" />
        <title>Amphora Data</title>

        <link
            href="http://fonts.googleapis.com/css?family=Ropa+Sans"
            rel="stylesheet"
            type="text/css"
        ></link>
        <link
            href="http://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
            type="text/css"
        ></link>

        {props.children}
    </Head>
);
