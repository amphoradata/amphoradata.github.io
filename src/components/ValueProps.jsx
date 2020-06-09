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
        &nbsp;
        {props.children}
    </div>
);

export const ValueProps = (props) => {
    return (
        <div className={classnames("p-4 valueProps", props.styles.presentationContainer)}>
            <div className="container container--fluid">
                <div className={classnames("row", props.styles.spaceBetween)}>
                    <div className="col col--6">
                        <h3 className="heading font_extra_large text--black">
                            With Amphora you can...
                        </h3>
                        <PropRow>
                            <Link
                                className={classnames(props.styles.getStarted)}
                                to="how-we-help/find-data"
                            >
                                <span className="font_extra_large text--black">
                                    <strong>Access</strong> third-party data
                                </span>
                            </Link>
                        </PropRow>
                        <PropRow>
                            <Link
                                className={classnames(props.styles.getStarted)}
                                to="how-we-help/simplified-integration"
                            >
                                <span className="font_extra_large text--black">
                                    <strong>Simplify</strong> external integration
                                </span>
                            </Link>
                        </PropRow>
                        <PropRow>
                            <Link
                                className={classnames(props.styles.getStarted)}
                                to="how-we-help/share-data"
                            >
                                <span className="font_extra_large  text--black">
                                    <strong>Share</strong> your data
                                </span>
                            </Link>
                        </PropRow>
                        <PropRow>
                            <Link
                                className={classnames(props.styles.getStarted)}
                                to="how-we-help/manage-data"
                            >
                                <span className="font_extra_large text--black">
                                    <strong>Manage</strong> data centrally
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
                to={"https://identity.amphoradata.com/Account/Register"}
            >
                <PrimaryButton>Register for Free</PrimaryButton>
            </Link>
        </div>
    );
};
