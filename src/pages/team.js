import React from 'react';
import Layout from '@theme/Layout';

function team() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
        We are an experienced team with distinctive expertise in software engineering, data governance, people leadership, operations, agriculture, data science and strategy.
        </p>
      </div>
    </Layout>
  );
}

export default team;