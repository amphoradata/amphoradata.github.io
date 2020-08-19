import React from "react";
import Link from "@docusaurus/Link";

export const HowWeThinkAboutData: React.FC = () => (
    <div className="container text-center mt-5">
        <h3>How We Think About Data</h3>
        <p className="font_medium">
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
