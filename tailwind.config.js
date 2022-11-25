/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	daisyui: {
		themes: [
			{
				doctortheme: {
					primary: '#D94A38',
					secondary: '#8D72E1',
					accent: '#3A4256',
					neutral: '#3D4451',
					'base-100': '#FFFFFF',
				},
			},
		],
	},
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
};
