import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { TabsComponent, FindDataTabs } from "../../components/TabsComponent";
import { PageLayout } from "../../components/PageLayout";

function FindData() {
    return (
        <Layout title="Data Catalogue">
            <PageLayout
                tabs={FindDataTabs}
                heading="Get the insight you need in 30 seconds"
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
    },
    {
        title: <>Image detection training library</>,
        imageUrl: "img/weed_image.png",
        description: (
            <>
                1000s of images of weeds and grains for image detection
                training.
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

export default FindData;
