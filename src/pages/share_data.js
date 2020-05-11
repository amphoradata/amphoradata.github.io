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
          Find the data you need and share the data you have in seconds

          We help you

          Discover quality data. 
          Say goodbye to missing data. All data hosted on our platform are machine readable, which means you can get straight to the insights - no wasting time wrangling data. Metadata such as quality, date, size etc are shown for each dataset so you know exactly what you are getting.

          Publish and monetise your models. 
          You can publish model output on Amphora Data - you can even get paid for it! Simply create an Amphora that contains your model’s outputs, and then you can control who you want to share it with, and how much it costs to access.

          We have done this before. 
          Eliiza, a leading data science consultancy in Melbourne, uses Amphora Data to find new datasets to develop new prediction tools for electricity prices and river flows. You can read about some of this work on their Medium page.
        </p>
      </div>
    </Layout>
  );
}

export default Simplified_integration;