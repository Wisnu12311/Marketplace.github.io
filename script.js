// ============================================================
//  SECOND GEAR COLLECTION - script.js
//  Struktur:
//  1. Data Produk
//  2. Konfigurasi & Variabel Global
//  3. Inisialisasi
//  4. Fungsi Waktu
//  5. Fungsi Tampil Produk
//  6. Fungsi Filter Kategori
//  7. Fungsi Slideshow (Detail Produk)
//  8. Fungsi Modal Detail Produk
//  9. Fungsi Keranjang Belanja
//  10. Fungsi Toggle UI (buka/tutup sidebar, menu, modal)
//  11. Fungsi Pembayaran
//  12. Event Listener Global
// ============================================================


// ============================================================
// [1] DATA PRODUK
// ============================================================

const products = [
    {
        id: 1,
        name: "Mouse AOC Pink",
        price: 85000,
        productImages: [
            "images/mouseAzriel.jpeg",
            "images/mousetengah.jpeg",
            "images/mousesamping.jpeg",
            "images/mousepinggir.jpeg",
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
        category: "mouse"
    },
    {
        id: 2,
        name: "Mouse Ignix F7Pro",
        price: 145000,
        productImages: [
            "images/mouseWisnu.jpeg",
            "images/mouseWisnu2.jpeg",
            "images/mouseWisnu3.jpeg",
            "images/mouseWisnu4.jpeg"
        ],
        cartImage: "🖱️",
        badge: "HOT",
        description: "VortexSeries Ignix F7 Pro adalah mouse gaming nirkabel ultralight (53g±3g) yang dirancang untuk tangan besar dengan bentuk simetris/ambidextrous. Populer karena ergonomis, performa tinggi, lapisan Ice Matte Coating, koneksi triple-mode, dan harga kompetitif.",
        specs: {
            "Merk": "VORTEX",
            "Model": "IGNIX F7PRO",
            "DPI": "40.000 DPI",
            "Koneksi": "3 Connection Mode",
            "Tombol": "6 Tombol",
            "Sensor": "PixArt PAW 3395 PRO",
            "Berat": "53 gram",
            "Garansi": "1 Tahun"
        },
        stock: 8,
        category: "mouse"
    },
    {
        id: 3,
        name: "Mouse VXE R1 SE++",
        price: 250000,
        productImages: [
            "images/mouseRendi.jpeg",
            "images/mouserendiatas.jpeg",
            "images/mouserenditengah.jpeg"
        ],
        cartImage: "🖱️",
        badge: "HOT",
        description: "Mouse gaming wireless ultra-ringan (55g) dengan harga terjangkau yang menawarkan performa tinggi.",
        specs: {
            "Merk": "VGN & VXE",
            "Model": "VXE R1 SE++",
            "DPI": "18.000 DPI",
            "Tombol": "6 Tombol",
            "Battery Capacity": "500 mAh",
            "Polling Rate": "125-1000Hz",
            "Berat": "51 gram",
            "Koneksi": "2.4GHz, Bluetooth, USB",
            "IPS": "400",
            "Garansi": "1 Tahun"
        },
        stock: 5,
        category: "mouse"
    },
    {
        id: 4,
        name: "Mouse FANTECH W605",
        price: 100000,
        productImages: [
            "images/mouseAzriel2.jpeg",
            "images/mouseAzriel2sisi1.jpeg",
            "images/ouseAzriel2sisi2.jpeg"
        ],
        cartImage: "🖱️",
        badge: "NEW",
        description: "Fantech GO W605 adalah mouse wireless 2.4GHz yang ringan dan portabel, dirancang untuk kebutuhan kantor atau harian dengan koneksi stabil hingga 10 meter.",
        specs: {
            "Merk": "Fantech",
            "Model": "W605",
            "DPI": "800–1600 DPI",
            "Tombol": "4 Tombol",
            "Battery Capacity": "1x AA Battery",
            "Polling Rate": "125Hz",
            "Berat": "±70 gram",
            "Koneksi": "2.4GHz Wireless (USB Receiver)",
            "Garansi": "1 Tahun"
        },
        stock: 5,
        category: "mouse"
    },
    {
        id: 5,
        name: "Laptop LOQ 15IRX9",
        price: 10000000,
        productImages: [
            "images/laptopwisnu.jpeg",
            "images/laptopwisnubelakang.jpeg",
            "images/laptopwisnuspek.jpeg",
        ],
        cartImage: "💻",
        badge: "PREMIUM",
        description: "Laptop gaming entry-level berperforma tinggi terinspirasi dari seri Legion, dengan spesifikasi bertenaga dan harga lebih terjangkau. Layar 15,6 inci 144Hz 100% sRGB.",
        specs: {
            "Merk": "LENOVO",
            "Model": "LOQ 15IRX9 RTX3050",
            "Prosesor": "Intel Core i5-13450HX",
            "Ukuran": "15,6 inch",
            "Resolusi": "1920 x 1080 (Full HD)",
            "Panel": "IPS",
            "Refresh Rate": "144Hz",
            "Response Time": "5ms",
            "Port": "HDMI, VGA",
            "Garansi": "2 Tahun"
        },
        stock: 5,
        category: "laptop"
    },
    {
        id: 6,
        name: "Laptop Asus E510",
        price: 7000000,
        productImages: [
            "images/laptopraflie.jpeg",
            "images/laptopRapli.jpeg",
            "images/laptopRapli2.jpeg",
            "images/laptopRapli3.jpeg",
        ],
        cartImage: "💻",
        badge: "PREMIUM",
        description: "Laptop entry-level ultra-tipis 15,6 inci yang ringan, dirancang untuk produktivitas harian. Didukung Intel Celeron N4020, RAM 4GB, dan SSD.",
        specs: {
            "Merk": "ASUS",
            "Model": "E510MA",
            "Prosesor": "Intel Celeron N4020/N4120",
            "Ukuran": "15,6 inch",
            "Resolusi": "Full HD (1920 x 1080)",
            "Panel": "IPS",
            "Refresh Rate": "60Hz",
            "Response Time": "5ms",
            "Garansi": "2 Tahun"
        },
        stock: 5,
        category: "laptop"
    },
    {
        id: 7,
        name: "Laptop Acer Nitro V15",
        price: 15000000,
        productImages: [
            "images/laptopdono.jpeg",
            "images/laptopdonobelakang.jpeg",
            "images/laptopspek.jpeg",
        ],
        cartImage: "💻",
        badge: "PREMIUM",
        description: "Laptop gaming entry-level terjangkau dengan Intel Core i5-13420H, GPU RTX 2050 4GB, RAM 8GB DDR5, SSD 512GB, dan layar IPS 15,6 inci FHD 144Hz.",
        specs: {
            "Merk": "Acer",
            "Model": "Nitro V15",
            "Prosesor": "Intel Core i5-13420H (hingga 4.60 GHz)",
            "Ukuran": "15,6 inch",
            "Resolusi": "FHD IPS 144Hz (1920 x 1080)",
            "Grafis": "NVIDIA GeForce RTX 2050 4GB GDDR6",
            "Port": "3x USB-A, 1x USB-C (TB4), HDMI 2.1, RJ-45, Jack Audio",
            "Sistem Pendingin": "Kipas Ganda (Dual Fan)"
        },
        stock: 12,
        category: "laptop"
    },
    {
        id: 8,
        name: "Keyboard Vortex Mono 80%",
        price: 220000,
        productImages: [
            "images/keyboard.jpeg",
            "images/keyboardatas.jpeg",
            "images/keyboardsamping.jpeg"
        ],
        cartImage: "⌨️",
        badge: "EXCLUSIVE",
        description: "Mechanical keyboard wired terjangkau yang populer di Indonesia, dengan fitur gasket mount, hotswap 5-pin, keycaps PBT tebal, dan suara thocky dari redaman 5 lapis.",
        specs: {
            "Merk": "VORTEX",
            "Model": "MONO 80%",
            "Ukuran": "32.7 cm x 13.6 cm",
            "Layout": "80% (Tenkeyless + F-Keys)",
            "Keycaps": "OEM, ABS Doubleshot",
            "Fitur Utama": "Gasket Mount, Hotswappable, Wired, RGB",
            "Switch": "JX Jade White (Linear 5-pin)",
            "Garansi": "1 Tahun"
        },
        stock: 5,
        category: "keyboard"
    }
];


// ============================================================
// [2] KONFIGURASI & VARIABEL GLOBAL
// ============================================================

// Nomor WhatsApp admin (format internasional tanpa +)
const WHATSAPP_NUMBER = "628889602017";

// Data keranjang belanja
let cart = [];

// State slideshow pada modal detail produk
let currentSlideIndex = 0;
let currentProduct = null;


// ============================================================
// [3] INISIALISASI — dijalankan saat halaman selesai dimuat
// ============================================================

window.onload = function () {
    displayProducts();   // Tampilkan semua produk
    updateCartCount();   // Reset penghitung keranjang
    updateTime();        // Tampilkan jam pertama kali
    setInterval(updateTime, 1000); // Update jam setiap detik
};


// ============================================================
// [4] FUNGSI WAKTU
// ============================================================

/** Menampilkan jam real-time di navbar */
function updateTime() {
    const now = new Date();
    const hours   = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const el = document.getElementById('currentTime');
    if (el) el.textContent = `${hours}:${minutes}`;
}


// ============================================================
// [5] FUNGSI TAMPIL PRODUK
// ============================================================

/**
 * Membuat card HTML untuk satu produk
 * @param {Object} product - Objek produk dari array products
 * @returns {string} HTML string card produk
 */
function createProductCard(product) {
    return `
        <div class="product-card">

            <!-- Gambar Produk (klik → buka detail) -->
            <div class="product-image" onclick="showProductDetail(${product.id})">
                <img src="${product.productImages[0]}" alt="${product.name}">
            </div>

            <!-- Badge (NEW / HOT / PREMIUM / dll) -->
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}

            <!-- Info Produk -->
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">Rp ${formatPrice(product.price)}</div>

                <!-- Tombol Aksi -->
                <div class="product-buttons">
                    <button class="btn-add-to-cart"
                        onclick="addToCart(${product.id}); event.stopPropagation();">
                         KERANJANG
                    </button>
                    <button class="btn-buy-now"
                        onclick="buyNowDirect(${product.id}); event.stopPropagation();">
                         BELI
                    </button>
                </div>
            </div>

        </div>
    `;
}

/** Menampilkan SEMUA produk ke dalam #productGrid */
function displayProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    grid.innerHTML = products.map(createProductCard).join('');
}

/** Menampilkan produk yang sudah difilter ke dalam #productGrid */
function displayFilteredProducts(productList) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    grid.innerHTML = productList.length
        ? productList.map(createProductCard).join('')
        : '<p style="color:#ccc; text-align:center; padding:40px;">Produk tidak ditemukan.</p>';
}


// ============================================================
// [6] FUNGSI FILTER KATEGORI
// ============================================================

/**
 * Filter produk berdasarkan kategori dari dropdown
 * @param {string} category - Nilai kategori (all / mouse / keyboard / laptop)
 */
function filterCategory(category) {
    if (category === "all" || category === "") {
        displayFilteredProducts(products); // Tampilkan semua
    } else {
        const filtered = products.filter(p => p.category === category);
        displayFilteredProducts(filtered);
    }
}


// ============================================================
// [7] FUNGSI SLIDESHOW (pada Modal Detail Produk)
// ============================================================

/**
 * Pindah slide ke arah tertentu
 * @param {number} direction - -1 (prev) atau 1 (next)
 */
function changeSlide(direction) {
    if (!currentProduct) return;
    const total = currentProduct.productImages.length;
    currentSlideIndex = (currentSlideIndex + direction + total) % total;
    updateSlideDisplay();
}

/**
 * Langsung lompat ke slide tertentu
 * @param {number} index - Index slide yang dituju
 */
function goToSlide(index) {
    if (!currentProduct) return;
    currentSlideIndex = index;
    updateSlideDisplay();
}

/** Memperbarui tampilan gambar utama, thumbnail, counter, dan indikator */
function updateSlideDisplay() {
    if (!currentProduct) return;

    const mainImage  = document.getElementById('slide-main-image');
    const thumbs     = document.getElementById('slide-thumbnails');
    const counter    = document.getElementById('slide-counter');
    const indicators = document.getElementById('slide-indicators');

    // Update gambar utama
    if (mainImage) mainImage.src = currentProduct.productImages[currentSlideIndex];

    // Update active thumbnail
    if (thumbs) {
        Array.from(thumbs.children).forEach((el, i) => {
            el.classList.toggle('active', i === currentSlideIndex);
        });
    }

    // Update counter teks
    if (counter) {
        counter.textContent = `${currentSlideIndex + 1} / ${currentProduct.productImages.length}`;
    }

    // Update dot indicators
    if (indicators) {
        Array.from(indicators.children).forEach((el, i) => {
            el.classList.toggle('active', i === currentSlideIndex);
        });
    }
}


// ============================================================
// [8] FUNGSI MODAL DETAIL PRODUK
// ============================================================

/**
 * Membuka modal detail produk berdasarkan ID
 * @param {number} productId - ID produk yang akan ditampilkan
 */
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentProduct = product;
    currentSlideIndex = 0;

    // Buat baris tabel spesifikasi
    const specsHtml = Object.entries(product.specs)
        .map(([key, val]) => `<tr><td>${key}</td><td>${val}</td></tr>`)
        .join('');

    // Tentukan label & warna status stok
    let stockLabel, stockClass;
    if (product.stock > 10) {
        stockLabel = 'Stok Tersedia';       stockClass = 'stock-status';
    } else if (product.stock > 0) {
        stockLabel = `Stok Tersisa ${product.stock}`; stockClass = 'stock-status low';
    } else {
        stockLabel = 'Stok Habis';          stockClass = 'stock-status empty';
    }

    // Buat thumbnail list
    const thumbsHtml = product.productImages
        .map((img, i) => `
            <div class="thumbnail-item ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})">
                <img src="${img}" alt="Thumbnail ${i + 1}">
            </div>
        `).join('');

    // Buat dot indicators
    const indicatorsHtml = product.productImages
        .map((_, i) => `<div class="indicator ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>`)
        .join('');

    // Isi konten modal
    document.getElementById('detailTitle').textContent = product.name;
    document.getElementById('productDetailBody').innerHTML = `
        <div class="product-detail">

            <!-- Galeri Gambar -->
            <div class="detail-gallery">
                <div class="main-image">
                    <img id="slide-main-image" src="${product.productImages[0]}" alt="${product.name}">
                    <div class="slide-nav prev" onclick="changeSlide(-1)">←</div>
                    <div class="slide-nav next" onclick="changeSlide(1)">→</div>
                    <div class="image-counter" id="slide-counter">1 / ${product.productImages.length}</div>
                </div>
                <div class="thumbnail-container" id="slide-thumbnails">${thumbsHtml}</div>
                <div class="slide-indicators" id="slide-indicators">${indicatorsHtml}</div>
            </div>

            <!-- Info & Spesifikasi -->
            <div class="detail-info">
                <span class="detail-badge">${product.badge || 'REGULAR'}</span>
                <h2>${product.name}</h2>
                <div class="detail-price">Rp ${formatPrice(product.price)}</div>

                <div class="detail-stock">
                    <span>Status Stok:</span>
                    <span class="${stockClass}">${stockLabel}</span>
                </div>

                <div class="detail-description">
                    <h4>Deskripsi Produk</h4>
                    <p>${product.description}</p>
                </div>

                <div class="detail-specs">
                    <h4>Spesifikasi Produk</h4>
                    <table>${specsHtml}</table>
                </div>

                <!-- Tombol Aksi Detail -->
                <div class="detail-actions">
                    <button class="btn-detail-cart" onclick="addToCartFromDetail(${product.id})">
                        🛒 TAMBAH KE KERANJANG
                    </button>
                    <button class="btn-detail-buy" onclick="buyNowDirect(${product.id})">
                        ⚡ BELI SEKARANG
                    </button>
                    <button class="btn-detail-wa" onclick="buyNowWhatsApp(${product.id})">
                        📱 BELI VIA WA
                    </button>
                </div>
            </div>

        </div>
    `;

    // Tampilkan modal & overlay
    document.getElementById('productDetailModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

/** Menutup modal detail produk */
function closeProductDetail() {
    document.getElementById('productDetailModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = '';
    currentProduct = null;
    currentSlideIndex = 0;
}


// ============================================================
// [9] FUNGSI KERANJANG BELANJA
// ============================================================

/**
 * Format angka ke format harga Rupiah (titik sebagai pemisah ribuan)
 * @param {number} price - Angka harga
 * @returns {string} Harga terformat, contoh: 100.000
 */
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/**
 * Menambahkan produk ke keranjang
 * @param {number} productId - ID produk yang ditambahkan
 */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);

    if (existing) {
        // Produk sudah ada → tambah quantity
        if (existing.quantity >= product.stock) {
            alert(`Stok hanya tersedia ${product.stock}`);
            return;
        }
        existing.quantity += 1;
    } else {
        // Produk belum ada → tambahkan baru
        cart.push({
            id:       product.id,
            name:     product.name,
            price:    product.price,
            image:    product.cartImage,
            quantity: 1,
            selected: true
        });
    }

    updateCartCount();
    displayCartItems();
    showNotification(`${product.name} ditambahkan ke keranjang`);
}

/** Wrapper addToCart dari halaman detail produk */
function addToCartFromDetail(productId) {
    addToCart(productId);
}

/**
 * Toggle centang/tidak centang item di keranjang
 * @param {number} productId - ID produk yang di-toggle
 */
function toggleSelect(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) item.selected = !item.selected;
    updateCartTotal();
}

/**
 * Mengubah jumlah item di keranjang
 * @param {number} productId  - ID produk
 * @param {number} newQty     - Jumlah baru
 */
function updateQuantity(productId, newQty) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (newQty <= 0) {
        removeFromCart(productId);
        return;
    }
    if (newQty > product.stock) {
        alert(`Stok maksimal hanya ${product.stock}`);
        return;
    }

    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQty;
        displayCartItems();
        updateCartCount();
    }
}

/**
 * Menghapus item dari keranjang
 * @param {number} productId - ID produk yang dihapus
 */
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    displayCartItems();
    updateCartCount();
}

/** Memperbarui angka badge keranjang di navbar dan floating button */
function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const elFloat = document.getElementById('cartCount');
    const elNav   = document.getElementById('navCartCount');
    if (elFloat) elFloat.textContent = total;
    if (elNav)   elNav.textContent   = total;
}

/** Memperbarui total harga di footer sidebar keranjang (hanya item yang dicentang) */
function updateCartTotal() {
    const total = cart
        .filter(item => item.selected)
        .reduce((sum, item) => sum + item.price * item.quantity, 0);
    const el = document.getElementById('cartTotal');
    if (el) el.textContent = `Rp ${formatPrice(total)}`;
}

/** Merender ulang seluruh daftar item di sidebar keranjang */
function displayCartItems() {
    const container = document.getElementById('cartItems');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart">Keranjang belanja kosong</div>';
        updateCartTotal();
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">

            <!-- Checkbox pilih item -->
            <input type="checkbox"
                onchange="toggleSelect(${item.id})"
                ${item.selected ? 'checked' : ''}>

            <!-- Ikon produk -->
            <div class="cart-item-image">${item.image}</div>

            <!-- Detail item -->
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">Rp ${formatPrice(item.price)}</div>

                <!-- Kontrol jumlah & hapus -->
                <div class="cart-item-actions">
                    <button class="cart-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <span class="cart-quantity">${item.quantity}</span>
                    <button class="cart-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <button class="cart-btn cart-btn-delete" onclick="removeFromCart(${item.id})">🗑️</button>
                </div>
            </div>

        </div>
    `).join('');

    updateCartTotal();
}


// ============================================================
// [10] FUNGSI TOGGLE UI (buka/tutup sidebar, menu, modal)
// ============================================================

/** Membuka/menutup sidebar keranjang belanja */
function toggleCart() {
    const sidebar  = document.getElementById('cartSidebar');
    const overlay  = document.getElementById('overlay');
    if (!sidebar) return;

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        displayCartItems();
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

/** Membuka/menutup menu hamburger (untuk mobile) */
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    if (menu) menu.classList.toggle('active');
}

/** Menutup semua modal, sidebar, dan overlay sekaligus */
function closeAll() {
    const ids = ['cartSidebar', 'paymentModal', 'productDetailModal', 'overlay', 'navMenu'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });
    document.body.style.overflow = '';
    currentProduct = null;
    currentSlideIndex = 0;
}

/**
 * Menampilkan notifikasi pop-up sementara di pojok kanan atas
 * @param {string} message - Teks yang ditampilkan
 */
function showNotification(message) {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed; top: 80px; right: 20px;
        background: linear-gradient(135deg, #ff5500, #ff8800);
        color: white; padding: 15px 25px; border-radius: 8px;
        z-index: 3000; box-shadow: 0 5px 20px rgba(255,85,0,0.3);
        border: 2px solid white; animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2000);
}


// ============================================================
// [11] FUNGSI PEMBAYARAN
// ============================================================

/** Membuka modal pilih metode pembayaran */
function showPaymentModal() {
    if (cart.length === 0) {
        alert('Keranjang belanja masih kosong!');
        return;
    }
    document.getElementById('paymentModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.getElementById('paymentDetail').innerHTML = '';
    document.body.style.overflow = 'hidden';
}

/** Menutup modal pembayaran */
function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = '';
}

/** Menampilkan detail pembayaran via WhatsApp (hanya item yang dicentang) */
function showWhatsAppPayment() {
    const selected = cart.filter(item => item.selected);
    if (selected.length === 0) {
        alert("Pilih minimal 1 barang dulu!");
        return;
    }

    let itemsHtml = '';
    let total = 0;

    selected.forEach(item => {
        itemsHtml += `
            <div style="display:flex; justify-content:space-between;
                        margin-bottom:8px; padding:5px;
                        background:white; border-radius:5px;">
                <span>${item.image} ${item.name} x${item.quantity}</span>
                <span>Rp ${formatPrice(item.price * item.quantity)}</span>
            </div>
        `;
        total += item.price * item.quantity;
    });

    document.getElementById('paymentDetail').innerHTML = `
        <h4 style="margin-bottom:15px;">PEMBAYARAN VIA WHATSAPP</h4>

        <div style="background:#f5f5f5; padding:15px; border-radius:8px; margin-bottom:20px;">
            ${itemsHtml}
            <div style="display:flex; justify-content:space-between;
                        font-weight:bold; margin-top:10px; padding-top:10px;
                        border-top:2px dashed #ccc;">
                <span>TOTAL:</span>
                <span style="color:#ff5500;">Rp ${formatPrice(total)}</span>
            </div>
        </div>

        <div style="font-size:1.3rem; font-weight:bold; margin:20px 0;
                    padding:15px; background:white;
                    border:2px dashed #333; text-align:center;">
            +${WHATSAPP_NUMBER}
        </div>

        <button onclick="sendWhatsApp()"
            style="background:#25D366; color:white; border:none;
                   padding:15px; width:100%; border-radius:8px;
                   font-size:1rem; font-weight:600; cursor:pointer;">
            📱 HUBUNGI VIA WHATSAPP
        </button>
    `;
}

/** Menampilkan detail pembayaran via QR Code */
function showQRPayment() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const itemsHtml = cart.map(item => `
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span>${item.image} ${item.name} x${item.quantity}</span>
            <span>Rp ${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join('');

    document.getElementById('paymentDetail').innerHTML = `
        <h4 style="margin-bottom:15px;">PEMBAYARAN VIA QR CODE</h4>

        <div style="background:#f5f5f5; padding:15px; border-radius:8px; margin-bottom:20px;">
            ${itemsHtml}
            <div style="display:flex; justify-content:space-between;
                        font-weight:bold; margin-top:10px; padding-top:10px;
                        border-top:2px dashed #ccc;">
                <span>TOTAL:</span>
                <span style="color:#ff5500;">Rp ${formatPrice(total)}</span>
            </div>
        </div>

        <!-- Placeholder QR Code -->
        <div style="width:200px; height:200px; margin:20px auto;
                    background:white; border:2px solid #333;
                    display:flex; align-items:center; justify-content:center;
                    font-size:0.8rem; color:#999;">
            [ QR CODE ]
        </div>

        <p style="margin:15px 0;">Scan QR Code untuk melakukan pembayaran</p>
    `;
}

/**
 * Kirim pesan order ke WhatsApp admin
 * Hanya item yang dicentang yang dikirim
 */
function sendWhatsApp() {
    const selected = cart.filter(item => item.selected);
    if (selected.length === 0) {
        alert("Pilih minimal 1 barang dulu!");
        return;
    }

    let items = '';
    let total = 0;

    selected.forEach(item => {
        items += `- ${item.name} (${item.quantity}x) @Rp ${formatPrice(item.price)} = Rp ${formatPrice(item.price * item.quantity)}\n`;
        total += item.price * item.quantity;
    });

    const message = `Halo, saya ingin memesan:\n\n${items}\nTOTAL: Rp ${formatPrice(total)}\n\nMohon info pembayaran lebih lanjut.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');

    // Reset keranjang setelah checkout
    cart = [];
    updateCartCount();
    displayCartItems();
    closePaymentModal();
    closeAll();
    showNotification('Terima kasih! Pesanan Anda akan segera diproses.');
}

/**
 * Beli langsung satu produk via WhatsApp (tanpa masuk keranjang)
 * @param {number} productId - ID produk yang dibeli
 */
function buyNowDirect(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (product.stock <= 0) {
        alert("Stok habis!");
        return;
    }

    const message =
        `Halo, saya ingin membeli:\n` +
        `- ${product.name}\n` +
        `Jumlah: 1\n` +
        `Harga: Rp ${formatPrice(product.price)}\n\n` +
        `TOTAL: Rp ${formatPrice(product.price)}\n\n` +
        `Mohon info pembayaran lebih lanjut.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}

/**
 * Beli produk langsung via WhatsApp dari halaman detail
 * @param {number} productId - ID produk
 */
function buyNowWhatsApp(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const message =
        `Halo, saya ingin membeli:\n` +
        `- ${product.name}\n` +
        `Harga: Rp ${formatPrice(product.price)}\n\n` +
        `Mohon info pembayaran lebih lanjut.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    showNotification('Mengalihkan ke WhatsApp...');
}


// ============================================================
// [12] EVENT LISTENER GLOBAL
// ============================================================

// Tekan Escape → tutup semua modal/sidebar
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
});

// Inject animasi slideIn untuk notifikasi
(function injectAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(100px); }
            to   { opacity: 1; transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);
})();