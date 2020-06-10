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
                            <p
                                className="font_large_caps"
                                style={{ paddingRight: "600px" }}
                            >
                                Share your knowledge with the world
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
        title: <>Get the factpack</>,
        imageUrl: "img/share_data_pick.png",
        description: (
            <>
                Learn more about the impact and value of sharing data for your
                organisation.
            </>
        ),
    },
    {
        title: <>Get the code</>,
        imageUrl: "img/amphora_cogs.PNG",
        description: (
            <>
                Don’t worry about anything. We host the data, manage access,
                commercials and governance.
            </>
        ),
    },
    {
        title: <>Watch a tutorial</>,
        imageUrl: "img/amphora_cogs.PNG",
        description: (
            <>
                Don’t worry about anything. We host the data, manage access,
                commercials and governance.
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
            <div
                style={{
                    paddingLeft: "120px",
                    paddingRight: "120px",
                    width: "600px",
                }}
            >
                <h3 className="font_large">{title}</h3>
                <p className="font_medium">{description}</p>
            </div>
            <Link to={imageUrl}>
                <div className={classnames("buttons text--white")}>
                    <p>Lets go</p>
                </div>
            </Link>
        </div>
    );
}

export default ShareData;
