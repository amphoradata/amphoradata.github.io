import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";

import useBaseUrl from "@docusaurus/useBaseUrl";
import { MailChimpSignupCondensed } from "../components/mail/MailChimpSignupCondensed";

export const MoreInfo = (props) => (
    <React.Fragment>
        <div className={classnames(props.styles.heroBanner)}>
            <div className={classnames("p-4", props.styles.opacityContainer)}>
                <div className="font_extra_large">
                    Amphora Data connects owners and users of the world's
                    real-time information
                </div>

                <img
                    src="/img/connect_values.png"
                    alt="Benefits of Amphora"
                    width="80%"
                />
            </div>
        </div>
        <div className={classnames("p-4 text--center")}>
            <div className="container container--fluid">
                <div className={classnames("row", props.styles.spaceBetween)}>
                    <div className="col col--4">
                        <h2 className="font_large">How We Think About Data</h2>
                        <p className="font_medium">
                            Data privacy, governance, and ethics is critical. We
                            operate by the principles of the National Farmers
                            Federation Data Code, the European General Data
                            Protection Regulation, and relevant local laws.
                        </p>
                        <p className="font_medium">
                            <Link
                                className="font_medium"
                                to={useBaseUrl("privacy-security")}
                            >
                                Learn more about our Privacy and Security Policy
                            </Link>
                        </p>
                    </div>
                    <div className="col col--4">
                        <h2 className="font_large">
                            Want the latest on finding, sharing and using data?
                        </h2>
                        <p className="font_medium">
                            Subscribe to our mailing list
                            <MailChimpSignupCondensed />
                        </p>

                        <p className="font_medium">
                            {"Give us a call at +61 7 3172 9948 or "}
                            <Link
                                className="font_medium"
                                to={useBaseUrl(
                                    "mailto:contact@amphoradata.com"
                                )}
                            >
                                email us directly.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
);
