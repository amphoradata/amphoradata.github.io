import React from "react";
import Layout from "@theme/Layout";
import { GlazeCard } from "../components/cards/GlazeOverview";

const info = [
    {
        id: 0,
        title: "Amphora Marketplace",
        imageUrl: "/img/Amphora Data_title_two_lines.jpg",
        perUsers: "Available now",
        fee: "List your data for sale in 30 seconds",
        isMostPopular: false,
        actionName: "Start today",
        actionLink: "https://identity.amphoradata.com/Register",
        actionName2: "Download the fact pack",
        actionLink2: "/files/Amphora_Sell_Data_Overview.pdf",
        descriptions: [
            {
                text: "Sell to global users of Amphora Data",
            },
            {
                text:
                    "List data on our web application or through our API and SDKs",
            },
            {
                text:
                    "Set the exact terms of use and access rules of your data",
            },
            {
                text: "Sell to your partners by sharing a link to your data",
            },
            {
                text:
                    "No ongoing fees, only 20% transaction fee when data is sold",
            },
            {
                text: "No fees if you share data for free",
            },
        ],
    },
    {
        id: 1,
        title: "Glaze",
        imageUrl: "/img/Amphora_glaze_title_two_lines.png",
        perUsers: "Coming soon",
        fee: "Simple drop-in solution for sharing or selling data",
        isMostPopular: false,
        actionName: "Register your interest",
        actionLink: "mailto:contact@amphoradata.com",
        actionName2: "See Glaze in action",
        actionLink2: "https://www.youtube.com/watch?v=Lqx6nBzrqjM&t=37s",
        descriptions: [
            {
                text: "Drop in code to sell data through your own website",
            },
            {
                text:
                    "Find new revenue channel through the Amphora Marketplace",
            },
            {
                text: "Use the Amphora identity management system",
            },
            {
                text: "Seamless payments handling",
            },
            {
                text:
                    "Leading data management and usage tools to give you full transparency and help you adhere to GDPR",
            },
        ],
    },
];

const sellData = () => {
    return (
        <Layout title="Pricing">
            <div className="hero-banner">
                <div className="container">
                    <div className="mt-5 row">
                        {info.map((info) => (
                            <GlazeCard
                                key={info.id}
                                isMostPopular={info.isMostPopular}
                                info={info}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default sellData;
