# 🌤 Weather App

A **React + Vite + Tailwind CSS** weather application that shows real-time weather data (temperature, min/max, description, and icons) using the **OpenWeather API**.

## 🚀 Features

* 🌍 Displays **city name** with **date & time** (multi-language support).
* 📡 Fetches **live weather data** using latitude & longitude.
* 🌓 Multi-language support (**Arabic / English**) with i18next.
* 🎨 Styled with **Tailwind CSS** for a responsive and modern UI.
* ⚡ Built with **Vite** for fast development and HMR.

## 🛠️ Technologies Used

* [React](https://react.dev/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Axios](https://axios-http.com/)
* [Moment.js](https://momentjs.com/)
* [i18next](https://www.i18next.com/)

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/mohamedshal/Weather-App.git
cd Weather-App
```

Install dependencies:

```bash
npm install
```

Run the project locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## 🔑 API Key Setup

This project uses the **OpenWeather API**.

1. Create a free account at [OpenWeather](https://openweathermap.org/).
2. Get your API key.
3. Replace the key inside your `UserContext.js`:
   ```js
   const apiKey = "YOUR_API_KEY";
   ```

## 📦 Deployment

You can deploy the app on:

. [Vercel](https://vercel.com/)
. [Netlify](https://www.netlify.com/)
. [GitHub Pages](https://pages.github.com/)

Developed by **Mohamed Shalaby**
