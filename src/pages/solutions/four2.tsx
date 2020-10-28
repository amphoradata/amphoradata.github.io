import * as React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";

const Four2Page: React.FC = () => {
    return (
        <Layout title="Four2">
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <h1>Four2</h1>
                        <p>
                            Four2 is an application that uses machine learning
                            to maximise lifetime customer value.
                        </p>

                        <div>
                            <Link to="/team">Contact our team</Link> to learn
                            more about our private beta program
                        </div>

                        <a href="https://four2.ai">
                            <PrimaryButton>Visit Four2</PrimaryButton>
                        </a>
                    </div>
                    <div className="col">
                        <img
                            src="/img/logos/four2.png"
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
