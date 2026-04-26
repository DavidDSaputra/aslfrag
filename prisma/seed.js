const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');
  // We will manually define the initial data since it's hard to require the TS file simply in a commonjs script
  const initialProducts = [
    {
        id: "hw-skyline-gt-r",
        name: "Nissan Skyline GT-R R34",
        image: "/images/produk1.jpeg",
        features: ["Diecast Metal", "Real Riders", "Detailed Engine"].join(','),
        description: "Legenda JDM yang tak terbantahkan. Detail presisi dengan ban karet asli dan kap mesin yang dapat dibuka, menyajikan miniatur sempurna dari monster jalanan Jepang.",
        price: 35,
        category: "JDM",
        scale: "1:64"
    },
    {
        id: "mini-mustang-boss",
        name: "Ford Mustang Boss 302",
        image: "/images/model1.jpeg",
        features: ["Opening Doors", "Detailed Interior", "Spectraflame Paint"].join(','),
        description: "Potongan sejarah American Muscle. Dibalut warna ikonik dengan detail interior yang memukau untuk para kolektor sejati.",
        price: 45,
        category: "Muscle",
        scale: "1:43"
    },
    {
        id: "autoart-huracan",
        name: "Lamborghini Huracan EVO",
        image: "/images/model2.jpeg",
        features: ["Composite Material", "Steerable Wheels", "Detailed Underbelly"].join(','),
        description: "Mahakarya miniatur berskala besar. Replika eksotis dengan presisi tingkat pabrikan yang menangkap setiap garis agresif sang banteng Italia.",
        price: 180,
        category: "Exotic",
        scale: "1:18"
    },
    {
        id: "hw-porsche-930",
        name: "Porsche 930 Turbo",
        image: "/images/model3.jpeg",
        features: ["Widebody Kit", "Real Riders", "Premium Decals"].join(','),
        description: "Siluet klasik yang abadi. Miniatur ini menangkap semangat era keemasan balap jalanan dengan sempurna.",
        price: 40,
        category: "Classic",
        scale: "1:64"
    },
    {
        id: "mini-rx7-fd",
        name: "Mazda RX-7 FD3S",
        image: "/images/model4.jpeg",
        features: ["Opening Hood", "Rotary Engine Detail", "Rubber Tires"].join(','),
        description: "Ikon rotari yang melegenda. Setiap lekukan kap mesin dan detail mesin wankel direplika dengan sangat teliti.",
        price: 50,
        category: "JDM",
        scale: "1:43"
    },
    {
        id: "cmc-ferrari-250",
        name: "Ferrari 250 GTO",
        image: "/images/section.jpeg",
        features: ["1k+ Parts", "Leather Seats", "Wired Engine"].join(','),
        description: "Cawan suci para kolektor. Dirakit dari ribuan komponen dengan interior kulit asli dan kabel mesin yang sesuai aslinya.",
        price: 450,
        category: "Classic",
        scale: "1:18"
    },
    {
        id: "hw-charger-rt",
        name: "'70 Dodge Charger R/T",
        image: "/images/model5.jpeg",
        features: ["Exposed Blower", "Metal Chassis", "Real Riders"].join(','),
        description: "Otot Amerika murni. Menghadirkan kekuatan drag strip ke dalam telapak tangan Anda dengan blower yang menonjol.",
        price: 35,
        category: "Muscle",
        scale: "1:64"
    },
    {
        id: "autoart-mclaren-p1",
        name: "McLaren P1",
        image: "/images/model6.jpeg",
        features: ["Active Aero Wing", "Carbon Fiber Texture", "Opening Butterfly Doors"].join(','),
        description: "Puncak rekayasa hypercar, kini dalam skala presisi. Menampilkan pintu kupu-kupu yang dapat beroperasi dan tekstur karbon yang memukau.",
        price: 210,
        category: "Exotic",
        scale: "1:18"
    },
    {
        id: "mini-supra-mk4",
        name: "Toyota Supra A80",
        image: "/images/model7.jpeg",
        features: ["TRD Bodykit", "Opening Doors", "Detailed 2JZ"].join(','),
        description: "Bintang tuner tahun 90-an. Membawa Anda kembali ke era keemasan modifikasi dengan detail mesin 2JZ yang fantastis.",
        price: 55,
        category: "JDM",
        scale: "1:43"
    },
    {
        id: "hw-camaro-ss",
        name: "'69 Chevrolet Camaro SS",
        image: "/images/model8.jpeg",
        features: ["Spectraflame Blue", "Redline Tires", "Full Diecast"].join(','),
        description: "Kembali ke masa lalu dengan sentuhan modern. Warna cat premium yang memantulkan cahaya dan ban khas yang ikonis.",
        price: 40,
        category: "Muscle",
        scale: "1:64"
    },
    {
        id: "autoart-f40",
        name: "Ferrari F40",
        image: "/images/model9.jpeg",
        features: ["Pop-up Lights", "Tubular Chassis", "V8 Biturbo Detail"].join(','),
        description: "Simbol kecepatan murni tanpa kompromi. Garis tegas dan spoiler tinggi direplikasi dengan sangat sempurna untuk lemari pajangan Anda.",
        price: 260,
        category: "Exotic",
        scale: "1:18"
    }
  ];

  for (const p of initialProducts) {
    const product = await prisma.product.upsert({
      where: { id: p.id },
      update: {},
      create: p,
    });
    console.log(`Created product with id: ${product.id}`);
  }
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
