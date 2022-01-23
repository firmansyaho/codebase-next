import { Categories } from "./Categories/categories.constants";

/* sidebar */
export const SIDEBAR_WIDTH = "240px";
export const SIDEBAR_MENU = [
    {
        id: 0,
        name: "Dashboard",
    },
    {
        id: 1,
        name: "Users",
    },
];

/* data test */
export const db = {
    nftData: [
        {
            id: "0",
            title: "New NFT",
            description: "2021 nft",
            category: Categories.Digital,
            imageUrl:
                "https://randomwordgenerator.com/img/picture-generator/52e2d6424b50ab14f1dc8460962e33791c3ad6e04e507749712e79d29244c3_640.jpg",
        },
        {
            id: "1",
            title: "Painting NFT 2",
            description: "2022 nft",
            category: Categories.Painting,
            imageUrl:
                "https://randomwordgenerator.com/img/picture-generator/55e9dc444b5baf14f1dc8460962e33791c3ad6e04e507440762e79d79145cc_640.jpg",
        },
        {
            id: "2",
            title: "Books NFT",
            description: "2023 nft",
            category: Categories.Books,
            imageUrl:
                "https://randomwordgenerator.com/img/picture-generator/55e9dc444b5baf14f1dc8460962e33791c3ad6e04e507440762e79d79145cc_640.jpg",
        },
    ],
};
