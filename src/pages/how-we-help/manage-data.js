import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { TabsComponent, ManageDataTabs } from "../../components/TabsComponent";

function ManageData() {
    return (
        <Layout title="Manage data">
            <div className="container container--fluid">
                <div
                    className={classnames(
                        "row mt-12",
                        styles.justifyContentCenter
                    )}
                >
                    <div className="col col--9">
                        <p className="font_large">
                            Manage data access, quality, and jobs in ecosystems
                        </p>
                        <TabsComponent tabs={ManageDataTabs} />
                    </div>
                </div>

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
            </div>
        </Layout>
    );
}

const features = [
    {
        title: <>Have full control of your data</>,
        imageUrl: "img/share_data_pick.png",
        description: (
            <>Determine who can access your data and how they can use it.</>
        ),
    },
    {
        title: <>Performance analytics for your models, ETL, and data</>,
        imageUrl: "img/amphora_cogs.PNG",
        description: (
            <>
                Clear tracking and dashboard of all models, data, and ETL jobs
                on Amphora.
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div
            className={classnames("row", styles.feature)}
            style={{ paddingBottom: "30px" }}
        >
            {imgUrl && (
                <div
                    className="text--center"
                    style={{ paddingLeft: "60px", paddingRight: "60px" }}
                >
                    <img
                        className={styles.featureImage}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )}
            <div style={{ paddingRight: "60px", width: "600px" }}>
                <h3 className="font_large">{title}</h3>
                <p className="font_medium">{description}</p>
            </div>
        </div>
    );
}

export default ManageData;
