# The Sky Mods ☁️

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![Bun](https://img.shields.io/badge/Bun-1.1-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

**The Sky Mods** is a modern, responsive web platform designed to distribute and document mods for the game _Sky: Children of the Light_ on Android. It serves as a centralized hub for users to download tools like **Canvas Modloader** and **LibTSM**, offering a seamless and localized user experience.

## ✨ Key Features

- **Automated Mod Updates**: Automatically fetches the latest release data (version, download URL, size) from the [XeTrinityz/ThatSkyMod-Android](https://github.com/XeTrinityz/ThatSkyMod-Android) GitHub repository, ensuring users always get the newest version without manual site updates.
- **Internationalization (i18n)**: Fully localized in 4 languages:
  - 🇪🇸 Spanish (Default)
  - 🇺🇸 English
  - 🇮🇩 Indonesian
  - 🇯🇵 Japanese
- **Dynamic Content**: Real-time download counters powered by MongoDB.
- **Modern UI/UX**:
  - Glassmorphism design with dynamic gradient backgrounds.
  - Responsive layout optimized for mobile and desktop.
  - Interactive toast notifications for user actions.
  - "Made in RD 🇩🇴" attribution in the footer.
- **Legal Compliance**: Dedicated pages for Privacy Policy, Terms of Service, and Disclaimer.
- **Share Functionality**: Easy link sharing for mods directly to the website anchor.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom CSS variables and animations.
- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Database**: [MongoDB](https://www.mongodb.com/) (via Mongoose)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email**: Nodemailer (for the contact form)

## 📂 Project Structure

```bash
├── app/
│   ├── [locale]/          # Internationalized routes (es, en, id, ja)
│   │   ├── layout.tsx     # Root layout with Toaster and Analytics
│   │   ├── page.tsx       # Homepage (Mods showcase)
│   │   └── ...            # Legal pages (privacy, terms, etc.)
│   └── api/               # Backend API routes
├── components/            # Reusable UI components
│   ├── ui/                # atomic components (button, card, toast)
│   ├── mod-card.tsx       # Individual mod display logic
│   ├── footer.tsx         # Global footer
│   └── ...
├── lib/
│   ├── github.ts          # GitHub API integration logic
│   ├── mongodb.ts         # Database connection utility
│   ├── mods-data.ts       # Static mod metadata & fallback data
│   └── translations.ts    # i18n type definitions and loading
├── messages/              # JSON translation files
│   ├── es.json
│   ├── en.json
│   └── ...
├── public/                # Static assets (images, icons)
├── proxy.ts               # Middleware for locale detection/redirection
└── ...
```

## 🚀 Getting Started

### Prerequisites

- **Bun** (Latest version recommended)
- **MongoDB** connection string

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/theskymods.git
    cd theskymods
    ```

2.  **Install dependencies:**

    ```bash
    bun install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory and add:

    ```env
    MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/theskymods
    CONTACT_EMAIL=your-email@gmail.com
    CONTACT_EMAIL_PASSWORD=your-app-password
    ```

4.  **Run Development Server:**

    ```bash
    bun dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser.

5.  **Build for Production:**
    ```bash
    bun run build
    bun start
    ```

## 📡 API Endpoints

### `GET /api/mods/stats`

Fetches the total global download count for all mods combined.

- **Response**: `{ totalDownloads: number }`

### `POST /api/mods/download`

Increments the download counter for a specific mod.

- **Body**: `{ modId: string }`
- **Response**: `{ success: true, downloads: number }`

### `POST /api/contact`

Handles contact form submissions and sends an email.

- **Body**: `{ name, email, subject, message, recaptchaToken }`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open source.

## 🙏 Acknowledgements

- **leon4rdodev**: Creator and maintainer of The Sky Mods platform. [GitHub](https://github.com/leon4rdodev)
- **XeTrinityz**: For the incredible work on [ThatSkyMod-Android](https://github.com/XeTrinityz/ThatSkyMod-Android).
- **Community**: The Sky: Children of the Light modding community.

---

_Made with ❤️ in RD 🇩🇴_
