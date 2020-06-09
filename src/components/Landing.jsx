import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import { PrimaryButton } from "./PrimaryButton";

import "./landing.css";

export const Landing = (props) => {
    return (
        <header
            className={classnames(
                "hero hero--primary",
                props.styles.heroBanner
            )}
        >
            <div className="landing container container--fluid">
                <div className="row mt-2">
                    <div className="col col--8 font_large banner">
                        <h1 className="hero__title text--left text--white">
                            {props.siteConfig.title}
                        </h1>
                        <p className="hero__subtitle text--left text--white">
                            {props.siteConfig.tagline}
                        </p>
                    </div>
                    <div className="col col--2 actions">
                        <Link
                            className="font_medium text--white"
                            to={
                                "https://identity.amphoradata.com/Account/Login"
                            }
                        >
                            <PrimaryButton>Login</PrimaryButton>
                        </Link>
                        <Link
                            className="font_medium text--white"
                            to={"https://identity.amphoradata.com/Register"}
                        >
                            <PrimaryButton>Register</PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
