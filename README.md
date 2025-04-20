## 🎬 NetflixGPT

### 🚀 Overview

**NetflixGPT** is a modern and dynamic movie streaming web application built with **React.js**, integrated with the **TMDB API** and **OpenAI API**. It delivers real-time movie data, natural language search capabilities, and a smooth browsing experience—all packaged in a clean, responsive UI.

Deployed on **Firebase** for fast and scalable performance.

### ✨ Features

- 🔍 **Real-Time Movie Listings**  
  Explore an extensive movie database with live data from the TMDB API.

- 💬 **AI-Powered Natural Language Search**  
  Search for movies using conversational queries like:  
  _“Feel-good movies from the 2000s”_  
  _“Movies like The Matrix”_  
  _“Best space adventure films”_

- ▶️ **Trailer Playback**  
  Watch official trailers directly within the app via TMDB's video content.

- 📱 **Responsive Design**  
  Built with Tailwind CSS to look great on both desktop and mobile devices.

---

### 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend & Hosting**: Firebase
- **APIs**:
  - [TMDB (The Movie Database) API](https://www.themoviedb.org/documentation/api)
  - [OpenAI API](https://platform.openai.com/docs)
- **Styling**: Tailwind CSS

---

### ⚙️ Environment Variables

Before running the project, create a `.env` file in the root directory and add the following environment variables:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id

# TMDB API Auth Token
VITE_API_AUTH_TOKEN=your_tmdb_auth_token

# OpenAI API Key
VITE_OPENAI_KEY=your_openai_api_key

# TMDB Image CDN URL
VITE_IMG_CDN_URL=https://image.tmdb.org/t/p/w500/



```

### 🧰 Getting Started

To get started with **NetflixGPT** and run it locally on your machine, follow these steps:

1. Clone the repository to your local machine by running:

   ```bash
   git clone https://github.com/shukrat29/netflixGPT.git
   ```

2. Install the required project dependencies using npm:
   npm install

3. Finally, start the development server with:
   npm run dev

Your application will now be live at http://localhost:5173 (or another port if specified).
