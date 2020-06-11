import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { FindDataTabs } from "../../components/TabsComponent";
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
        title: <>Static composition</>,
        imageUrl: "img/soil_composition.png",
        description: (
            <>
                Estimated soil composition up to 2 meters for any location in
                Australia. Resolution is 90 m. 1000s of locations available for
                free, more available upon request.
            </>
        ),
    },
    {
        title: <>Real-time moisture</>,
        imageUrl: "img/soil_moisture_index.png",
        description: (
            <>
                Remote sensing of soil moisture in surface layer with 1 week
                delay. Resolution is 30m. Any global location available for free
                on request.
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
