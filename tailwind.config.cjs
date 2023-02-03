/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'primary': '#142457',
				'primary-dark': '#5891ff',
				'secondary': '#51AEB0',
				'secondary-dark': '#D0E7FE',
				'tertiary': '#F92D45',
				'tertiary-dark': '#1c204b',
				'card-primary': '#1c204b',
				'card-secondary': '#bbc0ff',
			},
		},
	},
	plugins: [],
};