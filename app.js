// ── WhatsApp de Urabá3D Studios ───────────────────────────────────
const WHATSAPP_NUMBER = '573113584262';

document.addEventListener('alpine:init', () => {
    Alpine.data('catalogApp', () => ({

        // ── Categorías ────────────────────────────────────────────────
        categories: [
            { id: 1, name: 'NFC & QR personalizados',   position: 1 },
            { id: 2, name: 'Figuras personalizadas',     position: 2 },
            { id: 3, name: 'Llaveros personalizados',    position: 3 },
            { id: 4, name: 'Materas personalizadas',     position: 4 },
            { id: 5, name: 'Soportes y accesorios',      position: 5 },
            { id: 6, name: 'Letreros para negocios',     position: 6 },
            { id: 7, name: 'Repuestos y piezas',         position: 7 },
        ],

        // ── Productos ─────────────────────────────────────────────────
        products: [

            // ── NFC & QR ──────────────────────────────────────────────
            {
                id: 1,
                name: 'QR personalizado con chip NFC',
                category_id: 1,
                base_price: 100000,
                description: 'QR en 3D con chip NFC integrado. Al acercarlo a un teléfono, redirige al enlace que elijas: perfil de Instagram, WhatsApp Business, menú digital, portafolio, lo que quieras. Ideal para negocios y profesionales. Chip NFC adicional: +$5.000.',
                colors: [
                    { id: 1,  name: 'Negro',   hex_code: '#111111' },
                    { id: 2,  name: 'Blanco',  hex_code: '#f5f5f5' },
                    { id: 3,  name: 'Naranja', hex_code: '#FF6B00' },
                    { id: 4,  name: 'Otro color (consultar)', hex_code: '#888888' },
                ],
                sizes: [
                    { id: 1, label: 'Sin chip adicional',      price_modifier: 0    },
                    { id: 2, label: 'Con chip NFC adicional',  price_modifier: 5000 },
                ],
                fabrication_days: 7,
                is_featured: true,
                photos: [], primary_photo_url: null, available: true,
            },
            {
                id: 2,
                name: 'Tarjeta de presentación con chip NFC',
                category_id: 1,
                base_price: 30000,
                description: 'Tarjeta de presentación impresa en 3D con chip NFC. Comparte tu contacto, portafolio o redes sociales con un solo toque — sin necesidad de escanear nada. Un detalle que impresiona. Chip NFC adicional: +$5.000.',
                colors: [
                    { id: 1, name: 'Negro',   hex_code: '#111111' },
                    { id: 2, name: 'Blanco',  hex_code: '#f5f5f5' },
                    { id: 3, name: 'Naranja', hex_code: '#FF6B00' },
                    { id: 4, name: 'Otro color (consultar)', hex_code: '#888888' },
                ],
                sizes: [
                    { id: 3, label: 'Sin chip adicional',      price_modifier: 0    },
                    { id: 4, label: 'Con chip NFC adicional',  price_modifier: 5000 },
                ],
                fabrication_days: 5,
                is_featured: true,
                photos: [], primary_photo_url: null, available: true,
            },

            // ── Figuras ───────────────────────────────────────────────
            {
                id: 3,
                name: 'Figura personalizada de mascota (15 cm)',
                category_id: 2,
                base_price: 90000,
                description: 'Figura de tu mascota en 3D, de 15 cm de altura. Basada en fotos reales: capturamos los rasgos únicos de tu perro, gato u otra mascota. Incluye pintura a mano. Para figuras de más de 15 cm se aplica un cargo adicional según tamaño y complejidad.',
                colors: [],
                sizes: [
                    { id: 5, label: '15 cm (precio base)',         price_modifier: 0      },
                    { id: 6, label: 'Más de 15 cm (cotizar)',      price_modifier: 0      },
                ],
                fabrication_days: 15,
                is_featured: true,
                photos: [], primary_photo_url: null, available: true,
            },
            {
                id: 4,
                name: 'Figura tipo Funko personalizada (15 cm)',
                category_id: 2,
                base_price: 90000,
                description: 'Tu versión Funko Pop en 3D, 100% personalizada con tu cara, ropa y accesorios. 15 cm de altura con base incluida. Proceso: envías fotos de referencia, nosotros diseñamos y te mostramos antes de imprimir. Incluye pintura a mano.',
                colors: [],
                sizes: [
                    { id: 7, label: '15 cm con base', price_modifier: 0 },
                ],
                fabrication_days: 15,
                is_featured: true,
                photos: [], primary_photo_url: null, available: true,
            },

            // ── Llaveros ──────────────────────────────────────────────
            {
                id: 5,
                name: 'Llavero personalizado',
                category_id: 3,
                base_price: 15000,
                description: 'Llavero completamente personalizado: forma, texto, logo o diseño que quieras. Resistente y liviano.\n\n📦 Precio por unidad: $15.000\n📦 Desde 50 unidades: $11.000 c/u\n📦 Desde 100 unidades: $9.500 c/u\n\nIdeal para regalos corporativos, recuerdos y eventos.',
                colors: [
                    { id: 1, name: 'Negro',   hex_code: '#111111' },
                    { id: 2, name: 'Blanco',  hex_code: '#f5f5f5' },
                    { id: 3, name: 'Naranja', hex_code: '#FF6B00' },
                    { id: 4, name: 'Rojo',    hex_code: '#e53e3e' },
                    { id: 5, name: 'Azul',    hex_code: '#3182ce' },
                    { id: 6, name: 'Verde',   hex_code: '#38a169' },
                    { id: 7, name: 'Otro color (consultar)', hex_code: '#888888' },
                ],
                sizes: [
                    { id: 8,  label: '1–49 unidades ($15.000 c/u)',   price_modifier: 0 },
                    { id: 9,  label: '50–99 unidades ($11.000 c/u)',  price_modifier: 0 },
                    { id: 10, label: '100+ unidades ($9.500 c/u)',    price_modifier: 0 },
                ],
                fabrication_days: 10,
                is_featured: false,
                photos: [], primary_photo_url: null, available: true,
            },

            // ── Materas ───────────────────────────────────────────────
            {
                id: 6,
                name: 'Matera personalizada',
                category_id: 4,
                base_price: 20000,
                description: 'Materas impresas en 3D con el diseño, tamaño y personalización que quieras. El precio varía según el tamaño, la complejidad del diseño y el nivel de personalización. Todas incluyen orificio de drenaje. Escríbenos con tus medidas e ideas.',
                colors: [
                    { id: 1, name: 'Negro',      hex_code: '#111111' },
                    { id: 2, name: 'Blanco',     hex_code: '#f5f5f5' },
                    { id: 3, name: 'Terracota',  hex_code: '#B85C38' },
                    { id: 4, name: 'Verde',      hex_code: '#38a169' },
                    { id: 7, name: 'Otro color (consultar)', hex_code: '#888888' },
                ],
                sizes: [
                    { id: 11, label: 'Tamaño pequeño (desde $20.000)',    price_modifier: 0 },
                    { id: 12, label: 'Tamaño mediano o grande (cotizar)', price_modifier: 0 },
                ],
                fabrication_days: 7,
                is_featured: false,
                photos: [], primary_photo_url: null, available: true,
            },

            // ── Soportes ──────────────────────────────────────────────
            {
                id: 7,
                name: 'Soporte para control personalizado',
                category_id: 5,
                base_price: 60000,
                description: 'Soporte para control de videojuegos (PS, Xbox, Nintendo u otros) diseñado a la medida. Desde soportes de escritorio simples hasta organizadores con ranuras para múltiples controles y accesorios. Precio entre $60.000 y $120.000 según diseño y tamaño.',
                colors: [
                    { id: 1, name: 'Negro',   hex_code: '#111111' },
                    { id: 2, name: 'Blanco',  hex_code: '#f5f5f5' },
                    { id: 3, name: 'Naranja', hex_code: '#FF6B00' },
                    { id: 7, name: 'Otro color (consultar)', hex_code: '#888888' },
                ],
                sizes: [
                    { id: 13, label: 'Diseño simple ($60.000)',    price_modifier: 0     },
                    { id: 14, label: 'Diseño complejo ($120.000)', price_modifier: 60000 },
                ],
                fabrication_days: 8,
                is_featured: false,
                photos: [], primary_photo_url: null, available: true,
            },

            // ── Letreros ──────────────────────────────────────────────
            {
                id: 8,
                name: 'Letrero o aviso para negocio',
                category_id: 6,
                base_price: 0,
                description: 'Letreros y avisos personalizados para tu negocio, local o emprendimiento. El precio depende del tamaño, la cantidad de letras y el tiempo de fabricación que requiera la impresión. Envíanos las medidas y el diseño para darte una cotización exacta.',
                colors: [
                    { id: 1, name: 'Negro',   hex_code: '#111111' },
                    { id: 2, name: 'Blanco',  hex_code: '#f5f5f5' },
                    { id: 3, name: 'Naranja', hex_code: '#FF6B00' },
                    { id: 7, name: 'Otro color (consultar)', hex_code: '#888888' },
                ],
                sizes: [],
                fabrication_days: 10,
                is_featured: false,
                photos: [], primary_photo_url: null, available: true,
            },

            // ── Repuestos ─────────────────────────────────────────────
            {
                id: 9,
                name: 'Escaneo y fabricación de repuestos',
                category_id: 7,
                base_price: 0,
                description: 'Trae la pieza rota o danos las medidas y la reproducimos exacta. El servicio de escaneo 3D y diseño tiene un costo adicional de $30.000; el precio final del repuesto depende del tamaño y complejidad. Aplica para electrodomésticos, muebles, vehículos y maquinaria ligera.',
                colors: [
                    { id: 1, name: 'Negro',  hex_code: '#111111' },
                    { id: 2, name: 'Blanco', hex_code: '#f5f5f5' },
                    { id: 7, name: 'Otro color (consultar)', hex_code: '#888888' },
                ],
                sizes: [],
                fabrication_days: 10,
                is_featured: false,
                photos: [], primary_photo_url: null, available: true,
            },
        ],

        // ── UI state ──────────────────────────────────────────────────
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

        // ── Computed ──────────────────────────────────────────────────
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

        init() { /* datos estáticos, sin API */ },

        // ── Modal ─────────────────────────────────────────────────────
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
                const color = this.selectedColor?.name !== 'Otro color (consultar)'
                    ? (this.selectedColor ? `\n🎨 Color: ${this.selectedColor.name}` : '')
                    : '\n🎨 Color: a definir (voy a comentarles)';
                const size  = this.selectedSize ? `\n📐 Opción: ${this.selectedSize.label}` : '';
                const priceStr = this.product.base_price > 0
                    ? `\n💰 Total aprox: ${this.formatPrice(this.displayPrice)}`
                    : '';
                msg = `Hola Urabá3D Studios, me interesa:\n\n📦 *${this.product.name}*${color}${size}\n🔢 Cantidad: ${this.quantity}${priceStr}\n\n¿Están disponibles?`;
            }
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg || 'Hola, quiero más información')}`, '_blank');
        },

        openOrder() { this.openWhatsApp(); },

        // ── Helpers ───────────────────────────────────────────────────
        catIconSVG(name) {
            const s = (path) => `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">${path}</svg>`;
            if (!name) return s('<path d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.75 19.817m.72-5.988a42.41 42.41 0 0110.56 0m0 0L17.25 19.817M12 2.25l.75 4.5m0 0l-3 1.5m3-1.5l3 1.5"/>');
            const n = name.toLowerCase();
            if (n.includes('nfc') || n.includes('qr')) return s('<path d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"/>');
            if (n.includes('figura') || n.includes('funko') || n.includes('mascota')) return s('<path d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/>');
            if (n.includes('llavero')) return s('<path d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/>');
            if (n.includes('matera')) return s('<path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.055 15.055 0 01-4.5 0M3 9.75a9 9 0 1118 0v.75"/>');
            if (n.includes('soporte') || n.includes('accesorio')) return s('<path d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"/>');
            if (n.includes('letrero') || n.includes('negocio') || n.includes('aviso')) return s('<path d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016 2.993 2.993 0 002.25-1.016 3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-3.75a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375z"/>');
            if (n.includes('repuesto') || n.includes('pieza')) return s('<path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>');
            return s('<path d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.75 19.817m.72-5.988a42.41 42.41 0 0110.56 0m0 0L17.25 19.817M12 2.25l.75 4.5m0 0l-3 1.5m3-1.5l3 1.5"/>');
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
