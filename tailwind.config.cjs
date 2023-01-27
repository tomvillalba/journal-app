/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			formInput: {
				100: '#1a202c'
			}
		},
	},
	plugins: [],
};