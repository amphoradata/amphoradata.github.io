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

        {/* bootstrap styles */}
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
            crossOrigin="anonymous"
        ></link>
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
