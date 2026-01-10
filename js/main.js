// Initialize cart and wishlist from localStorage
let cart = JSON.parse(localStorage.getItem('lusso-cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('lusso-wishlist')) || [];

// Update badge counts on page load
document.addEventListener('DOMContentLoaded', () => {
    updateBadgeCounts();
    initializeCarousels();
    initializeScrollTop();
    initializeMobileMenu();
    initializeNavbarTransparency();
    initializeTestimonialSlider();
    initializeBannerSlider();
});

// Banner Slider - Amazon/Flipkart Style
function initializeBannerSlider() {
    const sliderWrapper = document.getElementById('banner-slider');
    if (!sliderWrapper) return;

    const slides = sliderWrapper.querySelectorAll('.banner-slider-slide');
    const dots = document.querySelectorAll('.banner-slider-dot');
    const prevBtn = document.getElementById('banner-prev');
    const nextBtn = document.getElementById('banner-next');

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        let newSlide = (currentSlide + 1) % slides.length;
        showSlide(newSlide);
    }

    function prevSlide() {
        let newSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newSlide);
    }

    function startAutoPlay() {
        slideInterval = setInterval(nextSlide, 4000); // Auto-advance every 4 seconds
    }

    function resetAutoPlay() {
        clearInterval(slideInterval);
        startAutoPlay();
    }

    // Event listeners for navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoPlay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay();
        });
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoPlay();
        });
    });

    // Pause on hover
    sliderWrapper.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    sliderWrapper.addEventListener('mouseleave', () => {
        startAutoPlay();
    });

    // Start auto-play
    startAutoPlay();
}

// Auto-sliding testimonial slider
function initializeTestimonialSlider() {
    const slider = document.getElementById('testimonial-slider');
    const groups = slider ? slider.querySelectorAll('.testimonial-slide-group') : [];
    const nav = document.getElementById('testimonial-nav');
    if (!slider || groups.length === 0 || !nav) return;

    let current = 0;
    const total = groups.length;
    let intervalId;

    // Create nav dots
    nav.innerHTML = '';
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('data-index', i);
        dot.addEventListener('click', () => {
            goToSlide(i);
            resetInterval();
        });
        nav.appendChild(dot);
    }

    function goToSlide(idx) {
        groups[current].classList.remove('active');
        nav.children[current].classList.remove('active');
        current = idx;
        groups[current].classList.add('active');
        nav.children[current].classList.add('active');
    }

    function nextSlide() {
        goToSlide((current + 1) % total);
    }

    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 4000);
    }

    intervalId = setInterval(nextSlide, 4000);
}

// Resolve image URLs so local paths work both from root pages and nested pages (like /pages/shop.html)
function getImageUrl(imagePath) {
    if (!imagePath) return '';
    // absolute URLs or root-relative paths are returned as-is
    if (/^https?:\/\//i.test(imagePath) || imagePath.startsWith('/')) {
        return imagePath;
    }
    // if we're inside a nested 'pages' directory (handle both forward and back slashes), prefix with ../
    const path = window.location.pathname || '';
    const needsParent = path.includes('/pages/') || path.includes('\\pages\\');
    return (needsParent ? '../' : '') + imagePath;
}

// Update cart and wishlist badge counts
function updateBadgeCounts() {
    const cartCount = document.getElementById('cart-count');
    const wishlistCount = document.getElementById('wishlist-count');

    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }

    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');

    if (notification && notificationText) {
        notificationText.textContent = message;
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Add to cart
function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem('lusso-cart', JSON.stringify(cart));
    updateBadgeCounts();
    showNotification('Item added to cart!');


}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('lusso-cart', JSON.stringify(cart));
    updateBadgeCounts();
    if (window.location.pathname.includes('cart.html')) {
        loadCart();
    }
}

// Update cart quantity
function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, parseInt(quantity));
        localStorage.setItem('lusso-cart', JSON.stringify(cart));
        updateBadgeCounts();
        if (window.location.pathname.includes('cart.html')) {
            loadCart();
        }
    }
}

// Toggle wishlist
function toggleWishlist(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const index = wishlist.findIndex(item => item.id === productId);

    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist');
    } else {
        wishlist.push(product);
        showNotification('Added to wishlist!');
    }

    localStorage.setItem('lusso-wishlist', JSON.stringify(wishlist));
    updateBadgeCounts();

    // Update wishlist button state
    updateWishlistButtons();

    if (window.location.pathname.includes('wishlist.html')) {
        loadWishlist();
    }
}

// Check if product is in wishlist
function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

// Update wishlist button states
function updateWishlistButtons() {
    const wishlistButtons = document.querySelectorAll('.product-wishlist-btn');
    wishlistButtons.forEach(btn => {
        const productId = parseInt(btn.dataset.productId);
        if (isInWishlist(productId)) {
            btn.classList.add('active');
            btn.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '<i class="far fa-heart"></i>';
        }
    });
}

// Create product card HTML
function createProductCard(product) {
    const isWishlisted = isInWishlist(product.id);

    return `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <div class="product-image-container">
                <img src="${getImageUrl(product.image)}" alt="${product.name}" class="product-image" loading="lazy">
                <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                        data-product-id="${product.id}"
                        onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                    <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Load products by category
function loadCategoryProducts(category, containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let categoryProducts = getProductsByCategory(category);
    if (limit) {
        categoryProducts = categoryProducts.slice(0, limit);
    }

    container.innerHTML = categoryProducts.map(product => createProductCard(product)).join('');
    updateWishlistButtons();
}

// Load all products
function loadAllProducts(containerId, categoryFilter = null, sortBy = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let productList = categoryFilter ? getProductsByCategory(categoryFilter) : products;

    if (sortBy) {
        productList = sortProducts(productList, sortBy);
    }

    container.innerHTML = productList.map(product => createProductCard(product)).join('');
    updateWishlistButtons();
}

// Filter category - redirect to shop page
function filterCategory(category) {
    window.location.href = `pages/shop.html?category=${category}`;
}

// Go to product details page
function viewProduct(productId) {
    const path = window.location.pathname || '';
    const needsParent = path.includes('/pages/') || path.includes('\\pages\\');
    const url = needsParent ? '' : 'pages/';
    window.location.href = `${url}product-detail.html?id=${productId}`;
}

// Initialize banner carousels
function initializeCarousels() {
    const carousels = document.querySelectorAll('.banner-carousel');

    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.banner-slide');
        const dots = document.querySelectorAll(`[data-carousel="${carousel.id}"]`);
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Auto-advance every 5 seconds
        setInterval(nextSlide, 5000);

        // Click handlers for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
    });
}

// Initialize scroll to top button
function initializeScrollTop() {
    const scrollBtn = document.getElementById('scroll-top-btn');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize mobile menu
function initializeMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-nav-link');

    // Set active link based on current page
    function setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        menuLinks.forEach(link => {
            const href = link.getAttribute('href');
            const linkPage = href.split('/').pop();

            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Set active link on load
    setActiveLink();

    if (menuBtn && mobileMenu) {
        // Toggle menu on button click
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');

            // Animate hamburger icon
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.style.transform = 'rotate(90deg)';
                icon.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                document.body.style.overflow = 'hidden';
            } else {
                icon.style.transform = 'rotate(0deg)';
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking on a link
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.style.transform = 'rotate(0deg)';
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking on backdrop
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.style.transform = 'rotate(0deg)';
                document.body.style.overflow = '';
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.style.transform = 'rotate(0deg)';
                document.body.style.overflow = '';
            }
        });
    }
}

// Navbar transparency: toggles a more opaque class when user scrolls down
function initializeNavbarTransparency() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    function onScroll() {
        if (window.scrollY > 30) {
            navbar.classList.add('navbar--opaque');
        } else {
            navbar.classList.remove('navbar--opaque');
        }
    }

    // set initial state
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
}

// Load cart page
function loadCart() {
    const cartItems = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');

    if (!cartItems || !cartSummary) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-20">
                <i class="fas fa-shopping-cart text-6xl text-neutral-300 mb-4"></i>
                <h2 class="text-2xl font-semibold mb-4">Your cart is empty</h2>
                <a href="shop.html" class="btn-primary">Continue Shopping</a>
            </div>
        `;
        cartSummary.innerHTML = '';
        return;
    }

    // Render cart items
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${getImageUrl(item.image)}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.name}</h3>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" 
                           onchange="updateCartQuantity(${item.id}, this.value)" min="1">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        </div>
    `).join('');


    // Calculate totals
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.18; // 18% GST
    const shipping = 0; // Free shipping
    const total = subtotal + tax + shipping;

    // Render summary
    cartSummary.innerHTML = `
        <h3 class="text-2xl font-bold mb-6">Order Summary</h3>
        <div class="summary-row">
            <span>Subtotal:</span>
            <span>${formatPrice(subtotal)}</span>
        </div>
        <div class="summary-row">
            <span>GST (18%):</span>
            <span>${formatPrice(tax)}</span>
        </div>
        <div class="summary-row">
            <span>Shipping:</span>
            <span class="text-green-600 font-semibold">FREE</span>
        </div>
        <div class="summary-row summary-total">
            <span>Total:</span>
            <span class="text-gold">${formatPrice(total)}</span>
        </div>
        <button class="btn-primary w-full mt-6" onclick="proceedToCheckout()">
            Proceed to Checkout 
        </button>
        <button id="whatsapp-cart-btn" class="whatsapp-cart-button">
            <span class="whatsapp-icon-wrapper">
                <i class="fab fa-whatsapp"></i>
            </span>
            <span class="whatsapp-text">Buy on WhatsApp</span>
            <span class="whatsapp-shine"></span>
        </button>
        <style>
            .whatsapp-cart-button {
                position: relative;
                width: 100%;
                margin-top: 12px;
                padding: 14px 24px;
                background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
                color: white;
                border: none;
                border-radius: 12px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
            }
            
            .whatsapp-cart-button::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #128C7E 0%, #075E54 100%);
                transition: left 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                z-index: 0;
            }
            
            .whatsapp-cart-button:hover::before {
                left: 0;
            }
            
            .whatsapp-cart-button:hover {
                transform: translateY(-3px) scale(1.02);
                box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5), 
                            0 0 30px rgba(37, 211, 102, 0.3),
                            inset 0 0 20px rgba(255, 255, 255, 0.1);
            }
            
            .whatsapp-cart-button:active {
                transform: translateY(-1px) scale(0.98);
                box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
            }
            
            .whatsapp-icon-wrapper {
                position: relative;
                z-index: 1;
                font-size: 22px;
                display: flex;
                align-items: center;
                transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            
            .whatsapp-cart-button:hover .whatsapp-icon-wrapper {
                transform: rotate(15deg) scale(1.2);
                animation: bounce 0.6s ease;
            }
            
            @keyframes bounce {
                0%, 100% { transform: rotate(15deg) scale(1.2); }
                50% { transform: rotate(15deg) scale(1.3); }
            }
            
            .whatsapp-text {
                position: relative;
                z-index: 1;
                transition: letter-spacing 0.3s ease;
            }
            
            .whatsapp-cart-button:hover .whatsapp-text {
                letter-spacing: 0.5px;
            }
            
            .whatsapp-shine {
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(
                    45deg,
                    transparent 30%,
                    rgba(255, 255, 255, 0.3) 50%,
                    transparent 70%
                );
                transform: rotate(45deg);
                animation: shine 3s infinite;
                pointer-events: none;
            }
            
            @keyframes shine {
                0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
            }
            
            .whatsapp-cart-button:hover .whatsapp-shine {
                animation: shine 1s infinite;
            }
        </style>
    `;
}

// Load wishlist page
function loadWishlist() {
    const wishlistItems = document.getElementById('wishlist-items');
    if (!wishlistItems) return;

    if (wishlist.length === 0) {
        wishlistItems.innerHTML = `
            <div class="text-center py-20">
                <i class="far fa-heart text-6xl text-neutral-300 mb-4"></i>
                <h2 class="text-2xl font-semibold mb-4">Your wishlist is empty</h2>
                <a href="shop.html" class="btn-primary">Start Shopping</a>
            </div>
        `;
        return;
    }

    wishlistItems.innerHTML = wishlist.map(item => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${getImageUrl(item.image)}" alt="${item.name}" class="product-image" loading="lazy">
                <button class="product-wishlist-btn active" onclick="toggleWishlist(${item.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="product-category">${item.category}</div>
                <h3 class="product-title">${item.name}</h3>
                <div class="product-price">${formatPrice(item.price)}</div>
                <div class="product-actions">
                    <button class="btn-cart" onclick="addToCart(${item.id})">
                        <i class="fas fa-shopping-cart"></i> Move to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Proceed to checkout
function proceedToCheckout() {
    window.location.href = 'checkout.html';
}

// Handle newsletter subscription
function handleNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    showNotification('Thank you for subscribing!');
    event.target.reset();
}

// Get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
