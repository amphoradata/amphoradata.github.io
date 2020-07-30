import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import ReactPlayer from "react-player";
import { PrimaryButton } from "./PrimaryButton";

import "./valueProps.css";

const PropRow = (props) => (
    <div className="d-flex prop">
        <FontAwesomeIcon
            icon={faCheckCircle}
            size="2x"
            className="text--success"
        />
        {props.children}
    </div>
);

export const ValueProps = (props) => {
    return (
        <div
            className={classnames(
                "p-4 valueProps",
                props.styles.presentationContainer
            )}
        >
            <div className="container container--fluid">
                <div className={classnames("row", props.styles.spaceBetween)}>
                    <div className="col col--6" style={{ paddingLeft: "5rem" }}>
                        <h3 className="heading font_extra_large text--black">
                            With Amphora you can
                        </h3>
                        <PropRow>
                            <Link
                                className={classnames(props.styles.getStarted)}
                                to="data/find-data"
                            >
                                <span className="font_large text--black">
                                    <strong>Get more insights</strong> for your
                                    software and analytics
                                </span>
                            </Link>
                        </PropRow>
                        <PropRow>
                            <Link
                                className={classnames(props.styles.getStarted)}
                                to="glaze/overview"
                            >
                                <span className="font_large text--black">
                                    <strong>Sell and share your data</strong>{" "}
                                    instantly and cheaply
                                </span>
                            </Link>
                        </PropRow>
                    </div>
                    <div className="col col--6 col-video">
                        <ReactPlayer
                            url="https://youtu.be/rBt_743oT18"
                            width="100%"
                        />
                    </div>
                </div>
            </div>
            <Link
                className="font_medium text--white"
                to="https://identity.amphoradata.com/Register"
            >
                <PrimaryButton>Register for Free</PrimaryButton>
            </Link>
        </div>
    );
};
