/**
 * WhatsApp Cart Integration for Lusso Homes
 * Production-ready module for sending cart details via WhatsApp
 * 
 * @author Lusso Homes Development Team
 * @version 1.0.0
 */

// Business WhatsApp number (without + or spaces)
const BUSINESS_WHATSAPP_NUMBER = '918433600339';

/**
 * Format price in Indian Rupee format
 * @param {number} price - Price to format
 * @returns {string} Formatted price string
 */
function formatPriceForWhatsApp(price) {
    return '₹' + price.toLocaleString('en-IN');
}

/**
 * Generate WhatsApp message from cart data
 * @param {Array} cartItems - Array of cart items
 * @returns {string} Formatted WhatsApp message
 */
function generateWhatsAppMessage(cartItems) {
    // Greeting
    let message = '🛍️ *New Order Inquiry from Lusso Homes Website*\n\n';
    message += 'Hello! I would like to place an order for the following items:\n\n';

    // Product details
    message += '📦 *Order Details:*\n';
    message += '━━━━━━━━━━━━━━━━━━━━\n\n';

    let subtotal = 0;

    cartItems.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        message += `*${index + 1}. ${item.name}*\n`;
        message += `   • Quantity: ${item.quantity}\n`;
        message += `   • Price: ${formatPriceForWhatsApp(item.price)} each\n`;
        message += `   • Subtotal: ${formatPriceForWhatsApp(itemTotal)}\n\n`;
    });

    // Calculate totals (matching cart.html calculation logic)
    const gst = subtotal * 0.18; // 18% GST
    const shipping = 0; // Free shipping
    const total = subtotal + gst + shipping;

    // Order summary
    message += '━━━━━━━━━━━━━━━━━━━━\n';
    message += '💰 *Order Summary:*\n\n';
    message += `Subtotal: ${formatPriceForWhatsApp(subtotal)}\n`;
    message += `GST (18%): ${formatPriceForWhatsApp(gst)}\n`;
    message += `Shipping: FREE\n\n`;
    message += `*Total Amount: ${formatPriceForWhatsApp(total)}*\n\n`;

    // Footer
    message += '━━━━━━━━━━━━━━━━━━━━\n\n';
    message += '📍 Please confirm availability and delivery details.\n';
    message += '🙏 Thank you!';

    return message;
}

/**
 * Read cart data from localStorage
 * @returns {Array} Cart items array
 */
function getCartData() {
    try {
        const cartData = localStorage.getItem('lusso-cart');
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        console.error('Error reading cart data:', error);
        return [];
    }
}

/**
 * Open WhatsApp with cart details
 * Main function to be called when "Buy on WhatsApp" button is clicked
 */
function sendCartToWhatsApp() {
    // Get cart data
    const cart = getCartData();

    // Validate cart is not empty
    if (!cart || cart.length === 0) {
        alert('Your cart is empty! Please add items to your cart before proceeding.');
        return;
    }

    // Generate message
    const message = generateWhatsAppMessage(cart);

    // URL encode the message (WhatsApp requires proper encoding)
    const encodedMessage = encodeURIComponent(message);

    // Construct WhatsApp Click-to-Chat URL
    const whatsappURL = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');

    // Optional: Show confirmation notification (if notification system exists)
    if (typeof showNotification === 'function') {
        showNotification('Opening WhatsApp...');
    }
}

/**
 * Initialize WhatsApp cart button
 * Call this function when DOM is ready or after cart is loaded
 */
function initializeWhatsAppCart() {
    // Use event delegation on document to handle dynamically created buttons
    document.addEventListener('click', function (e) {
        // Check if clicked element is the WhatsApp cart button or its child
        const whatsappButton = e.target.closest('#whatsapp-cart-btn');
        if (whatsappButton) {
            e.preventDefault();
            e.stopPropagation();
            sendCartToWhatsApp();
        }
    });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWhatsAppCart);
} else {
    initializeWhatsAppCart();
}

// Make sendCartToWhatsApp globally available for inline onclick handlers
window.sendCartToWhatsApp = sendCartToWhatsApp;
