// Script to add AR models to all products
// Run this in browser console on your local server

const products = window.products || [];

// Add model URLs to all products that don't have them
products.forEach(product => {
    if (!product.model) {
        // Assign different models based on category
        switch (product.category) {
            case 'sofas':
            case 'chairs':
                product.model = "https://modelviewer.dev/shared-assets/models/Chair.glb";
                product.iosModel = "https://modelviewer.dev/shared-assets/models/Chair.usdz";
                break;
            case 'beds':
            case 'wardrobes':
                product.model = "https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Box/glTF-Binary/Box.glb";
                product.iosModel = "https://modelviewer.dev/shared-assets/models/Chair.usdz";
                break;
            case 'study-tables':
            case 'dining-tables':
            case 'center-tables':
            case 'side-tables':
            case 'console-tables':
                product.model = "https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/WaterBottle/glTF-Binary/WaterBottle.glb";
                product.iosModel = "https://modelviewer.dev/shared-assets/models/Chair.usdz";
                break;
            case 'shoe-racks':
                product.model = "https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Suitcase/glTF-Binary/Suitcase.glb";
                product.iosModel = "https://modelviewer.dev/shared-assets/models/Chair.usdz";
                break;
            default:
                product.model = "https://modelviewer.dev/shared-assets/models/Chair.glb";
                product.iosModel = "https://modelviewer.dev/shared-assets/models/Chair.usdz";
        }
    }
});

console.log('All products now have AR models!');
console.log('Products with models:', products.filter(p => p.model).length);
console.log('Total products:', products.length);
