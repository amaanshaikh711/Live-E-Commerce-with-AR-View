// Product Database for Lusso Homes
const products = [
    // Sofas
    {
        id: 1,
        name: "Velvet Charm Modern Sofa",
        category: "sofas",
        price: 78999,
        image: "img/Sofas/Sofas- velvet charm modern sofa - 78999.jpeg",
        description: "Premium button-tufted design with gold accents with the various quality of fabric and wood with different option with customize option. Fabric material: velvet, cotton, linen, microfiber. Wood material: oak, teak, pine, mahogany, burma, sal.",
        material: "Premium Velvet, Mahogany Wood",
        dimensions: "Width: 85\" (216 cm), Depth: 36\" (91 cm), Height: 34\" (86 cm), Seat Height: 18\" (46 cm)",
        model: "models/velvet-sofa.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 2,
        name: "Minimalist 2-Seater Loveseat",
        category: "sofas",
        price: 64999,
        image: "img/Sofas/Sofas- Oslo Sofa- 64999.jpeg",
        description: "Spacious sectional perfect for family gatherings, minimal theme design couch with different fabric option with high density of branded foam use for durability with pine wood frame structure and cover with the cushion with customize as per size. Fabric material: velvet, cotton, linen, microfiber. Wood material: oak, teak, pine, mahogany, burma, sal.",
        material: "Linen Fabric, Engineered Wood",
        dimensions: "Width: 84\" (213 cm), Depth: 35\" (88.9 cm), Height: 33\" (84 cm), Seat Height: 18\" (46 cm)",
        model: "models/2-seater-sofa-white.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 4,
        name: "Classic Chesterfield Sofa",
        category: "sofas",
        price: 94999,
        image: "img/Sofas/Sofas- Luma Sofa- 69999.jpeg",
        description: "Timeless leather tufted design with button detailing, luxury option in minimal design of couch with various fabric as well as wood option for frame work to get core strength and increase durability of product. Customize option available. Fabric material: velvet, cotton, linen, microfiber. Wood material: oak, teak, pine, mahogany, burma, sal.",
        material: "Genuine Leather, Oak Wood",
        dimensions: "Width: 84\" (213 cm), Depth: 35\" (89 cm), Height: 32\" (81 cm), Seat Height: 17\" (43 cm)",
        model: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 5,
        name: "Valencia Velvet 3-Seater Sofa",
        category: "sofas",
        price: 89999,
        image: "img/Sofas/Sofas- Elliot Sofa- 84999.jpeg",
        description: "Luxurious velvet upholstery with solid wood frame, with various fabric option as well as with wood option to increase the core strength of sofa to make product durable. Customize option available. Fabric material: velvet, cotton, linen, microfiber. Wood material: oak, teak, pine, mahogany.",
        material: "Velvet, Teak Wood",
        dimensions: "Width: 86\" (218 cm), Depth: 36\" (91 cm), Height: 33\" (84 cm), Seat Height: 18\" (46 cm)",
        model: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 6,
        name: "Velin Sofa",
        category: "sofas",
        price: 125000,
        image: "img/Sofas/6_Velin Sofa_125000.jpg",
        description: "Mid-century modern 3-seater sofa featuring a sleek wooden frame and plush, deep-cushioned upholstery. The design highlights clean lines and a minimalist silhouette, blending comfort with timeless elegance. Customize option available. Fabric material: velvet, cotton, linen, microfiber. Wood material: oak, teak, pine, mahogany.",
        material: "Velvet Fabric, Solid Walnut Wood",
        dimensions: "Width: 84\" (213 cm), Depth: 36\" (91 cm), Height: 32\" (81 cm), Seat Height: 18\" (46 cm)",
        model: "models/new-sofa.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 7,
        name: "Florence Cloud Sofa",
        category: "sofas",
        price: 135000,
        image: "img/Sofas/7_Florence Cloud Sofa_135000.jpg",
        description: "Contemporary low-profile 3-seater sofa featuring plush cloud-like cushioning and a solid wood base. Its wide armrests with integrated wooden shelving combine modern design with functional comfort, making it a perfect centerpiece for relaxed, elegant living spaces. Fabric material: velvet, cotton, linen, microfiber. Wood material: oak, teak, pine, mahogany.",
        material: "Linen Blend Fabric, Solid Oak Wood",
        dimensions: "Width: 86\" (218 cm), Depth: 40\" (102 cm), Height: 32\" (81 cm), Seat Height: 17\" (43 cm)",
        model: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 8,
        name: "Orion Sofa",
        category: "sofas",
        price: 175000,
        image: "img/Sofas/8_Orion Sofa_175000.jpg",
        description: "Modern designer 3-seater sofa featuring a sculpted silhouette with generous cushioning and a matte black wooden base. Its sleek, low-profile form and soft textured upholstery create a perfect blend of comfort and understated luxury, ideal for contemporary interiors. Fabric material: velvet, cotton, linen, microfiber. Wood material: oak, teak, pine, mahogany.",
        material: "Textured Fabric, Matte Black Oak Wood",
        dimensions: "Width: 92\" (234 cm), Depth: 38\" (97 cm), Height: 33\" (84 cm), Seat Height: 18\" (46 cm)",
        model: "models/3-seat-sofa-grey.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },

    // Beds
    {
        id: 9,
        name: "Aurelia Bed - King Size",
        category: "beds",
        price: 129999,
        image: "img/Beds/Beds- Aurelia Bed - 5' x6' - 129999.jpeg",
        description: "Elegant upholstered headboard with storage, luxurious design bed with solid wood and cover with the pu coat with fabric finish with multiple option with customize size. Fabric: velvet, cotton, linen, microfiber. Wood: oak, teak, pine, mahogany, burma, sal.",
        material: "Fabric Upholstery, Solid Wood",
        dimensions: "King Size (Width: 5' x Length: 6' x Height: 1'4\")",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 10,
        name: "Modern Canopy Beds",
        category: "beds",
        price: 114999,
        image: "img/Beds/Beds- Canopy Beds - 129999.jpeg",
        description: "Low-profile contemporary design with luxurious feel made up of solid wood and cover with the polish and bed board will be cover with the cushion. Fabric: velvet, cotton, linen, microfiber. Wood: oak, teak, pine, mahogany, burma, sal.",
        material: "Engineered Wood, Metal",
        dimensions: "Queen Size (Width: 5' x Length: 6' x Height: 1'4\")",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 11,
        name: "Elegant Wave Design Wooden Bed",
        category: "beds",
        price: 112999,
        image: "img/Beds/Beds- Elegant Wave Design Wooden Bed - 112999.jpeg",
        description: "Traditional design with carved details, industrial design with carved details in wooden feel. With industrial design theme in luxurious concept with wave design will give an unique and creative perspective for bed. Fabric: velvet, cotton, linen, microfiber. Wood: oak, teak, pine, mahogany, burma, sal.",
        material: "Sheesham Wood",
        dimensions: "King Size (Width: 5' x Length: 6' x Height: 1'4\")",
        model: "models/bed-01.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 12,
        name: "Luxury Elysian Bed",
        category: "beds",
        price: 111999,
        image: "img/Beds/Beds- Elysian Bed 5' x6' - 111999.jpeg",
        description: "Premium velvet with diamond tufting, in teak wood finish with wooden carving design on wooden pillar and cover with the polish finish with customize size. Fabric: velvet, cotton, linen, microfiber. Wood: oak, teak, pine, mahogany, burma, sal.",
        material: "Velvet, Solid Wood Frame",
        dimensions: "King Size (Width: 5' x Length: 6' x Height: 1'4\")",
        model: "models/bed-03.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 13,
        name: "Harmony Bed - Queen Size",
        category: "beds",
        price: 74999,
        image: "img/Beds/Beds- Harmony Bed - 5' x 6' - 134999.jpeg",
        description: "Built-in storage drawers for organization and cover with the teak wood with cushion bed board with pu polish in satin with customize size. Fabric: velvet, cotton, linen, microfiber. Wood: oak, teak, pine, mahogany, burma, sal.",
        material: "Engineered Wood",
        dimensions: "Queen Size (Width: 5' x Length: 6' x Height: 1'4\")",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 14,
        name: "Elegant American Style Solid Wood Bed",
        category: "beds",
        price: 114999,
        image: "img/Beds/6_Elegant American Style Solid Wood Bed - Timeless Comfort_.jpeg.jpg",
        description: "Elegant American Style Solid Wood Bed with Timeless Comfort, with industrial theme design with luxurious look to enhance the space. Fabric: velvet, cotton, linen, microfiber. Wood: oak, teak, pine, mahogany, burma, sal.",
        material: "Solid Wood",
        dimensions: "King Size (Width: 5' x Length: 6' x Height: 1'4\")",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 15,
        name: "Regal Charm & Dramatic Floral Accent Bed",
        category: "beds",
        price: 104699,
        image: "img/Beds/7_Elegant Bedroom with Regal Charm & Dramatic Floral Accent 104699.jpeg.jpg",
        description: "Elegant Bedroom with Regal Charm & Dramatic Floral Accent. Fabric: velvet, cotton, linen, microfiber. Wood: plywood, oak, teak, pine, mahogany, burma, sal.",
        material: "Premium Leather, Metal Frame",
        dimensions: "King Size (Width: 5' x Length: 6' x Height: 1'4\")",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 16,
        name: "Lumea Bed",
        category: "beds",
        price: 84999,
        image: "img/Beds/8_lumea bed_84999 .jpeg.jpg",
        description: "One of the best modern design bedboard cover with the cushion with hydraulic storage even head board cover with the cushion with luxurious feel. Fabric: velvet, cotton, linen, microfiber. Wood: plywood, oak, teak, pine, mahogany, burma, sal.",
        material: "Reclaimed Teak Wood",
        dimensions: "Queen Size (Width: 5' x Length: 6')",
        model: "models/bed-02.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },

    // Chairs
    {
        id: 17,
        name: "Mid-Century Leather Lounge Chair",
        category: "chairs",
        price: 14999,
        image: "img/chair/black.jpg",
        description: "Classic design with black leather and walnut frame. Fabric: velvet, cotton, linen, microfiber, leather. Wood: plywood, oak, teak, mahogany.",
        material: "Genuine Leather, Walnut Wood",
        dimensions: "Width: 29.5\", Depth: 31\", Height: 33\"",
        model: "models/chair-01.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 18,
        name: "Vellore Chair",
        category: "chairs",
        price: 23499,
        image: "img/chair/Chair -Velloré Chair - ( Price 23399 ).jpg",
        description: "Contemporary swivel design with brass accents, one of the best unique design of dining chair. Fabric: velvet, cotton, linen, microfiber, leather. Wood: plywood, oak, teak, mahogany, burma, sal.",
        material: "Boucle Fabric, Walnut Wood, Brass",
        dimensions: "Width: 27\" (69 cm), Depth: 28\" (71 cm), Height: 32\" (81 cm), Seat Height: 18\" (46 cm)",
        model: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 19,
        name: "Circa Bar Stool",
        category: "chairs",
        price: 25999,
        image: "img/chair/Chair-  Circa Bar Stool- 25999.jpeg",
        description: "Minimalist design with suede finish, with wooden legs with pu satin polish and seating is cover with the leather finish with different option. Fabric: velvet, cotton, linen, microfiber, leather. Wood: plywood, oak, teak, mahogany.",
        material: "Suede, Walnut Wood",
        dimensions: "Width: 19\" (48 cm), Depth: 20\" (51 cm), Height: 40\" (102 cm), Seat Height: 30\" (76 cm)",
        model: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 20,
        name: "Ardelle Bar Stool",
        category: "chairs",
        price: 30999,
        image: "img/chair/Chair- Ardelle Bar Stool - 30999.jpeg",
        description: "Elegant curved back design, luxurious bar stool with teak wood and cover with cushion that enhance the bar area. Fabric: velvet, cotton, linen, microfiber, leather. Wood: plywood, oak, teak, mahogany.",
        material: "Leather/Fabric, Solid Wood",
        dimensions: "Width: 20\" (51 cm), Depth: 21\" (53 cm), Height: 41\" (104 cm), Seat Height: 30\" (76 cm)",
        model: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 21,
        name: "Olea Chair",
        category: "chairs",
        price: 18999,
        image: "img/chair/Chair- Olea Chair - 18999.jpeg",
        description: "Unique sculptural design with brass details, with elegant look and decent design for dining chair and curve part and cover with fabric with premium look. Fabric: velvet, cotton, linen, microfiber, leather. Wood: plywood, oak, teak, mahogany.",
        material: "Boucle Fabric, Ash Wood, Brass",
        dimensions: "Width: 22\" (56 cm), Depth: 23\" (58 cm), Height: 33\" (84 cm), Seat Height: 18\" (46 cm)",
        model: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 22,
        name: "Franka Dining Chair",
        category: "chairs",
        price: 21999,
        image: "img/chair/Chairs- Franka Dining Chair- 21999.jpeg",
        description: "Traditional elegance with modern comfort, with sleek look and fabric finish on base and back. Fabric: velvet, cotton, linen, microfiber, leather. Wood: plywood, oak, teak, mahogany.",
        material: "Velvet, Solid Wood Frame",
        dimensions: "Width: 20\" (51 cm), Depth: 22\" (56 cm), Height: 34\" (86 cm), Seat Height: 18\" (46 cm)",
        model: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 23,
        name: "Office Executive Chair",
        category: "chairs",
        price: 22999,
        image: "img/chair/red.jpg",
        description: "Ergonomic leather chair with lumbar support. Fabric: velvet, cotton, linen, microfiber, leather. Wood: plywood, oak, teak, mahogany.",
        material: "Premium Leather, Metal Base",
        dimensions: "Width: 27\" (70 cm), Depth: 29\" (75 cm), Height: 36\" (91 cm)",
        model: "models/chair-02.glb",
    },
    {
        id: 24,
        name: "Rattan Accent Chair",
        category: "chairs",
        price: 27999,
        image: "img/chair/white.jpg",
        description: "Natural rattan weave with cushion. Fabric: velvet, cotton, linen, microfiber, leather. Wood: plywood, oak, teak, mahogany.",
        material: "Natural Rattan, Cotton Cushion",
        dimensions: "Width: 25\" (65 cm), Depth: 27.5\" (70 cm), Height: 33\" (85 cm)",
        model: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },

    // Study Tables
    {
        id: 25,
        name: "Study Table - Bronte Desk",
        category: "study-tables",
        price: 32999,
        image: "img/Study Tables/Study Table - Brontë Desk - 32999.jpeg",
        description: "Classic design with ample workspace. Material: oak, teak, mahogany, burma.",
        material: "Premium Hardwood, Metal Accents",
        dimensions: "Width: 3' x Depth: 2' x Height: 2'7\"",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 26,
        name: "Study Table - Manor Table",
        category: "study-tables",
        price: 41999,
        image: "img/Study Tables/Study Table- Manor Table - 3' x 1'10 - 41999 - Copy.jpeg",
        description: "Elegant manor-style study desk with spacious surface. Material: oak, teak, mahogany, burma.",
        material: "Solid Wood, Metal Hardware",
        dimensions: "Width: 3' x Depth: 2' x Height: 2'7\"",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 27,
        name: "Study Table - Stratford Table",
        category: "study-tables",
        price: 32999,
        image: "img/Study Tables/Study Table- Stratford Table -1'10 x 3'- 45999.jpeg",
        description: "Contemporary design with modern aesthetics. Material: oak, teak, mahogany, burma.",
        material: "Engineered Wood, Metal Frame",
        dimensions: "Width: 3' x Depth: 2' x Height: 2'7\"",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 28,
        name: "Study Table - Ventana Writing Desk",
        category: "study-tables",
        price: 30999,
        image: "img/Study Tables/Study Table- Ventana Writing Desk- 30999.jpeg",
        description: "Modern writing desk with minimalist design. Material: oak, teak, mahogany, burma.",
        material: "Premium MDF, Steel Frame",
        dimensions: "Width: 3' x Depth: 2' x Height: 2'7\"",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 29,
        name: "Study Table - Langford Executive Desk",
        category: "study-tables",
        price: 32999,
        image: "img/Study Tables/Study Table-Langford Executive Desk - 22 x 3' - 32999.jpeg",
        description: "Executive style desk with professional appeal. Material: oak, teak, mahogany, burma.",
        material: "Premium Wood, Metal Base",
        dimensions: "Width: 3' x Depth: 2' x Height: 2'7\"",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },

    // Wardrobes
    {
        id: 30,
        name: "Wardrobe - Serene Wardrobe",
        category: "wardrobes",
        price: 129999,
        image: "img/Wardrobes/Wardrobe - Serene Wardrobe - 129999 - 6x9.jpeg",
        description: "A serene and elegant wardrobe. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Width: 6' x Depth: 2' x Height: 8'",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 31,
        name: "Wardrobe - Verelle Cabinet",
        category: "wardrobes",
        price: 174999,
        image: "img/Wardrobes/Wardrobe - Verelle Cabinet -749999.jpeg",
        description: "A stylish and spacious cabinet. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Width: 6' x Depth: 2' x Height: 8'",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 32,
        name: "Wardrobe - Armoire",
        category: "wardrobes",
        price: 149000,
        image: "img/Wardrobes/Wardrobe- Armoire- 6' x 8'- 149000.jpeg",
        description: "A classic armoire for your clothing. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Width: 6' x Depth: 2' x Height: 8'",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 33,
        name: "Wardrobe - Big Luxury Wooden Wardrobes Armario",
        category: "wardrobes",
        price: 179999,
        image: "img/Wardrobes/Wardrobe- Big Luxury Wooden Wardrobes Armario - 179999.jpeg",
        description: "A big, luxurious wooden wardrobe. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Width: 6' x Depth: 2' x Height: 8'",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 34,
        name: "Wardrobe - Rattan modern simple wardrobe",
        category: "wardrobes",
        price: 68999,
        image: "img/Wardrobes/Wardrobe- Rattan modern simple wardrobe- 68999.jpeg",
        description: "A modern and simple rattan wardrobe. Material: oak, teak, mahogany, burma.",
        material: "Rattan, Wood",
        dimensions: "Width: 6' x Depth: 2' x Height: 8'",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },

    // Center Tables
    {
        id: 35,
        name: "2-Tiered Japandi Round Walnut Wood Coffee Table with Storage Rattan Base",
        category: "center-tables",
        price: 23499,
        image: "img/Centre Tables/Center Table - 2-Tiered Japandi Round  Walnut Wood Coffee Table with Storage Rattan Base - 23499.jpg",
        description: "A beautiful and functional Japandi-style coffee table. Material: oak, teak, mahogany, burma.",
        material: "Walnut Wood, Rattan",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 36,
        name: "Kairos Coffee Table",
        category: "center-tables",
        price: 25999,
        image: "img/Centre Tables/Center Table - Kairos Coffee Table - 25999.jpeg",
        description: "A stylish and modern coffee table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 37,
        name: "Linea Coffee Table",
        category: "center-tables",
        price: 23999,
        image: "img/Centre Tables/Center Table - Linea Coffee Table 23999.jpg",
        description: "A sleek and minimalist coffee table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 38,
        name: "Seren Wood Table",
        category: "center-tables",
        price: 33999,
        image: "img/Centre Tables/Center Table - Seren Wood Table- 33999.jpg",
        description: "A serene and elegant wooden coffee table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 39,
        name: "Circa Duo Coffee Table",
        category: "center-tables",
        price: 32999,
        image: "img/Centre Tables/Center Table- Circa Duo Coffee Table -32999.jpeg",
        description: "A unique and stylish duo coffee table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 40,
        name: "Glass Coffee Table",
        category: "center-tables",
        price: 25999,
        image: "img/Centre Tables/Center Table- Glass Coffe Table - 25999.jpeg",
        description: "A modern glass coffee table.",
        material: "Glass, Metal",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 41,
        name: "Luno Table",
        category: "center-tables",
        price: 30999,
        image: "img/Centre Tables/Center Table- Luno Table- 3' x 20'- 30999.jpeg",
        description: "A stylish and functional coffee table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 42,
        name: "Modern Round Coffee Table Stainless Steel White Sintered Stone Top Accent Table",
        category: "center-tables",
        price: 25999,
        image: "img/Centre Tables/Center Table- Modern Round Coffee Table Stainless Steel White Sintered Stone Top Accent Table - 25999.jpeg",
        description: "A modern and luxurious coffee table.",
        material: "Sintered Stone, Stainless Steel",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 43,
        name: "2-Tiered Japandi Round Walnut Wood Coffee Table with Storage Rattan Base",
        category: "center-tables",
        price: 23499,
        image: "img/Centre Tables/Center Table - 2-Tiered Japandi Round  Walnut Wood Coffee Table with Storage Rattan Base - 23499.jpg",
        description: "A beautiful and functional Japandi-style coffee table. Material: oak, teak, mahogany, burma.",
        material: "Walnut Wood, Rattan",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 44,
        name: "Kairos Coffee Table",
        category: "center-tables",
        price: 25999,
        image: "img/Centre Tables/Center Table - Kairos Coffee Table - 25999.jpeg",
        description: "A stylish and modern coffee table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 45,
        name: "Linea Coffee Table",
        category: "center-tables",
        price: 23999,
        image: "img/Centre Tables/Center Table - Linea Coffee Table 23999.jpg",
        description: "A sleek and minimalist coffee table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 46,
        name: "Seren Wood Table",
        category: "center-tables",
        price: 33999,
        image: "img/Centre Tables/Center Table - Seren Wood Table- 33999.jpg",
        description: "A serene and elegant wooden coffee table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 47,
        name: "Circa Duo Coffee Table",
        category: "center-tables",
        price: 32999,
        image: "img/Centre Tables/Center Table- Circa Duo Coffee Table -32999.jpeg",
        description: "A unique and stylish duo coffee table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 48,
        name: "Glass Coffee Table",
        category: "center-tables",
        price: 25999,
        image: "img/Centre Tables/Center Table- Glass Coffe Table - 25999.jpeg",
        description: "A modern glass coffee table.",
        material: "Glass, Metal",
        dimensions: "N/A",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 49,
        name: "Luno Table",
        category: "center-tables",
        price: 30999,
        image: "img/Centre Tables/Center Table- Luno Table- 3' x 20'- 30999.jpeg",
        description: "A stylish and functional coffee table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 50,
        name: "Modern Round Coffee Table Stainless Steel White Sintered Stone Top Accent Table",
        category: "center-tables",
        price: 25999,
        image: "img/Centre Tables/Center Table- Modern Round Coffee Table Stainless Steel White Sintered Stone Top Accent Table - 25999.jpeg",
        description: "A modern and luxurious coffee table.",
        material: "Sintered Stone, Stainless Steel",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },

    // Dining Tables
    {
        id: 51,
        name: "Orren Jermani Dining Table",
        category: "dining-tables",
        price: 81999,
        image: "img/Dining Tables with chair/Dining Table- Orren Jermani Dining Table- 6.5'x3'- 81999.jpeg",
        description: "A beautiful and elegant dining table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "6.5'x3', Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 52,
        name: "Pakloer European cream style dining table set",
        category: "dining-tables",
        price: 91999,
        image: "img/Dining Tables with chair/Dining Table- Pakloer European cream style dining table set - 91999.jpeg",
        description: "A stylish and modern dining table set. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 53,
        name: "Retro Modern Oval Sintered Stone Dining Table Sets",
        category: "dining-tables",
        price: 129999,
        image: "img/Dining Tables with chair/Dining Table- Retro Modern Oval Sintered Stone Dining Table Sets - 129999.jpeg",
        description: "A retro and modern dining table set. Material: oak, teak, mahogany, burma.",
        material: "Sintered Stone, Metal",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 54,
        name: "Sleek Black Coffee Table with Gold Accents",
        category: "dining-tables",
        price: 74999,
        image: "img/Dining Tables with chair/Dining Table- Sleek Black Coffee Table with Gold Accents- 6.5'x3'- 74999.jpeg",
        description: "A sleek and modern dining table with gold accents. Material: oak, teak, mahogany, burma, Metal.",
        material: "Wood, Metal",
        dimensions: "6.5'x3', Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 55,
        name: "Velisse Table",
        category: "dining-tables",
        price: 83999,
        image: "img/Dining Tables with chair/Dining Table- Velisse Table- 6.5'x3'- 83999.jpeg",
        description: "A stylish and elegant dining table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "6.5'x3', Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },

    // Side Tables
    {
        id: 56,
        name: "Curvo Side Table",
        category: "side-tables",
        price: 18999,
        image: "img/Side Tables/Side Table - Curvo Side Table - 18999.jpeg",
        description: "A stylish and curved side table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 57,
        name: "Elysia Table",
        category: "side-tables",
        price: 12999,
        image: "img/Side Tables/Side Table - Elysia Table - 12999.jpg",
        description: "A beautiful and elegant side table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 58,
        name: "Lunara Table",
        category: "side-tables",
        price: 19499,
        image: "img/Side Tables/Side Table - Lunara Table  - 19499.jpg",
        description: "A modern and stylish side table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 59,
        name: "Serenno Table",
        category: "side-tables",
        price: 22999,
        image: "img/Side Tables/Side Table - Serenno Table - 22999.jpeg",
        description: "A serene and elegant side table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 60,
        name: "Sereno Table",
        category: "side-tables",
        price: 17999,
        image: "img/Side Tables/Side Table - Seréno Table  ( Price 17999 ).jpg",
        description: "A stylish and elegant side table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 61,
        name: "Tavola",
        category: "side-tables",
        price: 17999,
        image: "img/Side Tables/Side Table - Tavolaé  ( Price 17999 ).jpg",
        description: "A unique and stylish side table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },

    // Console Tables
    {
        id: 62,
        name: "Marlow Cane Console",
        category: "console-tables",
        price: 35999,
        image: "img/Console Tables/Console - Marlow Cane Console - 2'6 x 3' - 35999.jpeg",
        description: "A beautiful and elegant console table. Material: Cane, oak, teak, mahogany, burma.",
        material: "Cane, Wood",
        dimensions: "2'6 x 3', Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 63,
        name: "Elara Table",
        category: "console-tables",
        price: 39999,
        image: "img/Console Tables/Console Tables- Elara Table - 4'x3'- 39999.jpeg",
        description: "A stylish and modern console table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "4'x3', Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 64,
        name: "Modern White Console",
        category: "console-tables",
        price: 44999,
        image: "img/Console Tables/Console- Modern White Console- 44999.jpeg",
        description: "A sleek and minimalist console table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 65,
        name: "Rattan Solid Wood Frame Home Doorway",
        category: "console-tables",
        price: 37999,
        image: "img/Console Tables/Console- Rattan Solid Wood Frame Home Doorway - 37999.jpeg",
        description: "A beautiful and functional console table. Material: Rattan, oak, teak, mahogany, burma.",
        material: "Rattan, Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 66,
        name: "Traditional Art console",
        category: "console-tables",
        price: 42999,
        image: "img/Console Tables/Console- Traditional Art console - 42999.jpeg",
        description: "A traditional and artistic console table. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "Customize",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },

    // Shoe Racks
    {
        id: 67,
        name: "Modena Shoe Cabinet",
        category: "shoe-racks",
        price: 39999,
        image: "img/Shoe Racks/Shoe Rack - Modena Shoe Cabinet - 3'6 x 3' - 39999.jpeg",
        description: "A stylish and modern shoe cabinet. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "3'6 x 3'",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 68,
        name: "Rattan wood shoe rack",
        category: "shoe-racks",
        price: 42999,
        image: "img/Shoe Racks/Shoe Rack - Rattan wood shoe rack - 3'6 x 3' - 42999.jpeg",
        description: "A beautiful and functional rattan shoe rack. Material: Rattan, oak, teak, mahogany, burma.",
        material: "Rattan, Wood",
        dimensions: "3'6 x 3'",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 69,
        name: "Rustique Rack",
        category: "shoe-racks",
        price: 32999,
        image: "img/Shoe Racks/Shoe Rack- Rustique Rack- 3.5'x2.5'- 32999.jpeg",
        description: "A rustic and charming shoe rack. Material: oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "3.5'x2.5'",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 70,
        name: "Walnut Solid Wood",
        category: "shoe-racks",
        price: 38999,
        image: "img/Shoe Racks/Shoe Rack- Walnut Solid Wood - 3'6 x 3' - 38999.jpeg",
        description: "A solid and durable walnut shoe rack. Material: Walnut, oak, teak, mahogany, burma.",
        material: "Walnut Wood",
        dimensions: "3'6 x 3'",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    },
    {
        id: 71,
        name: "White Wood Shoe Rack",
        category: "shoe-racks",
        price: 41999,
        image: "img/Shoe Racks/Shoe Rack- White Wood Shoe Rack - 3'6 x 3' - 41999.jpeg",
        description: "A clean and modern white shoe rack. Material: Wood, oak, teak, mahogany, burma.",
        material: "Wood",
        dimensions: "3'6 x 3'",
        model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        iosModel: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    }
];


// Format price in Indian Rupees
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

// Get products by category
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

// Get product by ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

// Get all categories
function getAllCategories() {
    return [...new Set(products.map(product => product.category))];
}

// Search products
function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return products.filter(product =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
    );
}

// Sort products
function sortProducts(productList, sortBy) {
    switch (sortBy) {
        case 'price-low':
            return [...productList].sort((a, b) => a.price - b.price);
        case 'price-high':
            return [...productList].sort((a, b) => b.price - a.price);
        case 'name':
            return [...productList].sort((a, b) => a.name.localeCompare(b.name));
        default:
            return productList;
    }
}