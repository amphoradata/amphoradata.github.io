import React from "react";
import Link from "@docusaurus/Link";
import classnames from "classnames";

import "./buttons.css";

export const FindDataTabs = [
    {
        to: "find-data",
        name: "Vegetation",
    },
    {
        to: "find-data-weather",
        name: "Weather",
    },
    {
        to: "find-data-water",
        name: "Water",
    },
    {
        to: "find-data-soil",
        name: "Soil",
    },
    {
        to: "find-data-economic",
        name: "Economic",
    },
    {
        to: "find-data-other",
        name: "Other",
    },
];

export const ManageDataTabs = [
    {
        to: "manage-data",
        name: "Impact",
    },
    {
        to: "manage-data-how-it-works",
        name: "How it Works",
    },
    {
        to: "manage-data-features",
        name: "Features",
    },
    {
        to: "manage-data-success",
        name: "Success Stories",
    },
    {
        to: "manage-data-details",
        name: "More Details",
    },
];

export const ShareDataTabs = [
    {
        to: "share-data",
        name: "Impact",
    },
    {
        to: "share-data-how-it-works",
        name: "How it Works",
    },
    {
        to: "share-data-features",
        name: "Features",
    },
    {
        to: "share-data-success",
        name: "Success Stories",
    },
    {
        to: "share-data-details",
        name: "More Details",
    },
];

export const SimplifyIntegrationTabs = [
    {
        to: "simplified-integration",
        name: "Impact",
    },
    {
        to: "simplified-integration-how-it-works",
        name: "How it Works",
    },
    {
        to: "simplified-integration-features",
        name: "Features",
    },
    {
        to: "simplified-integration-success",
        name: "Success Stories",
    },
    {
        to: "simplified-integration-details",
        name: "More Details",
    },
];

// window will not be defined in the build step.
const isClient = typeof window !== "undefined";

export const TabsComponent = (props) => {
    let activePath = "";

    if (isClient && window && window.location && window.location.pathname) {
        const sections = window.location.pathname.split("/");
        activePath = sections[sections.length - 1];
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
