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
                        <div className="row row--9">
                            <p
                                className="font_large_caps"
                                style={{ paddingRight: "600px" }}
                            >
                                Securely manage your information
                            </p>
                            <Link to="https://identity.amphoradata.com/Account/Register">
                                <div
                                    className={classnames(
                                        "buttons text--white text--middle"
                                    )}
                                >
                                    <p>Register</p>
                                </div>
                            </Link>
                        </div>
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
        title: <>Move data onto Amphora</>,
        imageUrl: "img/migrate_icon.png",
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
        imageUrl: "img/report_icon.png",
        description: (
            <>
                Set access rules, data quality, ETL jobs and other things you
                want to manage.
            </>
        ),
    },
    {
        title: <>Monitor all data flows</>,
        imageUrl: "img/examine_icon.png",
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
