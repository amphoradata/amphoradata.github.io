/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Amphora Data ', // Title for your website.
  tagline: 'A platform to discover, package, and trade data to improve the sustainability and profitability of farms.',
  url: 'https://amphoradata.github.io', // Your website URL
  editUrl: 'https://github.com/amphoradata/amphoradata.github.io/blob/source/docs/',
  baseUrl: '/', // Base URL for your project */
  docsSideNavCollapsible: true,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'AmphoraData.github.io',
  organizationName: 'AmphoraData',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    // {page: 'basics', label: 'Basics'},
    {href: 'https://amphoradata.com', label: 'Home'},
    {href: 'https://app.amphoradata.com/Profiles/Account/Register', label: 'Register'},
    {href: 'https://app.amphoradata.com/Profiles/Account/Login', label: 'Login'},
    {href: 'https://www.amphoradata.com/how-we-help/researchers', label: 'How We Help'},
    {href: 'https://www.amphoradata.com/pricing', label: 'Pricing'},
    {doc: 'overview/about', label: 'Docs'},
    {href: 'https://github.com/amphoradata', label: 'Github'},
    {href: 'https://gitter.im/amphoradata/community', label: 'Gitter'},
    {href: 'https://www.amphoradata.com/blog', label: 'Blog'},
    {href: 'https://www.amphoradata.com/contact-us', label: 'Contact'},
    // {blog: true, label: 'Blog'},


    // {page: 'contact', label: 'Contact'},
    // {page: 'team', label: 'Team'},
    // {page: 'values', label: 'Values'},
    // {page: 'careers', label: 'Careers'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/Amphora_Data_Logo_white.png',
  footerIcon: 'img/Amphora_Black.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#181717',
    secondaryColor: '#FFFEFD',
  },

    // --amphora-red: #BC312A;
    // --amphora-black: #181717;
    // --amphora-white: #FFFEFD;

  /* Custom fonts for website */
  
  fonts: {
    fontTahoma: [
      "Tahoma"
    ],
    fontCandara: [
      "Candara"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Amphora Data`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  scrollToTop: true,

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  cname: 'docs.amphoradata.com',

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
