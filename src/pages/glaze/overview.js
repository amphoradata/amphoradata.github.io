import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import styles from ".././styles.module.css";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { PlanCard } from "../../components/GlazeOverview";

const pricing = (props) => {
    const prices = [
        {
            id: 0,
            title: "Glaze",
            perUsers: "Coming soon",
            fee: "Single click infrastructure for data businesses",
            isMostPopular: false,
            actionName: "Learn more",
            actionLink: "mailto:contact@amphoradata.com",
            descriptions: [
                {
                    text:
                        "Instantly deployable infrastructure-as-a-service to sell data through your own website",
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
                    text:
                        "Seamless payments handling so you get paid more faster",
                },
                {
                    text:
                        "Leading data management and usage tools to give you full transparency and help you adhere to GDPR",
                },
            ],
        },
    ];
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
                    {prices.map((price) => (
                        <PlanCard
                            key={price.id}
                            isMostPopular={price.isMostPopular}
                            plan={price}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default pricing;
