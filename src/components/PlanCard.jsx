import React from "react";
import { PrimaryButton } from "../components/PrimaryButton";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./plans.css";
// id: 0,
// title: "FREE",
// perUsers: "Individual",
// fee: "Nothing, its free!",
// isMostPopular: false,
// descriptions: {text: "", icon" ""}

export const PlanCard = (props) => {
    const price = props.plan;
    return (
        <React.Fragment>
            <div className="col col--4">
                <div className="card plan-card ">
                    <div class="card__header">
                        <h3>{price.title}</h3>
                    </div>
                    <div className="text--center">{price.perUsers}</div>
                    <h4 className="text--center">{price.fee}</h4>

                    <hr/>
                    {props.isMostPopular ? (
                        <div className="text--center mb-2">
                            <FontAwesomeIcon
                                icon={faStar}
                                size="lg"
                                className="text--warning mr-1"
                            />
                            Most popular
                        </div>
                    ): <br/>}

                    <br/>
                    {price.descriptions.map((description) => (
                        <div className="d-flex mb-2">
                            <FontAwesomeIcon
                                icon={description.icon || faCheckCircle}
                                size="lg"
                                className="text--primary mr-1"
                            />

                            <div className="text--left">{description.text}</div>
                        </div>
                    ))}

                    {/* <Link to={useBaseUrl(price.actionLink)}>
                        <PrimaryButton>Register</PrimaryButton>
                    </Link> */}
                </div>
            </div>
        </React.Fragment>
    );
};
