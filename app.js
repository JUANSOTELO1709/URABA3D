// ── Reemplaza con el número real de WhatsApp (con código de país, sin + ni espacios)
const WHATSAPP_NUMBER = '[WHATSAPP_PENDIENTE]'; // TODO: ej. 573001234567

document.addEventListener('alpine:init', () => {
    Alpine.data('catalogApp', () => ({

        // ── Datos estáticos — sin API todavía ────────────────────────
        categories: [
            { id: 1, name: 'Letras decorativas',      position: 1 },
            { id: 2, name: 'Llaveros personalizados',  position: 2 },
            { id: 3, name: 'Decoración para el hogar', position: 3 },
            { id: 4, name: 'Piezas y repuestos',       position: 4 },
            { id: 5, name: 'Artículos de boda',        position: 5 },
            { id: 6, name: 'Pedidos personalizados',   position: 6 },
        ],

        products: [
            // ── Letras decorativas ────────────────────────────────────
            {
                id: 1, name: 'Letra decorativa individual', category_id: 1,
                base_price: 25000, // TODO [PRECIO_EJEMPLO]
                description: 'Letra individual en PLA de alta calidad. Perfecta para habitaciones, salas y eventos. Elige color y tamaño.',
                colors: [
                    { id: 1, name: 'Blanco', hex_code: '#f5f5f5' },
                    { id: 2, name: 'Negro', hex_code: '#111111' },
                    { id: 3, name: 'Naranja', hex_code: '#FF6B00' },
                    { id: 4, name: 'Dorado', hex_code: '#C9A84C' },
                ],
                sizes: [
                    { id: 1, label: '15 cm', price_modifier: 0 },
                    { id: 2, label: '20 cm', price_modifier: 10000 },
                    { id: 3, label: '25 cm', price_modifier: 20000 },
                ],
                fabrication_days: 3, is_featured: true, photos: [], primary_photo_url: null, available: true,
            },
            {
                id: 2, name: 'Nombre personalizado', category_id: 1,
                base_price: 45000, // TODO [PRECIO_EJEMPLO]
                description: 'Nombre completo en una sola pieza. Hasta 10 caracteres. Ideal para cuartos y como regalo.',
                colors: [
                    { id: 1, name: 'Blanco', hex_code: '#f5f5f5' },
                    { id: 2, name: 'Negro', hex_code: '#111111' },
                    { id: 5, name: 'Rosa', hex_code: '#e91e8c' },
                ],
                sizes: [
                    { id: 4, label: 'Hasta 6 letras', price_modifier: 0 },
                    { id: 5, label: '7–10 letras',    price_modifier: 15000 },
                ],
                fabrication_days: 4, is_featured: false, photos: [], primary_photo_url: null, available: true,
            },
            {
                id: 3, name: 'Letras con canal LED', category_id: 1,
                base_price: 80000, // TODO [PRECIO_EJEMPLO]
                description: 'Letras con canal interno para tira LED (LED no incluida). Efecto de luz ambiental espectacular para eventos y negocios.',
                colors: [
                    { id: 1, name: 'Blanco', hex_code: '#f5f5f5' },
                    { id: 2, name: 'Negro', hex_code: '#111111' },
                ],
                sizes: [
                    { id: 6, label: '15 cm', price_modifier: 0 },
                    { id: 7, label: '20 cm', price_modifier: 15000 },
                    { id: 8, label: '25 cm', price_modifier: 30000 },
                ],
                fabrication_days: 5, is_featured: true, photos: [], primary_photo_url: null, available: true,
            },

            // ── Llaveros ──────────────────────────────────────────────
            {
                id: 4, name: 'Llavero redondo grabado', category_id: 2,
                base_price: 8000, // TODO [PRECIO_EJEMPLO]
                description: 'Llavero circular con texto o ícono en relieve. Resistente, liviano. Ideal para regalos y recuerdos empresariales.',
                colors: [
                    { id: 1, name: 'Blanco', hex_code: '#f5f5f5' },
                    { id: 2, name: 'Negro', hex_code: '#111111' },
                    { id: 3, name: 'Naranja', hex_code: '#FF6B00' },
                ],
                sizes: [], fabrication_days: 2, is_featured: true, photos: [], primary_photo_url: null, available: true,
            },
            {
                id: 5, name: 'Llavero forma personalizada', category_id: 2,
                base_price: 12000, // TODO [PRECIO_EJEMPLO]
                description: 'Llavero con la forma que quieras: mascota, escudo, logo, símbolo. Diseñamos a tu medida.',
                colors: [
                    { id: 1, name: 'Blanco', hex_code: '#f5f5f5' },
                    { id: 2, name: 'Negro', hex_code: '#111111' },
                ],
                sizes: [], fabrication_days: 3, is_featured: false, photos: [], primary_photo_url: null, available: true,
            },

            // ── Decoración para el hogar ──────────────────────────────
            {
                id: 6, name: 'Matera geométrica', category_id: 3,
                base_price: 35000, // TODO [PRECIO_EJEMPLO]
                description: 'Matera de diseño moderno con patrón geométrico. Perfecta para suculentas y plantas pequeñas. Con orificio de drenaje.',
                colors: [
                    { id: 1, name: 'Blanco', hex_code: '#f5f5f5' },
                    { id: 2, name: 'Negro', hex_code: '#111111' },
                    { id: 6, name: 'Terracota', hex_code: '#B85C38' },
                ],
                sizes: [
                    { id: 9,  label: 'Pequeña', price_modifier: 0 },
                    { id: 10, label: 'Mediana', price_modifier: 10000 },
                ],
                fabrication_days: 3, is_featured: true, photos: [], primary_photo_url: null, available: true,
            },
            {
                id: 7, name: 'Marco de fotos minimalista', category_id: 3,
                base_price: 22000, // TODO [PRECIO_EJEMPLO]
                description: 'Marco para foto de diseño limpio. Encaja en cualquier ambiente moderno o industrial.',
                colors: [
                    { id: 1, name: 'Blanco', hex_code: '#f5f5f5' },
                    { id: 2, name: 'Negro', hex_code: '#111111' },
                ],
                sizes: [
                    { id: 11, label: '10×15 cm', price_modifier: 0 },
                    { id: 12, label: '13×18 cm', price_modifier: 8000 },
                ],
                fabrication_days: 2, is_featured: false, photos: [], primary_photo_url: null, available: true,
            },

            // ── Piezas y repuestos ────────────────────────────────────
            {
                id: 8, name: 'Repuesto a medida', category_id: 4,
                base_price: 30000, // TODO [PRECIO_EJEMPLO] — precio base, varía por complejidad
                description: '¿Se rompió una pieza? Tráela y la reproducimos exacta. Electrodomésticos, muebles, maquinaria ligera.',
                colors: [
                    { id: 2, name: 'Negro', hex_code: '#111111' },
                    { id: 1, name: 'Blanco', hex_code: '#f5f5f5' },
                ],
                sizes: [], fabrication_days: 5, is_featured: false, photos: [], primary_photo_url: null, available: true,
            },
            {
                id: 9, name: 'Adaptador o soporte', category_id: 4,
                base_price: 15000, // TODO [PRECIO_EJEMPLO]
                description: 'Adaptadores, bases y soportes para cualquier uso doméstico o industrial ligero. Cotiza enviándonos una foto.',
                colors: [
                    { id: 2, name: 'Negro', hex_code: '#111111' },
                    { id: 1, name: 'Blanco', hex_code: '#f5f5f5' },
                ],
                sizes: [], fabrication_days: 3, is_featured: false, photos: [], primary_photo_url: null, available: true,
            },

            // ── Artículos de boda ─────────────────────────────────────
            {
                id: 10, name: 'Letras para mesa de boda', category_id: 5,
                base_price: 18000, // TODO [PRECIO_EJEMPLO] por mesa
                description: 'Decoración para mesas en bodas y eventos. Precio por mesa (hasta 8 caracteres). Elige color para que combine con tu decoración.',
                colors: [
                    { id: 1, name: 'Blanco', hex_code: '#f5f5f5' },
                    { id: 4, name: 'Dorado', hex_code: '#C9A84C' },
                    { id: 2, name: 'Negro', hex_code: '#111111' },
                ],
                sizes: [], fabrication_days: 7, is_featured: true, photos: [], primary_photo_url: null, available: true,
            },
            {
                id: 11, name: 'Topper para torta', category_id: 5,
                base_price: 25000, // TODO [PRECIO_EJEMPLO]
                description: 'Decoración superior para tortas de matrimonio o cumpleaños. Texto personalizado o formas especiales.',
                colors: [
                    { id: 1, name: 'Blanco', hex_code: '#f5f5f5' },
                    { id: 4, name: 'Dorado', hex_code: '#C9A84C' },
                ],
                sizes: [], fabrication_days: 4, is_featured: false, photos: [], primary_photo_url: null, available: true,
            },

            // ── Pedidos personalizados ────────────────────────────────
            {
                id: 12, name: 'Cotización personalizada', category_id: 6,
                base_price: 0,
                description: '¿Tienes una idea especial? Cuéntanos y la hacemos realidad. Sin límites de diseño. Enviamos cotización por WhatsApp.',
                colors: [], sizes: [], fabrication_days: 7,
                is_featured: false, photos: [], primary_photo_url: null, available: true,
            },
        ],

        // ── UI state ─────────────────────────────────────────────────
        loading: false,
        selectedCategory: null,
        searchQuery: '',

        productModal: false,
        product: null,
        currentPhoto: 0,
        selectedColor: null,
        selectedSize: null,
        quantity: 1,
        displayPrice: 0,

        successModal: false,

        // ── Computed ─────────────────────────────────────────────────
        get filteredProducts() {
            const q = this.searchQuery.toLowerCase().trim();
            return this.products.filter(p => {
                const matchCat = !this.selectedCategory || p.category_id === this.selectedCategory;
                const matchSearch = !q ||
                    p.name.toLowerCase().includes(q) ||
                    (p.description || '').toLowerCase().includes(q);
                return matchCat && matchSearch;
            });
        },

        get featuredProducts() {
            return this.products.filter(p => p.is_featured);
        },

        // ── Init ─────────────────────────────────────────────────────
        init() {
            // Sin API por ahora — los datos son estáticos
        },

        // ── Modal producto ────────────────────────────────────────────
        openProduct(p) {
            this.product = p;
            this.currentPhoto = 0;
            this.selectedColor = p.colors?.[0] || null;
            this.selectedSize = p.sizes?.[0] || null;
            this.quantity = 1;
            this.updatePrice();
            this.productModal = true;
            document.body.style.overflow = 'hidden';
        },

        closeProduct() {
            this.productModal = false;
            document.body.style.overflow = '';
        },

        selectColor(c) { this.selectedColor = c; },

        selectSize(s) {
            this.selectedSize = s;
            this.updatePrice();
        },

        updatePrice() {
            if (!this.product) return;
            let price = this.product.base_price;
            if (this.selectedSize) price += (this.selectedSize.price_modifier || 0);
            this.displayPrice = price * this.quantity;
        },

        changeQty(delta) {
            this.quantity = Math.max(1, this.quantity + delta);
            this.updatePrice();
        },

        // ── WhatsApp ──────────────────────────────────────────────────
        openWhatsApp(customMsg) {
            let msg = customMsg;
            if (!msg && this.product) {
                const color = this.selectedColor ? `\n🎨 Color: ${this.selectedColor.name}` : '';
                const size = this.selectedSize ? `\n📐 Medida: ${this.selectedSize.label}` : '';
                const priceStr = this.product.base_price > 0
                    ? `\n💰 Total aprox: ${this.formatPrice(this.displayPrice)}`
                    : '';
                msg = `Hola Urabá3D Studios, me interesa:\n\n📦 *${this.product.name}*${color}${size}\n🔢 Cantidad: ${this.quantity}${priceStr}\n\n¿Está disponible?`;
            }
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg || 'Hola, quiero más información')}`, '_blank');
        },

        openOrder() {
            // Sin backend todavía — redirige a WhatsApp
            this.openWhatsApp();
        },

        // ── Helpers ───────────────────────────────────────────────────
        catIconSVG(name) {
            const s = (path) => `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">${path}</svg>`;
            if (!name) return s('<path d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.75 19.817m.72-5.988a42.41 42.41 0 0110.56 0m0 0L17.25 19.817M12 2.25l.75 4.5m0 0l-3 1.5m3-1.5l3 1.5"/>');
            const n = name.toLowerCase();
            if (n.includes('letra'))   return s('<path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.13.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>');
            if (n.includes('llavero')) return s('<path d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/>');
            if (n.includes('hogar') || n.includes('decor')) return s('<path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>');
            if (n.includes('pieza') || n.includes('repuesto')) return s('<path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>');
            if (n.includes('boda'))    return s('<path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>');
            return s('<path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>');
        },

        formatPrice(p) {
            if (!p || p === 0) return 'Cotizar';
            return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(p);
        },

        categoryName(id) {
            return this.categories.find(c => c.id === id)?.name || '';
        },
    }));
});
