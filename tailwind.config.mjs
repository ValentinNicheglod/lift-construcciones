/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'lift-light': 'hsl(210, 100%, 98%)',
				'lift-grey': 'hsl(216, 14%, 34%)',
				'lift-blue': 'hsl(211, 100%, 50%)',
				'black': 'hsl(223, 16%, 9%)'
			},
			screens: {
				'xs': '400px',
			  },
		},
	},
	plugins: [],
}
