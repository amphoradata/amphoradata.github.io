module.exports = {
    url: "https://amphoradata.github.io",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    title: "The fastest and simplest way to buy and sell data",
    tagline:
        "Securely and simply sell more data. Quickly and easily get new insights.",
    // github pages config
    organizationName: "AmphoraData", // Usually your GitHub org/user name.
    projectName: "AmphoraData.github.io", // Usually your repo name.
    themeConfig: {
        colorMode: {
            disableSwitch: true,
        },
        algolia: {
            apiKey: "0797d5513a4961659b3f15828b64f261",
            indexName: "amphoradata",
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
                src: "img/Amphora Data_Logo_black.jpg",
                srcDark: "img/Amphora Data_Logo_white.png",
            },
            items: [
                {
                    label: "Products",
                    position: "right",
                    items: [
                        {
                            to: "data/vegetation",
                            activeBasePath: "data/vegetation",
                            label: "Data & Analytics",
                        },
                        {
                            to: "glaze/overview",
                            activeBasePath: "glaze/overview",
                            label: "Glaze Platform",
                        },
                    ],
                },
                {
                    to: "pricing",
                    activeBasePath: "pricing",
                    label: "Pricing",
                    position: "right",
                },
                {
                    to: "docs/contents",
                    // activeBasePath: "contents",
                    label: "Docs",
                    position: "right",
                },
                {
                    label: "Resources",
                    position: "right",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/amphoradata/",
                        },
                        {
                            label: "Videos",
                            href:
                                "https://www.youtube.com/channel/UCdeAwh89DuwZKJ6JJK9TCnw",
                        },
                        {
                            label: "News",
                            href:
                                "https://au.linkedin.com/company/amphora-data",
                        },
                    ],
                },
                {
                    href: "https://app.amphoradata.com/Challenge",
                    label: "Login",
                    position: "right",
                },
            ],
        },
        footer: {
            logo: {},
            style: "dark",
            links: [
                {
                    title: "Company",
                    items: [
                        {
                            to: "leadership-team",
                            label: "Team",
                        },
                        {
                            to: "careers",
                            label: "Careers",
                        },
                        {
                            to: "values",
                            label: "Values",
                        },
                        {
                            to: "privacy-security",
                            label: "Privacy and security",
                        },
                    ],
                },
                {
                    title: "Contact us",
                    items: [
                        {
                            label: "Email",
                            href: "mailto:contact@amphoradata.com",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/amphoradata",
                        },
                        {
                            label: "Linkedin",
                            href:
                                "https://au.linkedin.com/company/amphora-data",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Amphora Data`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/facebook/docusaurus/edit/master/website/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    stylesheets: [
        "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
    ],
};
