/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}',
		'./node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'outfit': ['Outfit', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'lato': ['Lato', 'sans-serif'],
			},
			colors: {
				'main': '#111a28',
				'primary': '#fbd065',
				'screen-secondary': '#1d293a'
			}
		},
	},
	plugins: [],
}
