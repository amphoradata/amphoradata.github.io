import React from "react";
import { Redirect } from "react-router-dom";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { CustomHead } from "../components/CustomHead";
import { Landing } from "../components/Landing";
import { Logos } from "../components/Logos";

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <React.Fragment>
            <CustomHead />
            <Layout
                title={`Amphora Data | ${siteConfig.title}`}
                description="Better decisions with data"
            >
                <div className="m-2 text-center">
                    Closed to new users. If you are looking for Four2 customer
                    retention, you can find out more{" "}
                    <a href="https://four2.ai">here.</a>
                </div>
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
