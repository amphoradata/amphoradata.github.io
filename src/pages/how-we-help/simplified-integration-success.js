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
                            <p className="font_large_caps" style={{paddingRight: "600px"}}>
                                Simplify integration of third-party data
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
        title: <>Australian Agtech</>,
        imageUrl: "img/use_case_1.png",
        description: (
            <>
                A leading Australian agtech uses Amphora Data to access new data
                sources. They use Amphora Data to get satellite imagery, soil
                maps, electricity forecasts for their farmer facing
                software.
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
