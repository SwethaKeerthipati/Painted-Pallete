const stripe = require("stripe")(
  "sk_test_51Naeu3Eh0kcTfsxtURSCi7TZwGF121IpKpPJESpIvbk8S2Qe12Q0cNDIP4kjAUDCEi5HtJoGuCeSfL8F9oGq5qQr00VCHEzEt0"
);

// Assuming you have an array of product data
const products = [
  //   { id: "product_1", name: "Product 1", amount: 1000, currency: "usd" },
  //   { id: "product_2", name: "Product 2", amount: 1500, currency: "usd" },
  {
    title: "CuteBirds",
    image: "/products/nature/CuteBirds.jpg",
    price: 2,
    currency: "eur",
    category: "Nature",
    description:
      "Delight in the charm of nature with our CuteBirds collection.",
  },
  {
    title: "Peacock",
    image: "/products/nature/Peacock.png",
    price: 2,
    currency: "eur",
    category: "Nature",
    description: "Behold the majestic beauty of the Peacock collection.",
  },
  {
    title: "Peacock-Madhubani",
    image: "/products/nature/Peacock-Madhubani.png",
    price: 2,
    currency: "eur",
    category: "Nature",
    description:
      "Experience art and nature with our Peacock-Madhubani collection.",
  },
  {
    title: "Village",
    image: "/products/nature/Village.jpg",
    price: 4,
    currency: "eur",
    category: "Nature",
    description: "Step into the tranquility of our Village collection.",
  },
  {
    title: "VillageShore",
    image: "/products/nature/VillageShore.jpg",
    price: 4,
    currency: "eur",
    category: "Nature",
    description: "Unwind by the waterside with our VillageShore collection.",
  },
  {
    title: "Birdsnest",
    image: "/products/nature/BirdsNest.jpg",
    price: 2,
    currency: "eur",
    category: "Nature",
    description:
      "Discover the essence of comfort and care with our Birdsnest collection.",
  },
  {
    title: "Birds",
    image: "/products/nature/Birds.jpg",
    price: 2,
    currency: "eur",
    category: "Nature",
    description: "Delight in the freedom and grace of our Birds collection.",
  },
  {
    title: "AncientVillage",
    image: "/products/nature/AncientVillage.jpg",
    price: 4,
    currency: "eur",
    category: "Nature",
    description: "Journey back in time with our AncientVillage collection.",
  },

  {
    title: "Bird-House",
    image: "/products/cute/Bird -House.jpg",
    price: 4,
    currency: "eur",
    category: "Cute",
    description:
      "A charming little birdhouse, the perfect home for feathered friends.",
  },
  {
    title: "Cute-Elephant",
    image: "/products/cute/Cute-Elephant.jpg",
    price: 2,
    currency: "eur",
    category: "Cute",
    description: "An adorable baby elephant with a cute and playful demeanor.",
  },
  {
    title: "Kitty",
    image: "/products/cute/Kitty.jpg",
    price: 2,
    currency: "eur",
    category: "Cute",
    description: "A sweet and curious little kitty, the epitome of cuteness.",
  },
  {
    title: "Panda",
    image: "/products/cute/Panda.jpg",
    price: 2,
    currency: "eur",
    category: "Cute",
    description: "A lovable panda bear, a symbol of peace and harmony.",
  },
  {
    title: "Playing-Dog",
    image: "/products/cute/Playing-Dog.jpg",
    price: 2,
    currency: "eur",
    category: "Cute",
    description:
      "An energetic and playful dog, always ready for fun and games.",
  },
  {
    title: "Rabbit",
    image: "/products/cute/Rabbit.jpg",
    price: 2,
    currency: "eur",

    category: "Cute",
    description:
      "A fluffy and gentle rabbit, a favorite companion for all ages.",
  },
  {
    title: "Teddy",
    image: "/products/cute/Teddy.jpg",
    price: 2,
    currency: "eur",
    category: "Cute",
    description: "A cuddly teddy bear, bringing comfort and joy to everyone.",
  },
  {
    title: "Tom",
    image: "/products/cute/Tom.jpg",
    price: 5,
    currency: "eur",
    category: "Cute",
    description:
      "A friendly and mischievous cat, known for its adventurous spirit.",
  },
  {
    title: "3D-Mandala",
    image: "/products/mandala/3D-Mandala.png",
    price: 4,
    currency: "eur",
    category: "Mandala",
    description:
      "An intricate and mesmerizing 3D mandala design, a feast for the eyes.",
  },
  {
    title: "Butterfly",
    image: "/products/mandala/Buterfly.jpg",
    price: 2,
    currency: "eur",
    category: "Mandala",
    description:
      "A delicate and graceful butterfly, a symbol of transformation and beauty.",
  },
  {
    title: "Circle-Mandala",
    image: "/products/mandala/Circle-Mandala.jpg",
    price: 4,
    currency: "eur",
    category: "Mandala",
    description:
      "A beautifully symmetrical circle mandala, radiating harmony and balance.",
  },
  {
    title: "Color-Mandala",
    image: "/products/mandala/Color-Mandala.jpg",
    price: 4,
    currency: "eur",
    category: "Mandala",
    description:
      "A vibrant and colorful mandala, representing unity and creativity.",
  },
  {
    title: "Conch shell",
    image: "/products/mandala/Conch shell.jpg",
    price: 3,
    currency: "eur",
    category: "Mandala",
    description:
      "A mystical and symbolic conch shell, evoking a sense of tranquility.",
  },
  {
    title: "Doodle-Art",
    image: "/products/mandala/Doodle-Art.jpg",
    price: 2,
    currency: "eur",
    category: "Mandala",
    description:
      "A playful and whimsical doodle art, celebrating imagination and spontaneity.",
  },
  {
    title: "Emission",
    image: "/products/mandala/Emission.jpg",
    price: 4,
    currency: "eur",
    category: "Mandala",
    description:
      "An abstract and radiant emission, capturing the essence of light and energy.",
  },
  {
    title: "Flower-Mandala",
    image: "/products/mandala/Flower-Mandala.png",
    price: 4,
    currency: "eur",
    category: "Mandala",
    description:
      "A harmonious and floral mandala, symbolizing growth and blooming beauty.",
  },
  {
    title: "Flute",
    image: "/products/mandala/Flute.jpg",
    price: 5,
    currency: "eur",
    category: "Mandala",
    description:
      "An elegant and soulful flute, producing melodies that touch the heart.",
  },
  {
    title: "Hen",
    image: "/products/mandala/Hen.jpg",
    price: 3,
    currency: "eur",
    category: "Mandala",
    description:
      "A charming and endearing hen, a cheerful addition to any space.",
  },
  {
    title: "IceCream",
    image: "/products/mandala/IceCream.jpg",
    price: 2,
    currency: "eur",
    category: "Mandala",
    description:
      "A delightful and delicious ice cream cone, a sweet treat to savor.",
  },
  {
    title: "leaves",
    image: "/products/mandala/leaves.jpg",
    price: 2,
    currency: "eur",
    category: "Mandala",
    description:
      "A collection of vibrant leaves, celebrating nature's beauty and diversity.",
  },
  {
    title: "Peacock-Earring",
    image: "/products/mandala/Peacock-Earring.jpg",
    price: 5,
    currency: "eur",
    category: "Mandala",
    description:
      "An exquisite peacock earring, symbolizing grace and elegance.",
  },
  {
    title: "Plants",
    image: "/products/mandala/Plants.jpg",
    price: 9,
    currency: "eur",
    category: "Mandala",
    description:
      "A lush and verdant plant arrangement, bringing life and freshness indoors.",
  },
  {
    title: "Water-can",
    image: "/products/mandala/Water can.jpg",
    price: 5,
    currency: "eur",
    category: "Mandala",
    description:
      "A vintage-style watering can, a nurturing companion for your beloved plants.",
  },
  {
    title: "2D home",
    image: "/products/Pencil/2d home.jpg",
    price: 12,
    currency: "eur",
    category: "Pencil",
    description:
      "A charming 2D home sketch, capturing the essence of comfort and warmth.",
  },
  {
    title: "butterfly",
    image: "/products/Pencil/Butterfly.jpg",
    price: 7,
    currency: "eur",
    category: "Pencil",
    description:
      "An elegant butterfly drawing, symbolizing transformation and freedom.",
  },
  {
    title: "Birds",
    image: "/products/Pencil/Birds.jpg",
    price: 9,
    currency: "eur",
    category: "Pencil",
    description:
      "A delightful sketch of birds in flight, representing harmony and unity.",
  },
  {
    title: "Father-Daughter",
    image: "/products/Pencil/Father-Daughter.jpg",
    price: 5,
    currency: "eur",
    category: "Pencil",
    description:
      "A heartwarming drawing of a father and daughter, showcasing love and bonding.",
  },
  {
    title: "Friends",
    image: "/products/Pencil/Friends.jpg",
    price: 4,
    currency: "eur",
    category: "Pencil",
    description:
      "A touching depiction of friendship, a bond that knows no boundaries.",
  },
  {
    title: "girl",
    image: "/products/Pencil/Girl.jpg",
    price: 2,
    currency: "eur",
    category: "Pencil",
    description:
      "An innocent and endearing sketch of a girl, radiating innocence and joy.",
  },
  {
    title: "GirlwithUmbrella",
    image: "/products/Pencil/GirlwithUmbrella.jpg",
    price: 2,
    currency: "eur",
    category: "Pencil",
    description:
      "A whimsical illustration of a girl with an umbrella, ready to embrace rain's magic.",
  },
  {
    title: "House",
    image: "/products/Pencil/House.jpg",
    price: 4,
    currency: "eur",
    category: "Pencil",
    description:
      "A cozy and inviting house sketch, a sanctuary where memories are made.",
  },
  {
    title: "Mind",
    image: "/products/Pencil/Mind.jpg",
    price: 5,
    currency: "eur",
    category: "Pencil",
    description:
      "A surreal representation of the mind, a realm of imagination and wonder.",
  },
  {
    title: "Plant",
    image: "/products/Pencil/Plant.jpg",
    price: 2,
    currency: "eur",
    category: "Pencil",
    description:
      "A lovely Pencil sketch of a potted plant, celebrating nature's beauty indoors.",
  },
  {
    title: "Radha-Krishna",
    image: "/products/Pencil/Radha-Krishna.jpg",
    price: 4,
    currency: "eur",
    category: "Pencil",
    description:
      "An artistic portrayal of the divine love between Radha and Krishna.",
  },
  {
    title: "TreeandGirl",
    image: "/products/Pencil/TreeandGirl.jpg",
    price: 4,
    currency: "eur",
    category: "Pencil",
    description:
      "A heart-touching drawing of a girl sitting under the shade of a majestic tree.",
  },
  {
    title: "Animals",
    image: "/products/random/Animals.jpg",
    price: 4,
    currency: "eur",
    category: "Random",
    description:
      "A delightful artwork showcasing various adorable animals in their natural habitats.",
  },
  {
    title: "Birds",
    image: "/products/random/Birds.jpg",
    price: 2,
    currency: "eur",
    category: "Random",
    description:
      "A captivating illustration featuring a colorful flock of birds soaring through the skies.",
  },
  {
    title: "Elephants",
    image: "/products/random/Elephants.jpg",
    price: 3,
    currency: "eur",
    category: "Random",
    description:
      "A heartwarming depiction of majestic elephants, symbolizing strength and wisdom.",
  },
  {
    title: "Ganesha",
    image: "/products/random/Ganesha.jpg",
    price: 5,
    currency: "eur",
    category: "Random",
    description:
      "A divine portrayal of Lord Ganesha, the remover of obstacles, blessing all with his grace.",
  },
  {
    title: "Horse",
    image: "/products/random/Horse.jpg",
    price: 4,
    currency: "eur",
    category: "Random",
    description:
      "An elegant artwork capturing the grace and power of a magnificent horse in motion.",
  },
  {
    title: "Housee",
    image: "/products/random/Housee.jpg",
    price: 2,
    currency: "eur",
    category: "Random",
    description:
      "A cozy and charming depiction of a home, a place where cherished memories are made.",
  },
  {
    title: "Krishna-Flute",
    image: "/products/random/Krishna-Flute.jpg",
    price: 4,
    currency: "eur",
    category: "Random",
    description:
      "A soul-stirring portrayal of Lord Krishna playing the flute, enchanting all with his music.",
  },
  {
    title: "Krishna-Friends",
    image: "/products/random/Krishna-Friends.jpg",
    price: 4,
    currency: "eur",
    category: "Random",
    description:
      "A heartwarming scene of Lord Krishna with his beloved friends, creating cherished memories.",
  },
  {
    title: "LordKrishna",
    image: "/products/random/Lordkrishna.jpg",
    price: 6,
    currency: "eur",
    category: "Random",
    description:
      "An awe-inspiring depiction of Lord Krishna, radiating love and divinity.",
  },
  {
    title: "Rama",
    image: "/products/random/Rama.jpg",
    price: 5,
    currency: "eur",
    category: "Random",
    description:
      "A regal and majestic portrait of Lord Rama, exemplifying virtue and righteousness.",
  },
  {
    title: "Starry Night",
    image: "/products/random/Starry Night.jpg",
    price: 7,
    currency: "eur",
    category: "Random",
    description:
      "A mesmerizing night scene adorned with stars, sparking dreams and wonder.",
  },
  {
    title: "Valmiki",
    image: "/products/random/Valmiki.jpg",
    price: 2,
    currency: "eur",
    category: "Random",
    description:
      "A tribute to the great sage Valmiki, the author of the epic Ramayana.",
  },
  {
    title: "Warli Art",
    image: "/products/random/Warli Art.jpg",
    price: 4,
    currency: "eur",
    category: "Random",
    description:
      "A beautiful representation of traditional Warli art, showcasing the simplicity of rural life.",
  },
  {
    title: "Warli",
    image: "/products/random/Warli.jpg",
    price: 4,
    currency: "eur",
    category: "Random",
    description:
      "An artistic tribute to the Warli tribe, reflecting their unique art and cultural heritage.",
  },
];

const createPricesForProducts = async (products) => {
  try {
    const pricePromises = products.map((product) =>
      stripe.prices.create({
        product_data: {
          name: product.title,
          metadata: {
            image: product.image,
            category: product.category,
            description: product.description,
            // images: [product.image],
          }, // Optional: Add any additional metadata here
        },
        unit_amount: product.price * 100, // Convert price to cents (or smallest currency unit)
        currency: product.currency,
      })
    );

    const prices = await Promise.all(pricePromises);
    console.log("Prices created:", prices);
    return prices;
  } catch (error) {
    console.error("Error creating prices:", error);
    throw error;
  }
};

// Call the function with your array of product data
createPricesForProducts(products);
