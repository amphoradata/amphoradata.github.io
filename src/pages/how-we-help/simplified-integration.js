import React from "react";
import Layout from "@theme/Layout";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { SimplifyIntegrationTabs } from "../../components/TabsComponent";
import { PageLayout } from "../../components/PageLayout";

function SimplifiedIntegration() {
    return (
        <Layout title="Simplify Integration">
            <PageLayout
                tabs={SimplifyIntegrationTabs}
                heading="Simplify integration of third-party data"
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
        title: <>Reduce cost and headaches</>,
        imageUrl: "img/Integrate_data_pic.png",
        description: (
            <>
                We reduce the number of integrations and APIs you deal with to
                one. We will migrate your integrations.
            </>
        ),
    },
    {
        title: <>Be more productive</>,
        imageUrl: "img/code_white.png",
        description: (
            <>
                All data on Amphora is machine readable. Each dataset has
                transparent metadata (quality, date, size etc) so you know what
                you are getting.
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div
            className={classnames("row", styles.feature)}
            style={{ paddingBottom: "30px" , paddingLeft: "60px" }}
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

export default SimplifiedIntegration;
