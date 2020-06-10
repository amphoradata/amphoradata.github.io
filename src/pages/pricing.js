import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { PlanCard } from "../components/PlanCard";

const pricing = (props) => {
    const prices = [
        {
            id: 0,
            title: "FREE",
            perUsers: "Individual",
            fee: "Nothing, its free!",
            isMostPopular: false,
            descriptions: [
                { text: "Discover and consume third party data" },
                { text: "Share your data with third parties" },
                { text: "Access public data repository" },
                { text: "Unlimited data downloads" },
                { text: "Personal dashboard" },
                { text: "Custom terms and conditions" },
                { text: "Custom Access Controls" },
                { text: "Max users: 1" },
                { text: "Max total file size: 10GB" },
                { text: "SDKs and sample code" },
                { text: "Documentation and online tutorials" },
                { text: "Community support" },
            ],
            actionLink: "https://identity.amphoradata.com/Account/Register",
        },
        {
            id: 1,
            title: "TEAM",
            perUsers: "Up to 25 users",
            fee: "$10 per user per month",
            isMostPopular: true,
            actionLink: "https://identity.amphoradata.com/Account/Register",
            descriptions: [
                {
                    icon: faArrowAltCircleLeft,
                    text: "Everything in the Free plan",
                },
                { text: "Unlimited data hosting" },
                { text: "Custom data shop" },
                { text: "ETL governance workbench" },
                { text: "Max users: 25" },
                { text: "Max total file size: 100GB per user" },
                { text: "Documentation and online tutorials" },
                { text: "Sandbox environment" },
            ],
        },
        {
            id: 2,
            title: "INSTITUTION",
            perUsers: "Unlimited users",
            fee: "$20 per user per month",
            isMostPopular: false,
            actionLink: "https://identity.amphoradata.com/Account/Register",
            descriptions: [
                {
                    icon: faArrowAltCircleLeft,
                    text: "Everything in the Team plan",
                },
                { text: "Access to private data repository" },
                { text: "Single sign-on" },
                { text: "Personalised URL" },
                { text: "Max users: Unlimited" },
                { text: "Max total file size: 250GB per user" },
                { text: "Audit logs" },
                { text: "Interactive training" },
                { text: "99% uptime SLA" },
                { text: "Premium support" },
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
