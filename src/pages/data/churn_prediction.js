import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";
import { DataTabs, PageLayout, DataProducts } from "../../components";
import { products } from "../../copy/data/products/churn_prediction";

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
