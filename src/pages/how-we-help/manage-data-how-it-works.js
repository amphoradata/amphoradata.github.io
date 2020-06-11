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
        title: <>Move data onto Amphora</>,
        imageUrl: "img/migrate_icon.PNG",
        description: (
            <>
                Move the data you want to manage onto Amphora Data. This may be
                third-party data you find in our catalogue, your own data, or
                your partners.
            </>
        ),
    },
    {
        title: <>Set quality and controls</>,
        imageUrl: "img/report_icon.PNG",
        description: (
            <>
                Set access rules, data quality, ETL jobs and other things you
                want to manage.
            </>
        ),
    },
    {
        title: <>Monitor all data flows</>,
        imageUrl: "img/examine_icon.PNG",
        description: (
            <>
                Monitor all your data in your Amphoras. You can view who has
                accessed the data, quality, monitor ETL jobs and more.
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

export default ManageData;
