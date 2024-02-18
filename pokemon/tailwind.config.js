/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/primereact/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-color': 'rgb(233, 233, 233)',
                'primary-color-transp': 'rgb(233, 233, 233, 0.5)',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            backgroundPosition: {
                'y-top': '0% 125%',
            },
            backgroundImage: {
                'surface-gradient': 'radial-gradient(circle, var(--container-bg-gradient-color) 0%, rgba(0,0,0,1) 75%);',
            },
            backgroundSize: {
                '1x-2x': '100% 200%',
            },
            height: {
                '0.5': '0.125rem',
            },
            keyframes: {
                'bg-to-top': {
                    '0%': { backgroundPosition: '50% 75%' },
                    '100%': { backgroundPosition: '50% 125%' }
                },
                'bg-enlarge': {
                    '0%': { backgroundSize: '200% 300%' },
                    '100%': { backgroundSize: '100% 200%' }
                },
                'bg-move-anim': {
                    '0%': { backgroundPosition: '50% 125%' },
                    '10%': { backgroundPosition: '20% 0%' },
                    '20%': { backgroundPosition: '0% 60%' },
                    '30%': { backgroundPosition: '40% 100%' },
                    '40%': { backgroundPosition: '70% 80%' },
                    '50%': { backgroundPosition: '50% 125%' },
                    '60%': { backgroundPosition: '20% 60%' },
                    '70%': { backgroundPosition: '0% 100%' },
                    '80%': { backgroundPosition: '40% 0%' },
                    '90%': { backgroundPosition: '40% 20%' },
                    '100%': { backgroundPosition: '50% 125%' }
                },
                'card-shadow-pulse': {
                    '0%': { boxShadow: '0 0 15px 3px var(--tw-shadow-color)' },
                    '50%': { boxShadow: '0 0 20px 5px var(--tw-shadow-color)' },
                    '100%': { boxShadow: '0 0 15px 3px var(--tw-shadow-color)' },
                }
            },
            animation: {
                'bg-to-top-on-load': 'bg-to-top 1s ease-out forwards, bg-enlarge 2s ease-out forwards, bg-move-anim 80s ease 10s infinite',
                'card-hover-shadow': 'card-shadow-pulse 2.5s linear infinite',
            },
        },
    },
    plugins: [],
}

