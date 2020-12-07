import * as React from "react";
import Layout from "@theme/Layout";
import { BuyData } from "../../components/BuyData";
import { SellData } from "../../components/SellData";

const DataCollaborationPage = () => {
    return (
        <Layout title="Data Market">
            <div className="container">
                <div className="mt-3">
                    <h1>Amphora Data Collaboration</h1>
                </div>
                <BuyData />
                <SellData />
            </div>
        </Layout>
    );
};

export default DataCollaborationPage;
