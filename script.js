const menuItems = [
    {
        id: 1,
        name: "Royal Hyderabadi Dum Biryani",
        category: "Biryanis",
        diet: "Non Veg",
        price: 349,
        description: "Fragrant basmati rice slow-cooked in a sealed handi with saffron, caramelized onions, and tender spiced chicken.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 2,
        name: "Subz Nizami Veg Biryani",
        category: "Biryanis",
        diet: "Veg",
        price: 279,
        description: "Garden-fresh vegetables and paneer layered with aged basmati rice, mint, rose water, and roasted cashews.",
        image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 3,
        name: "Paneer Tikka Angara",
        category: "Starters",
        diet: "Veg",
        price: 249,
        description: "Char-grilled cottage cheese cubes marinated in hung curd, Kashmiri chili, and aromatic tandoori spices.",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 4,
        name: "Murgh Malai Kebab",
        category: "Starters",
        diet: "Non Veg",
        price: 299,
        description: "Melt-in-the-mouth chicken morsels infused with cream cheese, cardamom, and white pepper grilled over charcoal.",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 5,
        name: "Butter Chicken Makhani",
        category: "Main Course",
        diet: "Non Veg",
        price: 369,
        description: "Tandoor-roasted chicken simmered in a velvety tomato, cashew, and fenugreek butter gravy.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 6,
        name: "Dal Bukhara Signature",
        category: "Main Course",
        diet: "Veg",
        price: 259,
        description: "Black lentils slow-simmered overnight for 18 hours with ginger, garlic, cream, and white butter.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 7,
        name: "Smoky Tandoori Chicken Burger",
        category: "Burgers",
        diet: "Non Veg",
        price: 229,
        description: "Juicy spiced chicken patty, melted cheddar, mint aioli, and crispy onions in a toasted brioche bun.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 8,
        name: "Crispy Aloo Tikki Maharaja Burger",
        category: "Burgers",
        diet: "Veg",
        price: 189,
        description: "Golden herb potato patty topped with chipotle mayo, fresh lettuce, tomatoes, and cheese slice.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 9,
        name: "Tandoori Paneer Makhani Pizza",
        category: "Pizza",
        diet: "Veg",
        price: 349,
        description: "Wood-fired crust topped with makhani sauce, smoky paneer tikka, bell peppers, and mozzarella.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 10,
        name: "Spiced Chicken Tikka Feast Pizza",
        category: "Pizza",
        diet: "Non Veg",
        price: 399,
        description: "Loaded with roasted chicken tikka, jalapeños, red paprika, onions, and extra stretchy cheese.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 11,
        name: "Saffron Gulab Jamun Cheesecake",
        category: "Desserts",
        diet: "Veg",
        price: 199,
        description: "Creamy cardamom cheesecake layered with warm rose-scented gulab jamun and pistachio crumble.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 12,
        name: "Molten Belgian Chocolate Lava",
        category: "Desserts",
        diet: "Veg",
        price: 219,
        description: "Warm dark chocolate cake with a gooey fudge center served alongside vanilla bean ice cream.",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 13,
        name: "Blue Lagoon Mint Mojito",
        category: "Beverages",
        diet: "Veg",
        price: 149,
        description: "Refreshing blue curaçao fizz muddled with fresh garden mint, lime wedges, and crushed ice.",
        image: "https://tse1.mm.bing.net/th/id/OIP.WaOexX3jzUNhzDEyvGee-gHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 14,
        name: "Royal Mango Saffron Lassi",
        category: "Beverages",
        diet: "Veg",
        price: 139,
        description: "Thick churned yogurt smoothie blended with Alphonso mango pulp, saffron strands, and almonds.",
        image: "https://www.bargpt.app/_next/image?url=https:%2F%2Fheybairtender.s3.amazonaws.com%2Frecipes%2Fmango-saffron-royale_D3.png&w=3840&q=75"
    },
    {
        id: 15,
        name: "Roasted Almond & Caramel Sundae",
        category: "Ice Creams",
        diet: "Veg",
        price: 179,
        description: "Artisanal salted caramel and vanilla scoops drizzled with hot butterscotch and toasted almonds.",
        image: "https://tse1.mm.bing.net/th/id/OIP.iDYGX4_MubOnnOXZMb9pkQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 16,
        name: "Schezwan Chilli Paneer Dry",
        category: "Chinese",
        diet: "Veg",
        price: 239,
        description: "Crispy cottage cheese tossed in fiery wok-seared Schezwan sauce with spring onions and peppers.",
        image: "https://northshore.noveltysweets.co.nz/wp-content/uploads/2024/09/Schezwan-Chilli-Paneer-Hot-Dry.jpg"
    },
    {
        id: 17,
        name: "Dragon Chicken Hakka Noodles",
        category: "Chinese",
        diet: "Non Veg",
        price: 269,
        description: "Wok-tossed noodles with crispy honey-chilli chicken strips, julienned veggies, and soy garlic glaze.",
        image: "https://sinfullyspicy.com/wp-content/uploads/2023/01/1200-by-1200-images-5.jpg"
    }
];

let cart = JSON.parse(localStorage.getItem("cmi_spices_cart")) || [];
let appliedPromo = localStorage.getItem("cmi_spices_promo") || "";
let activeCategory = "All";
let searchQuery = "";

const FALLBACK_IMG = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80";

function saveCart() {
    localStorage.setItem("cmi_spices_cart", JSON.stringify(cart));
    localStorage.setItem("cmi_spices_promo", appliedPromo);
    updateCartUI();
}

function showToast(message) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toastMessage");
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2600);
}

function addToCart(id) {
    const item = menuItems.find(dish => dish.id === id);
    if (!item) return;

    const existing = cart.find(entry => entry.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    saveCart();
    showToast(`${item.name} added to cart!`);
}

function updateQty(id, delta) {
    const index = cart.findIndex(entry => entry.id === id);
    if (index === -1) return;

    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
}

function removeFromCart(id) {
    cart = cart.filter(entry => entry.id !== id);
    saveCart();
    showToast("Item removed from cart");
}

function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    let discount = 0;

    if (appliedPromo === "FIRST20") {
        discount = Math.round(subtotal * 0.20);
    } else if (appliedPromo === "FAMILY" && subtotal >= 600) {
        discount = 120;
    } else if (appliedPromo === "WEEKEND") {
        discount = Math.round(subtotal * 0.15);
    }

    const delivery = subtotal > 0 ? (subtotal >= 500 ? 0 : 40) : 0;
    const total = Math.max(0, subtotal - discount + delivery);

    return { subtotal, discount, delivery, total };
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartCountEl = document.getElementById("cartCount");
    const cartItemLabelEl = document.getElementById("cartItemLabel");
    const cartItemsEl = document.getElementById("cartItems");
    const cartEmptyEl = document.getElementById("cartEmpty");
    const cartBottomEl = document.getElementById("cartBottom");

    if (cartCountEl) cartCountEl.textContent = totalCount;
    if (cartItemLabelEl) cartItemLabelEl.textContent = `${totalCount} item${totalCount !== 1 ? "s" : ""}`;

    if (!cartItemsEl) return;

    if (cart.length === 0) {
        cartItemsEl.style.display = "none";
        if (cartBottomEl) cartBottomEl.style.display = "none";
        if (cartEmptyEl) cartEmptyEl.style.display = "block";
        return;
    }

    cartItemsEl.style.display = "block";
    if (cartBottomEl) cartBottomEl.style.display = "block";
    if (cartEmptyEl) cartEmptyEl.style.display = "none";

    cartItemsEl.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='${FALLBACK_IMG}'">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="text-info fw-bold">₹${item.price * item.qty}</span>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="Remove">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    `).join("");

    const { subtotal, discount, delivery, total } = calculateTotals();
    document.getElementById("cartSubtotal").textContent = `₹${subtotal}`;
    document.getElementById("deliveryCharge").textContent = delivery === 0 ? "FREE" : `₹${delivery}`;
    document.getElementById("cartTotal").textContent = `₹${total}`;

    const discountRow = document.getElementById("discountRow");
    const cartDiscountEl = document.getElementById("cartDiscount");
    if (discountRow && cartDiscountEl) {
        if (discount > 0) {
            discountRow.style.display = "flex";
            cartDiscountEl.textContent = `-₹${discount} (${appliedPromo})`;
        } else {
            discountRow.style.display = "none";
        }
    }
}

function renderMenu(limit = null) {
    const menuGrid = document.getElementById("menuGrid");
    const menuEmpty = document.getElementById("menuEmpty");
    if (!menuGrid) return;

    let filtered = menuItems.filter(item => {
        const matchesCategory =
            activeCategory === "All" ||
            item.category === activeCategory ||
            item.diet === activeCategory;
        const matchesSearch =
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (limit) {
        filtered = filtered.slice(0, limit);
    }

    if (filtered.length === 0) {
        menuGrid.innerHTML = "";
        if (menuEmpty) menuEmpty.style.display = "block";
        return;
    }

    if (menuEmpty) menuEmpty.style.display = "none";
    menuGrid.innerHTML = filtered.map(item => `
        <div class="menu-card">
            <div class="menu-img-wrap">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='${FALLBACK_IMG}'">
                <span class="diet-badge">
                    <span class="diet-dot ${item.diet === 'Veg' ? 'diet-veg' : 'diet-nonveg'}"></span>
                    ${item.diet}
                </span>
                <span class="menu-category-pill">${item.category}</span>
            </div>
            <div class="menu-body">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-footer">
                    <span class="menu-price">₹${item.price}</span>
                    <button class="add-cart-btn" onclick="addToCart(${item.id})">
                        <i class="bi bi-bag-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

function toggleCart(open) {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    if (!sidebar || !overlay) return;
    sidebar.classList.toggle("active", open);
    overlay.classList.toggle("active", open);
}

// Sync cart live across multiple open tabs
window.addEventListener("storage", (e) => {
    if (e.key === "cmi_spices_cart" || e.key === "cmi_spices_promo") {
        cart = JSON.parse(localStorage.getItem("cmi_spices_cart")) || [];
        appliedPromo = localStorage.getItem("cmi_spices_promo") || "";
        updateCartUI();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Check if URL has a category parameter (e.g., menu.html?category=Biryanis)
    const params = new URLSearchParams(window.location.search);
    const urlCategory = params.get("category");
    if (urlCategory) {
        activeCategory = urlCategory;
    }

    const menuGrid = document.getElementById("menuGrid");
    if (menuGrid) {
        const isHomePreview = menuGrid.dataset.preview === "true";
        renderMenu(isHomePreview ? 6 : null);
    }

    // Category filter buttons
    const categoryBtns = document.querySelectorAll(".category-btn");
    categoryBtns.forEach(btn => {
        if (btn.dataset.category === activeCategory) {
            categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        }
        btn.addEventListener("click", () => {
            categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.dataset.category;
            renderMenu();
        });
    });

    // Search input
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            renderMenu();
        });
    }

    // Mobile navbar toggle
    const menuToggle = document.getElementById("menuToggle");
    const navbarMenu = document.getElementById("navbarMenu");
    if (menuToggle && navbarMenu) {
        menuToggle.addEventListener("click", () => {
            navbarMenu.classList.toggle("show");
        });
    }

    // Cart open/close listeners
    const openCartBtn = document.getElementById("openCart");
    const closeCartBtn = document.getElementById("closeCart");
    const cartOverlay = document.getElementById("cartOverlay");
    const continueShopping = document.getElementById("continueShopping");

    if (openCartBtn) openCartBtn.addEventListener("click", () => toggleCart(true));
    if (closeCartBtn) closeCartBtn.addEventListener("click", () => toggleCart(false));
    if (cartOverlay) cartOverlay.addEventListener("click", () => toggleCart(false));
    if (continueShopping) continueShopping.addEventListener("click", () => toggleCart(false));

    // Promo code apply
    const applyPromoBtn = document.getElementById("applyPromoBtn");
    const promoInput = document.getElementById("promoInput");
    if (applyPromoBtn && promoInput) {
        promoInput.value = appliedPromo;
        applyPromoBtn.addEventListener("click", () => {
            const code = promoInput.value.trim().toUpperCase();
            if (["FIRST20", "FAMILY", "WEEKEND"].includes(code)) {
                appliedPromo = code;
                saveCart();
                showToast(`Promo code ${code} applied!`);
            } else {
                showToast("Invalid code. Try FIRST20, FAMILY, or WEEKEND");
            }
        });
    }

    // Offer card buttons
    document.querySelectorAll(".offer-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const code = btn.dataset.code;
            if (code) {
                appliedPromo = code;
                saveCart();
                showToast(`Offer ${code} copied & applied to your cart!`);
            }
        });
    });

    // Checkout Modal trigger
    const checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            toggleCart(false);
            const { subtotal, discount, delivery, total } = calculateTotals();
            const summaryEl = document.getElementById("checkoutSummary");
            if (summaryEl) {
                summaryEl.innerHTML = `
                    <div class="d-flex justify-content-between mb-1"><span>Items (${cart.reduce((s, i) => s + i.qty, 0)}):</span><strong>₹${subtotal}</strong></div>
                    ${discount > 0 ? `<div class="d-flex justify-content-between mb-1 text-info"><span>Discount (${appliedPromo}):</span><strong>-₹${discount}</strong></div>` : ""}
                    <div class="d-flex justify-content-between mb-1"><span>Delivery:</span><strong>${delivery === 0 ? "FREE" : "₹" + delivery}</strong></div>
                    <hr class="border-secondary">
                    <div class="d-flex justify-content-between fs-5"><span>Total Payable:</span><strong class="text-info">₹${total}</strong></div>
                `;
            }
            const checkoutModal = new bootstrap.Modal(document.getElementById("checkoutModal"));
            checkoutModal.show();
        });
    }

    // Checkout Form Submission
    const checkoutForm = document.getElementById("checkoutForm");
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(checkoutForm);
            const customerName = formData.get("customerName");
            const payment = formData.get("payment");
            const { total } = calculateTotals();
            const orderId = "CMI-" + Math.floor(100000 + Math.random() * 900000);

            bootstrap.Modal.getInstance(document.getElementById("checkoutModal")).hide();

            document.getElementById("orderNumber").textContent = `Order ID: #${orderId}`;
            document.getElementById("successDetails").innerHTML = `
                <p class="mb-1">Thank you, <strong>${customerName}</strong>!</p>
                <p class="text-secondary small">Amount: <strong>₹${total}</strong> via <strong>${payment}</strong></p>
            `;

            cart = [];
            appliedPromo = "";
            saveCart();
            checkoutForm.reset();

            const successModal = new bootstrap.Modal(document.getElementById("successModal"));
            successModal.show();
        });
    }

    // Contact & Newsletter forms
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showToast("Thank you! Your message has been sent.");
            contactForm.reset();
        });
    }

    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showToast("Subscribed to CMI's Spices updates!");
            newsletterForm.reset();
        });
    }

    // Back to top button
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
        window.addEventListener("scroll", () => {
            backToTop.style.display = window.scrollY > 350 ? "flex" : "none";
        });
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    updateCartUI();
});