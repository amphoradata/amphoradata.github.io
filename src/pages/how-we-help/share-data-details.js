import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
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
        title: <>Get the factpack</>,
        imageUrl: "img/share_data_pick.png",
        description: (
            <>
                Learn more about the impact and value of sharing data for your
                organisation.
            </>
        ),
    },
    {
        title: <>Get the code</>,
        imageUrl: "img/amphora_cogs.PNG",
        description: (
            <>
                Don’t worry about anything. We host the data, manage access,
                commercials and governance.
            </>
        ),
    },
    {
        title: <>Watch a tutorial</>,
        imageUrl: "img/amphora_cogs.PNG",
        description: (
            <>
                Don’t worry about anything. We host the data, manage access,
                commercials and governance.
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
                <div className={classnames("buttons text--white")}>
                    <p>Lets go</p>
                </div>
            </Link>
        </div>
    );
}

export default ShareData;
