import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import styles from ".././styles.module.css";
import { GlazeCard } from "../../components/GlazeOverview";

const pricing = (props) => {
    const info = {
        id: 0,
        title: "Glaze",
        imageUrl: "/img/Amphora_glaze_title_two_lines.png",
        perUsers: "Coming soon",
        fee:
            "The single-click solution for teams and companies to share and sell data",
        isMostPopular: false,
        actionName: "Learn more",
        actionLink: "mailto:contact@amphoradata.com",
        descriptions: [
            {
                text:
                    "Instantly deployable platform-as-a-service to sell data through your own website",
            },
            {
                text:
                    "Get a new revenue channel by selling your own insights on Amphora Marketplace",
            },
            {
                text:
                    "Utilise our inbuilt customer identity management which supports user specific data access and management",
            },
            {
                text: "Seamless payments handling so you get paid more faster",
            },
            {
                text:
                    "Leading data management and usage tools to give you full transparency and help you adhere to GDPR",
            },
        ],
    };
    return (
        <Layout title="Pricing">
            <div
                className={classnames(
                    "container container--fluid",
                    styles.presentationContainer
                )}
            >
                <div
                    className={classnames(
                        "mt-4 mr-2 row",
                        styles.justifyContentCenter
                    )}
                >
                    <GlazeCard
                        key={info.id}
                        isMostPopular={info.isMostPopular}
                        info={info}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default pricing;
