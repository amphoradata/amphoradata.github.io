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
          <div className={classnames(styles.heroBanner)}>
            <div className={classnames("p-4", styles.opacityContainer)}>
              <h2 className="font_large">
                Amphora Data connects the worls real-time information in a
                single platform for any user
              </h2>
              <div className="container container--fluid">
                <img
                  src="img/amphora_home_page.png"
                  alt="leadership team"
                  width="1000"
                />
              </div>
            </div>
          </div>
          <div className={classnames("p-4 text--center")}>
            <div className="container container--fluid">
              <div className={classnames("row", styles.spaceBetween)}>
                <div className="col col--4">
                  <h2 className="font_large">How We Think About Data</h2>
                  <p className="font_medium">
                    Data privacy, governance, and ethics is critical. We operate
                    by the principles of the National Farmers Federation Data
                    Code, the European General Data Protection Regulation, and
                    relevant local laws.
                  </p>
                  <p className="font_medium">
                    Learn more about our&nbsp;
                    <Link
                      className="font_medium"
                      to={useBaseUrl("https://app.amphoradata.com/Quickstart")}
                    >
                      Privacy and Security Policy
                    </Link>
                  </p>
                </div>
                <div className="col col--4">
                  <h2 className="font_large">We'd Like To Hear From You</h2>
                  <p className="font_medium">
                    Get in contact with us if you want to learn more about
                    Amphora Data and how we can help you connect and manage data
                    better.
                  </p>
                  <p className="font_medium">
                    Phone us at +61 7 3172 9948, or email us at
                  </p>
                  <p className="font_medium">
                    <Link
                      className="font_medium"
                      to={useBaseUrl("mailto:contact@amphoradata.com")}
                    >
                      contact@amphoradata.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
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
