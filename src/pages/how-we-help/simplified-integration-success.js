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
        title: <>Australian Agtech</>,
        imageUrl: "img/use_case_1.png",
        description: (
            <>
                A leading Australian agtech uses Amphora Data to access new data
                sources. They use Amphora Data to get satellite imagery, soil
                maps, electricity forecasts for their farmer facing software.
            </>
        ),
    },
    {
        title: <>Eliiza Data Science Consultancy</>,
        imageUrl: "img/use_case_2.png",
        description: (
            <>
                Eliiza, a leading data science consultancy in Melbourne, uses
                Amphora Data to find new datasets to develop new prediction
                tools for electricity prices and river flows.
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
