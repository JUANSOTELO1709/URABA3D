# Pendientes para lanzar Urabá3D Studios

## 🔴 Bloqueantes (sin esto el sitio no puede publicarse)

### 1. Número de WhatsApp
- **Archivo:** `app.js` línea 2, variable `WHATSAPP_NUMBER`
- **Qué poner:** número con código de país, sin `+` ni espacios. Ej: `573001234567`
- **También busca:** `[WHATSAPP_PENDIENTE]` en `index.html` (botón WhatsApp del navbar y hero)

### 2. Ciudad / municipio
- **Archivo:** `index.html`
- **Busca:** `[CIUDAD_PENDIENTE]`
- **Dónde aparece:** badge del hero ("Fabricamos en [CIUDAD_PENDIENTE]") y franja de confianza

---

## 🟡 Importantes (afectan credibilidad)

### 3. Precios reales
- **Archivo:** `app.js`, array `products`
- **Busca:** comentarios `// TODO [PRECIO_EJEMPLO]`
- **Lista de productos con precio de ejemplo:**
  - id:1  Letra decorativa individual       → $25.000
  - id:2  Nombre personalizado               → $45.000
  - id:3  Letras con canal LED               → $80.000
  - id:4  Llavero redondo grabado            → $8.000
  - id:5  Llavero forma personalizada        → $12.000
  - id:6  Matera geométrica                  → $35.000
  - id:7  Marco de fotos minimalista         → $22.000
  - id:8  Repuesto a medida                  → $30.000 (base)
  - id:9  Adaptador o soporte               → $15.000
  - id:10 Letras para mesa de boda           → $18.000 x mesa
  - id:11 Topper para torta                 → $25.000

### 4. Redes sociales
- **Archivo:** `index.html`
- **Busca:** `<!-- TODO: agregar link real -->`
- **Dónde aparece:** footer (Instagram, Facebook, TikTok) y hero
- **Reemplazar:** `href="#"` con la URL real de cada red

### 5. Fotos del taller y productos
- **Sección taller:** busca `<!-- TODO: reemplazar por foto/video real del taller -->` en `index.html`
- **Productos:** cuando tengas fotos, agrégalas al array `photos` de cada producto en `app.js`
  - Formato esperado: `[{ id: 1, url: 'https://...', is_primary: true }]`
  - Y llena `primary_photo_url` con la URL de la foto principal

---

## 🟢 Opcionales / mejoras futuras

### 6. Open Graph / redes (al compartir el link)
- Busca en `index.html`: `og:image` y `twitter:image`
- Reemplaza la URL por una imagen real del negocio (1200×630 px)

### 7. Dominio y hosting
- El sitio es HTML estático — puede publicarse en GitHub Pages, Netlify o cualquier hosting
- Si van a agregar backend (pedidos en línea), ver la arquitectura del sitio de referencia (Impresionarte)

### 8. Color de acento
- El acento actual es naranja `#FF6B00`
- Para cambiarlo: busca `accent: '#FF6B00'` en el `<script>` de Tailwind config en `index.html`
- Cambia ese único valor y se actualiza todo el sitio automáticamente

### 9. Google Analytics / seguimiento
- Agregar script de GA4 en el `<head>` si se quiere medir visitas

---

*Generado automáticamente — actualizar cuando se completen los datos reales.*
