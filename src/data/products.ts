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
    },
    {
        id: "icarus-noir",
        name: "Icarus Noir",
        image: "/images/model5.jpeg",
        notes: ["Oud", "Black Pepper", "Leather"],
        description: "Perpaduan yang dalam dan tak kenal kompromi dari kayu gelap dan rempah-rempah. Untuk mereka yang menguasai ruangan.",
        price: 242,
        category: "Woody",
        gender: "Unisex"
    },
    {
        id: "tropical-mirage",
        name: "Tropical Mirage",
        image: "/images/model6.jpeg",
        notes: ["Passionfruit", "Coconut", "Jasmine"],
        description: "Perpaduan buah tropis yang eksotis dengan sentuhan kelapa lembut, menciptakan aroma yang playful dan memikat.",
        price: 210,
        category: "Fresh",
        gender: "Unisex"
    },
    {
        id: "boreal-timber",
        name: "Boreal Timber",
        image: "/images/model7.jpeg",
        notes: ["Cedarwood", "Sandalwood", "Vetiver"],
        description:"Perpaduan kayu cedar yang hangat dengan sandalwood lembut dan vetiver yang earthy, memberikan kesan maskulin dan elegan.",
        price: 267,
        category: "Woody",
        gender: "Men"
    },
    {
        id: "verdant-pear",
        name: "Verdant Pear",
        image: "/images/model8.jpeg",
        notes: ["Pear", "Jasmine", "White Musk"],
        description:"Aroma pear yang juicy dipadukan dengan jasmine yang floral dan green tea yang segar, diakhiri dengan white musk yang lembut.",
        price: 240,
        category: "Floral",
        gender: "Women"
    },
    {
        id: "lavender-ember",
        name: "Lavender Ember",
        image: "/images/model9.jpeg",
        notes: ["Lavender", "Clove", "Honey"],
        description:"Lavender yang menenangkan berpadu dengan cengkeh yang hangat dan sedikit pedas. Sentuhan madu memberikan manis alami, sementara aroma daun kering menghadirkan nuansa earthy yang menenangkan.",
        price: 222,
        category: "Floral",
        gender: "Women"
    },
];