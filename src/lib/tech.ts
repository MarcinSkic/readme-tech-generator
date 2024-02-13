export interface Tech {
	name: string;
	image: string | { light: string; dark: string };
	webLink: string;
	dimensions?: {
		widthRatio: number;
		heightRatio: number;
	};
	tags?: string[];
}

export type TechInList = Tech & {
	selected?: boolean;
};

export const tech: Tech[] = [
	{
		name: 'shadcn-vue',
		image: 'https://api.iconify.design/simple-icons:shadcnui.svg?color=%2341b883',
		webLink: 'https://www.shadcn-vue.com',
		tags: ['vue', 'tailwindcss']
	},
	{
		name: 'shadcn-svelte',
		image: 'https://api.iconify.design/simple-icons:shadcnui.svg?color=%23eb4f27',
		webLink: 'https://www.shadcn-svelte.com',
		tags: ['svelte', 'tailwindcss']
	},
	{
		name: 'shadcn/ui',
		image: {
			light: 'https://api.iconify.design/simple-icons:shadcnui.svg?color=%23ffffff',
			dark: 'https://api.iconify.design/simple-icons:shadcnui.svg?color=%23000000'
		},
		webLink: 'https://ui.shadcn.com',
		tags: ['react', 'tailwindcss']
	},
	{
		name: 'Haskell',
		image: 'https://api.iconify.design/logos:haskell-icon.svg',
		webLink: 'https://en.wikipedia.org/wiki/Haskell'
	},
	{
		name: 'Prolog',
		image: 'https://api.iconify.design/devicon:prolog.svg',
		webLink: 'https://en.wikipedia.org/wiki/Prolog'
	},
	{
		name: 'Salesforce',
		image: 'https://api.iconify.design/logos:salesforce.svg',
		webLink: 'https://www.salesforce.com/eu/'
	},
	{
		name: 'Redis',
		image: 'https://api.iconify.design/logos:redis.svg',
		webLink: 'https://redis.io'
	},
	{
		name: 'Cassandra',
		image: 'https://api.iconify.design/logos:cassandra.svg',
		webLink: 'https://cassandra.apache.org/_/index.html'
	},
	{
		name: 'PyTorch',
		image: 'https://api.iconify.design/devicon:pytorch.svg',
		webLink: 'https://pytorch.org/',
		tags: ['python', 'ai']
	},
	{
		name: 'scikit-learn',
		image: 'https://api.iconify.design/devicon:scikitlearn.svg',
		webLink: 'https://scikit-learn.org/stable/',
		tags: ['python', 'ai']
	},
	{
		name: 'Matplotlib',
		image: 'https://api.iconify.design/devicon:matplotlib.svg',
		webLink: 'https://matplotlib.org',
		tags: ['python', 'ai']
	},
	{
		name: 'Numpy',
		image: 'https://api.iconify.design/devicon:numpy.svg',
		webLink: 'https://numpy.org/',
		tags: ['python', 'ai']
	},
	{
		name: 'Anaconda',
		image: 'https://api.iconify.design/devicon:anaconda.svg',
		webLink: 'https://www.anaconda.com/',
		tags: ['python', 'ai']
	},
	{
		name: 'Jupyter',
		image: 'https://api.iconify.design/devicon:jupyter.svg',
		webLink: 'https://jupyter.org/'
	},
	{
		name: 'PowerShell',
		image: 'https://api.iconify.design/devicon:powershell.svg',
		webLink: 'https://en.wikipedia.org/wiki/PowerShell'
	},
	{
		name: 'Android Studio',
		image: 'https://api.iconify.design/devicon:androidstudio.svg',
		webLink: 'https://developer.android.com/studio',
		tags: ['java', 'kotlin']
	},
	{
		name: 'Bootstrap',
		image: 'https://api.iconify.design/devicon:bootstrap.svg',
		webLink: 'https://getbootstrap.com',
		tags: ['css']
	},
	{
		name: 'Apache',
		image: 'https://api.iconify.design/devicon:apache.svg',
		webLink: 'https://www.apache.org'
	},
	{
		name: '.NET',
		image: 'https://api.iconify.design/logos:dotnet.svg',
		webLink: 'https://learn.microsoft.com/en-us/dotnet/',
		tags: ['c#', 'csharp', 'dotnet']
	},
	{
		name: 'Linux',
		image: 'https://api.iconify.design/devicon:linux.svg',
		webLink: 'https://en.wikipedia.org/wiki/Linux'
	},
	{
		name: 'NodeJS',
		image: 'https://api.iconify.design/devicon:nodejs.svg',
		webLink: 'https://nodejs.org/en',
		tags: ['typescript', 'javascript', 'expressjs']
	},
	{
		name: 'Apple',
		image: {
			light: 'https://api.iconify.design/cib:apple.svg?color=%23ffffff',
			dark: 'https://api.iconify.design/cib:apple.svg?color=%23000000'
		},
		webLink: 'https://www.apple.com',
		tags: ['swift']
	},
	{
		name: 'Jest',
		image: 'https://api.iconify.design/logos:jest.svg',
		webLink: 'https://jestjs.io',
		tags: ['typescript', 'javascript']
	},
	{
		name: 'Vite',
		image: 'https://api.iconify.design/devicon:vitejs.svg',
		webLink: 'https://vitejs.dev/'
	},
	{
		name: 'LabView',
		image: 'https://api.iconify.design/devicon:labview.svg',
		webLink: 'https://www.ni.com/en/shop/labview.html'
	},
	{
		name: 'Swift',
		image: 'https://api.iconify.design/devicon:swift.svg',
		webLink: 'https://www.swift.org',
		tags: ['apple']
	},
	{
		name: 'TensorFlow',
		image: 'https://api.iconify.design/devicon:tensorflow.svg',
		webLink: 'https://www.tensorflow.org',
		tags: ['python']
	},
	{
		name: 'MySQL',
		image: 'https://api.iconify.design/devicon:mysql.svg',
		webLink: 'https://www.mysql.com'
	},
	{
		name: 'SQlite',
		image: 'https://api.iconify.design/devicon:sqlite.svg',
		webLink: 'https://www.sqlite.org/index.html'
	},
	{
		name: 'PHP',
		image: 'https://api.iconify.design/devicon:php.svg',
		webLink: 'https://www.php.net',
		tags: ['laravel']
	},
	{
		name: 'Laravel',
		image: 'https://api.iconify.design/devicon:laravel.svg',
		webLink: 'https://laravel.com',
		tags: ['php']
	},
	{
		name: 'Bash',
		image: 'https://api.iconify.design/logos:bash-icon.svg',
		webLink: 'https://en.wikipedia.org/wiki/Bash_(Unix_shell)'
	},
	{
		name: 'Qt',
		image: 'https://api.iconify.design/devicon:qt.svg',
		webLink: 'https://www.qt.io',
		tags: ['c++', 'cpp']
	},
	{
		name: 'C++',
		image: 'https://api.iconify.design/devicon:cplusplus.svg',
		webLink: 'https://en.wikipedia.org/wiki/C%2B%2B',
		tags: ['qt', 'cpp']
	},
	{
		name: 'Webpack',
		image: 'https://api.iconify.design/logos:webpack.svg',
		webLink: 'https://webpack.js.org',
		tags: ['react']
	},
	{
		name: 'C Embedded',
		image: 'https://api.iconify.design/devicon:embeddedc.svg',
		webLink: 'https://en.wikipedia.org/wiki/Embedded_C',
		tags: ['c']
	},
	{
		name: 'C',
		image: 'https://api.iconify.design/devicon:c.svg',
		webLink: 'https://en.wikipedia.org/wiki/C_(programming_language)',
		tags: ['embedded c']
	},
	{
		name: 'Photon',
		image: 'https://api.iconify.design/devicon:photonengine.svg',
		webLink: 'https://www.photonengine.com',
		tags: ['unity', 'c#', 'csharp']
	},
	{
		name: 'Arduino',
		image: 'https://api.iconify.design/devicon:arduino.svg',
		webLink: 'https://www.arduino.cc'
	},
	{
		name: 'Bevy',
		image: 'https://api.iconify.design/skill-icons:bevy-dark.svg',
		webLink: 'https://bevyengine.org',
		tags: ['rust']
	},
	{
		name: 'Phoenix',
		image: 'https://api.iconify.design/devicon:phoenix.svg',
		webLink: 'https://www.phoenixframework.org',
		tags: ['elixir']
	},
	{
		name: 'Elixir',
		image: 'https://api.iconify.design/devicon:elixir.svg',
		webLink: 'https://elixir-lang.org',
		tags: ['phoenix']
	},
	{
		name: 'SolidJS',
		image: 'https://api.iconify.design/devicon:solidjs.svg',
		webLink: 'https://www.solidjs.com',
		tags: ['vite']
	},
	{
		name: 'Tauri',
		image: 'https://api.iconify.design/devicon:tauri.svg',
		webLink: 'https://tauri.app',
		tags: ['typescript', 'javascript', 'rust']
	},
	{
		name: 'Godot',
		image: 'https://api.iconify.design/devicon:godot.svg',
		webLink: 'https://godotengine.org'
	},
	{
		name: 'GO',
		image: 'https://api.iconify.design/logos:go.svg',
		webLink: 'https://go.dev',
		dimensions: {
			heightRatio: 1,
			widthRatio: 1.5
		}
	},
	{
		name: 'Docker',
		image: 'https://api.iconify.design/logos:docker-icon.svg',
		webLink: 'https://www.docker.com'
	},
	{
		name: 'Spring',
		image: 'https://api.iconify.design/logos:spring-icon.svg',
		webLink: 'https://spring.io',
		tags: ['java', 'kotlin']
	},
	{
		name: 'Neo4j',
		image: 'https://api.iconify.design/devicon:neo4j.svg',
		webLink: 'https://neo4j.com'
	},
	{
		name: 'MongoDB',
		image: 'https://api.iconify.design/devicon:mongodb.svg',
		webLink: 'https://mongodb.com'
	},
	{
		name: 'TailwindCSS',
		image: 'https://api.iconify.design/devicon:tailwindcss.svg',
		webLink: 'https://tailwindcss.com',
		tags: ['css', 'shadcn']
	},
	{
		name: 'Svelte',
		image: 'https://api.iconify.design/devicon:svelte.svg',
		webLink: 'https://svelte.dev',
		tags: ['typescript', 'javascript', 'vite']
	},
	{
		name: 'Kotlin',
		image: 'https://api.iconify.design/devicon:kotlin.svg',
		webLink: 'https://kotlinlang.org',
		tags: ['spring', 'android']
	},
	{
		name: 'Java',
		image: 'https://api.iconify.design/logos:java.svg',
		webLink: 'https://www.java.com',
		tags: ['spring', 'android']
	},
	{
		name: 'Python',
		image: 'https://api.iconify.design/logos:python.svg',
		webLink: 'https://www.python.org',
		tags: ['ai']
	},
	{
		name: 'Rust',
		image: 'https://api.iconify.design/vscode-icons:file-type-rust.svg',
		webLink: 'https://www.rust-lang.org',
		tags: ['tauri']
	},
	{
		name: 'Latex',
		image: 'https://api.iconify.design/cib:latex.svg?color=%23088484',
		webLink: 'https://www.latex-project.org'
	},
	{
		name: 'Github',
		image: {
			light: 'https://api.iconify.design/simple-icons:github.svg?color=%23ffffff',
			dark: 'https://api.iconify.design/simple-icons:github.svg?color=%23000000'
		},
		webLink: 'https://github.com'
	},
	{
		name: 'Git',
		image: 'https://api.iconify.design/devicon:git.svg',
		webLink: 'https://git-scm.com'
	},
	{
		name: 'Unity',
		image: {
			light: 'https://api.iconify.design/bi:unity.svg?color=%23ffffff',
			dark: 'https://api.iconify.design/bi:unity.svg?color=%23000000'
		},
		webLink: 'https://unity.com',
		tags: ['c#', 'csharp']
	},
	{
		name: 'React',
		image: 'https://api.iconify.design/devicon:react.svg',
		webLink: 'https://react.dev',
		tags: ['nextjs', 'typescript', 'javascript', 'vite']
	},
	{
		name: 'C#',
		image: 'https://api.iconify.design/devicon:csharp.svg',
		webLink: 'https://learn.microsoft.com/pl-pl/dotnet/csharp/',
		tags: ['dotnet', '.net', 'unity']
	},
	{
		name: 'Sass',
		image: 'https://api.iconify.design/devicon:sass.svg',
		webLink: 'https://sass-lang.com',
		tags: ['scss', 'css']
	},
	{
		name: 'Javascript',
		image: 'https://api.iconify.design/devicon:javascript.svg',
		webLink: 'https://en.wikipedia.org/wiki/JavaScript',
		tags: ['typescript']
	},
	{
		name: 'Typescript',
		image: 'https://api.iconify.design/devicon:typescript.svg',
		webLink: 'https://www.typescriptlang.org',
		tags: ['javascript']
	},
	{
		name: 'HTML',
		image: 'https://api.iconify.design/devicon:html5.svg',
		webLink: 'https://en.wikipedia.org/wiki/HTML'
	},
	{
		name: 'Next.js',
		image: 'https://api.iconify.design/logos:nextjs-icon.svg',
		webLink: 'https://nextjs.org',
		tags: ['react', 'javascript', 'typescript']
	},
	{
		name: 'CSS',
		image: 'https://api.iconify.design/devicon:css3.svg',
		webLink: 'https://en.wikipedia.org/wiki/CSS',
		tags: ['bootstrap', 'sass', 'tailwind']
	},
	{
		name: 'Express.js',
		image: {
			light: 'https://api.iconify.design/simple-icons:express.svg?color=%23ffffff',
			dark: 'https://api.iconify.design/simple-icons:express.svg?color=%23000000'
		},
		webLink: 'https://expressjs.com',
		tags: ['node', 'javascript', 'typescript']
	},
	{
		name: "Vue.js",
		image: "https://api.iconify.design/devicon:vuejs.svg",
		webLink: "https://vuejs.org",
		tags: ["vue", "vue.js", "javascript", "typescript"]
	},
	{
		name: "Vuetify",
		image: "https://api.iconify.design/devicon:vuetify.svg",
		webLink: "https://vuetifyjs.com",
		tags: ["vue", "vue.js"]
	},
	{
		name: "Nuxtjs",
		image: "https://api.iconify.design/devicon:nuxtjs.svg",
		webLink: "https://nuxt.com",
		tags: ["vue", "vue.js"]
	},
	{
		name: "Vitest",
		image: "https://api.iconify.design/devicon:vitest.svg",
		webLink: "https://vitest.dev",
		tags: ["vite", "testing", "javascript", "typescript"]
	},
	{
		name: "Playwright",
		image: "https://api.iconify.design/devicon:playwright.svg",
		webLink: "https://playwright.dev",
		tags: ["javascript", "typescript", "testing"]
	},
	{
		name: "Pinia",
		image: "https://api.iconify.design/logos:pinia.svg",
		webLink: "https://pinia.vuejs.org",
		tags: ["vue"]
	},
	{
		name: "VueUse",
		image: "https://api.iconify.design/logos:vueuse.svg",
		webLink: "https://vueuse.org",
		tags: ["vue"]
	},
	{
		name: "Apache ECharts",
		image: "https://api.iconify.design/simple-icons:apacheecharts.svg?color=%23F72C5B",
		webLink: "https://echarts.apache.org",
		tags: ["javascript", "charts", "data visualization"]
	}
];
