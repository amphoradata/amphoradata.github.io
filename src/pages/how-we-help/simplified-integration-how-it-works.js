import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import {
    TabsComponent,
    SimplifyIntegrationTabs,
} from "../../components/TabsComponent";

function SimplifiedIntegration() {
    return (
        <Layout title="Simplify Integration">
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
                                Simplify integration of third-party data
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
                        <TabsComponent tabs={SimplifyIntegrationTabs} />
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
        title: <>Find data you want on Amphora</>,
        imageUrl: "img/discover_icon.png",
        description: (
            <>
                You can find a range of data and analytics products on Amphora.
                We specialise in location-specific and real-time operational
                data.
            </>
        ),
    },
    {
        title: <>Migrate existing data feeds onto Amphora</>,
        imageUrl: "img/migrate_icon.png",
        description: (
            <>
                Move your existing integration jobs onto Amphora. We do this for
                free if you have a Team or Institution plan.
            </>
        ),
    },
    {
        title: <>Enjoy a single integration channel</>,
        imageUrl: "img/happy_icon.png",
        description: (
            <>
                Access your data from the specified Amphora. Enjoy using a
                single API and integration channel to access the data that you
                need
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

export default SimplifiedIntegration;
