import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { PrimaryButton } from "../../components/PrimaryButton";

import { features } from "../../copy/glaze/features";

import styles from "../styles.module.css";
import { PageLayout } from "../../components/PageLayout";
import { GlazeTabs } from "../../components/TabsComponent";

const GlazeInfo = (props) => {
    return (
        <React.Fragment>
            <div className="col col--6">
                <h3>{props.title}</h3>
                <div className="mb-2">{props.text}</div>
            </div>
        </React.Fragment>
    );
};

function GlazeOverview() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    const action = (
        <Link to="mailto:contact@amphoradata.com">
            <PrimaryButton>Contact Us</PrimaryButton>
        </Link>
    );
    return (
        <React.Fragment>
            <Layout title="Glaze">
                <PageLayout
                    tabs={GlazeTabs}
                    heading="Glaze"
                    subheading="Single-click infrastructure for data businesses"
                    button={action}
                >
                    <div className="mt-2 mb-2 row">
                        {features.map((f) => (
                            <GlazeInfo {...f} />
                        ))}
                    </div>
                </PageLayout>
            </Layout>
        </React.Fragment>
    );
}

export default GlazeOverview;
