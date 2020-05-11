module.exports = {
  title: 'Connecting the world’s real-time information',
  tagline: 'Amphora is a leading storage, integration, and collaboration platform.',
  favicon: 'img/favicon.ico',
  // github pages config
  url: 'https://amphoradata.github.io',
  baseUrl: '/',
  organizationName: 'AmphoraData', // Usually your GitHub org/user name.
  projectName: 'AmphoraData.github.io', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-gtag'],
  themeConfig: {
    algolia: {
      apiKey: '0797d5513a4961659b3f15828b64f261',
      indexName: 'amphoradata',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    // Google Analytics
    gTag: {
      trackingId: "UA-164144906-4",
      anonymizeIP: true,
    },
    //announcementBar: {
    //  id: 'support_us', // Any value that will identify this message
    //  content:
    //    'Enter in announcement',
    //  backgroundColor: '#171717', // Defaults to `#fff`
    //  textColor: '#FFEFED', // Defaults to `#000`
    //},
    navbar: {
      logo: {
        src: 'img/Amphora Data_Logo_black.jpg',
        srcDark: 'img/Amphora Data_Logo_white.png',
      },
      backgroundColor: '#FFEFEC', // Defaults to `#fff`
      links: [
        {
          label: 'Solutions',
          position: 'right',
          items: [
            {
              href: 'https://amphoradata.com/how-we-help/simplified-integration/',
              label: 'Simplified Integration',
            },
            {
              href: 'https://amphoradata.com/how-we-help/share-data/',
              label: 'Share your data',
            },
            {
              href: 'https://amphoradata.com/how-we-help/data-management/',
              label: 'Better data management',
            },
          ],
        },
        {
          href: 'https://github.com/amphoradata/',
          label: 'Pricing',
          position: 'right',
        },
        {
          label: 'Resources',
          position: 'right',
          items: [
            {
              to: 'docs/contents',
              activeBasePath: 'contents',
              label: 'Docs',
              position: 'left',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/amphoradata/',
            },
            {
              label: 'Videos',
              href: 'https://amphoradata.com/demos',
            },
            {
              label: 'Blog',
              href: 'https://amphoradata.com/blog',
            },
          ],
        },
        {
          href: 'https://identity.amphoradata.com/Account/Register?returnUrl=https://app.amphoradata.com/Challenge',
          label: 'Register',
          position: 'right',
        },
        {
          href: 'https://app.amphoradata.com/Challenge',
          label: 'Login',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Company',
          items: [
            {
              to: 'team',
              activeBasePath: 'team',
              label: 'Team',
            },
            {
              to: 'careers',
              activeBasePath: 'careers',
              label: 'Careers',
            },
            {
              to: 'values',
              activeBasePath: 'values',
              label: 'Values',
            },
            {
              to: 'values',
              activeBasePath: 'values',
              label: 'Privacy and security',
            },
          ],
        },
        {
          title: 'Contact us',
          items: [
            {
              label: 'Email',
              href: 'mailto:contact@amphoradata.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/amphoradata',
            },
            {
              label: 'Linkedin',
              href: 'https://au.linkedin.com/company/amphora-data',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Amphora Data`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
