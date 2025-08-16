const groceryItems = [
  {
    name: "Tomato Local",
    quantity: "500 g",
    price: 15,
    originalPrice: 27,
    discount: "44% Off",
    description: "Fresh local tomatoes perfect for curries, salads, and sauces.",
    image: "https://www.shutterstock.com/image-photo/closeup-many-bright-fresh-tomatoes-260nw-2476251837.jpg",
    category: "vegetables"
  },
  {
    name: "Onion",
    quantity: "1 Pack (900 - 1000 Gm)",
    price: 24,
    originalPrice: 67,
    discount: "64% Off",
    description: "Essential kitchen staple used in most Indian dishes.",
    image: "https://media.istockphoto.com/id/1181631588/photo/onions-for-sale-in-the-weekly-market-malkapur-maharashtra.jpg?s=612x612&w=0&k=20&c=KYz1slV6Ly-T7v2vH7jns7ab9i_M6Atjq52uNPh3gRo=",
    category: "vegetables"
  },
  {
    name: "Potato",
    quantity: "1 Pack (900 - 1000 Gm)",
    price: 32,
    originalPrice: 71,
    discount: "54% Off",
    description: "Versatile vegetable ideal for frying, boiling, and curries.",
    image: "https://images.pexels.com/photos/7129145/pexels-photo-7129145.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    category: "vegetables"
  },
  {
    name: "Carrot",
    quantity: "500 g",
    price: 24,
    originalPrice: 49,
    discount: "51% Off",
    description: "Crunchy and sweet carrots perfect for salads and cooking.",
    image: "https://media.istockphoto.com/id/1388403435/photo/fresh-carrots-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=XmrTb_nASc7d-4zVKUz0leeTT4fibDzWi_GpIun0Tlc=",
    category: "vegetables"
  },
  {
    name: "Cucumber Green/Kheera Dosakaya",
    quantity: "500 g",
    price: 19,
    originalPrice: 49,
    discount: "61% Off",
    description: "Cool and refreshing cucumbers ideal for salads and raitas.",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1280-1280,pr-true,f-auto,q-80/inventory/product/923a7fca-5d41-41a9-9452-02906df8a9a6-de15b275-c93b-40b0-ad95-b13d1f65969d.jpeg",
    category: "vegetables"
  },
  {
    name: "Cabbage",
    quantity: "500 - 700 g",
    price: 15,
    originalPrice: 34,
    discount: "55% Off",
    description: "Leafy vegetable great for stir-fries, curries, and salads.",
    image: "https://exat8rt6fi5.exactdn.com/wp-content/uploads/2022/05/cabbage-01.jpg?strip=all&lossy=1&ssl=1",
    category: "vegetables"
  },
  {
    name: "Brinjal Long Purple",
    quantity: "250 g",
    price: 12,
    originalPrice: 31,
    discount: "61% Off",
    description: "Tender brinjals perfect for bharwa or traditional curries.",
    image: "https://www.shutterstock.com/image-photo/hand-holding-long-purple-eggplants-260nw-2633083169.jpg",
    category: "vegetables"
  },
  {
    name: "Lady Finger (Bhindi)",
    quantity: "250 g",
    price: 13,
    originalPrice: 28,
    discount: "53% Off",
    description: "Great for crispy fries or gravy dishes.",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/6/SS/EY/PL/31131351/fresh-okra-lady-finger.jpg",
    category: "vegetables"
  },
  {
    name: "Drumsticks",
    quantity: "3 x (150 - 280 g)",
    price: 27,
    originalPrice: 59,
    discount: "54% Off",
    description: "Flavorful addition to sambhar and South Indian dishes.",
    image: "https://static.toiimg.com/thumb/imgsize-23456,msid-69928440,width-600,resizemode-4/69928440.jpg",
    category: "vegetables"
  },
  {
    name: "Beetroot",
    quantity: "250 g",
    price: 17,
    originalPrice: 22,
    discount: "22% Off",
    description: "Rich in iron and nutrients, ideal for salads and juices.",
    image: "https://choosemyfresh.com/image/cache/catalog/beetroot-1600x1090.jpg",
    category: "vegetables"
  },
  {
    name: "Cauliflower",
    quantity: "1 pc (400 - 600 g)",
    price: 37,
    originalPrice: 69,
    discount: "46% Off",
    description: "Great for parathas, curries, and Indo-Chinese dishes.",
    image: "https://www.shutterstock.com/image-photo/fresh-cauliflower-isolated-on-white-600nw-2554994495.jpg",
    category: "vegetables"
  },
  {
    name: "Beans Cluster (Gawar Phali)",
    quantity: "250 g",
    price: 15,
    originalPrice: 36,
    discount: "58% Off",
    description: "Rich in fiber, good for stir-fries and traditional recipes.",
    image: "https://plantorbit.com/cdn/shop/products/71Z7cyed4vL._SL1000_8bca7548-e433-4e6a-a601-428ed80950d5.jpg?v=1712526565&width=1445",
    category: "vegetables"
  },
  {
    name: "Banana Raw",
    quantity: "2 pcs",
    price: 20,
    originalPrice: 61,
    discount: "67% Off",
    description: "Used in curries and stir-fries, rich in starch and flavor.",
    image: "https://media.istockphoto.com/id/928048422/photo/mans-hand-take-bananas-from-shelf-of-store-healthy-food-shopping-concept.jpg?s=612x612&w=0&k=20&c=ElB-RZcdVFr5tw83Vub6kt6rllKugYrsXVth7BrQKxU=",
    category: "vegetables"
  },
  {
    name: "Brinjal Round Green",
    quantity: "500 g",
    price: 20,
    originalPrice: 52,
    discount: "61% Off",
    description: "Mild flavor brinjal, ideal for curries and roasting.",
    image: "https://www.jiomart.com/images/product/original/590000166/brinjal-round-green-250-g-product-images-o590000166-p590000166-0-202412031731.jpg?im=Resize=(1000,1000)",
    category: "vegetables"
  },
  {
    name: "Sweet Potato",
    quantity: "500 g",
    price: 29,
    originalPrice: 80,
    discount: "63% Off",
    description: "Naturally sweet and nutritious, great for roasting or curries.",
    image: "https://media.gettyimages.com/id/2201906070/photo/sweet-potatoes-harvested-in-the-field-xinhui-district-jiangmen-city-guangdong-province-china.jpg?s=612x612&w=gi&k=20&c=EnDX12a57rf3MK5iIf8OqZlxI4Pq4E6taMvmQFuYhTA=",
    category: "vegetables"
  },

  {
    name: "Apple Fuji",
    quantity: "4 pcs (Approx. 600 g)",
    price: 149,
    originalPrice: 220,
    discount: "32% Off",
    description: "Crisp and juicy Fuji apples rich in fiber and antioxidants.",
    image: "https://media.istockphoto.com/id/2021650011/photo/japanese-fuji-apples-on-cutting-board.jpg?s=612x612&w=0&k=20&c=GVE3j-jU8E1jqTsokKJX5Mt4XNKQlkvgRrbU2ZSNYV0=",
    category: "fruits"
  },
  {
    name: "Banana Yelakki",
    quantity: "6 pcs",
    price: 38,
    originalPrice: 60,
    discount: "37% Off",
    description: "Sweet and aromatic small-sized bananas perfect for snacks.",
    image: "https://www.jiomart.com/images/product/original/590000617/banana-yellaki-1-kg-product-images-o590000617-p590000617-1-202409171906.jpg?im=Resize=(420,420)",
    category: "fruits"
  },
  {
    name: "Mango Banganapalli",
    quantity: "1 kg",
    price: 119,
    originalPrice: 180,
    discount: "34% Off",
    description: "Juicy and aromatic mangoes with a rich tropical flavor.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTT28L9yv5nqYQYsXGLfdOuQwfBmdA9JOpgw&s",
    category: "fruits"
  },
  {
    name: "Papaya",
    quantity: "1 pc (800 - 1200 g)",
    price: 35,
    originalPrice: 65,
    discount: "46% Off",
    description: "Sweet and digestive fruit, ideal for smoothies and salads.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1P1KCrZr9tZ3ZhgwHj7OQxEkVQs8o6MTeQ&s",
    category: "fruits"
  },
  {
    name: "Orange Kinnow",
    quantity: "4 pcs",
    price: 55,
    originalPrice: 90,
    discount: "39% Off",
    description: "Juicy and tangy oranges packed with Vitamin C.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzy7UyqyaYmkE5oaCfs_VZaaE7-jHQp_dgyA&s",
    category: "fruits"
  },
  {
    name: "Pomegranate",
    quantity: "2 pcs (Approx. 500 g)",
    price: 79,
    originalPrice: 130,
    discount: "39% Off",
    description: "Bright red pomegranates rich in antioxidants and iron.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Qrz0t0Knqq19tbUx4fuBPTC2pJe6PFiZ-A&s",
    category: "fruits"
  },
  {
    name: "Watermelon",
    quantity: "1 pc (2 - 3 kg)",
    price: 59,
    originalPrice: 95,
    discount: "38% Off",
    description: "Refreshing summer fruit packed with hydration.",
    image: "https://static.toiimg.com/thumb/msid-109932142,width-1280,height-720,resizemode-4/109932142.jpg",
    category: "fruits"
  },
  {
    name: "Grapes Green Seedless",
    quantity: "500 g",
    price: 49,
    originalPrice: 85,
    discount: "42% Off",
    description: "Crisp, juicy grapes perfect for snacking or juices.",
    image: "https://img.freepik.com/free-photo/bunch-grapes-background-sunny-sky-close-up_1391-278.jpg?semt=ais_hybrid&w=740&q=80",
    category: "fruits"
  },
  {
    name: "Guava",
    quantity: "4 pcs",
    price: 35,
    originalPrice: 55,
    discount: "36% Off",
    description: "Rich in Vitamin C and fiber, great for immunity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-bx6ebOxytE-7ekYvD09Amf7ecu7LkHrGLw&s",
    category: "fruits"
  },
  {
    name: "Kiwi",
    quantity: "3 pcs",
    price: 79,
    originalPrice: 110,
    discount: "28% Off",
    description: "Tangy and vitamin-rich fruit ideal for detox and energy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qUhjzRNvjrUHvzubJRBO2ewJqFAllS95b58758fv910yjL5OZY9IVz-Uft5eZIvEDtw&usqp=CAU",
    category: "fruits"
  },
  {


    name: "Ugaoo Syngonium Pink Plant with Red Self Watering Pot",
    quantity: "1 pc",
    price: 299,
    originalPrice: 383,
    discount: "21% Off",
    description: "A charming pink Syngonium in a red self-watering pot – perfect for indoor décor.",
    image: "https://www.ugaoo.com/cdn/shop/products/GrailCeramicPot-Peach_3bebbe37-b88b-4a67-a4a4-cc6bbb06def8.jpg?v=1748850986&width=1100",
    category: "seeds-plants"
  },
  {
    name: "Bloom Air Purifying Peace Lily Plant",
    quantity: "1 pc",
    price: 169,
    originalPrice: 217,
    discount: "22% Off",
    description: "Elegant peace lily that purifies air and adds a serene touch to your room.",
    image: "https://m.media-amazon.com/images/I/41R55nKqbLL._UF1000,1000_QL80_.jpg",
    category: "seeds-plants"
  },
  {
    name: "Ugaoo Two Layer Feng-Shui Bamboo Plant",
    quantity: "1 pc",
    price: 239,
    originalPrice: 306,
    discount: "21% Off",
    description: "A two-layer bamboo plant symbolizing prosperity and good fortune.",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-3685-3685,pr-true,f-auto,q-80/cms/product_variant/77925da4-f8ac-4d40-9c5e-c3e4a1824393.jpeg",
    category: "seeds-plants"
  },
  {
    name: "Bloom Good Luck Money Plant",
    quantity: "1 pc",
    price: 169,
    originalPrice: 217,
    discount: "22% Off",
    description: "Bring wealth and wellness to your home with this hardy money plant.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0x39zUqn5OtlbyiTGijkjTjEIeWi_81_jIg&s",
    category: "seeds-plants"
  },
  {
    name: "Ugaoo Cherry Tomato Seeds",
    quantity: "1 pc",
    price: 99,
    originalPrice: 127,
    discount: "22% Off",
    description: "Grow delicious cherry tomatoes at home with high-quality seeds.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHpKxxB_jErhM-4sZDkWfzPvNTAO1wKZRPTQ&s",
    category: "seeds-plants"
  },
  {
    name: "Ugaoo Petunia Mix Seeds",
    quantity: "1 pc",
    price: 149,
    originalPrice: 191,
    discount: "21% Off",
    description: "Vibrant mix of petunia seeds – ideal for bright flower beds or pots.",
    image: "https://www.ugaoo.com/cdn/shop/files/5_c672423e-5e46-4263-9eb8-5af999bb1828.jpg?v=1726308018&width=1000",
    category: "seeds-plants"
  },
  {
    name: "Ugaoo Jade Feng-Shui Plant With Self Watering Pot",
    quantity: "1 pc",
    price: 218,
    originalPrice: 279,
    discount: "21% Off",
    description: "Lucky Feng-Shui jade plant with a modern self-watering pot for easy care.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbV3WyzT9ELMCsmkYvtfprhq05Lsr7nNIIcg&s",
    category: "seeds-plants"
  },
  {
    name: "Bloom Rubber Plant",
    quantity: "1 pc",
    price: 189,
    originalPrice: 242,
    discount: "21% Off",
    description: "Glossy-leaved rubber plant that purifies air and adds greenery to your space.",
    image: "https://m.media-amazon.com/images/I/31YIRKXGgnL._AC_.jpg",
    category: "seeds-plants"
  },
  {
    name: "Ugaoo Zinnia Double Mix Seeds",
    quantity: "1 pc",
    price: 99,
    originalPrice: 127,
    discount: "22% Off",
    description: "Beautiful double-petal Zinnia flowers – colorful and easy to grow.",
    image: "https://www.ugaoo.com/cdn/shop/products/1-5-gm-zinnia-double-mix-seeds-31902285987972.jpg?v=1675627197",
    category: "seeds-plants"
  },
  {
    name: "Ugaoo Capsicum Seeds",
    quantity: "1 pc",
    price: 99,
    originalPrice: 127,
    discount: "22% Off",
    description: "Premium capsicum seeds for growing crisp and fresh bell peppers.",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/0f336a44-4b37-4493-9593-a3a358c2a305.jpeg",
    category: "seeds-plants"
  },

  {
    name: "Fresh Rose Bouquet (Red)",
    quantity: "1 Bouquet (10 Stems)",
    price: 199,
    originalPrice: 299,
    discount: "33% Off",
    description: "A romantic bouquet of 10 fresh red roses, handpicked and wrapped for gifting.",
    image: "https://cdn.pixabay.com/photo/2017/07/18/06/51/red-roses-2514940_1280.jpg",
    category: "flowers-bouquets-leaves"
  },
  {
    name: "Marigold Garland (Orange-Yellow)",
    quantity: "1 Garland (5 ft)",
    price: 89,
    originalPrice: 130,
    discount: "32% Off",
    description: "Traditional marigold garland ideal for home décor, pujas, or festive occasions.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/9/452701898/GC/AX/AO/64430080/61dc5jfdgql-sl1000-500x500.jpg",
    category: "flowers-bouquets-leaves"
  },
  {
    name: "Tulip Flower Bunch (Mixed Colors)",
    quantity: "1 Bunch (6 Stems)",
    price: 239,
    originalPrice: 319,
    discount: "25% Off",
    description: "Elegant mixed tulips in vibrant colors — perfect for home or gifting.",
    image: "https://petalbox.com/wp-content/uploads/2024/02/CHEERFUL-MIX-TULIPS-BOUQUET.jpg",
    category: "flowers-bouquets-leaves"
  },
  {
    name: "Jasmine Flower Veni (Mallige)",
    quantity: "1 String (Approx. 50 g)",
    price: 65,
    originalPrice: 95,
    discount: "32% Off",
    description: "Fragrant jasmine string for hair adornment or rituals.",
    image: "https://5.imimg.com/data5/JI/GL/MY-5816306/mallige-flowers-500x500.jpg",
    category: "flowers-bouquets-leaves"
  },
  {
    name: "Orchid Bouquet (Purple)",
    quantity: "1 Bouquet (6 Stems)",
    price: 289,
    originalPrice: 399,
    discount: "28% Off",
    description: "Graceful purple orchids arranged in a fresh bouquet, perfect for celebrations.",
    image: "hhttps://luvflowercake.com/wp-content/uploads/2024/01/1687354473_12805.webp",
    category: "flowers-bouquets-leaves"
  },
  {
    name: "Rose Petals (Loose)",
    quantity: "100 g",
    price: 45,
    originalPrice: 65,
    discount: "31% Off",
    description: "Fresh red rose petals for decoration, rituals, or skincare.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrQGakj-pwcXrg98pr8Bpfh09vyK-J_I8rw&s",
    category: "flowers-bouquets-leaves"
  },
  {
    name: "Banana Leaf (Thoranam Use)",
    quantity: "1 pc (Large)",
    price: 15,
    originalPrice: 25,
    discount: "40% Off",
    description: "Fresh green banana leaf ideal for traditional meals and rituals.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_8VfGXZjdJyW67myydtcbtxubrBF-rxnRw&s",
    category: "flowers-bouquets-leaves"
  },
  {
    name: "Bouquet of Mix Carnations",
    quantity: "1 Bouquet (10 Stems)",
    price: 179,
    originalPrice: 269,
    discount: "34% Off",
    description: "A colorful bunch of carnations to light up your room or celebration.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ow5IyVh1wigndZRoHBs80-0sDI6tZ-gM4Q&s",
    category: "flowers-bouquets-leaves"
  },
  {
    name: "Fresh Lotus Flowers",
    quantity: "3 pcs",
    price: 55,
    originalPrice: 80,
    discount: "31% Off",
    description: "Sacred and serene lotus flowers, ideal for puja and meditation spaces.",
    image: "https://image.made-in-china.com/202f0j00mhaBESGclAoO/Nice-Discount-Fresh-Cut-Flower-Ornamental-Fresh-Cut-Flower-Lotus-Flower-for-Decoration.webp",
    category: "flowers-bouquets-leaves"
  },
  {
    name: "Aromatic Eucalyptus Leaves",
    quantity: "1 Bunch (100 g)",
    price: 49,
    originalPrice: 75,
    discount: "35% Off",
    description: "Soothing eucalyptus leaves with a natural aroma for décor and health.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/055/519/403/small_2x/aromatic-eucalyptus-leaves-bunch-fresh-green-herbal-plantgraphy-free-photo.jpg",
    category: "flowers-bouquets-leaves"
  },

    {
      name: "OnePlus Pad Go",
      category: "tablets",
      price: 17999,
      originalPrice: null,
      discount: null,
      description: "A budget-friendly tablet with a 2.4K display and Dolby Atmos speakers.",
      image: "https://image01-in.oneplus.net/india-oneplus-statics-file/epb/202310/04/mVKR3hRa1Y2FO0pH.png?x-amz-process=image/format,webp/quality,Q_80"
    },
    {
      name: "Xiaomi Pad 7",
      category: "tablets",
      price: 32998,
      originalPrice: null,
      discount: null,
      description: "Features a Snapdragon 7+ Gen 3 processor and a 144Hz display.",
      image: "https://www.jansatta.com/wp-content/uploads/2025/01/Xiaomi-Pad-7.jpg"
    },
    {
      name: "Samsung Galaxy Tab S9 FE",
      category: "tablets",
      price: 27000,
      originalPrice: null,
      discount: null,
      description: "Offers a 10.9-inch display with S Pen support and Exynos 1380 chipset.",
      image: "https://dakauf.eu/wp-content/uploads/2024/05/Tablet-Samsung-Galaxy-Tab-S9-FE-X516-10.9-5G-8GB-RAM-256GB-Grey.png"
    },
    {
      name: "Realme Pad X",
      category: "tablets",
      price: 10630,
      originalPrice: null,
      discount: null,
      description: "Equipped with a Snapdragon 695 processor and a 10.95-inch display.",
      image: "https://static.c.realme.com/IN/wm-thread/1555050161791602688.jpg"
    },
  
    {
      name: "Sony WH-1000XM6",
      category: "headphones",
      price: 40496.84,
      originalPrice: null,
      discount: null,
      description: "Industry-leading noise cancellation with enhanced sound quality.",
      image: "https://i.ytimg.com/vi/wtCmdWaXqYo/hqdefault.jpg?v=68261280"
    },
    {
      name: "boAt Rockerz 450",
      category: "headphones",
      price: 1399,
      originalPrice: null,
      discount: null,
      description: "Wireless headphones with 15 hours of playback and 40mm drivers.",
      image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/8/1/0c7fdba3-c0d2-427a-94b9-711b501c2fd8_DQ8X4816G1.png"
    },
    {
      name: "JBL Tune 510BT",
      category: "headphones",
      price: 2799,
      originalPrice: null,
      discount: null,
      description: "On-ear wireless headphones with up to 40 hours of playtime.",
      image: "https://m.media-amazon.com/images/I/61kFL7y3bKL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
      name: "Soundcore by Anker Q20i",
      category: "headphones",
      price: 4499,
      originalPrice: null,
      discount: null,
      description: "Hybrid active noise-canceling headphones with Hi-Res audio.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9Ro8BXkgmFjDLK0dV-gXE1gdhb26jYkrkQ&s"
    },
 
    {
      name: "JBL Flip 6",
      category: "speakers",
      price: 8999,
      originalPrice: null,
      discount: null,
      description: "Portable Bluetooth speaker with powerful sound and IP67 waterproof rating.",
      image: "https://i.rtings.com/assets/products/kZx0LRvy/jbl-flip-6/design-medium.jpg?format=auto"
    },
    {
      name: "boAt Stone 1200",
      category: "speakers",
      price: 3999,
      originalPrice: null,
      discount: null,
      description: "Wireless speaker with 14W RMS stereo sound and RGB LEDs.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLTeJ4Fhy5kQeYSD_bQcyAd2CI_dPSu5bxg&s"
    },
    {
      name: "Sony SRS-XB13",
      category: "speakers",
      price: 3799,
      originalPrice: null,
      discount: null,
      description: "Compact Bluetooth speaker with Extra Bass and 16 hours of battery life.",
      image: "https://cdn.mos.cms.futurecdn.net/mfKh2u7sQmSFmEkNgciizF.jpg"
    },
    {
      name: "Marshall Emberton II",
      category: "speakers",
      price: 14999,
      originalPrice: null,
      discount: null,
      description: "Portable speaker with True Stereophonic sound and 30+ hours of playtime.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcaK5C9yR4GSWn3Kaw3NEp8di3RNOfmGSU5Q&s"
    },

    {
      name: "Samsung Galaxy Watch Ultra",
      category: "smartWatches",
      price: 48999,
      originalPrice: 100000,
      discount: "29% OFF",
      description: "Rugged smartwatch with advanced health tracking and long battery life.",
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/2407/gallery/in-galaxy-watch-ultra-l705-sm-l705fztains-542169143?$684_547_PNG$"
    },
    {
      name: "Apple Watch Ultra 2",
      category: "smartWatches",
      price: 89900,
      originalPrice: null,
      discount: null,
      description: "Premium smartwatch with a durable design and advanced features.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmfdyfPtXWkMXIfo7FjShLggXpAtNggnEvA&s"
    },
    {
      name: "OnePlus Watch 3",
      category: "smartWatches",
      price: 19999,
      originalPrice: null,
      discount: null,
      description: "Affordable Wear OS smartwatch with 120-hour battery life.",
      image: "https://www.oneplus.com/content/dam/oneplus/2025/product-station/oneplus-watch-3/images/images-ksp-mo-ksp-1-1-7f5003.jpg.webp"
    },
    {
      name: "Amazfit Active 2",
      category: "smartWatches",
      price: 12999,
      originalPrice: null,
      discount: null,
      description: "Budget-friendly smartwatch with multi-platform compatibility.",
      image: "https://us.amazfit.com/cdn/shop/files/PP-1_09dc55db-1a1f-4781-ad8a-8ce572e05f55.jpg?v=1737748336&width=1946"
    },

    {
      name: "Philips Air Fryer XXL",
      category: "kitchenAppliances",
      price: 14999,
      originalPrice: null,
      discount: null,
      description: "Healthy frying with rapid air technology and extra-large capacity.",
      image: "https://www.philips.com.my/c-dam/b2c/en_MY/experience/ho/cooking/airfryer-xxl/product-video-l-m.jpg"
    },
    {
      name: "Prestige Iris Mixer Grinder",
      category: "kitchenAppliances",
      price: 3499,
      originalPrice: null,
      discount: null,
      description: "750W mixer grinder with 3 stainless steel jars and 1 juicer jar.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/5/309791970/WE/AS/QT/108661678/screenshot-2023-05-21-215442-500x500.png"
    },
    {
      name: "Bajaj Majesty Oven Toaster Grill",
      category: "kitchenAppliances",
      price: 5999,
      originalPrice: null,
      discount: null,
      description: "16L OTG with keep warm function and 60-minute timer.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5art1n9aagmSztTXEt2rE_0-KmfeRAYJ_g&s"
    },
    {
      name: "Butterfly Rapid Electric Kettle",
      category: "kitchenAppliances",
      price: 1299,
      originalPrice: null,
      discount: null,
      description: "1.5L electric kettle with auto cut-off and stainless steel body.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxki8FiylZrMLMyMk3tcoKB05rJlmCvA_5Vw&s"
    },

    {
      name: "Samsung 10 KG Fully Automatic Top Load Washing Machine",
      category: "homeAppliances",
      price: 25990,
      originalPrice: null,
      discount: null,
      description: "Top load washing machine with AI Wash technology and 10kg capacity.",
      image: "https://5.imimg.com/data5/SELLER/Default/2025/7/526437299/GV/IR/WI/160131558/samsung-10-kg-fully-automatic-top-load-washing-machine-500x500.png"
    },
    {
      name: "LG 260L Frost Free Double Door Refrigerator",
      category: "homeAppliances",
      price: 24990,
      originalPrice: null,
      discount: null,
      description: "Energy-efficient refrigerator with smart inverter compressor.",
      image: "https://www.lg.com/content/dam/channel/wcms/in/images/refrigerators/updated/new/GL-N292BDSY-350X350.jpg"
    },
    {
      name: "Dyson V11 Absolute Pro Cord-Free Vacuum",
      category: "homeAppliances",
      price: 52900,
      originalPrice: null,
      discount: null,
      description: "High-performance cordless vacuum cleaner with powerful suction.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWxRjfPc9UpUPNFiI14YlccstKNwjJSiUpQ&s"
    },

 {
    name: "Lego Classic Creative Brick Box",
    category: "toys",
    ageGroup: "4+",
    price: 2499,
    description: "A box of colorful Lego bricks for endless creativity and building fun.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJajpSzjNQn4Yfmi-FT6br-_LY676aCebnJQ&s"
  },
  {
    name: "Fisher-Price Laugh & Learn Smart Stages Chair",
    category: "toys",
    ageGroup: "6-36 months",
    price: 3499,
    description: "Interactive learning chair with songs, phrases, and sounds for toddlers.",
    image: "https://www.livingrichwithcoupons.com/wp-content/uploads/2019/08/5-16.jpg"
  },
  {
    name: "Nerf Ultra One Motorized Blaster",
    category: "toys",
    ageGroup: "8+",
    price: 3999,
    description: "High-performance motorized blaster with long-range darts for outdoor fun.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwrviYk4ymzPiYCccTlCv572tAUQesIeWMQ&s"
  },
  {
    name: "Barbie Dreamhouse Dollhouse",
    category: "toys",
    ageGroup: "3+",
    price: 11999,
    description: "Large Barbie dollhouse with multiple rooms, furniture, and interactive features.",
    image: "https://thetoyinsider.com/wp-content/uploads/2023/05/Mattel_BarbieDreamhouseback-jpg.webp"
  },

  {
    name: "Gold Plated Necklace Set",
    category: "jewellery",
    price: 2599,
    description: "Elegant gold plated necklace with matching earrings, perfect for festive occasions.",
    image: "https://www.soosi.co.in/cdn/shop/files/WhatsAppImage2023-12-10at10.43.02AM_580x.jpg?v=1702195844"
  },
  {
    name: "Silver Hoop Earrings",
    category: "jewellery",
    price: 799,
    description: "Classic silver hoop earrings with a sleek and shiny finish, suitable for everyday wear.",
    image: "https://images-static.nykaa.com/media/catalog/product/a/3/a3aad26AE01009-SS0000_1.jpg?tr=w-500"
  },
  {
    name: "Leather Wristwatch for Men",
    category: "accessories",
    price: 3499,
    description: "Stylish analog wristwatch with genuine leather strap and water-resistant body.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTgk3-yEYq9Tti7Okyl_g8bxIoulHUmrl_2g&s"
  },
  {
    name: "Pearl Bracelet",
    category: "jewellery",
    price: 1299,
    description: "Delicate pearl bracelet with an adjustable chain, adds elegance to any outfit.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHChPRz0Pcu5vLGpN3U1rXjxjs0ZKY0OAjw&s"
  },
  {
    name: "Sunglasses UV Protection",
    category: "accessories",
    price: 999,
    description: "Trendy sunglasses with 100% UV protection and a lightweight frame.",
    image: "https://image5.cdnsbg.com/cms.visiondirect.com.au/wp-content/uploads/sites/2/2025/03/header-UV400-protection-1.png"
  },
  {
    name: "Rose Gold Plated Ring",
    category: "jewellery",
    price: 1599,
    description: "Minimalist rose gold plated ring with a polished finish, ideal for daily wear.",
    image: "https://rukminim2.flixcart.com/image/704/844/l27wtjk0/ring/t/w/b/adjustable-1-mkr222-ring-myki-original-imagdhvkptw2tfqa.jpeg?q=90&crop=false"
  },
  {
    name: "Beaded Anklet",
    category: "jewellery",
    price: 499,
    description: "Colorful beaded anklet perfect for summer and beach outings.",
    image: "https://www.zavya.co/cdn/shop/products/Newfolder_3__00003compressed.jpg?v=1737641958"
  },
  {
    name: "Canvas Backpack",
    category: "accessories",
    price: 1999,
    description: "Durable and stylish canvas backpack with multiple compartments for everyday use.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtnXcrykZVn8P-X98-APwd4QCQ_y7kbE5rg&s"
  },
  {
    name: "Diamond Stud Earrings",
    category: "jewellery",
    price: 4999,
    description: "Sparkling diamond stud earrings with secure screw-back settings.",
    image: "https://manikchand.in/cdn/shop/files/2Studs3prong_276c5c0c-a294-45d5-8e03-bf1d596ea065.png?v=1724064971&width=1946"
  },
  {
    name: "Silk Scarf",
    category: "accessories",
    price: 799,
    description: "Elegant silk scarf with vibrant prints, adds a touch of sophistication to any outfit.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/4/500632300/DV/KC/QS/68103635/3pcs-silk-scarf-for-women-stylish-satin-neck-head-scarf-for-women-summer-bandanas-for-women-500x500.jpg"
  },

  {
    name: "Garam Masala Powder",
    category: "masala",
    price: 150,
    description: "Aromatic blend of traditional Indian spices for rich flavor in curries.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzL8LWJtkP55SrtrPwKjVZJc9mh3T_lsuIw&s"
  },
  {
    name: "Turmeric Powder",
    category: "masala",
    price: 80,
    description: "Pure turmeric powder known for its vibrant color and health benefits.",
    image: "https://cycle.in/cdn/shop/products/Turmeric-ls.jpg?v=1707401983&width=480"
  },
  {
    name: "Cumin Seeds",
    category: "masala",
    price: 90,
    description: "Fresh cumin seeds to add earthy flavor and aroma to your dishes.",
    image: "https://m.media-amazon.com/images/I/71tiCLR-fBL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Red Chili Powder",
    category: "masala",
    price: 100,
    description: "Hot and spicy red chili powder to enhance your meals with a fiery kick.",
    image: "https://t4.ftcdn.net/jpg/06/34/52/77/360_F_634527709_r6A0kdVCXgdZsPukMffjwHKFkuW8Gpkm.jpg"
  },
  {
    name: "Almonds (Badam)",
    category: "dryfruits",
    price: 600,
    description: "Premium quality almonds, great for snacking and cooking.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgc6wCDBch3ZpUiFy9QEisQXuNDGWgYhqZog&s"
  },
  {
    name: "Cashews (Kaju)",
    category: "dryfruits",
    price: 750,
    description: "Fresh cashews with a buttery texture and delicious taste.",
    image: "https://m.media-amazon.com/images/I/61OXeZMGSIL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Raisins (Kishmish)",
    category: "dryfruits",
    price: 350,
    description: "Sweet and chewy raisins, perfect for desserts and snacks.",
    image: "https://regencysnacks.com/cdn/shop/files/RaisinsLong.png?v=1714375617"
  },
  {
    name: "Walnuts",
    category: "dryfruits",
    price: 700,
    description: "Crunchy walnuts rich in omega-3 fatty acids for healthy snacking.",
    image: "https://www.drweil.com/wp-content/uploads/2016/12/diet-nutrition_nutrition_are-walnuts-healthier-than-pecans_2716x1810_000029888296.jpg"
  },
  {
    name: "Dry Ginger Powder",
    category: "masala",
    price: 120,
    description: "Ground dry ginger powder with a warm and spicy flavor.",
    image: "https://organicdew.co/cdn/shop/articles/Dry-Ginger-Benefits-and-Uses-for-Children_c93c9b87-554d-4645-b056-d7f500a32eba-429438.jpg?v=1714492927"
  },
  {
    name: "Pistachios (Pista)",
    category: "dryfruits",
    price: 850,
    description: "Premium pistachios, perfect for garnishing sweets and salads.",
    image: "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/pista-roasted-and-salted.20220922163628.webp"
  },


  {
    name: "Dairy Milk Silk",
    category: "chocolates",
    price: 150,
    description: "Smooth and creamy milk chocolate with a silky texture.",
    image: "https://www.egiftmart.com/uploaded_files/itempic/dairymilk-silk.jpg"
  },
  {
    name: "KitKat",
    category: "chocolates",
    price: 40,
    description: "Crispy wafer fingers covered with milk chocolate.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTXzyuKbVeP92iZFD0jOKC7srNh3uAQHXjA&s"
  },
  {
    name: "Ferrero Rocher",
    category: "chocolates",
    price: 350,
    description: "Hazelnut chocolate balls wrapped in gold foil, a luxury treat.",
    image: "https://www.ferrerorocher.com/us/sites/ferrerorocher20_us/files/2021-11/carestorage_mo.jpg?t=1751898846"
  },
  {
    name: "Perk",
    category: "chocolates",
    price: 20,
    description: "Chocolate coated wafer bar with a crunchy bite.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMGveiZKwvEYQcmuDBS4O_sy7l9U0S3FniQ&s"
  },
  {
    name: "Bournville",
    category: "chocolates",
    price: 100,
    description: "Rich and intense dark chocolate for real chocolate lovers.",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1100-1100,pr-true,f-auto,q-80/cms/product_variant/8795ee3c-eca7-4cf0-95e5-56fc7698f43e.jpeg"
  },
  {
    name: "Munch",
    category: "chocolates",
    price: 15,
    description: "Crunchy wafer covered with chocolate, perfect for snacking.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRo8SZ-m6-8Z3z4LF-K0ScANC4cPSHWQX7wA&s"
  },
  {
    name: "Cadbury Gems",
    category: "chocolates",
    price: 50,
    description: "Colorful candy-coated chocolates loved by kids.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFS18DM5upQUqWJGGAicA75bYF3i884W0uw&s"
  },
  {
    name: "5 Star",
    category: "chocolates",
    price: 10,
    description: "Chewy caramel and chocolate bar with nuts.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuVtsmaxeX98WnksZIB0UtcZYDYgt1M_bdg&s"
  },
  {
    name: "Lindt Excellence Dark Chocolate",
    category: "chocolates",
    price: 400,
    description: "Premium Swiss dark chocolate with a rich cocoa flavor.",
    image: "https://i0.wp.com/www.nutshouse.in/wp-content/uploads/2022/07/234578.jpg?fit=2000%2C2000&ssl=1"
  },
  {
    name: "Amul Dark Chocolate",
    category: "chocolates",
    price: 120,
    description: "Smooth and affordable dark chocolate with a deep cocoa taste.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSw4i26-ZLtcba293i8E3s6CRpFSYg-0wYng&s"
  },

  {
    name: "Ray-Ban Aviator Sunglasses",
    category: "spectacles",
    price: 8500,
    description: "Classic aviator style with polarized lenses for UV protection.",
    image: "https://m.media-amazon.com/images/I/51NAlEXRFNL._UY1100_.jpg"
  },
  {
    name: "Fastrack Round Spectacles",
    category: "spectacles",
    price: 2500,
    description: "Trendy round frame spectacles for everyday wear.",
    image: "https://assets.ajio.com/medias/sys_master/root/20220912/GYPC/631f508eaeb269dbb383cb79/-473Wx593H-469261802-gold-MODEL.jpg"
  },
  {
    name: "Titan Analog Men's Watch",
    category: "watches",
    price: 5000,
    description: "Elegant analog watch with leather strap and water resistance.",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/watch/6/v/b/-original-imagqrchhgcpayez.jpeg?q=90&crop=false"
  },
  {
    name: "Casio Digital Sports Watch",
    category: "watches",
    price: 3200,
    description: "Durable digital watch with multiple sports functions.",
    image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2020_32/3402703/casio-watch-ode-2x1-tease-200806.jpg"
  },
  {
    name: "Oakley Sunglasses",
    category: "spectacles",
    price: 7500,
    description: "High-performance sunglasses designed for outdoor activities.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWZWAcVw6h7kRpClKIVNgAQ5d17xQ_2s4Ng&s"
  },
  {
    name: "Fossil Leather Wallet",
    category: "accessories",
    price: 2200,
    description: "Premium leather wallet with multiple card slots and coin pocket.",
    image: "https://fossil.scene7.com/is/image/FossilPartners/ML3681200_9L?$sfcc_lifestyle_large$"
  },
  {
    name: "Ray-Ban Wayfarer Sunglasses",
    category: "spectacles",
    price: 8000,
    description: "Iconic Wayfarer design with UV protected lenses.",
    image: "https://dubaioptical.com/cdn/shop/files/0RW4006__601ST3_bf4d692e-cabe-49ac-a362-cf86f80ceb41.webp?v=1748609262"
  },
  {
    name: "Titan Casual Belt",
    category: "accessories",
    price: 900,
    description: "Stylish casual belt made from genuine leather.",
    image: "https://content.jdmagicbox.com/quickquotes/images_main/titan-black-brown-leather-belt-164879840-67vxz.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
  },
  {
    name: "Fastrack Aviator Sunglasses",
    category: "spectacles",
    price: 3200,
    description: "Affordable aviator sunglasses with UV protection.",
    image: "https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI441998.jpg?imgeng=w_200"
  },
  {
    name: "Timex Analog Watch",
    category: "watches",
    price: 2700,
    description: "Simple and stylish analog watch for daily use.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxnCT0vUv6cGpr_X1b7yAOZ8xQQOotBRjIQ&s"
  },

  {
    name: "Magnum Classic Almond",
    category: "Ice Cream",
    price: 120,
    description: "Rich vanilla ice cream coated with Belgian chocolate and almonds.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_weSb49Pxku5boLyi44ZKn912XXGsA8Q2w&s"
  },
  {
    name: "Amul Butter Scotch",
    category: "Ice Cream",
    price: 80,
    description: "Creamy butter scotch flavored ice cream with butterscotch bits.",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/5/305107159/EG/PE/HD/45596304/125-ml-amul-butterscotch-bliss-jumbo-cup.jpg"
  },
  {
    name: "Ben & Jerry's Chocolate Fudge Brownie",
    category: "Ice Cream",
    price: 200,
    description: "Chocolate ice cream with fudge brownies and chocolate chunks.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtv5XsC-G-_-SmhfcWtNtu56nZoZiuMsYug&s"
  },
  {
    name: "Häagen-Dazs Vanilla",
    category: "Ice Cream",
    price: 250,
    description: "Classic vanilla ice cream made with natural ingredients.",
    image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-04/vanilla-ice-cream-haagen-dazc-mc-220428-02-copy-c30b9f.jpg"
  },
  {
    name: "Kwality Walls Cornetto Classic",
    category: "Ice Cream",
    price: 40,
    description: "Crunchy wafer cone with chocolate topping and vanilla ice cream.",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/9ad85ada-13be-408d-b9db-57592f235780_333564.JPG"
  },
  {
    name: "Mother Dairy Kesar Pista",
    category: "Ice Cream",
    price: 70,
    description: "Traditional Indian kesar pista flavored creamy ice cream.",
    image: "https://img500.exportersindia.com/product_images/bc-500/2023/2/11681855/kesar-pista-ice-cream-1676369243-6762038.jpeg"
  },
  {
    name: "Movenpick Swiss Chocolate",
    category: "Ice Cream",
    price: 300,
    description: "Luxurious Swiss chocolate ice cream with rich cocoa flavor.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpxfEpUFBXukhk5569IaXBVI8DMOpGpk3iIw&s"
  },
  {
    name: "Dairy Queen Chocolate Chip Cookie Dough",
    category: "Ice Cream",
    price: 180,
    description: "Vanilla ice cream with chocolate chips and cookie dough pieces.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp6JaEqaOHG7z2Wpw1faBvxpuSNQWb8iigA&s"
  },


  {
    name: "Britannia Marie Gold Biscuit",
    category: "Snacks",
    price: 40,
    description: "Classic Marie biscuits, perfect for tea time and snacking.",
    image: "https://media.britannia.co.in/Marie_Gold_ba9a053ec6.jpg"
  },
  {
    name: "Lay's Classic Potato Chips",
    category: "Snacks",
    price: 20,
    description: "Crispy and salty potato chips with a classic taste.",
    image: "https://www.tastyrewards.com/sites/default/files/2023-12/Lays_Classic.jpg"
  },
  {
    name: "Parle-G Glucose Biscuits",
    category: "Snacks",
    price: 30,
    description: "Glucose biscuits loved by all ages, perfect for quick energy.",
    image: "https://m.media-amazon.com/images/I/517OOGtjAxL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Uncle Chipps Potato Chips",
    category: "Snacks",
    price: 25,
    description: "Light and crispy potato chips with a delightful crunch.",
    image: "https://5.imimg.com/data5/ECOM/Default/2025/7/524855129/JO/NC/KO/114136878/sliding-image-540666ajpgts1704359696-5f3117da-49ea-4cac-bcb3-9bbd608f8073.jpg"
  },
  {
    name: "Hide & Seek Chocobakes",
    category: "Snacks",
    price: 50,
    description: "Delicious chocolate-filled biscuits for chocolate lovers.",
    image: "https://m.media-amazon.com/images/I/41McsbVURPL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Pringles Original Potato Crisps",
    category: "Snacks",
    price: 150,
    description: "Stacked potato crisps with a unique shape and great taste.",
    image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/5ac3037cc99d471bb65317563dad80a7"
  },
  {
    name: "Bingo Mad Angles Chips",
    category: "Snacks",
    price: 30,
    description: "Triangle-shaped crispy chips with tangy and spicy flavors.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65uz4pS0xp2H4lX_MJxQGkPzHX8kuVkyHQg&s"
  },
  {
    name: "Britannia Treat Chocolate Chip Cookies",
    category: "Snacks",
    price: 60,
    description: "Soft cookies loaded with chocolate chips for a tasty treat.",
    image: "https://m.media-amazon.com/images/I/A17As3wYcVL._UF350,350_QL80_.jpg"
  }


]

export default groceryItems;
