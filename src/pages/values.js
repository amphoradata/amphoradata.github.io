import React from 'react';
import Layout from '@theme/Layout';

function values() {
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
        Our values

        We operate by 8 values

            We hold information securely and responsibly

            We hold ourselves to the highest standards of integrity

            We deliver and measure impact for us and our customers

            We operate honestly and transparently

            We seek out diverse opinions

            We consistently challenge ourselves to be the best

            We support our team, customers, and farmers to achieve more

            We will only succeed together
        </p>
      </div>
    </Layout>
  );
}

export default values;