# 🎓 University Application Status Tracker

> A comprehensive full-stack web application designed to help students securely organize, manage, and track their higher education applications across multiple universities.

---

## 📖 Project Overview

Applying to multiple universities often involves juggling varying deadlines, portals, and statuses. This platform provides a centralized, secure dashboard to monitor where your applications stand. Built from the ground up using the MERN stack, it features a modern, responsive user interface and robust stateless session management.

### 🧰 Technology Stack

#### Frontend
<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,tailwind,js,html,css" />
  </a>
</p>

* **Framework:** React.js
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **API Integration:** Axios

#### Backend & Database
<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,postman" />
  </a>
</p>

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (Atlas)
* **Authentication:** JSON Web Tokens (JWT) & Bcrypt

---

## ✨ Key Features

* 🔐 **Secure Authentication:** Full sign-up and login flows using Bcrypt password hashing and stateless JWT session management.
* 📊 **Interactive Dashboard:** A clean, centralized view to instantly check which applications are Pending, Accepted, Rejected, or Waitlisted.
* 📝 **Application Management:** Complete CRUD (Create, Read, Update, Delete) functionality. Add new universities, update statuses, and log application deadlines.
* 🎨 **Modern UI/UX:** Fully responsive design built with Tailwind CSS, ensuring a seamless experience across desktop and mobile devices.

---

## 📡 Core API Endpoints

| Module | Endpoint | Method | Description |
| :--- | :--- | :---: | :--- |
| **Auth** | `/api/auth/register` | `POST` | Registers a new user |
| **Auth** | `/api/auth/login` | `POST` | Authenticates user & returns JWT |
| **Tracker** | `/api/applications` | `GET` | Fetches all applications for the logged-in user |
| **Tracker** | `/api/applications` | `POST` | Creates a new application entry |
| **Tracker** | `/api/applications/{id}` | `PUT` | Updates an existing application's status/details |
| **Tracker** | `/api/applications/{id}` | `DELETE`| Removes an application from the database |

---

## 💻 Getting Started (Local Development)

### Prerequisites
* Node.js (v18+)
* MongoDB Atlas Account (or local MongoDB server)
* Git

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/shravyashetty04/university-application-tracker.git](https://github.com/shravyashetty04/university-application-tracker.git)
   cd university-application-tracker
