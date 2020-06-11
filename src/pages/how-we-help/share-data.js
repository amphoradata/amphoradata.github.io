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
        title: <>Share insights instantly</>,
        imageUrl: "img/share_data_pick.png",
        description: (
            <>
                Post your data on Amphora to reach all of our users. You can
                monetise your data or share it for free. You have full control
                on who can use your data.
            </>
        ),
    },
    {
        title: <>Don’t worry about Data Infra</>,
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

export default ShareData;
