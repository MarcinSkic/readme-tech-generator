<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';
	import '../app.pcss';
	import { ModeWatcher, setMode, mode } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	import { tech } from '$lib/tech';

	const links: { href: string; name: string }[] = [];
	setMode('dark');
</script>

<Toaster />
<ModeWatcher />
<header>
	<nav>
		{#each links as link}
			<Button
				variant="link"
				class={link.href !== $page.url.pathname ? ' text-muted-foreground' : 'text-foreground'}
				href={link.href}>{link.name}</Button
			>
		{/each}
	</nav>
</header>
<main>
	<slot />
</main>
<footer class="flex items-center justify-center gap-4 p-6 text-muted-foreground">
	<span>Powered by <a href="https://iconify.design">Iconify.</a></span>
	<span>Made by Marcin Skic</span>
	<a href="https://github.com/MarcinSkic/readme-tech-generator">
		<img
			class="h-5"
			src="https://api.iconify.design/simple-icons:github.svg?color=%23{$mode === 'light'
				? '000000'
				: 'ffffff'}"
			alt="Github icon"
		/></a
	>
</footer>
