import type { Product } from '@/interface/interfaceProductCategory.ts';
export const products: Product[] = [
    {
        id: 1,
        title: 'Majestic Mountain Graphic T-Shirt',
        price: 44,
        description:
            'Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic. Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift, this t-shirt is a versatile addition to any collection.',
        // eslint-disable-next-line sonarjs/no-duplicate-string
        images: ['https://i.imgur.com/QkIa5tT.jpeg', 'https://i.imgur.com/jb5Yu0h.jpeg', 'https://i.imgur.com/UlxxXyG.jpeg'],
        // eslint-disable-next-line sonarjs/no-duplicate-string
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 1,
            name: 'Clothes',
            image: 'https://i.imgur.com/QkIa5tT.jpeg',
            // eslint-disable-next-line sonarjs/no-duplicate-string
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 2,
        title: 'Classic Red Pullover Hoodie',
        price: 10,
        description:
            'Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.',
        images: ['https://i.imgur.com/1twoaDy.jpeg', 'https://i.imgur.com/FDwQgLy.jpeg', 'https://i.imgur.com/kg1ZhhH.jpeg'],
        creationAt: new Date('2024-06-07T07:01:41.359Z'),
        updatedAt: new Date('2024-06-07T07:01:41.359Z'),
        category: {
            id: 1,
            name: 'Clothes',
            image: 'https://i.imgur.com/QkIa5tT.jpeg',
            creationAt: new Date('2024-06-07T07:01:41.284Z'),
            updatedAt: new Date('2024-06-07T07:01:41.284Z'),
        },
    },
    {
        id: 3,
        title: 'Classic Heather Gray Hoodie',
        price: 69,
        description:
            'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
        images: ['https://i.imgur.com/cHddUCu.jpeg', 'https://i.imgur.com/CFOjAgK.jpeg', 'https://i.imgur.com/wbIMMme.jpeg'],
        creationAt: new Date('2024-06-07T07:02:41.359Z'),
        updatedAt: new Date('2024-06-07T07:02:41.359Z'),
        category: {
            id: 1,
            name: 'Clothes',
            image: 'https://i.imgur.com/QkIa5tT.jpeg',
            creationAt: new Date('2024-06-07T07:02:41.284Z'),
            updatedAt: new Date('2024-06-07T07:02:41.284Z'),
        },
    },
    {
        id: 4,
        title: 'Classic Grey Hooded Sweatshirt',
        price: 90,
        description:
            'Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.',
        images: ['https://i.imgur.com/R2PN9Wq.jpeg', 'https://i.imgur.com/IvxMPFr.jpeg', 'https://i.imgur.com/7eW9nXP.jpeg'],
        creationAt: new Date('2024-06-07T07:03:41.359Z'),
        updatedAt: new Date('2024-06-07T07:03:41.359Z'),
        category: {
            id: 1,
            name: 'Clothes',
            image: 'https://i.imgur.com/QkIa5tT.jpeg',
            creationAt: new Date('2024-06-07T07:03:41.284Z'),
            updatedAt: new Date('2024-06-07T07:03:41.284Z'),
        },
    },
    {
        id: 5,
        title: 'Classic Black Hooded Sweatshirt',
        price: 79,
        description:
            'Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.',
        // eslint-disable-next-line sonarjs/no-duplicate-string
        images: ['https://i.imgur.com/cSytoSD.jpeg', 'https://i.imgur.com/WwKucXb.jpeg', 'https://i.imgur.com/cE2Dxh9.jpeg'],
        creationAt: new Date('2024-06-07T07:04:41.359Z'),
        updatedAt: new Date('2024-06-07T07:04:41.359Z'),
        category: {
            id: 1,
            name: 'Clothes',
            image: 'https://i.imgur.com/QkIa5tT.jpeg',
            creationAt: new Date('2024-06-07T07:04:41.284Z'),
            updatedAt: new Date('2024-06-07T07:04:41.284Z'),
        },
    },
    {
        id: 6,
        title: 'Classic Comfort Fit Joggers',
        price: 25,
        description:
            'Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.',
        images: ['https://i.imgur.com/ZKGofuB.jpeg', 'https://i.imgur.com/GJi73H0.jpeg', 'https://i.imgur.com/633Fqrz.jpeg'],
        creationAt: new Date('2024-06-07T07:05:41.359Z'),
        updatedAt: new Date('2024-06-07T07:05:41.359Z'),
        category: {
            id: 1,
            name: 'Clothes',
            image: 'https://i.imgur.com/QkIa5tT.jpeg',
            creationAt: new Date('2024-06-07T07:05:41.284Z'),
            updatedAt: new Date('2024-06-07T07:05:41.284Z'),
        },
    },
    {
        id: 7,
        title: 'Classic Comfort Drawstring Joggers',
        price: 79,
        description:
            'Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.',
        images: ['https://i.imgur.com/mp3rUty.jpeg', 'https://i.imgur.com/JQRGIc2.jpeg', 'https://i.imgur.com/JQRGIc2.jpeg'],
        creationAt: new Date('2024-06-07T07:06:41.359Z'),
        updatedAt: new Date('2024-06-07T07:06:41.359Z'),
        category: {
            id: 1,
            name: 'Clothes',
            image: 'https://i.imgur.com/QkIa5tT.jpeg',
            creationAt: new Date('2024-06-07T07:06:41.284Z'),
            updatedAt: new Date('2024-06-07T07:06:41.284Z'),
        },
    },
    {
        id: 18,
        title: 'Orange Wireless Gaming Controller',
        price: 69,
        description:
            'Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.',
        // eslint-disable-next-line sonarjs/no-duplicate-string
        images: ['https://i.imgur.com/ZANVnHE.jpeg', 'https://i.imgur.com/Ro5z6Tn.jpeg', 'https://i.imgur.com/woA93Li.jpeg'],
        creationAt: new Date('2024-04-26T08:20:49.173Z'),
        updatedAt: new Date('2024-04-26T08:20:45.173Z'),
        category: {
            id: 2,
            name: 'Electronics',
            image: 'https://i.imgur.com/ZANVnHE.jpeg',
            creationAt: new Date('2024-04-26T08:24:50.094Z'),
            updatedAt: new Date('2024-04-26T08:21:49.094Z'),
        },
    },
    {
        id: 5,
        title: 'Classic Black Hooded Sweatshirt',
        price: 79,
        description:
            'Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.',
        images: ['https://i.imgur.com/cSytoSD.jpeg', 'https://i.imgur.com/cSytoSD.jpeg', 'https://i.imgur.com/cSytoSD.jpeg'],
        creationAt: new Date('2024-04-26T08:65:47.173Z'),
        updatedAt: new Date('2024-04-26T08:26:47.173Z'),
        category: {
            id: 1,
            name: 'Clothes',
            image: 'https://i.imgur.com/QkIa5tT.jpeg',
            creationAt: new Date('2024-04-26T08:38:47.094Z'),
            updatedAt: new Date('2024-04-26T08:23:50.094Z'),
        },
    },
    {
        id: 18,
        title: 'Orange Wireless Gaming Controller',
        price: 69,
        description:
            'Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.',
        images: ['https://i.imgur.com/ZANVnHE.jpeg', 'https://i.imgur.com/Ro5z6Tn.jpeg', 'https://i.imgur.com/woA93Li.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 2,
            name: 'Electronics',
            image: 'https://i.imgur.com/ZANVnHE.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 19,
        title: 'Sleek Wireless Headphone',
        price: 44,
        description:
            'Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.',
        images: ['https://i.imgur.com/yVeIeDa.jpeg', 'https://i.imgur.com/jByJ4ih.jpeg', 'https://i.imgur.com/KXj6Tpb.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 2,
            name: 'Electronics',
            image: 'https://i.imgur.com/ZANVnHE.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 20,
        title: 'Sleek Comfort-Fit Over-Ear Headphones',
        price: 28,
        description:
            "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
        images: ['https://i.imgur.com/SolkFEB.jpeg', 'https://i.imgur.com/KIGW49u.jpeg', 'https://i.imgur.com/mWwek7p.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 2,
            name: 'Electronics',
            image: 'https://i.imgur.com/ZANVnHE.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 22,
        title: 'Sleek Wireless Computer Mouse',
        price: 10,
        description:
            'Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.',
        images: ['https://i.imgur.com/w3Y8NwQ.jpeg', 'https://i.imgur.com/WJFOGIC.jpeg', 'https://i.imgur.com/dV4Nklf.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 2,
            name: 'Electronics',
            image: 'https://i.imgur.com/ZANVnHE.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 23,
        title: 'Sleek Modern Laptop with Ambient',
        price: 43,
        description:
            'Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.',
        images: ['https://i.imgur.com/OKn1KFI.jpeg', 'https://i.imgur.com/G4f21Ai.jpeg', 'https://i.imgur.com/Z9oKRVJ.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 2,
            name: 'Electronics',
            image: 'https://i.imgur.com/ZANVnHE.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 24,
        title: 'Sleek Modern Laptop for Professionals',
        price: 97,
        description:
            'Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.',
        images: ['https://i.imgur.com/ItHcq7o.jpeg', 'https://i.imgur.com/55GM3XZ.jpeg', 'https://i.imgur.com/tcNJxoW.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 2,
            name: 'Electronics',
            image: 'https://i.imgur.com/ZANVnHE.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 25,
        title: 'Stylish Red & Silver Over-Ear Headphones',
        price: 39,
        description:
            'Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.',
        images: ['https://i.imgur.com/YaSqa06.jpeg', 'https://i.imgur.com/isQAliJ.jpeg', 'https://i.imgur.com/5B8UQfh.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 2,
            name: 'Electronics',
            image: 'https://i.imgur.com/ZANVnHE.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 26,
        title: 'Sleek Mirror Finish Phone Case',
        price: 27,
        description:
            "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
        images: ['https://i.imgur.com/yb9UQKL.jpeg', 'https://i.imgur.com/m2owtQG.jpeg', 'https://i.imgur.com/bNiORct.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 2,
            name: 'Electronics',
            image: 'https://i.imgur.com/ZANVnHE.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 27,
        title: 'Sleek Smartwatch with Vibrant Display',
        price: 16,
        description:
            'Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.',
        images: ['https://i.imgur.com/LGk9Jn2.jpeg', 'https://i.imgur.com/1ttYWaI.jpeg', 'https://i.imgur.com/sPRWnJH.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 2,
            name: 'Electronics',
            image: 'https://i.imgur.com/ZANVnHE.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 35,
        title: 'Futuristic Holographic Soccer Cleats',
        price: 39,
        description:
            "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
        // eslint-disable-next-line sonarjs/no-duplicate-string
        images: ['https://i.imgur.com/qNOjJje.jpeg', 'https://i.imgur.com/NjfCFnu.jpeg', 'https://i.imgur.com/eYtvXS1.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 4,
            name: 'Shoes',
            image: 'https://i.imgur.com/qNOjJje.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 36,
        title: 'Rainbow Glitter High Heels',
        price: 39,
        description:
            'Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.',
        images: ['https://i.imgur.com/62gGzeF.jpeg', 'https://i.imgur.com/5MoPuFM.jpeg', 'https://i.imgur.com/sUVj7pK.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 4,
            name: 'Shoes',
            image: 'https://i.imgur.com/qNOjJje.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 37,
        title: 'Chic Summer Denim Espadrille Sandals',
        price: 33,
        description:
            'Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.',
        images: ['https://i.imgur.com/9qrmE1b.jpeg', 'https://i.imgur.com/wqKxBVH.jpeg', 'https://i.imgur.com/sWSV6DK.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 4,
            name: 'Shoes',
            image: 'https://i.imgur.com/qNOjJje.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 39,
        title: 'Vibrant Pink Classic Sneakers',
        price: 84,
        description:
            'Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!',
        images: ['https://i.imgur.com/mcW42Gi.jpeg', 'https://i.imgur.com/mhn7qsF.jpeg', 'https://i.imgur.com/F8vhnFJ.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 4,
            name: 'Shoes',
            image: 'https://i.imgur.com/qNOjJje.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 41,
        title: 'Futuristic Chic High-Heel Boots',
        price: 36,
        description:
            'Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.',
        images: ['https://i.imgur.com/HqYqLnW.jpeg', 'https://i.imgur.com/RlDGnZw.jpeg', 'https://i.imgur.com/qa0O6fg.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 4,
            name: 'Shoes',
            image: 'https://i.imgur.com/qNOjJje.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 42,
        title: 'Elegant Patent Leather Peep-Toe',
        price: 53,
        description:
            'Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.',
        images: ['https://i.imgur.com/AzAY4Ed.jpeg', 'https://i.imgur.com/umfnS9P.jpeg', 'https://i.imgur.com/uFyuvLg.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 4,
            name: 'Shoes',
            image: 'https://i.imgur.com/qNOjJje.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 43,
        title: 'Elegant Purple Leather Loafers',
        price: 17,
        description:
            "Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.",
        images: ['https://i.imgur.com/Au8J9sX.jpeg', 'https://i.imgur.com/gdr8BW2.jpeg', 'https://i.imgur.com/KDCZxnJ.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 4,
            name: 'Shoes',
            image: 'https://i.imgur.com/qNOjJje.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 44,
        title: 'Classic Blue Suede Casual Shoes',
        price: 39,
        description:
            'Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.',
        images: ['https://i.imgur.com/sC0ztOB.jpeg', 'https://i.imgur.com/Jf9DL9R.jpeg', 'https://i.imgur.com/R1IN95T.jpeg'],
        creationAt: new Date('2024-06-07T07:00:41.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 4,
            name: 'Shoes',
            image: 'https://i.imgur.com/qNOjJje.jpeg',
            creationAt: new Date('2024-06-07T07:00:41.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
    {
        id: 50,
        title: 'Elegant Purple Leather Loafers',
        price: 17,
        description:
            "Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.",
        images: ['https://i.imgur.com/Au8J9sX.jpeg', 'https://i.imgur.com/gdr8BW2.jpeg', 'https://i.imgur.com/KDCZxnJ.jpeg'],
        creationAt: new Date('2024-06-07T07:00:31.359Z'),
        updatedAt: new Date('2024-06-07T07:00:41.359Z'),
        category: {
            id: 4,
            name: 'Shoes',
            image: 'https://i.imgur.com/qNOjJje.jpeg',
            creationAt: new Date('2024-06-07T07:00:42.284Z'),
            updatedAt: new Date('2024-06-07T07:00:41.284Z'),
        },
    },
];
