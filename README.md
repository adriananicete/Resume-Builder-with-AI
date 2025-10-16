# 🧠 AI Résumé Builder

An AI-powered résumé builder web application built using the **MERN stack**.  
This full-stack project allows users to **create, edit, enhance, and share** their online résumés — complete with AI-assisted content generation, live preview, customizable templates, and image optimization.

---

## 🚀 Project Overview

The **AI Résumé Builder** enables users to:

- ✍️ Sign up and create their online résumé.
- 🧾 Add personal details, professional summary, work experience, education, projects, and skills.
- 🤖 Use **AI features** to enhance their résumé content such as professional summary and job descriptions.
- 🧩 Upload an existing résumé (PDF) to automatically extract and enhance details using AI.
- 🖼️ Upload profile images and **automatically remove background** or focus on the face using ImageKit AI.
- 🎨 Switch between multiple résumé templates and customize theme colors.
- 🔗 Share the **live résumé link** publicly or keep it private.
- 💾 Save, download, and print the résumé.

---

## 🏠 Demo Overview

### 🌐 Homepage
- Elegant hero section with navigation bar and call-to-action buttons.
- Résumé building process section.
- Testimonials section.
- Call-to-action area and footer.

### 👤 Authentication
- Sign up and log in pages with form toggle.
- Secure login system allowing users to manage their own résumés.

### 📋 Dashboard
- Two main actions:  
  - **Create Résumé** → build a résumé from scratch.  
  - **Upload Existing Résumé** → upload a PDF and let AI enhance it.

---

## 🧩 Features Breakdown

### 🪪 Personal Information
- Add name, email, phone number, location, profession, LinkedIn, and website.
- Live preview updates instantly as data is entered.

### 🧠 AI-Enhanced Summary
- “**AI Enhance**” button uses Google Gemini API to improve the professional summary and experience descriptions.

### 💼 Experience Section
- Add multiple experiences with company name, job title, date range, and job description.
- AI-powered enhancement for each job description.

### 🎓 Education Section
- Add multiple educational qualifications with institute details and duration.

### 💻 Projects Section
- Add project name, type, and description with instant live preview.

### 🧰 Skills Section
- Add technical and soft skills with instant résumé updates.

### 🎨 Template Customization
- Choose from multiple résumé templates:
  - Classic
  - Modern
  - Minimal
- Change theme color dynamically (e.g., blue, green, orange, pink, red).

### 🖼️ Image Upload & Background Removal
- Upload a profile image.
- ImageKit automatically focuses on the face and removes background.
- Theme color fills the image background for aesthetic consistency.

### 📤 Public Sharing & Download
- Option to make résumé **public** and generate a **shareable link**.
- Download résumé as a **PDF** or print directly.

---

## 🧠 Technologies Used

### 🖥️ Frontend (Client)
- **React.js** with Vite
- **Tailwind CSS** for UI styling
- **Lucide React** for icons

### ⚙️ Backend (Server)
- **Node.js** & **Express.js**
- **MongoDB** with **Mongoose** for database
- **JWT Authentication** for secure login/signup

### 🤖 AI & Media Tools
- **Google Gemini API** – enhance résumé content using AI.
- **ImageKit.io** – optimize, compress, and remove image backgrounds in real time.

### ☁️ Deployment
- Deployed using **Hostinger VPS** for full control over server hosting and scalability.

---

## 📸 Screenshots

| Page | Description |
|------|--------------|
| 🏠 Homepage | Hero section, process, and CTA |
| 🔐 Auth Pages | Login and Sign Up |
| 📋 Dashboard | Manage résumés, create or upload |
| 🧾 Editor | AI-assisted résumé editing |
| 🎨 Templates | Multiple designs and color themes |

---

## ⚙️ Project Setup

### 🧩 Clone the Repository
```bash
git clone https://github.com/<your-username>/resume-builder.git
cd resume-builder
