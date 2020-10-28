import * as React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { PrimaryButton } from "../components/buttons/PrimaryButton";

interface Solution {
    imgPath: string;
    name: string;
    link: string;
}
const Card: React.FC<Solution> = (p) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={p.imgPath} className="card-img-top" alt="Logo" />
                <h4 className="card-title">{p.name}</h4>
                <div>{p.children}</div>
                <div className="text-center w-100">
                    <Link to={p.link}>
                        <PrimaryButton className="w-100">
                            Learn More
                        </PrimaryButton>
                    </Link>
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
                    <div className="col text-center">
                        <Card
                            imgPath="/img/amphora-cogs.png"
                            name="Data Market"
                            link="/solutions/data-market"
                        >
                            <p>
                                The Amphora Data Market is designed for
                                developers, data scientists, and researchers to
                                collaborate with data in real time.
                            </p>
                        </Card>
                    </div>
                    <div className="col text-center">
                        <Card
                            imgPath="/img/logos/four2.png"
                            name="Four2"
                            link="/solutions/four2"
                        >
                            <p>
                                Four2 uses machine learning to drive customer
                                success. The goal of Four2 is to improve
                                lifetime customer value by improving customer
                                understanding, prediciton, and next-best-action.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SolutionsPage;
