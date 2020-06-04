/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: false,
    //purge: [
    //  "./**/{pages,components}/**/*.{js,jsx,ts,tsx}",
    //],
    theme: {
        extend: {
            fontFamily: {
                sans: ['proxima-nova', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/ui')],
};
