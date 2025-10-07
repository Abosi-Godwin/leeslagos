/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    normal: "#E65C35",
                    light: "#FBE9E0", 
                    dark: "#C94B2C"
                },
                neutral: {
                    900: "#2E2C2B", 
                    700: "#6B6662", 
                    100: "#FDF6F0", 
                    50: "#FFFFFF" 
                },
                accent: {
                    yellow: "#FFB84D"
                },
                mastercard: "#EB001B",
                amazonpay: "#FF9900",
                stripe: "#635BFF",
                paypal: "#003087",
                visa: "#1A1F71"
            },
            fontFamily: {
                sans: ["Outfit", "sans-serif"],
                heading: ["Playfair Display", "serif"]
            }
        }
    },
    plugins: []
};
