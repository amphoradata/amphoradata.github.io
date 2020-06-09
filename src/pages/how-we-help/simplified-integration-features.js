import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";

function SimplifiedIntegration() {
  return (
    <Layout title="Simplify Integration">
      <div className="container container--fluid">
        <div className={classnames("row mt-12", styles.justifyContentCenter)}>
          <div className="col col--9">
            <p className="font_large">
              Simplify your integration of third-party data
            </p>
            <div className={classnames("row mt-4", styles.spaceEvenly)}>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="simplified-integration"
                >
                  Impact
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="simplified-integration-how-it-works"
                >
                  How it works
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium_bold text--black"
                  to="simplified-integration-features"
                >
                  Features
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="simplified-integration-success"
                >
                  Success stories
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="simplified-integration-details"
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
    title: <>Data sharing platform</>,
    imageUrl: "img/share_data_pick.png",
    description: (
      <>
        Connect any dataset on Amphora in 30 seconds. We provide the data
        infrastructure and ETL flow and tooling.
      </>
    ),
  },
  {
    title: <>Data search and discovery workbench</>,
    imageUrl: "img/amphora_cogs.PNG",
    description: (
      <>
        Find any data you need in seconds. All data containers have
        standardised, transparent metadata so you know exactly what your
        getting.
      </>
    ),
  },
  {
    title: <>Modern APIs and SDKs.</>,
    imageUrl: "img/amphora_cogs.PNG",
    description: (
      <>
        We use modern APIs and have SDKs in python, node.js and .NET. Get the
        latest at GitHub.
      </>
    ),
  },
  {
    title: <>Free migration</>,
    imageUrl: "img/amphora_cogs.PNG",
    description: (
      <>
        We offer a free service to migrate any data feed you want into Amphora
        with our Team or Institution plans. Get the benefits from simpler
        integration without any upfront costs.
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

export default SimplifiedIntegration;
