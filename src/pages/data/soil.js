import React from "react";
import Layout from "@theme/Layout";
import { DataTabs, PageLayout, DataProducts } from "../../components";
import { products } from "../../copy/data/products/soil";

export default function Page() {
    return (
        <Layout title="Data Catalogue">
            <PageLayout
                tabs={DataTabs}
                heading="Analytics Products"
                subheading="Get the insights you need in 30 seconds"
            >
                <DataProducts products={products} />
            </PageLayout>
        </Layout>
    );
}
