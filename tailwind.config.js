/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: { 
        extend: {
            colors: {
                primary: {
                    normal: "#E65C35", // main orange-red
                    light: "#FBE9E0", // soft background orange
                    dark: "#C94B2C" // hover/darker shade
                },
                neutral: {
                    900: "#2E2C2B", // headings / titles
                    700: "#6B6662", // body text
                    100: "#FDF6F0", // background
                    50: "#FFFFFF" // white
                },
                accent: {
                    yellow: "#FFB84D" // star rating
                },mastercard: "#EB001B",
        amazonpay: "#FF9900",
        stripe: "#635BFF",
        paypal: "#003087",
        visa: "#1A1F71",
            },
            fontFamily: {
                sans: ["Outfit", "sans-serif"], // overrides default sans
                heading: ["Playfair Display", "serif"]
            }
        }
    },
    plugins: []
};
