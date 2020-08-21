import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import ReactPlayer from "react-player";
import { PrimaryButton } from "./buttons/PrimaryButton";

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
                    <div className="col col--5 col--offset-1">
                        <h3 className="heading font_large text--white">
                            Our mission is to transform the way knowledge is
                            shared by innovative teams.
                        </h3>
                        <h3 className="heading font_large text--white">
                            We belive that data should be bought and sold
                            responsibly, securely, and transparently.
                        </h3>
                        <Link
                            className="font_medium text--white"
                            to="https://identity.amphoradata.com/Register"
                        >
                            <PrimaryButton>Register for Free</PrimaryButton>
                        </Link>
                    </div>

                    <div className="col col--6 col-video">
                        <ReactPlayer
                            url="https://youtu.be/rBt_743oT18"
                            width="100%"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
