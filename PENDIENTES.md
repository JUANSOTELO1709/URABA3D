# Pendientes para lanzar Urabá3D Studios

## ✅ Completado
- WhatsApp: `573113584262`
- Ciudad: Apartadó (región de Urabá)
- 7 categorías y 9 productos reales con precios definitivos
- Redes: Instagram (`uraba3d_studios`) y TikTok (`uraba3d.studio`) enlazados
- Email: `uraba3dstudios@gmail.com`
- Horario: Lun–Sáb 8 am – 9 pm
- Política de pago (50% anticipo) y envíos
- Trust signals actualizados

---

## 🔴 Bloqueantes para lanzar

### 1. Logo real
- **Qué falta:** la imagen del logo del negocio
- **Acción:** compartir como archivo de imagen (PNG/SVG) para reemplazar el logo SVG actual
- **Dónde impacta:** navbar, footer

### 2. Foto/video del taller
- **Qué falta:** foto o video del espacio de trabajo
- **Acción:** enviar archivo para colocar en la sección "Nuestro taller"
- **Nota:** hay un placeholder visible actualmente con el texto "Foto del taller próximamente"

---

## 🟡 Importantes (afectan credibilidad)

### 3. Fotos de productos
- Cuando tengas fotos, agrégalas al array `photos` de cada producto en `app.js`
- Formato: `photos: [{ id: 1, url: 'https://...', is_primary: true }]`
- Y llena `primary_photo_url` con la URL de la foto principal
- Mientras tanto, se muestran placeholders con el ícono de la categoría

### 4. Dominio y hosting
- El sitio es HTML estático — listo para publicar en GitHub Pages, Netlify, etc.
- Actualmente subido en `https://github.com/JUANSOTELO1709/URABA3D`
- Para activar GitHub Pages: Settings → Pages → Source: main branch

---

## 🟢 Opcionales / futuro

### 5. Open Graph (previsualización al compartir el link)
- Reemplaza en `index.html`: `og:image` y `twitter:image`
- Necesita una imagen real del negocio (1200 × 630 px)
- URL actual tiene `[DOMINIO_PENDIENTE]` — actualizar cuando tengas dominio

### 6. Acento de color
- El naranja `#FF6B00` está configurado en el `<script>` de Tailwind
- Para cambiar todo el sitio: una sola edición en `accent: '#FF6B00'`

### 7. Backend (pedidos en línea)
- El sitio hoy redirige todo a WhatsApp
- Si quieres recibir pedidos directamente en la web, el modelo de Impresionarte
  (FastAPI + SQLite + Raspberry Pi) puede replicarse

---

*Actualizado con datos reales — quedan solo fotos y logo para el lanzamiento.*
