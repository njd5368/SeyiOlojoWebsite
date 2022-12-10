/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./themes/catppuccin-latte/layouts/*.html", "./themes/catppuccin-latte/layouts/**/*.html"],
  theme: {
    fontFamily: {
      'sans': ['Nunito'],
    },
    extend: {
      typography: (theme) => ({
        catppuccin: {
          css: {
            '--tw-prose-body': theme('colors.text'),
            '--tw-prose-headings': theme('colors.text'),
            '--tw-prose-lead': theme('colors.text'),
            '--tw-prose-links': theme('colors.blue'),
            '--tw-prose-bold': theme('colors.black'),
            '--tw-prose-counters': theme('colors.text'),
            '--tw-prose-bullets': theme('colors.text'),
            '--tw-prose-hr': theme('colors.text'),
            '--tw-prose-quotes': theme('colors.text'),
            '--tw-prose-quote-borders': theme('colors.sky'),
            '--tw-prose-captions': theme('colors.text'),
            '--tw-prose-code': theme('colors.text'),
            '--tw-prose-pre-code': theme('colors.text'),
            '--tw-prose-pre-bg': theme('colors.base'),
            '--tw-prose-th-borders': theme('colors.text'),
            '--tw-prose-td-borders': theme('colors.text'),
            '--tw-prose-invert-body': theme('colors.text'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.text'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.text'),
            '--tw-prose-invert-bullets': theme('colors.text'),
            '--tw-prose-invert-hr': theme('colors.text'),
            '--tw-prose-invert-quotes': theme('colors.text'),
            '--tw-prose-invert-quote-borders': theme('colors.text'),
            '--tw-prose-invert-captions': theme('colors.text'),
            '--tw-prose-invert-code': theme('colors.text'),
            '--tw-prose-invert-pre-code': theme('colors.text'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.text'),
            '--tw-prose-invert-td-borders': theme('colors.text'),
          },
        },
      })
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss'),
    require('@tailwindcss/typography'),
  ],
}
