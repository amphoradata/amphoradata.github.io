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
        title: <>Data sharing platform</>,
        imageUrl: "img/solution_picture_0.png",
        description: (
            <>
                Connect any dataset on Amphora in 30 seconds. We provide the
                data infrastructure and ETL flow and tooling.
            </>
        ),
    },
    {
        title: <>Data search and discovery workbench</>,
        imageUrl: "img/solution_picture_1.PNG",
        description: (
            <>
                Find any data you need in seconds. All data containers have
                standardised, transparent metadata so you know exactly what your
                getting.
            </>
        ),
    },
    {
        title: <>Modern APIs and SDKs.</>,
        imageUrl: "img/solution_picture_3.PNG",
        description: (
            <>
                We use modern APIs and have SDKs in python, node.js and .NET.
                Get the latest at GitHub.
            </>
        ),
    },
    {
        title: <>Free migration</>,
        imageUrl: "img/solution_picture_2.PNG",
        description: (
            <>
                We offer a free service to migrate any data feed you want into
                Amphora with our Team or Institution plans. Get the benefits
                from simpler integration without any upfront costs.
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
