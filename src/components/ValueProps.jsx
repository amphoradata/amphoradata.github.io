import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import ReactPlayer from "react-player";

export const ValueProps = (props) => {
    return (
        <div className={classnames("p-4", props.styles.presentationContainer)}>
            <div className="container container--fluid">
                <div
                    className={classnames("row", props.styles.spaceBetween)}
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
                                className={classnames(props.styles.getStarted)}
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
                                className={classnames(props.styles.getStarted)}
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
                                className={classnames(props.styles.getStarted)}
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
                                className={classnames(props.styles.getStarted)}
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
            <div className={props.styles.buttons}>
                <Link
                    className="font_medium text--white"
                    to={"https://identity.amphoradata.com/Account/Register"}
                >
                    Register for Free
                </Link>
            </div>
        </div>
    );
};
