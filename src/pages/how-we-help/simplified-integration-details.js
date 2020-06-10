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
        title: <>Get the factpack</>,
        imageUrl: "files/Simplified_integration_overview.pdf",
        description: (
            <>
                Learn more about the impact and value of simplifying integration
                for your organisation.
            </>
        ),
    },
    {
        title: <>Get the code</>,
        imageUrl:
            "https://github.com/amphoradata/samples/blob/master/generic_templates/Create_an_Amphora.py",
        description: (
            <>
                Get started with our sample code. You can share your first
                dataset in 30 seconds.
            </>
        ),
    },
    {
        title: <>Watch a tutorial</>,
        imageUrl: "https://www.youtube.com/channel/UCdeAwh89DuwZKJ6JJK9TCnw",
        description: (
            <>
                Watch our short tutorials to get started sharing data with
                Amphora.
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
                <div className={classnames("buttons text--white text--middle")}>
                    <p>Lets go</p>
                </div>
            </Link>
        </div>
    );
}

export default SimplifiedIntegration;
