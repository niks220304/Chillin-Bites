# 🍔 Chillin-Bites

Chillin-Bites is a **full-stack food delivery web application** built with **MERN stack**.  
It provides users with an easy way to browse food items, place orders, and manage their accounts.  
Admins can manage menus, orders, and user activity through a separate **Admin Dashboard**.

---

## ✨ Features

### User Frontend
- Browse food categories & items 🍕
- Add to cart & place orders 🛒
- View previous orders 📦
- User authentication 🔐
- Mobile responsive UI 📱

### Admin Dashboard
- Add, update, or delete food items 🍽️
- Manage orders 📑
- View customer activity 👥
- Upload images for food items 🖼️

### Backend
- Secure API endpoints with JWT 🔑
- MongoDB for database storage 🗄️
- Stripe integration for payments 💳
- File upload support (Multer) 📂

---

## 📂 Project Structure



Chillin-Bites/
│
├── admin/ # React Admin Dashboard
│ ├── public/ # Static assets
│ ├── src/ # Source code
│ │ ├── assets/ # Images, icons, etc.
│ │ ├── components/ # Reusable UI components
│ │ │ ├── Navbar/
│ │ │ └── Sidebar/
│ │ └── pages/ # Page-level components
│ │ ├── Add/
│ │ ├── List/
│ │ └── Orders/
│ ├── package.json
│ └── vite.config.js
│
├── frontend/ # React User Frontend
│ ├── public/ # Static assets
│ ├── src/ # Source code
│ │ ├── assets/ # Images, icons, etc.
│ │ └── components/ # Reusable UI components
│ │ ├── AppDownloads/
│ │ ├── ExploreMenu/
│ │ ├── FoodDisplay/
│ │ └── FoodItem/
│ ├── package.json
│ └── vite.config.js
│
├── backend/ # Node.js + Express Backend
│ ├── config/ # Database connection
│ │ └── db.js
│ ├── controllers/ # Route controllers
│ │ ├── cartController.js
│ │ ├── foodController.js
│ │ ├── orderController.js
│ │ └── userController.js
│ ├── middleware/ # Auth & other middlewares
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── uploads/ # Uploaded files (images)
│ ├── server.js # Entry point
│ ├── package.json
│ └── .env # Environment variables (ignored in Git)
│
├── .gitignore # Git ignore file
├── README.md # Project documentation


---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/chillin-bites.git
cd chillin-bites

2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside backend/:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/chillin-bites
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=your-stripe-secret
PORT=5000


Run the backend:

npm start

3️⃣ Frontend Setup (User)
cd frontend
npm install
npm run dev


App will start at 👉 http://localhost:5173

4️⃣ Admin Dashboard Setup
cd admin
npm install
npm run dev


Admin dashboard will start at 👉 http://localhost:5174

🚀 Running the Project

Backend → runs on http://localhost:5000

Frontend (User App) → runs on http://localhost:5173

Admin Dashboard → runs on http://localhost:5174

🛠️ Tech Stack

Frontend: React.js, Vite, Tailwind CSS

Backend: Node.js, Express.js, MongoDB, Mongoose

Authentication: JWT

Payments: Stripe

File Uploads: Multer