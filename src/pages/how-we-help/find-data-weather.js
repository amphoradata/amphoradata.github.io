import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { TabsComponent, FindDataTabs } from "../../components/TabsComponent";

function FindData() {
    return (
        <Layout title="Data Catalogue">
            <div className="container container--fluid">
                <div
                    className={classnames(
                        "row mt-12",
                        styles.justifyContentCenter
                    )}
                >
                    <div className="col col--9">
                        <div className="row row--9">
                            <p className="font_large_caps" style={{paddingRight: "600px"}}>
                                Get the insight you need in 30 seconds
                            </p>
                            <Link
                                to="https://identity.amphoradata.com/Account/Register"
                            >
                                <div
                                    className={classnames(
                                        "buttons text--white text--middle",
                                        )}
                                >
                                    <p>Register</p>
                                </div>
                            </Link>
                        </div>
                        <TabsComponent tabs={FindDataTabs} />
                    </div>
                </div>

                <div>
                    {features && features.length && (
                        <section className={styles.features}>
                            <div className="container">
                                <div>
                                    {features.map((props, idx) => (
                                        <Feature key={idx} {...props} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </Layout>
    );
}

const features = [
    {
        title: <>Weather forecasts</>,
        imageUrl: "img/forecast_image.png",
        description: (
            <>
                7 day weather forecasts for any location in Australia 100s of
                locations available now for $2 per month. More available on
                request.
            </>
        ),
    },
    {
        title: <>Weather actuals</>,
        imageUrl: "img/weather_actuals.PNG",
        description: (
            <>
                Real-time actuals of weather parameters for any location in
                Australia 100s of locations available now for $2 per month. More
                available on request.
            </>
        ),
    },
    {
        title: <>Solar Irradiance</>,
        imageUrl: "img/solar_image.png",
        description: (
            <>
                Real-time actuals of solar irradiance for any location in
                Australia Any location available on request for $2 per month.
            </>
        ),
    },
    {
        title: <>Comparison of actuals to month forecast﻿</>,
        imageUrl: "img/month_forecast.PNG",
        description: (
            <>
                Comparison of actual rainfall and temperature to BOM month
                forecast across Australia. Any location available on request for
                $2 per month.
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div
            className={classnames("row", styles.feature)}
            style={{ paddingBottom: "30px" }}
        >
            {imgUrl && (
                <div
                    className="text--center"
                    style={{ paddingLeft: "60px", paddingRight: "60px" }}
                >
                    <img
                        className={styles.featureImage}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )}
            <div style={{ paddingRight: "60px", width: "600px" }}>
                <h3 className="font_large">{title}</h3>
                <p className="font_medium">{description}</p>
            </div>
            <div className={styles.buttons}>
                <Link
                    className="font_medium text--white"
                    to="https://identity.amphoradata.com/Register"
                >
                    Get data
                </Link>
            </div>
        </div>
    );
}

export default FindData;
