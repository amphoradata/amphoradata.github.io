import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function values() {
  return (
    <Layout title="Mission and Values">
      <div className="container container--fluid">
        <div
          className="row p-4"
          className={classnames("hero hero--primary", styles.heroBanner)}
        >
          <h2
            className="font_large text--white"
            style={{
              paddingLeft: "240px",
              paddingRight: "240px",
              paddingTop: "120px",
              paddingBottom: "60px",
            }}
          >
            We will transform the way knowledge is shared by innovative teams
            and researchers
          </h2>
        </div>

        <div
          className={classnames("row", styles.justifyContentCenter)}
          style={{ paddingTop: "60px", paddingBottom: "120px" }}
        >
          <div className="col">
            <h3 className="font_large text--center">
              We operate by 8 values that will help us achieve our mission
            </h3>
            <div style={{ paddingTop: "30px" }}></div>
            <p className="font_medium_bold text--center">
              We hold information securely and responsibly
            </p>
            <p className="font_medium_bold text--center">
              We hold ourselves to the highest standards of integrity
            </p>
            <p className="font_medium_bold text--center">
              We deliver and measure impact for us and our customers
            </p>
            <p className="font_medium_bold text--center">
              We operate honestly and transparently
            </p>
            <p className="font_medium_bold text--center">
              We seek out diverse opinions
            </p>
            <p className="font_medium_bold text--center">
              We consistently challenge ourselves to be the best
            </p>
            <p className="font_medium_bold text--center">
              We support our team and customers to achieve more
            </p>
            <p className="font_medium_bold text--center">
              We will only succeed together
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default values;
