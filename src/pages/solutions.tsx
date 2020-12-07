import * as React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { PrimaryButton } from "../components/buttons/PrimaryButton";

interface Solution {
    imgPath: string;
    name: string;
    href?: string;
    to?: string;
}
const Card: React.FC<Solution> = (p) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={p.imgPath} className="card-img-top" alt="Logo" />
                <h4 className="card-title">{p.name}</h4>
                <div>{p.children}</div>
                <div className="text-center w-100">
                    {p.to ? (
                        <Link to={p.to}>
                            <PrimaryButton className="w-100">
                                Learn More
                            </PrimaryButton>
                        </Link>
                    ) : (
                        <a href={p.href}>
                            <PrimaryButton className="w-100">
                                Learn More
                            </PrimaryButton>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
const SolutionsPage = () => {
    return (
        <Layout title="Solutions">
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <h1>Solutions</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm text-center mt-1">
                        <Card
                            imgPath="/img/logos/amphora-normal.png"
                            name="Data Collaboration"
                            to="/solutions/data-collaboration"
                        >
                            <p>
                                The Amphora Data collaboration platform is
                                designed for developers, experts, and
                                researchers to collaborate in real time.
                            </p>
                        </Card>
                    </div>
                    <div className="col-sm text-center mt-1">
                        <Card
                            imgPath="/img/logos/amphora-cogs.png"
                            name="Analytical Services"
                            to="/solutions/analytical-services"
                        >
                            <p>
                                Do you have a complex question? The Amphora team
                                specialise in delivering real value and outcomes
                                from data analytics.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SolutionsPage;
