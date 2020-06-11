import React from "react";
import Layout from "@theme/Layout";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { ShareDataTabs } from "../../components/TabsComponent";
import { PageLayout } from "../../components/PageLayout";

function ShareData() {
    return (
        <Layout title="Share your insight">
            <PageLayout
                tabs={ShareDataTabs}
                heading="Share your knowledge with the world"
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
        title: <>Create data container</>,
        imageUrl: "img/create_package_icon.PNG",
        description: (
            <>
                Create a data container. We call them Amphoras. Set all the
                metadata for the Amphora including name, description, location,
                price, terms of use, access controls, labels and any specific
                attributes.
            </>
        ),
    },
    {
        title: <>Fill container with your data</>,
        imageUrl: "img/package_icon.PNG",
        description: (
            <>
                Simply fill the container with any data you want including
                images, real-time updates, relational databases and more. You
                can use our web application or interact programmatically through
                one of our SDKs.
            </>
        ),
    },
    {
        title: <>Share with the world</>,
        imageUrl: "img/share_package.PNG",
        description: (
            <>
                Access your data from the specified Amphora. Enjoy using a
                single API and integration channel to access the data that you
                need
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

export default ShareData;
