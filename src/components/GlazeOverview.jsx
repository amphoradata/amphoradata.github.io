import React from "react";
import { PrimaryButton } from "../components/PrimaryButton";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./plans.css";

export const PlanCard = (props) => {
    const price = props.plan;
    return (
        <React.Fragment>
            <div className="col col--10">
                <div className="card plan-card ">
                    <div class="row--centre">
                        <img
                            src="img/Amphora_glaze_title_two_lines.png"
                            alt={price.title}
                            width="400"
                        />
                    </div>
                    <hr />
                    <div class="row--centre">
                        <div class="card__header">
                            <h2 className="text--center">{price.fee}</h2>
                        </div>
                    </div>
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
                    <h2 className="text--center">{price.perUsers}</h2>
                    <hr />

                    {
                        <div className="plan-button">
                            <Link to={price.actionLink}>
                                <PrimaryButton>
                                    {price.actionName}
                                </PrimaryButton>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    );
};
