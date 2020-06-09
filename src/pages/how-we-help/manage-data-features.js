import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";

function ManageData() {
  return (
    <Layout title="Manage data">
      <div className="container container--fluid">
        <div className={classnames("row mt-12", styles.justifyContentCenter)}>
          <div className="col col--9">
            <p className="font_large">
              Manage data access, quality, and jobs in ecosystems
            </p>
            <div className={classnames("row mt-4", styles.spaceEvenly)}>
              <div className={styles.buttons_tab}>
                <Link className="font_medium text--black" to="manage-data">
                  Impact
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="manage-data-how-it-works"
                >
                  How it works
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium_bold text--black"
                  to="manage-data-features"
                >
                  Features
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="manage-data-success"
                >
                  Success stories
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="manage-data-details"
                >
                  More details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classnames("row", styles.justifyContentCenter)}>
          <div className="col col--9">
            <hr
              style={{
                borderWidth: "0.5px",
              }}
            />
          </div>
        </div>

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
      </div>
    </Layout>
  );
}

const features = [
  {
    title: <>Standardised metadata</>,
    imageUrl: "img/share_data_pick.png",
    description: (
      <>
        Each data container has standardised, transparent metadata including
        quality, location, source, accuracy e.t.c. Know the full story of the
        data you are using.
      </>
    ),
  },
  {
    title: <>Model Governance Workbench</>,
    imageUrl: "img/amphora_cogs.PNG",
    description: (
      <>
        Understand the performance and failures of your models and ETL jobs. Our
        workbench incorporates mlflow so you only need to use a single tool to
        track your models and jobs.
      </>
    ),
  },
  {
    title: <>Custom terms of use and access controls</>,
    imageUrl: "img/amphora_cogs.PNG",
    description: (
      <>
        You can restrict or open your data terms of use and access controls as
        much as you want.
      </>
    ),
  },
  {
    title: <>Modern APIs and SDKs</>,
    imageUrl: "img/amphora_cogs.PNG",
    description: (
      <>We use modern APIs and have SDKs in python, node.js and .NET.</>
    ),
  },
  {
    title: <>Hosting</>,
    imageUrl: "img/amphora_cogs.PNG",
    description: (
      <>
        We host the data so you don’t need to. All data is hosted securely with
        256-bit Microsoft enterprise encryption.
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
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div style={{ paddingRight: "60px", width: "600px" }}>
        <h3 className="font_large">{title}</h3>
        <p className="font_medium">{description}</p>
      </div>
    </div>
  );
}

export default ManageData;
