import * as React from "react";
import Layout from "@theme/Layout";
import { DataTabs, PageLayout, DataProducts } from "../../components";
import { products } from "../../copy/data/products/agriculture";

export default function Agriculture() {
    return (
        <Layout title="Analytics Products">
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
