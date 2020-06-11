import React from "react";
import Link from "@docusaurus/Link";
import classnames from "classnames";

import "./buttons.css";

export const FindDataTabs = [
    {
        to: "/how-we-help/find-data",
        name: "Vegetation",
    },
    {
        to: "/how-we-help/find-data-weather",
        name: "Weather",
    },
    {
        to: "/how-we-help/find-data-water",
        name: "Water",
    },
    {
        to: "/how-we-help/find-data-soil",
        name: "Soil",
    },
    {
        to: "/how-we-help/find-data-economic",
        name: "Economic",
    },
    {
        to: "/how-we-help/find-data-other",
        name: "Other",
    },
];

export const ManageDataTabs = [
    {
        to: "/how-we-help/manage-data",
        name: "Impact",
    },
    {
        to: "/how-we-help/manage-data-how-it-works",
        name: "How it Works",
    },
    {
        to: "/how-we-help/manage-data-features",
        name: "Features",
    },
    {
        to: "/how-we-help/manage-data-success",
        name: "Success Stories",
    },
    {
        to: "/how-we-help/manage-data-details",
        name: "More Details",
    },
];

export const ShareDataTabs = [
    {
        to: "/how-we-help/share-data",
        name: "Impact",
    },
    {
        to: "/how-we-help/share-data-how-it-works",
        name: "How it Works",
    },
    {
        to: "/how-we-help/share-data-features",
        name: "Features",
    },
    {
        to: "/how-we-help/share-data-success",
        name: "Success Stories",
    },
    {
        to: "/how-we-help/share-data-details",
        name: "More Details",
    },
];

export const SimplifyIntegrationTabs = [
    {
        to: "/how-we-help/simplified-integration",
        name: "Impact",
    },
    {
        to: "/how-we-help/simplified-integration-how-it-works",
        name: "How it Works",
    },
    {
        to: "/how-we-help/simplified-integration-features",
        name: "Features",
    },
    {
        to: "/how-we-help/simplified-integration-success",
        name: "Success Stories",
    },
    {
        to: "/how-we-help/simplified-integration-details",
        name: "More Details",
    },
];

// window will not be defined in the build step.
const isClient = typeof window !== "undefined";

export const TabsComponent = (props) => {
    let activePath = "";

    if (isClient && window && window.location && window.location.pathname) {
        activePath = window.location.pathname.replace(/\/$/, "");
    }

    return (
        <React.Fragment>
            <div
                className={classnames(
                    "row row--no-gutters mt-4 text--center tabs_row"
                )}
            >
                {props.tabs.map((m) => (
                    <div key={m.to} className="col">
                        <Link
                            className="font_medium_bold text--black"
                            to={m.to}
                        >
                            <div
                                className={classnames(
                                    "buttons_tab",
                                    m.to === activePath && "tab_active"
                                )}
                            >
                                {m.name}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {props.children}
        </React.Fragment>
    );
};
