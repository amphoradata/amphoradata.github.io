import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";

import useBaseUrl from "@docusaurus/useBaseUrl";

const imgPath = "img/Home_page_image.png";

export const MoreInfo = (props) => (
    <React.Fragment>
        <div className={classnames(props.styles.heroBanner)}>
            <div className={classnames("p-4", props.styles.opacityContainer)}>
                <h2 className="font_extra_large">
                    Amphora Data connects the world's real-time information in a
                    single platform for any user
                </h2>
                <div className="container container--fluid">
                    <Link to={imgPath}>
                        <img
                            src={imgPath}
                            alt="Benefits of Amphora"
                            width="70%"
                        />
                    </Link>
                </div>
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
                            We'd Like To Hear From You
                        </h2>
                        <p className="font_medium">
                            Get in contact with us if you want to learn more
                            about Amphora Data and how we can help you connect
                            and manage data better.
                        </p>
                        <p className="font_medium">
                            Phone us at +61 7 3172 9948, or email us at
                        </p>
                        <p className="font_medium">
                            <Link
                                className="font_medium"
                                to={useBaseUrl(
                                    "mailto:contact@amphoradata.com"
                                )}
                            >
                                contact@amphoradata.com
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
);
