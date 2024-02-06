export interface Tech {
	name: string;
	image: string | { light: string; dark: string };
	webLink: string;
}

export const tech: Tech[] = [
	{
		name: 'Next.js',
		image:
			'https://raw.githubusercontent.com/MarcinSkic/marcinskic/main/icons/next-official-dark.svg',
		webLink: 'https://nextjs.org'
	},
	{
		name: 'Next.js',
		image:
			'https://raw.githubusercontent.com/MarcinSkic/marcinskic/main/icons/next-official-dark.svg',
		webLink: 'https://nextjs.org'
	},
	{
		name: 'Next.js',
		image:
			'https://raw.githubusercontent.com/MarcinSkic/marcinskic/main/icons/next-official-dark.svg',
		webLink: 'https://nextjs.org'
	},
	{
		name: 'Express.js',
		image: {
			light:
				'https://user-images.githubusercontent.com/33003089/227041204-71a593b5-395e-4de9-82ff-21f6113c2c8a.svg',
			dark: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
		},
		webLink: 'https://expressjs.com'
	}
];
