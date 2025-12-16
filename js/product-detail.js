// Product Detail Page Logic

// Get product ID from URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

// Find product by ID
function findProductById(id) {
    return products.find(product => product.id === id);
}

// Load and display product details
function loadProductDetail() {
    const productId = getProductIdFromURL();

    if (!productId) {
        window.location.href = 'shop.html';
        return;
    }

    const product = findProductById(productId);

    if (!product) {
        alert('Product not found!');
        window.location.href = 'shop.html';
        return;
    }

    // Update page title
    document.title = `${product.name} - Lusso Homes`;

    // Update breadcrumb
    document.getElementById('breadcrumb-category').textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    document.getElementById('breadcrumb-name').textContent = product.name;

    // Render product details
    document.getElementById('main-product-image').src = getImageUrl(product.image);
    document.getElementById('main-product-image').alt = product.name;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-price').textContent = formatPrice(product.price);
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-material').textContent = product.material;
    document.getElementById('product-dimensions').textContent = product.dimensions;

    // Handle Add to Cart button
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    addToCartBtn.onclick = () => addToCartDetail(product.id);

    // Handle Wishlist button
    const addToWishlistBtn = document.getElementById('add-to-wishlist-btn');
    const isWishlisted = isInWishlist(product.id);
    if (isWishlisted) {
        addToWishlistBtn.classList.add('active');
        addToWishlistBtn.innerHTML = '<i class="fas fa-heart mr-2"></i> Remove from Wishlist';
    } else {
        addToWishlistBtn.classList.remove('active');
        addToWishlistBtn.innerHTML = '<i class="far fa-heart mr-2"></i> Add to Wishlist';
    }
    addToWishlistBtn.onclick = () => toggleWishlistDetail(product.id);

    // Handle AR View - Redirect to dedicated AR page
    const arBtn = document.getElementById('ar-view-btn');

    if (product.model && arBtn) {
        arBtn.classList.remove('hidden');

        arBtn.onclick = () => {
            // Redirect to dedicated AR view page
            window.location.href = `ar-view.html?id=${product.id}`;
        };
    } else {
        if (arBtn) arBtn.classList.add('hidden');
    }

    // Load related products
    loadRelatedProducts(product.category, product.id);
}

// Quantity controls
function increaseQuantity() {
    const input = document.getElementById('quantity-input');
    let value = parseInt(input.value);
    if (value < 10) {
        input.value = value + 1;
    }
}

function decreaseQuantity() {
    const input = document.getElementById('quantity-input');
    let value = parseInt(input.value);
    if (value > 1) {
        input.value = value - 1;
    }
}

// Add to cart from detail page
function addToCartDetail(productId) {
    const product = findProductById(productId);
    const quantity = parseInt(document.getElementById('quantity-input').value);

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    localStorage.setItem('lusso-cart', JSON.stringify(cart));
    updateBadgeCounts();
    showNotification('Added to cart successfully!');
}

// Toggle wishlist from detail page
function toggleWishlistDetail(productId) {
    const product = findProductById(productId);

    const index = wishlist.findIndex(item => item.id === productId);
    const addToWishlistBtn = document.getElementById('add-to-wishlist-btn');

    if (index > -1) {
        wishlist.splice(index, 1);
        addToWishlistBtn.classList.remove('active');
        addToWishlistBtn.innerHTML = '<i class="far fa-heart mr-2"></i> Add to Wishlist';
        showNotification('Removed from wishlist');
    } else {
        wishlist.push(product);
        addToWishlistBtn.classList.add('active');
        addToWishlistBtn.innerHTML = '<i class="fas fa-heart mr-2"></i> Remove from Wishlist';
        showNotification('Added to wishlist!');
    }

    localStorage.setItem('lusso-wishlist', JSON.stringify(wishlist));
    updateBadgeCounts();
}

// Load related products
function loadRelatedProducts(category, currentProductId) {
    const relatedProducts = products
        .filter(p => p.category === category && p.id !== currentProductId)
        .slice(0, 4);

    const container = document.getElementById('related-products');

    if (relatedProducts.length === 0) {
        container.innerHTML = '<p class="text-center text-neutral-600 col-span-full">No related products found.</p>';
        return;
    }

    container.innerHTML = relatedProducts.map(product => {
        const isWishlisted = isInWishlist(product.id);

        return `
            <div class="product-card">
                <div class="product-image-container">
                    <img src="${getImageUrl(product.image)}" alt="${product.name}" class="product-image" onclick="viewProduct(${product.id})">
                    <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                        <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title" onclick="viewProduct(${product.id})">${product.name}</h3>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <div class="product-actions">
                        <button class="btn-cart" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Initialize page
window.addEventListener('DOMContentLoaded', () => {
    loadProductDetail();
    updateBadgeCounts();
});