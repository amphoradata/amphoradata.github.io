import React from "react";
import { Redirect } from "react-router-dom";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import { CustomHead } from "../components/CustomHead";
import { Landing } from "../components/Landing";
import { Logos } from "../components/Logos";
import { ValueProps } from "../components/ValueProps";
import { BuyData } from "../components/BuyData";
import { SellData } from "../components/SellData";
import { MailingListSubscribeSection } from "../components/MailingListSubscribe";
import { HowWeThinkAboutData } from "../components/HowWeThinkAboutData";
import { SuperHeroImageSection } from "../components/SuperHeroImage";

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
                    <SellData styles={styles} />
                    <BuyData styles={styles} />
                    <ValueProps styles={styles} />
                    <Logos />
                    <MailingListSubscribeSection styles={styles} />
                    <HowWeThinkAboutData />
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
