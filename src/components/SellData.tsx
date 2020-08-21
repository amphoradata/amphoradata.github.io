import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import ReactPlayer from "react-player";
import { PrimaryButton } from "./buttons/PrimaryButton";

import "./SellData.css";

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

export const SellData = (props) => {
    return (
        <div
            className={classnames(
                "p-4 SellData",
                props.styles.presentationContainerBlank
            )}
        >
            <div className="container container--fluid">
                <div className={classnames("row", props.styles.spaceBetween)}>
                    <div className="col col--5 col--offset-1 text--center">
                        <h3 className="heading font_large text--black mt-4">
                            Do you have valuable data but not sure how to sell
                            it?
                        </h3>
                        <h3 className="heading font_large text--black mt-4">
                            List your data today in minutes.
                        </h3>
                        <h3 className="heading font_large text--black mt-4 mb-8">
                            You focus on the data - we handle payments,
                            security, storage, identity management and more.
                        </h3>
                        <Link className="font_medium text--white" to="selldata">
                            <PrimaryButton>Start selling</PrimaryButton>
                        </Link>
                    </div>

                    <img
                        alt="List Sell Get Paid"
                        src="img/list_sell_get_paid.jpg"
                        width="500px"
                    />
                </div>
            </div>
        </div>
    );
};
