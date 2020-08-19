import React from "react";
import Link from "@docusaurus/Link";
import {SectionHeader} from './layout/SectionHeader'

export const HowWeThinkAboutData: React.FC = () => (
    <div className="container text-center mt-5">
        <SectionHeader>How We Think About Data</SectionHeader>
        <p className="font_medium w-75 m-auto">
            Data privacy, governance, and ethics is critical. We operate by the
            principles of the National Farmers Federation Data Code, the
            European General Data Protection Regulation, and relevant local
            laws.
        </p>
        <p className="font_medium">
            <Link className="font_medium" to="/privacy-security">
                Read our Privacy and Security Policy
            </Link>
        </p>
    </div>
);
