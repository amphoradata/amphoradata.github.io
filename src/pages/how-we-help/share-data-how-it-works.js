import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { TabsComponent, ShareDataTabs } from "../../components/TabsComponent";

function ShareData() {
    return (
        <Layout title="Share your insight">
            <div className="container container--fluid">
                <div
                    className={classnames(
                        "row mt-12",
                        styles.justifyContentCenter
                    )}
                >
                    <div className="col col--9">
                        <div className="row row--9">
                            <p className="font_large_caps" style={{paddingRight: "600px"}}>
                                Share your knowledge with the world
                            </p>
                            <Link
                                to="https://identity.amphoradata.com/Account/Register"
                            >
                                <div
                                    className={classnames(
                                        "buttons text--white text--middle",
                                        )}
                                >
                                    <p>Register</p>
                                </div>
                            </Link>
                        </div>
                        <TabsComponent tabs={ShareDataTabs} />
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
        title: <>Create data container</>,
        imageUrl: "img/share_data_pick.png",
        description: (
            <>
                Create a data container. We call them Amphoras. Set all the metadata for the Amphora including name, description, location, price, terms of use, access controls, labels and any specific attributes.
            </>
        ),
    },
    {
        title: <>Fill container with your data</>,
        imageUrl: "img/share_data_pick.png",
        description: (
            <>
                Simply fill the container with any data you want including images, real-time updates, relational databases and more. You can use our web application or interact programmatically through one of our SDKs.
            </>
        ),
    },
    {
        title: <>Share with the world</>,
        imageUrl: "img/share_data_pick.png",
        description: (
            <>
                Access your data from the specified Amphora. Enjoy using a single API and integration channel to access the data that you need

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

export default ShareData;
