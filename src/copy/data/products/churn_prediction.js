const base = "https://app.amphoradata.com/Discover";
const org = "7b429e6c-2885-49cf-994d-4775ae170d64";
const qs = (labels, take) =>
    `Q.OrgId=${org}&Q.Labels=${labels}&Q.Take=${take || 100}&handler=MapView`;

export const products = [
    {
        title: "Next best actions to improve customer retention",
        imageUrl: "/img/data-products/four2.PNG",
        description: `Clear actions to improve your customer retention. Ask "Who is likely to churn next month", "Who should I call today?", "What should I do to keep customer X" `,
        link: `https://four2.ai`,
    },
];
