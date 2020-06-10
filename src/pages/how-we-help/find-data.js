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
                        <div className="row row--9">
                            <p className="font_large_caps" style={{paddingRight: "600px"}}>
                                Get the insight you need in 30 seconds
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
        title: <>Crop performance tracking from high-res NDVI </>,
        imageUrl: "img/26_Kings_rd_NDVI_180220.png",
        description: (
            <>
                <span>
                    Tracking of performance through 0.5M resolution NDVI images.
                    Options include ranking of plants, tracking change in
                    performance between image captures and overall crop
                    performance.
                </span>
                <span>
                    Available now for any global location upon request from $0.7
                    per Ha per month.
                </span>
            </>
        ),
        byline: <>kjjkasf</>,
    },
    {
        title: <>Forest vegetation tracking</>,
        imageUrl: "img/Forest_image.PNG",
        description: (
            <>
                Tracking of forest coverage, extant, and health through remote
                imaging.
            </>
        ),
        byline: <>kjjkasf</>,
    },
    {
        title: <>Image detection training library</>,
        imageUrl: "img/weed_image.PNG",
        description: (
            <>
                1000s of images of weeds and grains for image detection
                training.
            </>
        ),
        byline: <>kjjkasf</>,
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
