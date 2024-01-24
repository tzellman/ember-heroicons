module.exports = {
    content: ['./tests/**/*.{hbs,js}'],
    safelist: [
        {
            pattern: /w-[456]/
        },
        {
            pattern: /h-[456]/
        }
    ]
};
