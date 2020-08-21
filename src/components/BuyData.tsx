import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import ReactPlayer from "react-player";
import { PrimaryButton } from "./buttons/PrimaryButton";

import "./BuyData.css";

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

export const BuyData = (props) => {
    return (
        <div
            className={classnames(
                "p-4 BuyData",
                props.styles.presentationContainerBlank
            )}
        >
            <div className="container container--fluid">
                <div className={classnames("row", props.styles.spaceBetween)}>
                    <img
                        alt="Discover Buy Use"
                        src="img/discover_buy_use.jpg"
                        width="500px"
                    />
                    <div className="col col--5 col--offset-1 text--center">
                        <h3 className="heading font_large text--black mt-4">
                            Looking for cheap and easy to use data?
                        </h3>
                        <h3 className="heading font_large text--black mt-4">
                            Discover and buy data from our Marketplace in 30
                            seconds.
                        </h3>
                        <h3 className="heading font_large text--black mt-4 mb-8">
                            Only buy the data you need - no platform fees or
                            lock-in contracts!
                        </h3>
                        <Link
                            className="font_medium text--white"
                            to="data/vegetation"
                        >
                            <PrimaryButton>Discover data</PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
