import React from "react";
import Layout from "@theme/Layout";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { ManageDataTabs } from "../../components/TabsComponent";
import { PageLayout } from "../../components/PageLayout";

function ManageData() {
    return (
        <Layout title="Manage data">
            <PageLayout
                tabs={ManageDataTabs}
                heading="Securely manage your information"
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
        title: <>Standardised metadata</>,
        imageUrl: "img/set_metadata.PNG",
        description: (
            <>
                Each data container has standardised, transparent metadata
                including quality, location, source, accuracy e.t.c. Know the
                full story of the data you are using.
            </>
        ),
    },
    {
        title: <>Model Governance Workbench</>,
        imageUrl: "img/MLflow-logo-final-black.png",
        description: (
            <>
                Understand the performance and failures of your models and ETL
                jobs. Our workbench incorporates mlflow so you only need to use
                a single tool to track your models and jobs.
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
        title: <>Modern APIs and SDKs</>,
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
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div
            className={classnames("row", styles.feature)}
            style={{ paddingBottom: "30px" , paddingLeft: "60px" }}
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

export default ManageData;
