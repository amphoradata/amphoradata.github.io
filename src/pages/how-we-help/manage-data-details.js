import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { ManageDataTabs } from "../../components/TabsComponent";
import { PageLayout } from "../../components/PageLayout";

function ManageData() {
    return (
        <Layout title="Manage data">
            <PageLayout
                tabs={ManageDataTabs}
                heading="Securely manage your information"
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
        title: <>Get the code</>,
        imageUrl: "https://github.com/amphoradata/samples",
        description: (
            <>
                Access our open source code to manage your information on
                Amphora Data.
            </>
        ),
    },
    {
        title: <>Watch a tutorial</>,
        imageUrl: "https://www.youtube.com/channel/UCdeAwh89DuwZKJ6JJK9TCnw",
        description: (
            <>
                Watch our short tutorials to get started managing data with
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
export default ManageData;
