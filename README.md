
# NKBGS - School Website
A modern, responsive school website built using Next.js, Tailwind CSS, and Appwrite. It includes an admin panel to manage website and supports user authentication.

<img src="https://img.shields.io/badge/Next.js-14-blue" alt="Next.js 14" />
<img src="https://img.shields.io/badge/TailwindCSS-3.4-blue" alt="TailwindCSS"/>
<img src="https://img.shields.io/badge/Appwrite-15-blue" alt="Appwrite"/>

## 📖 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)


## 🚀 Features
- 📌 Fully responsive design
- 🔑 User authentication with Appwrite
- 🎨 Modern UI with Tailwind CSS
- 🎓 Admin panel for managing content
- 📂 Appwrite database integration

## 🛠 Tech Stack
- **Frontend:** Next.js, React.js, Tailwind CSS
- **Backend:** Appwrite (Database, Authentication, Storage)
- **Other:** Vercel (Deployment)

## 📁 Project Structure

NKBGS/
│── public/             # Static assets
│── src/
│   │── app/            # Next.js pages (routes)
│   │    ├──(client)/   # Next.js pages (for clients)
│   │    ├──admin/      # Next.js pages (for admin)
│   │    ├──components/ # Reusable UI components
│   │    ├──globals.css # Tailwind CSS styles
│   │── appwrite/       # Appwrite connection functions
│   │── hooks/          # React hooks
│   │── pages/          # API's
│── .env.local          # Environment variables (not shared)
│── package.json        # Dependencies
│── README.md           # Project documentation
