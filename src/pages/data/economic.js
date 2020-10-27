import React from "react";
import Layout from "@theme/Layout";
import { DataTabs, PageLayout, DataProducts } from "../../components";
import { products } from "../../copy/data/products/economic";

export default function Page() {
    return (
        <Layout title="Data Catalogue">
            <PageLayout
                tabs={DataTabs}
                heading="Analytics Products"
                subheading="Control the future with AI"
            >
                <DataProducts products={products} />
            </PageLayout>
        </Layout>
    );
}
