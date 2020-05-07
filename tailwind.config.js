const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: false,
    //purge: [
    //  "./**/{pages,components}/**/*.{js,jsx,ts,tsx}",
    //],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/ui')],
};
