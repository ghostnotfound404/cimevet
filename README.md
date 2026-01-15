# Landing Page - Cimevet Clínica Veterinaria 24h

## Estructura del Proyecto

```
Landing page/
├── index.html          # Archivo principal HTML
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   └── script.js       # JavaScript funcionalidad
├── assets/             # Carpeta para imágenes y recursos
└── README.md           # Este archivo
```

## Secciones Incluidas

✅ **Navbar Responsivo** - Menú de navegación sticky con logo de Cimevet
✅ **Hero Section** - Portada principal con call-to-action
✅ **Servicios** - Grid de servicios veterinarios ofrecidos
✅ **Equipo** - Presentación del personal médico
✅ **Testimonios** - Reseñas de clientes satisfechos
✅ **Contacto/Ubicación** - Mapa embebido y detalles de contacto
✅ **Footer** - Pie de página con redes sociales

## Cómo Usar

1. **Agregar Logo**: Coloca el logo de Cimevet en `assets/cimevet-logo.png`
2. **Agregar Fotos del Equipo**: 
   - `assets/team-member-1.jpg`
   - `assets/team-member-2.jpg`
   - `assets/team-member-3.jpg`
3. **Agregar Avatares**: 
   - `assets/avatar-1.jpg`
   - `assets/avatar-2.jpg`
   - `assets/avatar-3.jpg`

## Tecnologías Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Responsive)
- JavaScript Vanilla (ES6)
- Google Maps Embed (iframe)

## Funcionalidades

- ✨ Navegación suave entre secciones
- 📱 Diseño completamente responsivo
- 🎨 Animaciones y transiciones
- 🗺️ Mapa integrado de ubicación
- 📞 Enlaces para agendamiento
- 🌙 Footer con redes sociales

## Colores Principales

- **Morado Principal**: #5b3fa0
- **Morado Oscuro**: #3d2670
- **Verde/Turquesa**: #1dd1a1
- **Gris Claro**: #f8f9fa

## Para Personalizar

### Cambiar Información de Contacto
Abre `index.html` y busca la sección "CONTACTO/UBICACIÓN SECTION":
- Actualiza teléfono, dirección y horario
- Reemplaza el iframe del mapa con tu ubicación real

### Modificar Colores
En `css/styles.css`, busca los valores de color y cámbialos:
- `#5b3fa0` - Morado principal
- `#1dd1a1` - Verde/Turquesa acentos

### Agregar Más Servicios
En el HTML, copia un `.servicio-card` y modifica el contenido

## Notas Importantes

- El mapa actual apunta a Madrid, cámbialo con tu ubicación real
- Actualiza los datos del equipo con información real
- Agrega imágenes reales en la carpeta `assets/`
- Personaliza los testimonios con opiniones reales de clientes

## Cómo Abrir

Simplemente abre `index.html` en tu navegador o usa un servidor local:

```bash
# Si tienes Python 3 instalado
python -m http.server 8000

# Si tienes Node.js con http-server instalado
http-server
```

Luego accede a `http://localhost:8000`

---

**Creado para Cimevet Clínica Veterinaria 24h** 🐾
