import React from "react";
import Link from "@docusaurus/Link";
import { PrimaryButton } from "./buttons/PrimaryButton";

export const BuyData = (props) => {
    return (
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-5 text-center">
                    <img
                        className="img-fluid"
                        alt="Discover Buy Use"
                        src="img/marketing/discover_buy_use.png"
                        width="500px"
                    />
                </div>
                <div className="col-md-5 text-center">
                    <div className="font_large mt-5">
                        Want to know what will happen in 3 months?
                    </div>
                    <div className="font_large mt-3">
                        Want to know how best to respond to the future?
                    </div>
                    <div className="font_large mt-3">
                        Try our prediction products
                    </div>
                    <div className="m-3">
                        <Link
                            className="font_medium text--white"
                            to="data/churn_prediction"
                        >
                            <PrimaryButton className="w-100 mb-5">
                                Change the future
                            </PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
