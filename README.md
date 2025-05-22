# 🕸️ PRÁCTICA WEB SERVICES

## 👤 Desarrollado por  
**Velazco, Nicolás**

---

## 🎯 Objetivo  
Poner en práctica los conceptos de:  
- 🌐 Web Service  
- 📡 APIs disponibles en la web  
- 🏗️ Aplicación de la Arquitectura REST  
- 🧪 Testeo de APIs con Postman  
- ⚛️ Implementación en Angular

---

## 🛠️ Tecnologías utilizadas  
- **Angular** (Framework frontend para desarrollo SPA)  
- **TypeScript** (Lenguaje principal de Angular)  
- **Bootstrap** (Framework CSS para diseño responsivo y modales)  
- **Postman** (Herramienta para testeo de APIs)  
- **APIs REST externas** (RapidAPI, APILayer, Gemini, Google AI Studio)  
- **Git** (Control de versiones)

---

## 📜 Enunciado  
Utilizar los repositorios:  
- [https://rapidapi.com](https://rapidapi.com)  
- [https://apilayer.com/marketplace](https://apilayer.com/marketplace)  

para aplicar APIs que provean datos para las siguientes plantillas.  

Se debe aplicar un Service de Angular que consuma los Web Services.  

---

## 📂 Componentes y funcionalidades

### 📰 A. Portal de Noticias  
- Consumir una API que provea noticias relevantes (internacionales, nacionales, deportivas, financieras, generales, etc.).  
- Mostrar las noticias en la plantilla correspondiente con título, descripción e imagen.  
- API de referencia sugerida:  
  [Livescore6 - GET news/v2/list](https://rapidapi.com/apidojo/api/livescore6)

---

### 🚗 B. Card Maker  
- Consultar un servicio web que provea la lista de marcas de autos (ej.: Renault, Ford, etc.).  
- Al hacer clic en una marca, mostrar en un modal (Bootstrap) los modelos correspondientes.  
- Implementar un solo componente para evitar consultas repetidas y llegar al límite del plan gratuito.  
- API sugerida:  
  [Car Specs](https://rapidapi.com/alekivanovski96-O1vKHrFskQm/api/car-specs)

---

### 💱 C. Conversor de Monedas  
- Consumir una API que permita convertir montos entre diferentes monedas.  
- API de referencia:  
  [Currency Data API](https://apilayer.com/marketplace/currency_data-api) (requiere registro para obtener API key).  
- Implementar cajas de texto para moneda origen y destino.  
- Listas desplegables para seleccionar moneda origen y destino, pobladas mediante un Web Service.

---

### 🖼️ D. Generador de Imagen  
- Al hacer clic en "Generar imagen..." generar una imagen asociada al título del post que se quiere publicar en Facebook.  
- Utilizar la API de Gemini.  
- Gestionar una API key en Google AI Studio para la aplicación.

---

### 🔎 E. API a elección  
- Consumir una API de interés para aplicar en un futuro proyecto final.  
- Implementar frontend/formulario para captura de datos y mostrar el resultado del Web Service.  
- Ejemplos de APIs:  
  - Generador de código QR (string en base-64 para `<img src="...">`)  
  - Traducción de texto a audio  
  - Traducción de audio a texto  
  - Clima de una ciudad o punto cardinal  
  - Búsqueda musical con URL para audio  

---

