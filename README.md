# 🧠 Backend API - Productos

Este proyecto es una API REST desarrollada en **Node.js + TypeScript**, diseñada para integrarse con una aplicación Gatsby (Frontend). La API gestiona productos y permite operaciones CRUD conectándose a una base de datos relacional.

---

## 📁 Estructura de carpetas

```
BACKEND/
├── controller/         # Lógica de negocio (controladores)
├── db/                 # Conexión a la base de datos
├── dist/               # Código transpilado (salida de TypeScript)
├── models/             # Modelos de datos
├── routes/             # Definición de rutas de la API
├── .env                # Variables de entorno
├── app.ts              # Configuración principal del servidor
├── server.ts           # Entrada del servidor
├── tsconfig.json       # Configuración de TypeScript
└── package.json        # Dependencias y scripts
```

---

## ⚙️ Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [MySQL/PostgreSQL/SQLite] (según tu configuración de conexión)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Axios (en frontend)](https://axios-http.com/)

---

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/backend.git
cd backend
```

2. Instala dependencias:

```bash
npm install
# o
yarn install
```

3. Crea un archivo `.env`:

```env
PORT=4000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=productosdb
```

4. Ejecuta en modo desarrollo:

```bash
npx ts-node-dev server.ts
```

5. O compila y corre:

```bash
tsc
node dist/server.js
```

---

## 🔌 Endpoints principales

| Método | Ruta               | Descripción                  |
|--------|--------------------|------------------------------|
| GET    | /productos         | Lista todos los productos    |
| POST   | /productos         | Crea un nuevo producto       |
| PUT    | /productos/:id     | Actualiza un producto        |
| DELETE | /productos/:id     | Elimina un producto          |

---

## 🧪 Ejemplo de producto

```json
{
  "nombre": "Camisa Gatsby",
  "descripcion": "Camisa cómoda y elegante",
  "precio": 199.99,
  "stock": 50
}
```

---

## 🧠 Contribución

1. Haz un fork
2. Crea una rama: `git checkout -b nueva-funcionalidad`
3. Realiza tus cambios y haz commit: `git commit -m "Agrega nueva funcionalidad"`
4. Haz push: `git push origin nueva-funcionalidad`
5. Abre un Pull Request

---

## 📄 Licencia

MIT License © 2025

---

## ✨ Autor

Desarrollado por [@jagodoy2012](https://github.com/jagodoy2012)  
Con ❤️ para integrarse con apps Gatsby.
