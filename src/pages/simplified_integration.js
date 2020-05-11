import React from 'react';
import Layout from '@theme/Layout';

function Simplified_integration() {
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
          Simplify your data integration 

          We help you

            Reduce effort to develop and maintain external integrations. 
            Let Amphora Data manage user authentication, access control, data storage, and all that other hard stuff. Use our API and data container system to share data with others. We use modern APIs and have SDKs in python, node.js, and .NET.

            Get machine readable data. 
            All data on Amphora is machine readable. This means you can directly integrate the data into your software. Metadata such as quality, date, size etc are shown for Amphoras so you know what you are getting.

            Migrate your integrations to Amphora.
            We can help you move. We offer a free service to migrate any data feed you want into Amphora with our Team or Institution plans. Our service takes any Data Request and surfaces the data on the platform. Fair use applies.

          We have done this before. 
          A leading Australian agtech uses Amphora Data to access multiple third party data sources from a single integration channel. They use Amphora Data to get satellite imagery, soil maps, electricity forecasts and more which they directly use in their farmer facing software.
        </p>
      </div>
    </Layout>
  );
}

export default Simplified_integration;