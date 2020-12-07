import * as React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";

const domains = [
    "NDVI imagery",
    "Price forecasting",
    "Internet of Things",
    "Agriculture and ecology",
];
const Four2Page: React.FC = () => {
    return (
        <Layout title="Analytical Services">
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <h1>Analytical Services</h1>
                        <p>
                            Do you need real answers to complex questions? The
                            team at Amphora Data specialises in finding
                            actionable insights from large and complex data.
                        </p>

                        <p>
                            Our domains of expertise are:
                            <ul>
                                {domains.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </p>

                        <div>
                            View some of our{" "}
                            <Link to="/data">analyics projects</Link> to learn
                            more about what we do.
                        </div>

                        <a href="/team">
                            <PrimaryButton>Contact Us</PrimaryButton>
                        </a>
                    </div>
                    <div className="col">
                        <img
                            src="/img/logos/amphora-cogs.png"
                            className="card-img-top"
                            alt="Logo"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Four2Page;
