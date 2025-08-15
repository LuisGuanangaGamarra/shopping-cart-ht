# 🛒 Shopping Cart HT

Aplicación de carrito de compras construida con **NestJS** (backend) y **Next.js** (frontend), con arquitectura modular y comunicación vía API REST.  
Incluye configuración para ejecución local, en contenedores Docker y orquestación con Docker Compose.  
También incluye una colección de **Postman** para probar los endpoints.

---

## 📂 Estructura del proyecto

```
shopping-cart-ht/
│
├── backend-shopping-cart/      # API REST con NestJS
├── frontend-shopping-cart/     # Aplicación web con Next.js
├── app shopping cart ht.postman_collection.json     # Colección Postman para pruebas
└── compose.yml          # Configuración multi-servicio
```

---

## ⚙️ Requisitos previos

Antes de comenzar asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) >= 20.10.0
- [npm](https://www.npmjs.com/) >= 10.2.3
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Ejecución local (Node.js + npm)

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/LuisGuanangaGamarra/shopping-cart-ht.git
cd shopping-cart-ht
```

### 2️⃣ Backend (NestJS)
```bash
cd backend-shopping-cart
npm ci
npm run start:dev
```
El backend estará disponible en:
```
http://localhost:3001
```

### 3️⃣ Frontend (Next.js)
crear en la carpeta root del frontend el archivo .env.development
y colocar la url del backend en local en la variable NEXT_PUBLIC_API_URL
ejemplo

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```


En otra terminal:
```bash
cd frontend-shopping-cart
npm ci
npm run dev
```
El frontend estará disponible en:
```
http://localhost:3000
```

---

## 🐳 Ejecución con Docker

### 1️⃣ Backend
```bash
cd backend-shopping-cart
docker build -t shopping-cart-backend .
docker run --name=shopping_cart_api -d -p 3001:3001 shopping-cart-backend
```

### 2️⃣ Frontend
```bash
cd frontend-shopping-cart
docker build --build-arg ARG_API_URL=<url backend> -t shopping-cart-frontend .
docker run --name=shopping_cart_front -d -p 3000:3000 shopping-cart-frontend
```

---

## ⚡ Ejecución con Docker Compose


En la raíz del proyecto:
abrir el archivo de compose.yml y setear la variable de extorno 
```bash
ARG_API_URL=<url backend>
```
luego en la terminal ejecutar el comando
```bash
docker compose up --build -d
```

Esto levantará:
- Backend en **http://localhost:3001**
- Frontend en **http://localhost:3000**

Para detener y limpiar contenedores, redes e imágenes:
```bash
docker compose down --rmi all --volumes
```

---

## 🧪 Uso de la colección de Postman

1. Abre Postman.
2. Importa el archivo:
```
app shopping cart ht.postman_collection.json
```
3. Selecciona el entorno correcto (local o Docker).
4. Ejecuta las peticiones para probar el API.

---

## 📜 Scripts útiles

### Backend
```bash
npm run start         # Modo producción
npm run build         # Construcción para producción
npm run start:dev     # Modo desarrollo con recarga
```

### Frontend
```bash
npm run dev           # Desarrollo
npm run build         # Construcción para producción
npm run start         # Servir en producción
```
