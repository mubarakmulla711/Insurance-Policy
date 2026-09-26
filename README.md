# 🛡️ InsureSimplify — Insurance Policy Management Platform

<div align="center">

![InsureSimplify](https://img.shields.io/badge/InsureSimplify-v1.0.0-2563eb?style=for-the-badge&logo=shield&logoColor=white)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, full-stack insurance policy management platform built with React and FastAPI.**

[🌐 Live Demo](#) · [📖 Documentation](#-project-structure) · [🐛 Report Bug](https://github.com/mubarakmulla711/Insurance-Policy/issues) · [✨ Request Feature](https://github.com/mubarakmulla711/Insurance-Policy/issues)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running with Docker](#-running-with-docker)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🚀 About the Project

**InsureSimplify** is a comprehensive insurance policy management platform designed to simplify the insurance experience for both customers and providers. The platform offers an intuitive interface for browsing insurance plans, managing policies, and connecting with support — all from a single, beautifully designed web application.

Whether you're looking for Health, Life, Auto, Home, Travel, or Business insurance, InsureSimplify provides transparent pricing, easy comparisons, and a seamless user experience.

---

## ✨ Features

### 🏠 Home Page
- **Hero Section** with animated gradient background and call-to-action buttons
- **Statistics Bar** showcasing platform highlights (10,000+ customers, 50+ plans, 98% satisfaction)
- **Featured Plans** with interactive cards for Health, Life, and Auto insurance
- **Why Choose Us** section highlighting key differentiators
- **Customer Testimonials** from satisfied policyholders

### 📋 Insurance Plans
- **6 Comprehensive Plans**: Health Shield, Life Secure, Auto Guard, Home Protect, Travel Safe, Business Shield
- **Smart Filtering** by insurance type (All, Health, Life, Auto, Home, Travel, Business)
- **Detailed Plan Cards** with pricing, coverage amounts, and feature lists
- **Popular Plan Badges** for recommended options

### 👥 About Page
- Company story and mission/vision statements
- Team member profiles with roles
- Core values: Trust, Innovation, Customer-First, Transparency

### 📞 Contact Page
- **Interactive Contact Form** with validation
- Office location and business hours
- Multiple contact channels (phone, email, address)
- Success notification on form submission

### 🎨 Design & UX
- **Fully Responsive** — mobile, tablet, and desktop optimized
- **Modern UI** with glassmorphism effects, gradients, and smooth animations
- **Sticky Navigation** with mobile hamburger menu
- **Professional Footer** with comprehensive site links

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI component library |
| **Vite 5** | Build tool & dev server |
| **CSS3** | Custom styling with CSS variables, Grid, Flexbox |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Python 3.11** | Runtime |
| **FastAPI** | REST API framework |
| **Pydantic** | Data validation |
| **Uvicorn** | ASGI server |

### DevOps
| Technology | Purpose |
|-----------|---------|
| **Docker** | Containerization |
| **Docker Compose** | Multi-container orchestration |

---

## 📁 Project Structure

```
insuresimplify/
├── 📂 backend/
│   ├── 📂 app/
│   │   ├── __init__.py
│   │   └── main.py              # FastAPI application & API endpoints
│   ├── .env.example              # Environment variables template
│   ├── Dockerfile                # Backend container config
│   └── requirements.txt          # Python dependencies
│
├── 📂 frontend/
│   ├── 📂 public/                # Static assets
│   ├── 📂 src/
│   │   ├── main.jsx              # React application (all components)
│   │   └── styles.css            # Complete stylesheet
│   ├── index.html                # HTML entry point
│   ├── Dockerfile                # Frontend container config
│   ├── package.json              # Node.js dependencies
│   └── vite.config.js            # Vite configuration with API proxy
│
├── .gitignore                    # Git ignore rules
├── docker-compose.yml            # Docker Compose configuration
└── README.md                     # This file
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** >= 18.x — [Download](https://nodejs.org/)
- **Python** >= 3.11 — [Download](https://python.org/)
- **Docker** (optional) — [Download](https://docker.com/)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/mubarakmulla711/Insurance-Policy.git
cd Insurance-Policy
```

#### 2. Set up the Backend

```bash
cd backend

# Create and activate virtual environment
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS/Linux
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create environment file
cp .env.example .env

# Start the backend server
uvicorn app.main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`

#### 3. Set up the Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### 🐳 Running with Docker

```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d --build

# Stop services
docker-compose down
```

| Service  | URL                     |
|----------|-------------------------|
| Frontend | http://localhost:5173    |
| Backend  | http://localhost:8000    |
| API Docs | http://localhost:8000/docs |

---

## 📡 API Documentation

FastAPI automatically generates interactive API documentation. After starting the backend, visit:

- **Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Welcome message |
| `GET` | `/health` | Health check |
| `GET` | `/api/plans` | List all insurance plans |
| `GET` | `/api/policies` | List all policies |
| `GET` | `/api/policies/{id}` | Get specific policy |
| `POST` | `/api/contact` | Submit contact form |
| `GET` | `/api/stats` | Platform statistics |

### Sample API Response — Plans

```json
{
  "id": "plan-1",
  "name": "Health Shield",
  "type": "Health",
  "description": "Comprehensive health coverage...",
  "monthly_premium": 999.0,
  "coverage_amount": 1000000.0,
  "features": [
    "In-patient Hospitalization",
    "Pre & Post Hospitalization",
    "Day Care Treatments"
  ],
  "popular": false
}
```

---

## 📸 Screenshots

### Home Page
> 🏠 Modern hero section with animated gradient, statistics bar, featured plan cards, and customer testimonials.

### Plans Page
> 📋 Interactive plan grid with type-based filtering, detailed coverage cards, and popular plan badges.

### Contact Page
> 📞 Split-layout contact page with form validation and office information.

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork** the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

### Development Guidelines

- Follow existing code style and conventions
- Write meaningful commit messages
- Test your changes before submitting
- Update documentation as needed

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 📧 Contact

**Mubarak Mulla**

- GitHub: [@mubarakmulla711](https://github.com/mubarakmulla711)
- Project Link: [https://github.com/mubarakmulla711/Insurance-Policy](https://github.com/mubarakmulla711/Insurance-Policy)

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

Made with ❤️ by [Mubarak Mulla](https://github.com/mubarakmulla711)

</div>
