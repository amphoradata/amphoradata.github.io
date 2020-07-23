import React from "react";
import { Redirect } from "react-router-dom";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import { CustomHead } from "../components/CustomHead";
import { Landing } from "../components/Landing";
import { ValueProps } from "../components/ValueProps";
import { MoreInfo } from "../components/MoreInfoComponent";
import { MailChimpSignupCondensed } from "../components/MailChimpSignupCondensed";

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <React.Fragment>
            <CustomHead />
            <Layout
                title={`Amphora Data | ${siteConfig.title}`}
                description="Next gen data insights and infrastructure for data businesses"
            >
                <Landing siteConfig={siteConfig} styles={styles} />

                <main>
                    <ValueProps styles={styles} />
                    <MoreInfo styles={styles} />
                    <MailChimpSignupCondensed />
                </main>
            </Layout>
        </React.Fragment>
    );
}

// export default Home;
// this overrides the default behaviour, and redirects to the docs page.
function CustomRedirect() {
    return <Redirect to="/docs/contents" />;
}
export default Home;
