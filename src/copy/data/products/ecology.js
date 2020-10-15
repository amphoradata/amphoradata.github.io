const base = "https://app.amphoradata.com/Discover";
const org = "7b429e6c-2885-49cf-994d-4775ae170d64";
const yerc = "OrgId=e933a64f-be47-429e-9be1-ab53a5575db8&handler=MapView";
const qs = (term, labels, take) =>
    `Q.OrgId=${org}&Q.Term=${term}&Q.Labels=${labels}&Q.Take=${
        take || 100
    }&handler=MapView`;

export const products = [
    {
        title: "River flows",
        imageUrl: "/img/data-products/water_flow.PNG",
        description: ` Real-time actuals of major rivers in Australia including Murray
                and Darling. Parameters include water level, temperature,
                salinity, flow rate and more. Available now for free`,
        link: `${base}?${qs("Real Time", "Water")}`,
    },
    {
        title: "Yellowstone National Park",
        imageUrl: "/img/data-products/yellowstone.png",
        description: `Real water quality and quantity measurements from the Yellowstone Ecological Research Center.`,
        link: `${base}?${yerc}`,
    },
];
