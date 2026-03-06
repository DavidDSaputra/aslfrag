export interface Product {
    id: string;
    name: string;
    image: string;
    notes: string[];
    description: string;
    price: number;
    category: "Fresh" | "Woody" | "Floral" | "Sweet";
    gender: "Unisex" | "Men" | "Women";
}

export const products: Product[] = [
    {
        id: "icarus-velixir",
        name: "Icarus Velixir",
        image: "/images/produk1.jpeg",
        notes: ["Oud", "Black Pepper", "Leather"],
        description: "Perpaduan yang dalam dan tak kenal kompromi dari kayu gelap dan rempah-rempah. Untuk mereka yang menguasai ruangan.",
        price: 245,
        category: "Woody",
        gender: "Unisex"
    },
    {
        id: "agra-blanche",
        name: "Agra Blanche",
        image: "/images/model1.jpeg",
        notes: ["White Rose", "Musk", "Bergamot"],
        description: "Bersih, tak terlihat, namun mustahil untuk diabaikan. Aroma kemurnian absolut.",
        price: 185,
        category: "Floral",
        gender: "Women"
    },
    {
        id: "agra-vert",
        name: "Agra Vert",
        image: "/images/model2.jpeg",
        notes: ["Vetiver", "Pine", "Moss"],
        description: "Alam liar yang tertangkap dalam botol. Tajam, hijau, dan menyegarkan.",
        price: 160,
        category: "Fresh",
        gender: "Men"
    },
    {
        id: "agra-rouge",
        name: "Agra Rouge",
        image: "/images/model3.jpeg",
        notes: ["Saffron", "Vanilla", "Amber"],
        description: "Nektar manis yang memabukkan dan mewah, yang bertahan lama setelah Anda pergi.",
        price: 210,
        category: "Sweet",
        gender: "Unisex"
    },
    {
        id: "agra-midnight",
        name: "Agra Midnight",
        image: "/images/model4.jpeg",
        notes: ["Tobacco", "Incense", "Patchouli"],
        description: "Misterius dan berani. Teman sempurna untuk jam-jam tengah malam.",
        price: 220,
        category: "Woody",
        gender: "Men"
    },
    {
        id: "agra-lumiere",
        name: "Agra Lumière",
        image: "/images/section.jpeg",
        notes: ["Neroli", "Jasmine", "Citrus"],
        description: "Ledakan cahaya keemasan. Segar, floral, dan sangat mengangkat semangat.",
        price: 175,
        category: "Floral",
        gender: "Unisex"
    }
];
