// AR View Page Logic

// Get product ID from URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

// Go back to product detail page
function goBack() {
    const productId = getProductIdFromURL();
    if (productId) {
        window.location.href = `product-detail.html?id=${productId}`;
    } else {
        window.location.href = 'shop.html';
    }
}

// Show error message
function showError(message) {
    const errorDiv = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');
    errorText.textContent = message;
    errorDiv.classList.add('show');
}

// Hide loading screen
function hideLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
}

// Initialize AR View
function initializeARView() {
    const productId = getProductIdFromURL();

    if (!productId) {
        showError('No product selected. Please select a product to view in AR.');
        return;
    }

    // Find the product
    const product = products.find(p => p.id === productId);

    if (!product) {
        showError('Product not found. Please try again.');
        return;
    }

    // Check if product has 3D model
    if (!product.model) {
        showError('This product does not have a 3D model available yet. We are working on adding more models!');
        return;
    }

    // Update product name badge
    const productBadge = document.getElementById('product-name-badge');
    productBadge.textContent = product.name;

    // Get model viewer element
    const modelViewer = document.getElementById('product-model-viewer');

    // Set the model sources
    modelViewer.src = product.model;
    if (product.iosModel) {
        modelViewer.setAttribute('ios-src', product.iosModel);
    }

    modelViewer.alt = `3D model of ${product.name}`;

    // Handle model loading events
    modelViewer.addEventListener('load', () => {
        console.log('3D model loaded successfully');
        hideLoading();

        // Hide AR prompt after a few seconds
        setTimeout(() => {
            const arPrompt = document.getElementById('ar-prompt');
            if (arPrompt) {
                arPrompt.classList.remove('show');
            }
        }, 3000);
    });

    modelViewer.addEventListener('error', (event) => {
        console.error('Error loading 3D model:', event);
        hideLoading();
        showError('Failed to load the 3D model. Please check your internet connection and try again.');
    });

    // Handle AR button click
    const arButton = document.getElementById('ar-activation-button');

    arButton.addEventListener('click', async () => {
        try {
            // Check if AR is supported
            const arSupported = await modelViewer.canActivateAR;

            if (arSupported) {
                // Activate AR mode
                modelViewer.activateAR();

                // Log for debugging
                console.log('AR mode activated');
            } else {
                // Show message about AR support
                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                const isAndroid = /Android/.test(navigator.userAgent);

                let message = 'AR is not supported on this device. ';

                if (isIOS) {
                    message += 'Please make sure you are using iOS 12 or later with Safari browser.';
                } else if (isAndroid) {
                    message += 'Please make sure you have Google Play Services for AR installed and are using Chrome or a compatible browser.';
                } else {
                    message += 'AR is available on compatible iOS and Android devices.';
                }

                alert(message);
            }
        } catch (error) {
            console.error('Error activating AR:', error);
            alert('Unable to start AR mode. Please try again or check if your device supports AR.');
        }
    });

    // Handle camera orbit interaction
    let hasInteracted = false;

    modelViewer.addEventListener('camera-change', () => {
        if (!hasInteracted) {
            hasInteracted = true;
            const arPrompt = document.getElementById('ar-prompt');
            if (arPrompt) {
                arPrompt.classList.remove('show');
            }
        }
    });

    // Request camera permissions info (informational only)
    // The actual camera access happens when AR mode is activated
    console.log('AR View initialized. Camera will be accessed when AR mode is activated.');

    // Detect AR capability
    detectARCapability();
}

// Detect AR capability and update UI accordingly
async function detectARCapability() {
    const modelViewer = document.getElementById('product-model-viewer');
    const arButton = document.getElementById('ar-activation-button');
    const instruction = document.querySelector('.instructions');

    try {
        // Wait for model viewer to be ready
        await modelViewer.updateComplete;

        const arSupported = modelViewer.canActivateAR;

        if (!arSupported) {
            arButton.innerHTML = '<i class="fas fa-info-circle"></i> <span>AR Not Available on This Device</span>';
            arButton.style.background = 'linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%)';
            arButton.style.cursor = 'not-allowed';

            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            const isAndroid = /Android/.test(navigator.userAgent);

            if (isIOS) {
                instruction.innerHTML = '<strong>AR Requirements:</strong> iOS 12+ with Safari browser. AR features require ARKit support.';
            } else if (isAndroid) {
                instruction.innerHTML = '<strong>AR Requirements:</strong> Android device with Google Play Services for AR (ARCore). Use Chrome browser for best experience.';
            } else {
                instruction.innerHTML = '<strong>AR Requirements:</strong> Use a compatible iOS or Android device to view this product in your space using augmented reality.';
            }
        } else {
            console.log('AR is supported on this device!');
        }
    } catch (error) {
        console.log('AR capability check:', error);
    }
}

// Add event listener for page visibility
document.addEventListener('visibilitychange', () => {
    const modelViewer = document.getElementById('product-model-viewer');

    if (document.hidden) {
        // Pause auto-rotation when page is hidden
        if (modelViewer) {
            modelViewer.pause();
        }
    } else {
        // Resume auto-rotation when page is visible
        if (modelViewer) {
            modelViewer.play();
        }
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeARView();
});

// Handle browser back button
window.addEventListener('popstate', () => {
    goBack();
});

// Prevent context menu on long press (better AR experience on mobile)
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
}, false);

// Add touch event optimization for better mobile experience
let touchStartTime = 0;

document.addEventListener('touchstart', (e) => {
    touchStartTime = Date.now();
}, { passive: true });

document.addEventListener('touchend', (e) => {
    const touchDuration = Date.now() - touchStartTime;

    // If it was a quick tap on the model, hide the prompt
    if (touchDuration < 200) {
        const arPrompt = document.getElementById('ar-prompt');
        if (arPrompt && arPrompt.classList.contains('show')) {
            arPrompt.classList.remove('show');
        }
    }
}, { passive: true });

// Export functions for use in HTML
window.goBack = goBack;
