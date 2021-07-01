module.exports = {
    url: "https://amphoradata.github.io",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    title: "Amphora",
    tagline: "The right answers to difficult questions.",
    // github pages config
    organizationName: "AmphoraData", // Usually your GitHub org/user name.
    projectName: "AmphoraData.github.io", // Usually your repo name.
    themeConfig: {
        colorMode: {
            disableSwitch: true,
        },

        //algolia: {
        //    apiKey: "0797d5513a4961659b3f15828b64f261",
        //    indexName: "amphoradata",
        //    algoliaOptions: {}, // Optional, if provided by Algolia
        //},
        // Google Analytics
        gtag: {
            trackingID: "UA-164144906-4",
            anonymizeIP: true,
        },
        navbar: {
            logo: {
                src: "img/Amphora Data_Logo_black.jpg",
                srcDark: "img/Amphora Data_Logo_white.png",
            },
        },
        footer: {
            logo: {},
            style: "dark",
            
            copyright: `Copyright © ${new Date().getFullYear()} Amphora Data - 34/1 Eagle St, Brisbane`,
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
