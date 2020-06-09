import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";

function ShareData() {
  return (
    <Layout title="Share your insight">
      <div className="container container--fluid">
        <div className={classnames("row mt-12", styles.justifyContentCenter)}>
          <div className="col col--9">
            <p className="font_large">Share your data with the world</p>
            <div className={classnames("row mt-4", styles.spaceEvenly)}>
              <div className={styles.buttons_tab}>
                <Link className="font_medium text--black" to="share-data">
                  Impact
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="share-data-how-it-works"
                >
                  How it works
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium_bold text--black"
                  to="share-data-features"
                >
                  Features
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="share-data-success"
                >
                  Success stories
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="share-data-details"
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
        Share any dataset on Amphora in 30 seconds. We provide the data
        infrastructure and ETL flow and tooling. You can also share your data in
        your own Datashop.
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
    title: <>Modern APIs and SDKs.</>,
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
  {
    title: <>Payment handling</>,
    imageUrl: "img/amphora_cogs.PNG",
    description: (
      <>
        We handle all the payments in Amphora powered by Stripe. If you want to
        charge for your data, simply add a price and wait for payment - nothing
        else.
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

export default ShareData;
