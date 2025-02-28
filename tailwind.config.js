/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"], // Update based on your project structure
    theme: {
      extend: {
        colors: {
            primary: "#32064A",
            orange: "#e66a1f",
            lightpink: "#e42a69",
            // Add more custom colors here
            secondary: "#1F2937",
            accent: "#3B82F6",
            muted: "#9CA3AF",
        },
      },
    },
    plugins: [],
};