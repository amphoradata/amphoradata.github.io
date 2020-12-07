import React from "react";
import Link from "@docusaurus/Link";
import { PrimaryButton } from "./buttons/PrimaryButton";

import "./landing.css";

interface Action {
    to: string;
    text: string;
}
interface LandingProps {
    siteConfig: any;
    action1: Action;
    action2: Action;
}

export const Landing: React.FC<LandingProps> = (props) => {
    return (
        <header className="hero hero-banner">
            <div className="landing container">
                <div className="row justify-content-center mt-2">
                    <div className="col col-9 banner font_large">
                        <h1 className="hero__title text-center text--white">
                            Amphora Data
                        </h1>
                        <p className="hero__subtitle text-center text--white mt-5">
                            {props.siteConfig.tagline}
                        </p>
                    </div>
                    <div className="col actions">
                        <div className="row justify-content-center">
                            <div className="col-md-5 col-lg-6">
                                <Link to={props.action1.to}>
                                    <PrimaryButton className="w-100">
                                        {props.action1.text}
                                    </PrimaryButton>
                                </Link>
                            </div>
                            {/* <div className="col-md-5 col-lg-6">
                                <a href={props.action2.to}>
                                    <PrimaryButton className="w-100">
                                        {props.action2.text}
                                    </PrimaryButton>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
