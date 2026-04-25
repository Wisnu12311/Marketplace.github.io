// ========== DATA PRODUK - DENGAN MULTIPLE GAMBAR ==========
const products = [
    {
        id: 1,
        name: "Mouse AOC Pink",
        price: 85000,
         
        // MULTIPLE GAMBAR untuk slideshow
        productImages: [
            "images/mouseAzriel.jpeg",
            "images/mouse-pink-2.jpg", 
            "images/mouse-pink-3.jpg",
            "images/mouse-pink-4.jpg"
        ],
        cartImage: "🖱️",
        badge: "NEW",
        description: "Mouse gaming AOC warna pink dengan desain ergonomis. Cocok untuk para gamers wanita atau kolektor mouse warna unik. Dilengkapi dengan sensor optik 3200 DPI dan pencahayaan RGB.",
        specs: {
            "Merk": "AOC",
            "Model": "GM500 Pink",
            "DPI": "3200 DPI",
            "Koneksi": "USB Wired",
            "Tombol": "6 Tombol",
            "RGB": "Ya, 16.8 juta warna",
            "Berat": "95 gram",
            "Garansi": "1 Tahun"
        },
        stock: 15,
        category: "Mouse"
    },
    {
        id: 2,
        name: "Mouse ignix F7pro",
        price: 145000,
        productImages: [
            "images/mouseWisnu.jpeg",
            "images/keyboard-2.jpg",
            "images/keyboard-3.jpg",
            "images/keyboard-4.jpg"
        ],
        cartImage: "🖱️",
        badge: "SALE",
        description: "VortexSeries Ignix F7 Pro adalah mouse gaming nirkabel ultralight (53g±3g) yang dirancang untuk tangan besar dengan bentuk simetris/ambidextrous. Mouse ini populer karena bentuknya yang ergonomis, performa tinggi dengan sensor premium, lapisan Ice Matte Coating, koneksi triple-mode, dan harga yang kompetitif. ",
        specs: {
             "Merk": "VORTEX",
            "Model": "IGNIX F7PRO",
            "DPI": "40.000 DPI",
            "Koneksi": "3 connection",
            "Tombol": "6 Tombol",
            "Sensor": "PixArt PAW 3395 PRO",
            "Berat": "53gram",
            "Garansi": "1 Tahun"
        },
        stock: 8,
        category: "Mouse"
    },
    {
        id: 3,
        name: "Mouse VXE R1 SE++",
        price: 250000,
        productImages: [
            "images/mouseRendi.jpeg",
            "images/monitor-2.jpg",
            "images/monitor-3.jpg"
        ],
        cartImage: "🖱️",
        badge: "PREMIUM",
        description: "Mouse gaming wireles ultra-ringan (55g) dengan harga terjangkau(Rp300-400 ribuan) yang menawarkan performa tinggi.",
        specs: {
            "Merk": "VGN & VXE",
            "Model": "VXE R1 SE++",
            "DPI": "18.000 DPI",
            "Tombol": "6 Tombol",
            "Battery capacity": "500 mAh",
            "Poling rate": "125-1000Hz",
            "Berat": "51 Gram",
            "Koneksi": "2.4GHz,Bluetooth,usb",
            "IPS": "400",
            "Garansi": "1 Tahun"
        },
        stock: 5,
        category: "Mouse"
    },
    {
        id: 4,
        name: "Laptop Acer nitro V15",
        price: 15000000,
        productImages: [
            "images/laptopdono.jpeg",
            "images/headphone-2.jpg",
            "images/headphone-3.jpg",
            "images/headphone-4.jpg",
            "images/headphone-5.jpg"
        ],
        cartImage: "💻",
        badge: "NEW",
        description: "Acer Nitro V 15 (ANV15-51-542G) adalah laptop gaming entry-level terjangkau yang ditenagai Intel Core i5-13420H Generasi ke-13, GPU NVIDIA GeForce RTX 2050 (4GB GDDR6), RAM 8GB DDR5, dan SSD 512GB. Dilengkapi layar IPS 15,6 inci FHD 144Hz, laptop ini cocok untuk gaming kompetitif, produktivitas, dan konten kreator ringan.",
        specs: {
            "Merk": "Acer",
            "Model": "Nitro v15",
            "Prosesor": "Intel® Core™ i5-13420H (8 Core, hingga 4.60 GHz).",
            "Ukuran": "15.6",
            "Resolusi": "FHD IPS 144Hz (1920 x 1080)",
            "Grafis": " NVIDIA® GeForce® RTX 2050 4GB GDDR6 (MGP 65W).",
            "Port": "3x USB 3.2 Gen 1 Tipe-A, 1x USB 3.2 Gen 2 Tipe-C (Thunderbolt 4), 1x HDMI 2.1, 1x RJ-45, Jack Audio.",
            "Sistem Pendingin": "Kipas Ganda (Dual Fan)."
        },
        stock: 12,
        category: "Laptop"
    },
    {
        id: 5,
        name: "Laptop LOQ 15IRX9",
        price: 10000000,
        productImages: [
            "images/laptopwisnu.jpeg",
            "images/monitor-2.jpg",
            "images/monitor-3.jpg"
        ],
        cartImage: "💻",
        badge: "PREMIUM",
        description: "Monitor VSI B1 24 inch Full HD dengan bezel tipis. Cocok untuk kerja dan gaming. Teknologi IPS panel dengan warna yang akurat.",
        specs: {
            "Merk": "LENOVO",
            "Model": "LOQ 15IRX9 RTX3050",
            "Prosesor": "Intel Core i5-13450Hx",
            "Ukuran": "15,6 inch",
            "Resolusi": "1920 x 1080 (Full HD)",
            "Panel": "IPS",
            "Refresh Rate": "144Hz",
            "Response Time": "5ms",
            "Port": "HDMI, VGA",
            "Garansi": "2 Tahun"
        },
        stock: 5,
        category: "Laptop"
    },
    {
        id: 6,
        name: "Laptop Asus E5 10",
        price: 7000000,
        productImages: [
            "images/laptopraflie.jpeg",
            "images/monitor-2.jpg",
            "images/monitor-3.jpg"
        ],
        cartImage: "💻",
        badge: "PREMIUM",
        description: "Monitor VSI B1 24 inch Full HD dengan bezel tipis. Cocok untuk kerja dan gaming. Teknologi IPS panel dengan warna yang akurat.",
        specs: {
            "Merk": "ASUS",
            "Model": "E510MA",
            "Prosesor": "Intel Celeron N4020/N4120",
            "Ukuran": "15,6 inch",
            "Resolusi": "Full HD (1920 X 1080)",
            "Panel": "IPS",
            "Refresh Rate": "60Hz",
            "Response Time": "5ms",
            "Garansi": "2 Tahun"
        },
        stock: 5,
        category: "Laptop"
    },
    {
        id: 7,
        name: "Keyboard Vortex SeriesMono 80%",
        price: 220000,
        productImages: [
            "images/keyboard.jpeg",
            "images/monitor-2.jpg",
            "images/monitor-3.jpg"
        ],
        cartImage: "🖥️",
        badge: "PREMIUM",
        description: "Monitor VSI B1 24 inch Full HD dengan bezel tipis. Cocok untuk kerja dan gaming. Teknologi IPS panel dengan warna yang akurat.",
        specs: {
            "Merk": "VORTEX",
            "Model": "MONO",
            "Ukuran": "32.7 cm x 13.6 cm",
            "Layout": "80%",
            "Keycaps": "OEM,ABS Doubleshot",
            "Fitur utama": "Gastek mount,Hot-swapple,dan wired connection,RGB bagian depan keyboard",
            "Switch": "JX J]+kade White(linear 5-pin)",
            "Kelebihan": "Ukuran efisien,cocok untuk meja terbatas,tanpa numpad tapi tetap ada F-keys",
            "Garansi": "1 Tahun"
        },
        stock: 5,
        category: "Keyboard"
    },
    {
        id: 8,
        name: "Monitor VSI B1",
        price: 250000,
        productImages: [
            "images/headphone.jpg",
            "images/monitor-2.jpg",
            "images/monitor-3.jpg"
        ],
        cartImage: "🖥️",
        badge: "PREMIUM",
        description: "Monitor VSI B1 24 inch Full HD dengan bezel tipis. Cocok untuk kerja dan gaming. Teknologi IPS panel dengan warna yang akurat.",
        specs: {
            "Merk": "VSI",
            "Model": "B1 Series",
            "Ukuran": "24 inch",
            "Resolusi": "1920 x 1080 (Full HD)",
            "Panel": "IPS",
            "Refresh Rate": "75Hz",
            "Response Time": "5ms",
            "Port": "HDMI, VGA",
            "Garansi": "2 Tahun"
        },
        stock: 5,
        category: "Monitor"
    },
];

// ========== KONFIGURASI ==========
const WHATSAPP_NUMBER = "628889602017"; // GANTI DENGAN NOMOR WA ANDA

// ========== VARIABEL GLOBAL ==========
let cart = [];
let currentSlideIndex = 0;
let currentProduct = null;

// ========== INISIALISASI ==========
window.onload = function() {
    displayProducts();
    updateCartCount();
    updateTime();
    setInterval(updateTime, 1000);
};

// Update waktu
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeElement = document.getElementById('currentTime');
    if (timeElement) timeElement.textContent = `${hours}:${minutes}`;
}

// ========== FUNGSI MENAMPILKAN PRODUK ==========
function displayProducts() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    let html = '';
    
    for (let product of products) {
        html += `
            <div class="product-card">
                <div class="product-image" onclick="showProductDetail(${product.id})">
                    <img src="${product.productImages[0]}" 
                         alt="${product.name}"
                         onerror="this.src='https://via.placeholder.com/300x300?text=No+Image'">
                </div>
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">Rp ${formatPrice(product.price)}</div>
                    <button class="btn-add-to-cart" onclick="addToCart(${product.id}); event.stopPropagation();">
                        TAMBAH KE KERANJANG
                    </button>
                </div>
            </div>
        `;
    }
    
    productGrid.innerHTML = html;
}

// ========== FUNGSI SLIDESHOW ==========
function changeSlide(direction) {
    if (!currentProduct) return;
    
    const totalSlides = currentProduct.productImages.length;
    currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;
    updateSlideDisplay();
}

function goToSlide(index) {
    if (!currentProduct) return;
    currentSlideIndex = index;
    updateSlideDisplay();
}

function updateSlideDisplay() {
    if (!currentProduct) return;
    
    const mainImage = document.getElementById('slide-main-image');
    const thumbnailContainer = document.getElementById('slide-thumbnails');
    const imageCounter = document.getElementById('slide-counter');
    const indicators = document.getElementById('slide-indicators');
    
    if (mainImage) {
        mainImage.src = currentProduct.productImages[currentSlideIndex];
    }
    
    // Update thumbnail active state
    if (thumbnailContainer) {
        const thumbnails = thumbnailContainer.children;
        for (let i = 0; i < thumbnails.length; i++) {
            if (i === currentSlideIndex) {
                thumbnails[i].classList.add('active');
            } else {
                thumbnails[i].classList.remove('active');
            }
        }
    }
    
    // Update counter
    if (imageCounter) {
        imageCounter.textContent = `${currentSlideIndex + 1} / ${currentProduct.productImages.length}`;
    }
    
    // Update indicators
    if (indicators) {
        const indicatorElements = indicators.children;
        for (let i = 0; i < indicatorElements.length; i++) {
            if (i === currentSlideIndex) {
                indicatorElements[i].classList.add('active');
            } else {
                indicatorElements[i].classList.remove('active');
            }
        }
    }
}

// ========== FUNGSI MENAMPILKAN DETAIL PRODUK ==========
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    currentSlideIndex = 0;
    
    const modal = document.getElementById('productDetailModal');
    const overlay = document.getElementById('overlay');
    const detailBody = document.getElementById('productDetailBody');
    const detailTitle = document.getElementById('detailTitle');
    
    // Buat tabel spesifikasi
    let specsHtml = '';
    for (let [key, value] of Object.entries(product.specs)) {
        specsHtml += `<tr><td>${key}</td><td>${value}</td></tr>`;
    }
    
    // Tentukan status stok
    let stockStatus = '';
    let stockClass = '';
    if (product.stock > 10) {
        stockStatus = 'Stok Tersedia';
        stockClass = 'stock-status';
    } else if (product.stock > 0) {
        stockStatus = `Stok Tersisa ${product.stock}`;
        stockClass = 'stock-status low';
    } else {
        stockStatus = 'Stok Habis';
        stockClass = 'stock-status empty';
    }
    
    // Buat thumbnail gallery
    let thumbnailsHtml = '';
    for (let i = 0; i < product.productImages.length; i++) {
        thumbnailsHtml += `
            <div class="thumbnail-item ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})">
                <img src="${product.productImages[i]}" alt="Thumbnail ${i+1}">
            </div>
        `;
    }
    
    // Buat indicators
    let indicatorsHtml = '';
    for (let i = 0; i < product.productImages.length; i++) {
        indicatorsHtml += `<div class="indicator ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>`;
    }
    
    detailTitle.textContent = product.name;
    detailBody.innerHTML = `
        <div class="product-detail">
            <div class="detail-gallery">
                <div class="main-image">
                    <img id="slide-main-image" src="${product.productImages[0]}" alt="${product.name}">
                    
                    <!-- Tombol navigasi slide -->
                    <div class="slide-nav prev" onclick="changeSlide(-1)">←</div>
                    <div class="slide-nav next" onclick="changeSlide(1)">→</div>
                    
                    <!-- Counter gambar -->
                    <div class="image-counter" id="slide-counter">1 / ${product.productImages.length}</div>
                </div>
                
                <!-- Thumbnail container -->
                <div class="thumbnail-container" id="slide-thumbnails">
                    ${thumbnailsHtml}
                </div>
                
                <!-- Slide indicators (untuk mobile) -->
                <div class="slide-indicators" id="slide-indicators">
                    ${indicatorsHtml}
                </div>
            </div>
            
            <div class="detail-info">
                <span class="detail-badge">${product.badge || 'REGULAR'}</span>
                <h2>${product.name}</h2>
                <div class="detail-price">Rp ${formatPrice(product.price)}</div>
                
                <div class="detail-stock">
                    <span>Status Stok:</span>
                    <span class="${stockClass}">${stockStatus}</span>
                </div>
                
                <div class="detail-description">
                    <h4>Deskripsi Produk</h4>
                    <p>${product.description}</p>
                </div>
                
                <div class="detail-specs">
                    <h4>Spesifikasi Produk</h4>
                    <table>
                        ${specsHtml}
                    </table>
                </div>
                
                <div class="detail-actions">
                    <button class="btn-detail-cart" onclick="addToCartFromDetail(${product.id})">
                        🛒 TAMBAH KE KERANJANG
                    </button>
                    <button class="btn-detail-wa" onclick="buyNowWhatsApp(${product.id})">
                        📱 BELI VIA WA
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Mencegah scroll di background
}

// ========== FUNGSI TUTUP DETAIL ==========
function closeProductDetail() {
    const modal = document.getElementById('productDetailModal');
    const overlay = document.getElementById('overlay');
    
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Kembalikan scroll
    currentProduct = null;
    currentSlideIndex = 0;
}

// ========== FUNGSI KERANJANG ==========
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.cartImage,
            quantity: 1,
            selected: true
        });
    }
    
    updateCartCount();
    displayCartItems();
    showNotification(`${product.name} ditambahkan ke keranjang`);
}

function addToCartFromDetail(productId) {
    addToCart(productId);
}

function buyNowWhatsApp(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const message = `Halo, saya ingin membeli:\n- ${product.name}\nHarga: Rp ${formatPrice(product.price)}\n\nMohon info pembayaran lebih lanjut.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    showNotification('Mengalihkan ke WhatsApp...');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #ff5500, #ff8800);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 3000;
        box-shadow: 0 5px 20px rgba(255,85,0,0.3);
        border: 2px solid white;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCount = document.getElementById('cartCount');
    const navCartCount = document.getElementById('navCartCount');
    
    if (cartCount) cartCount.textContent = total;
    if (navCartCount) navCartCount.textContent = total;
}

function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Keranjang belanja kosong</div>';
        updateCartTotal();
        return;
    }
    
    let html = '';
    
    for (let item of cart) {
        html += `
            <div class="cart-item">

                <!-- ✅ CHECKBOX -->
                <input type="checkbox" 
                       onchange="toggleSelect(${item.id})" 
                       ${item.selected ? 'checked' : ''}>

                <div class="cart-item-image">${item.image}</div>

                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">Rp ${formatPrice(item.price)}</div>

                    <div class="cart-item-actions">
                        <button class="cart-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="cart-quantity">${item.quantity}</span>
                        <button class="cart-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button class="cart-btn cart-btn-delete" onclick="removeFromCart(${item.id})">🗑️</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    cartItems.innerHTML = html;
    updateCartTotal();
}
    function toggleSelect(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.selected = !item.selected;
    }
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        displayCartItems();
        updateCartCount();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    displayCartItems();
    updateCartCount();
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartTotal = document.getElementById('cartTotal');
    if (cartTotal) cartTotal.textContent = `Rp ${formatPrice(total)}`;
}

// ========== FUNGSI TOGGLE ==========
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    if (sidebar) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        if (sidebar.classList.contains('active')) {
            displayCartItems();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

function toggleMenu() {
    const menu = document.getElementById('navMenu');
    if (menu) menu.classList.toggle('active');
}

function closeAll() {
    const sidebar = document.getElementById('cartSidebar');
    const modal = document.getElementById('paymentModal');
    const detailModal = document.getElementById('productDetailModal');
    const overlay = document.getElementById('overlay');
    const menu = document.getElementById('navMenu');
    
    if (sidebar) sidebar.classList.remove('active');
    if (modal) modal.classList.remove('active');
    if (detailModal) detailModal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    if (menu) menu.classList.remove('active');
    
    document.body.style.overflow = '';
    currentProduct = null;
    currentSlideIndex = 0;
}

// ========== FUNGSI PEMBAYARAN ==========
function showPaymentModal() {
    if (cart.length === 0) {
        alert('Keranjang belanja masih kosong!');
        return;
    }
    
    const modal = document.getElementById('paymentModal');
    const overlay = document.getElementById('overlay');
    
    if (modal) {
        modal.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    const paymentDetail = document.getElementById('paymentDetail');
    if (paymentDetail) paymentDetail.innerHTML = '';
}

function closePaymentModal() {
    const modal = document.getElementById('paymentModal');
    const overlay = document.getElementById('overlay');
    
    if (modal) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function showWhatsAppPayment() {
    const paymentDetail = document.getElementById('paymentDetail');
    if (!paymentDetail) return;

    const selectedItems = cart.filter(item => item.selected);

    if (selectedItems.length === 0) {
        alert("Pilih minimal 1 barang dulu!");
        return;
    }

    let itemsList = '';
    let total = 0;

    for (let item of selectedItems) {
        itemsList += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 5px; background: white; border-radius: 5px;">
                <span>${item.image} ${item.name} x${item.quantity}</span>
                <span>Rp ${formatPrice(item.price * item.quantity)}</span>
            </div>
        `;
        total += item.price * item.quantity;
    }

    paymentDetail.innerHTML = `
        <h4 style="margin-bottom: 15px;">PEMBAYARAN VIA WHATSAPP</h4>

        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            ${itemsList}
            <div style="display: flex; justify-content: space-between; font-weight: bold; margin-top: 10px; padding-top: 10px; border-top: 2px dashed #ccc;">
                <span>TOTAL:</span>
                <span style="color: #ff5500;">Rp ${formatPrice(total)}</span>
            </div>
        </div>

        <div style="font-size: 1.3rem; font-weight: bold; margin: 20px 0; padding: 15px; background: white; border: 2px dashed #333; text-align: center;">
            +${WHATSAPP_NUMBER}
        </div>

        <button onclick="sendWhatsApp()" style="background: #25D366; color: white; border: none; padding: 15px; width: 100%; border-radius: 8px;">
            📱 HUBUNGI VIA WHATSAPP
        </button>
    `;
}

function showQRPayment() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const paymentDetail = document.getElementById('paymentDetail');
    
    if (!paymentDetail) return;
    
    let itemsList = '';
    for (let item of cart) {
        itemsList += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span><span style="font-size: 1.2rem;">${item.image}</span> ${item.name} x${item.quantity}</span>
                <span>Rp ${formatPrice(item.price * item.quantity)}</span>
            </div>
        `;
    }
    
    paymentDetail.innerHTML = `
        <h4 style="margin-bottom: 15px;">PEMBAYARAN VIA QR CODE</h4>
        
        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px; text-align: left;">
            ${itemsList}
            <div style="display: flex; justify-content: space-between; font-weight: bold; margin-top: 10px; padding-top: 10px; border-top: 2px dashed #ccc;">
                <span>TOTAL:</span>
                <span style="color: #ff5500;">Rp ${formatPrice(total)}</span>
            </div>
        </div>
        
        <div style="width: 200px; height: 200px; margin: 20px auto; background: white; border: 2px solid #333; display: flex; align-items: center; justify-content: center;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding: 20px;">
                <div style="background: black; width: 25px; height: 25px;"></div>
                <div style="background: black; width: 25px; height: 25px;"></div>
                <div style="background: black; width: 25px; height: 25px;"></div>
                <div style="background: black; width: 25px; height: 25px;"></div>
                <div style="background: white; width: 25px; height: 25px; border: 1px solid #ccc;"></div>
                <div style="background: black; width: 25px; height: 25px;"></div>
                <div style="background: black; width: 25px; height: 25px;"></div>
                <div style="background: black; width: 25px; height: 25px;"></div>
                <div style="background: black; width: 25px; height: 25px;"></div>
            </div>
        </div>
        
        <p style="margin: 15px 0;">Scan QR Code untuk melakukan pembayaran</p>
    `;
}

function sendWhatsApp() {
    let items = '';
    let total = 0;

    const selectedItems = cart.filter(item => item.selected);

    if (selectedItems.length === 0) {
        alert("Pilih minimal 1 barang dulu!");
        return;
    }
    
    for (let item of cart.filter(item => item.selected)) {
        items += `- ${item.name} (${item.quantity}x) @Rp ${formatPrice(item.price)} = Rp ${formatPrice(item.price * item.quantity)}\n`;
        total += item.price * item.quantity;
    }
    
    const message = `Halo, saya ingin memesan:\n\n${items}\nTOTAL: Rp ${formatPrice(total)}\n\nMohon info pembayaran lebih lanjut.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Kosongkan keranjang
    cart = [];
    updateCartCount();
    displayCartItems();
    closePaymentModal();
    closeAll();
    showNotification('Terima kasih! Pesanan Anda akan segera diproses.');
}

// ========== EVENT LISTENER ==========
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAll();
    }
});

// Tambahkan CSS animasi
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

function filterCategory(category) {
    let filteredProducts;

    if (category === "all") {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }

    displayFilteredProducts(filteredProducts);
}
document.head.appendChild(style);
function displayFilteredProducts(productList) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    let html = '';
    
    for (let product of productList) {
        html += `
            <div class="product-card">
                <div class="product-image" onclick="showProductDetail(${product.id})">
                    <img src="${product.productImages[0]}" 
                         alt="${product.name}">
                </div>
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">Rp ${formatPrice(product.price)}</div>
                    <button class="btn-add-to-cart" onclick="addToCart(${product.id}); event.stopPropagation();">
                        TAMBAH KE KERANJANG
                    </button>
                </div>
            </div>
        `;
    }
    
    productGrid.innerHTML = html;
}
function toggleSelect(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.selected = !item.selected;
    }
    updateCartTotal();
}

function updateCartTotal() {
    const total = cart
        .filter(item => item.selected)
        .reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const cartTotal = document.getElementById('cartTotal');
    if (cartTotal) cartTotal.textContent = `Rp ${formatPrice(total)}`;
}