1️⃣ Project Setup

Project folder: D:\js projects\crm-backend

Initialized Node project:

npm init -y
Installed dependencies:

npm install express prisma @prisma/client pg dotenv bcrypt jsonwebtoken


Installed dev dependencies:

npm install --save-dev nodemon
Folder structure:

crm-backend/
├─ node_modules/
├─ prisma/
│  ├─ schema.prisma
│  └─ seed.js
├─ src/
│  ├─ server.js
│  └─ config/db.js
├─ .env
├─ package.json
└─ package-lock.json
2️⃣ Environment Variables (.env)
DATABASE_URL="postgresql://postgres:123@localhost:5432/crm_db?schema=public"
PORT=5000
NODE_ENV=development
JWT_SECRET=supersecretkey123


DATABASE_URL: Connection to PostgreSQL database

PORT: Port for Node server

NODE_ENV: Development environment

JWT_SECRET: Secret for JSON Web Tokens
3️⃣ Prisma Setup
schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Models
model User { ... }
model Company { ... }
model Contact { ... }
model Deal { ... }
Generator: creates Prisma Client (@prisma/client)

Datasource: points to PostgreSQL database using environment variable

Models: define tables and relationships

Key relationships

User → owns many Contact and Deal

Contact → belongs to a Company (optional) and a User

Deal → belongs to a User and optionally a Contact
4️⃣ Prisma Commands
Command	Purpose
npx prisma generate	Generates Prisma Client based on schema
npx prisma migrate dev --name init	Creates migration and generates tables in DB
npx prisma studio	Opens GUI to view/edit database
npx prisma db pull	Pulls DB schema into Prisma (if DB already exists)
