# Pet Adoption Finder 🐶🐱

A fun and interactive web app to search pets available for adoption using the **Petfinder API**.  
Users can search by **animal type** and **location**, and view results in colorful, responsive cards.  


[![Frontend Live](https://img.shields.io/badge/Frontend-Live-brightgreen)](https://BhavikTrivedi-26.github.io/pet-adoption-finder-frontend/)  
[![Backend Live](https://img.shields.io/badge/Backend-Live-blue)](https://pet-adoption-finder-backend.onrender.com/)


## 🖼️ Screenshot

![Pet Adoption Finder Screenshot](https://via.placeholder.com/800x400?text=Pet+Adoption+Finder)

---

## 🚀 Features

- Search pets by type (dog, cat, etc.) and location (ZIP code or city,state)
- Displays results in **responsive, colorful cards**
- Shows **pet image, name, breed, age, and location**
- Clickable link to view **pet details**
- **Dark mode toggle** for a fun experience
- Mobile-friendly and fully responsive

---

## 🛠️ Tech Stack

### Backend
- Node.js + Express.js
- Petfinder API integration
- Fetches OAuth token securely
- Deployed on **Render** ([backend live link](https://pet-adoption-finder-backend.onrender.com/))

### Frontend
- HTML, CSS, JavaScript
- Fetches data from backend
- Display pets in cards with search and dark mode
- Deployed on **GitHub Pages** ([frontend live link](https://BhavikTrivedi-26.github.io/pet-adoption-finder-frontend/))

---

## 📁 Folder Structure

pet-adoption-finder/
├── backend/
│ ├── server.js
│ ├── package.json
│ └── .env
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
└── README.md

yaml
Copy code

---

## 💻 How to Run Locally

### Backend
1. Clone the repo:
```bash
git clone https://github.com/BhavikTrivedi-26/pet-adoption-finder-backend.git
cd pet-adoption-finder-backend
Install dependencies:

bash
Copy code
npm install
Create .env file and add your Petfinder API keys:

ini
Copy code
PETFINDER_CLIENT_ID=your_client_id
PETFINDER_CLIENT_SECRET=your_client_secret
Start server:

bash
Copy code
node server.js
Backend runs on http://localhost:5000

Frontend
Open frontend/index.html in your browser.

Make sure script.js API URL points to your backend.

📦 Deployment
Backend: Render (live link)

Frontend: GitHub Pages (live link)

🔥 Future Enhancements
Add pagination for search results

Filter by age, size, and gender

Add favorite pets feature with local storage

Improve UI with animations and transitions

📫 Contact
Created by Bhavik Trivedi
GitHub | LinkedIn