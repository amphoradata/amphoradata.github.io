import React from "react";
import Layout from "@theme/Layout";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { ShareDataTabs } from "../../components/TabsComponent";
import { PageLayout } from "../../components/PageLayout";

function ShareData() {
    return (
        <Layout title="Share your insight">
            <PageLayout
                tabs={ShareDataTabs}
                heading="Share your knowledge with the world"
            >
                <div>
                    {features && features.length && (
                        <section className={styles.features}>
                            <div className="container">
                                <div>
                                    {features.map((props, idx) => (
                                        <Feature key={idx} {...props} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </PageLayout>
        </Layout>
    );
}

const features = [
    {
        title: <>Data sharing platform</>,
        imageUrl: "img/CreateAmphora.jpg",
        description: (
            <>
                Share any dataset on Amphora in 30 seconds. We provide the data
                infrastructure and ETL flow and tooling. You can also share your
                data in your own Datashop.
            </>
        ),
    },
    {
        title: <>Custom terms of use and access controls</>,
        imageUrl: "img/Terms_of_use.PNG",
        description: (
            <>
                You can restrict or open your data terms of use and access
                controls as much as you want.
            </>
        ),
    },
    {
        title: <>Modern APIs and SDKs.</>,
        imageUrl: "img/solution_picture_3.png",
        description: (
            <>We use modern APIs and have SDKs in python, node.js and .NET.</>
        ),
    },
    {
        title: <>Hosting</>,
        imageUrl: "img/Azure-logo-ATMS-web-v2.png",
        description: (
            <>
                We host the data so you don’t need to. All data is hosted
                securely with 256-bit Microsoft enterprise encryption.
            </>
        ),
    },
    {
        title: <>Payment handling</>,
        imageUrl: "img/Stripe logo - slate_lg.png",
        description: (
            <>
                We handle all the payments in Amphora powered by Stripe. If you
                want to charge for your data, simply add a price and wait for
                payment - nothing else.
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div
            className={classnames("row", styles.feature)}
            style={{ paddingBottom: "30px", paddingLeft: "60px" }}
        >
            {imgUrl && (
                <div
                    className="text--center"
                    style={{ paddingLeft: "30px", paddingRight: "30px" }}
                >
                    <img
                        className={styles.featureImage}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )}
            <div style={{ paddingRight: "30px", width: "400px" }}>
                <h3 className="font_large">{title}</h3>
                <p className="font_medium">{description}</p>
            </div>
        </div>
    );
}

export default ShareData;
