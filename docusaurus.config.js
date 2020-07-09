module.exports = {
  title: 'Connecting the world’s real-time information',
  favicon: 'img/favicon.ico',
  // github pages config
  tagline: 'Amphora is a data marketplace and management platform for innovative teams and researchers',
  url: 'https://amphoradata.github.io',
  baseUrl: '/',
  organizationName: 'AmphoraData', // Usually your GitHub org/user name.
  projectName: 'AmphoraData.github.io', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-gtag'],
  themeConfig: {
    disableDarkMode: true,
    algolia: {
      apiKey: '0797d5513a4961659b3f15828b64f261',
      indexName: 'amphoradata',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    // Google Analytics
    gtag: {
      trackingID: "UA-164144906-4",
      anonymizeIP: true,
    },
    // announcementBar: {
    //  id: 'support_us', // Any value that will identify this message
    //  content:
    //    'Enter in announcement',
    //  backgroundColor: '#171717', // Defaults to `#fff`
    //  textColor: '#FFEFED', // Defaults to `#000`
    // },
    navbar: {
      logo: {
        src: 'img/Amphora Data_Logo_black.jpg',
        srcDark: 'img/Amphora Data_Logo_white.png',
      },
      backgroundColor: '#222222', // Defaults to `#fff`
      links: [
        {
          label: 'Products',
          position: 'right',
          items: [
            {
              to: 'how-we-help/find-data',
              activeBasePath: 'how-we-help/find-data',
              label: 'Data',
            },
            {
              to: 'glaze/overview',
              activeBasePath: 'glaze/overview',
              label: 'Glaze',
            },
          ],
        },
        {
          to: 'pricing',
          activeBasePath: 'pricing',
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
              href: 'https://www.youtube.com/channel/UCdeAwh89DuwZKJ6JJK9TCnw',
            },
            {
              label: 'News',
              href: 'https://au.linkedin.com/company/amphora-data',
            },
          ],
        },
        {
          href: 'https://identity.amphoradata.com/Register',
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
              to: 'leadership-team',
              label: 'Team',
            },
            {
              to: 'careers',
              label: 'Careers',
            },
            {
              to: 'values',
              label: 'Values',
            },
            {
              to: 'privacy-security',
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
