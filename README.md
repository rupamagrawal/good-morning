# 🌅 Good Morning – Full Stack Web Application

A simple full-stack web application built as part of an assignment to demonstrate **frontend, backend, and database knowledge**.  
The application collects user details and greets the user after successful submission.

---

## ✨ Features

- 🌞 Good Morning page with a clean UI
- 📝 Form to collect **Name, Phone Number, and Email**
- 👋 Personalized greeting after successful submission
- 📱 Fully **mobile-responsive** design
- 🔐 Secure backend using environment variables
- 🗄️ Data stored in **PostgreSQL database**

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- REST API
- CORS enabled

### Database
- PostgreSQL

---

## 📂 Project Structure

```

good-morning/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── .env (not committed)
│
├── frontend/
│   └── good-morning-app/
│       ├── src/
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   └── index.css
│       ├── tailwind.config.js
│       ├── vite.config.js
│       └── package.json
│
├── database/
│   └── schema.sql
│
└── README.md

````

---

## 🗄️ Database Schema

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
````

---

## 🚀 How the Application Works

1. User enters name, phone number, and email on the frontend
2. Data is sent to the backend via a REST API
3. Backend validates and stores the data in PostgreSQL
4. Backend responds with a personalized greeting
5. Greeting is displayed on the UI

---

## 🧪 Testing

* Backend API tested using **Postman**
* Database insertion verified using **pgAdmin / PostgreSQL client**
* Frontend tested locally using Vite development server

---

## 📱 Mobile Responsiveness

The application is fully **responsive and mobile-friendly**, built using Tailwind CSS utility classes.
While native mobile development (Flutter) was not attempted, the web application provides a smooth experience across mobile, tablet, and desktop screens.

---

## 🔐 Environment Variables

Backend uses environment variables for database configuration:

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=
PORT=
```

Frontend uses:

```
VITE_API_URL=
```

Environment files are intentionally **not committed** for security reasons.

---

## ⚠️ Deployment Status

* The project was developed and tested **locally**
* Backend and frontend are **not deployed**
* Codebase is deployment-ready and can be hosted on platforms like Render and Vercel if required

---

## 📌 Assignment Notes

* Flutter (mobile development) was not implemented due to limited prior experience
* Instead, a responsive web application was built to ensure mobile usability
* Focus was placed on clean architecture, correctness, and best practices

---

## 👤 Author

**Rupam Agrawal**
📧 Email: **[rupam.agrawal_it23@pccoer.in](mailto:rupam.agrawal_it23@pccoer.in)**
📞 Phone: **+91-XXXXXXXXXX**

---

## ✅ Conclusion

This project demonstrates:

* Full-stack development skills
* REST API design
* Database integration
* Secure configuration handling
* Responsive frontend design

Thank you for reviewing this assignment.
