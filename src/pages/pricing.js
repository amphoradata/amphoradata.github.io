import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function pricing() {
  const [currentPlan, setCurrentPlan] = React.useState(1);
  const prices = [
    {
      id: 0,
      title: "FREE",
      perUsers: "Individual",
      fee: "Nothing, its free!",
      isMostPopular: false,
      descriptions: [
        "Discover and consume third party data",
        "Share your data with third parties",
        "Access public data repository",
        "Unlimited data downloads",
        "Personal dashboard",
        "Custom terms and conditions",
        "Custom Access Controls",
        "Max users: 1",
        "Max total file size: 10GB",
        "SDKs and sample code",
        "Documentation and online tutorials",
        "Community support",
      ],
      actionLink: "https://identity.amphoradata.com/Account/Register",
    },
    {
      id: 1,
      title: "TEAM",
      perUsers: "Up to 25 users",
      fee: "$10 per user per month",
      isMostPopular: true,
      actionLink: "https://identity.amphoradata.com/Account/Register",
      descriptions: [
        "Discover and consume third party data",
        "Share your data with third parties",
        "Access public data repository",
        "Unlimited data downloads",
        "Personal dashboard",
        "Custom terms and conditions",
        "Custom Access Controls",
        "Unlimited data hosting",
        "Custom data shop",
        "ETL governance workbench",
        "Max users: 25",
        "Max total file size: 100GB per user",
        "SDKs and sample code",
        "Documentation and online tutorials",
        "Sandbox environment",
        "Community support",
      ],
    },
    {
      id: 2,
      title: "INSTITUTION",
      perUsers: "Unlimited users",
      fee: "$20 per user per month",
      isMostPopular: false,
      actionLink: "https://identity.amphoradata.com/Account/Register",
      descriptions: [
        "Discover and consume third party data",
        "Share your data with third parties",
        "Access public data repository",
        "Unlimited data downloads",
        "Personal dashboard",
        "Custom terms and conditions",
        "Custom Access Controls",
        "Unlimited data hosting",
        "Custom data shop",
        "ETL governance workbench",
        "Access to private data repository",
        "Single sign-on",
        "Personalised URL",
        "Max users: Unlimited",
        "Max total file size: 250GB per user",
        "SDKs and sample code",
        "Documentation and online tutorials",
        "Sandbox environment",
        "Audit logs",
        "Interactive training",
        "99% uptime SLA",
        "Premium support",
      ],
    },
  ];
  return (
    <Layout title="Pricing">
      <div
        className={classnames(
          "container container--fluid",
          styles.presentationContainer
        )}
      >
        <div
          className={classnames(
            "row mt-12 mb-12 px-2",
            styles.justifyContentCenter
          )}
        >
          {prices.map((price) => (
            <div className="col col--3">
              <div className="price-card">
                <h3 className="text--center display-2 mb-1">{price.title}</h3>
                <div className="text--center">{price.perUsers}</div>
                <h4 className="text--center">{price.fee}</h4>
                {price.isMostPopular && (
                  <div className="text--center mb-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      size="lg"
                      className="text--warning mr-1"
                    />
                    Most popular
                  </div>
                )}

                {price.descriptions.map((description) => (
                  <div className="d-flex mb-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      size="lg"
                      className="text--primary mr-1"
                    />
                    &nbsp;
                    <div className="text--left mb-1">{description}</div>
                  </div>
                ))}

                <div className={classnames("mb-4", styles.buttons)}>
                  <Link
                    className={classnames(
                      "button button--lg full-width",
                      styles.getStarted,
                      currentPlan === price.id
                        ? "button--primary"
                        : "button--primary"
                    )}
                    to={useBaseUrl(price.actionLink)}
                  >
                    {currentPlan === price.id ? "Register" : "Register"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default pricing;
