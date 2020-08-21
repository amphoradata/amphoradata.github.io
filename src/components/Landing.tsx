import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import { PrimaryButton } from "./buttons/PrimaryButton";

import "./landing.css";

export const Landing = (props) => {
    return (
        <header
            className={classnames(
                "hero hero--primary",
                props.styles.heroBanner
            )}
        >
            <div className="landing container">
                <div className="row justify-content-center mt-2">
                    <div className="col col-8 banner font_large">
                        <h1 className="hero__title text--left text--white">
                            {props.siteConfig.title}
                        </h1>
                    </div>
                    <div className="col actions">
                        <div className="row">
                            <div className="col-md-5 col-lg-6">
                                <Link to="https://identity.amphoradata.com/Login">
                                    <PrimaryButton className="w-100">Login</PrimaryButton>
                                </Link>
                            </div>
                            <div className="col-md-5 col-lg-6">
                                <Link to="https://identity.amphoradata.com/Register">
                                    <PrimaryButton className="w-100">Register</PrimaryButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
