import React from "react";
import classnames from "classnames";
import { Redirect } from "react-router-dom";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
    <Layout
      title={`Welcome to Amphora Data ${siteConfig.title}`}
      description="Next gen data storage and integration"
    >
      <link
        href="http://fonts.googleapis.com/css?family=Ropa+Sans"
        rel="stylesheet"
        type="text/css"
      ></link>
      <link
        href="http://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
        type="text/css"
      ></link>
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container container--fluid">
          <div
            className="row mt-2"
            style={{ paddingTop: "120px", paddingBottom: "120px" }}
          >
            <div
              className="col col--8 font_large"
              style={{ paddingLeft: "240px", paddingRight: "120px" }}
            >
              <div className="pl-4">
                <h1 className="hero__title text--left text--white">
                  {siteConfig.title}
                </h1>
                <p className="hero__subtitle text--left text--white">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>
            <div className="col col--4">
              <div className={styles.buttons}>
                <Link
                  className="font_medium text--white"
                  to={useBaseUrl(
                    "https://identity.amphoradata.com/Account/Login"
                  )}
                >
                  Login
                </Link>
              </div>
              <div className={styles.buttons}>
                <Link
                  className="font_medium text--white"
                  to={useBaseUrl(
                    "https://identity.amphoradata.com/Account/Register"
                  )}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={classnames("p-4", styles.presentationContainer)}>
          <div className="container container--fluid">
            <div
              className={classnames("row", styles.spaceBetween)}
              style={{
                paddingTop: "120px",
                paddingBottom: "60px",
                paddingLeft: "240px",
                paddingRight: "240px",
              }}
            >
              <div>
                <h2 className="font_extra_large text--left text--black">
                  With Amphora you can
                </h2>
                <div className="d-flex">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="text--primary  text--black"
                  />
                  &nbsp;
                  <Link
                    className={classnames(styles.getStarted)}
                    to="how-we-help/find-data"
                  >
                    <span className="font_extra_large text--black">
                      Access third-party data&nbsp;&nbsp;
                    </span>
                  </Link>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="text--primary  text--black"
                  />
                  &nbsp;
                  <Link
                    className={classnames(styles.getStarted)}
                    to="how-we-help/simplified-integration"
                  >
                    <span className="font_extra_large text--black">
                      Simplify external integration&nbsp;&nbsp;
                    </span>
                  </Link>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="text--primary  text--black"
                  />
                  &nbsp;
                  <Link
                    className={classnames(styles.getStarted)}
                    to="how-we-help/share-data"
                  >
                    <span className="font_extra_large  text--black">
                      Share your data&nbsp;&nbsp;
                    </span>
                  </Link>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="text--primary  text--black"
                  />
                  &nbsp;
                  <Link
                    className={classnames(styles.getStarted)}
                    to="how-we-help/manage-data"
                  >
                    <span className="font_extra_large  text--black">
                      Manage data centrally&nbsp;&nbsp;
                    </span>
                  </Link>
                </div>
              </div>
              <div>
                <div style={{ width: "650px" }}>
                  <ReactPlayer
                    url="https://youtu.be/rBt_743oT18"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Link
              className="font_medium text--white"
              to={useBaseUrl(
                "https://identity.amphoradata.com/Account/Register"
              )}
            >
              Register for Free
            </Link>
          </div>
        </div>
        <div className={classnames(styles.heroBanner)}>
          <div className={classnames("p-4", styles.opacityContainer)}>
            <h2 className="font_large">
              Amphora Data connects the worls real-time information in a single
              platform for any user
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
                  Get in contact with us if you want to learn more about Amphora
                  Data and how we can help you connect and manage data better.
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
  );
}

// export default Home;
// this overrides the default behaviour, and redirects to the docs page.
function CustomRedirect() {
  return <Redirect to="/docs/contents" />;
}
export default Home;
