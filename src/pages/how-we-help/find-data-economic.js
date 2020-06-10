import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { TabsComponent, FindDataTabs } from "../../components/TabsComponent";

function FindData() {
    return (
        <Layout title="Data Catalogue">
            <div className="container container--fluid">
                <div
                    className={classnames(
                        "row mt-12",
                        styles.justifyContentCenter
                    )}
                >
                    <div className="col col--9">
                        <p className="font_large">
                            You can get the insights you need in 30 seconds
                        </p>
                        <TabsComponent tabs={FindDataTabs} />
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
        title: <>Livestock prices</>,
        imageUrl: "img/26_Kings_rd_NDVI_180220.png",
        description: (
            <>
                Real-time data of major livestock indices in Australia. Major
                indices ready to use for free, more available on request.
            </>
        ),
    },
    {
        title: <>Electricity price forecasts</>,
        imageUrl: "img/Forest_image.PNG",
        description: (
            <>
                Real-time 36 hour electricity price forecasts for QLD, SA, TAS,
                NSW, and VIC. Ready for use for free
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
            <div className={styles.buttons}>
                <Link
                    className="font_medium text--white"
                    to="https://identity.amphoradata.com/Register"
                >
                    Get data
                </Link>
            </div>
        </div>
    );
}

export default FindData;
