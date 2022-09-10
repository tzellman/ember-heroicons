module.exports = {
    content: ['./tests/**/*.{hbs,js}'],
    safelist: [
        {
            pattern: /w-[56]/
        },
        {
            pattern: /h-[56]/
        }
    ]
};
