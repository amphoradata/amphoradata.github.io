import React from "react";
import classnames from "classnames";
import { Redirect } from "react-router-dom";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { CustomHead } from "../components/CustomHead";
import {Landing} from "../components/Landing";
import { ValueProps } from "../components/ValueProps";
import { MoreInfo } from "../components/MoreInfoComponent";

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <React.Fragment>
      <CustomHead/>
      <Layout
        title={`Amphora Data | ${siteConfig.title}`}
        description="Next gen data storage and integration"
      >
        <Landing siteConfig={siteConfig} styles={styles}/>

        <main>
          <ValueProps styles={styles} />
          <MoreInfo styles={styles} />
        </main>
        {/* <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main> */}
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
