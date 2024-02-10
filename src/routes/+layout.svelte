<script lang="ts">
	import '../app.pcss';
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';

	import { Sun, Moon } from 'lucide-svelte';
	import { ModeWatcher, setMode, mode, toggleMode } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	import icon from '$lib/icon.svg?raw';

	const links: { href: string; name: string }[] = [];
	setMode('dark');
</script>

<svelte:head>
	<title>Readme Tech Generator</title>
</svelte:head>
<Toaster />
<ModeWatcher />
<header class="grid w-full grid-cols-[max-content_repeat(2,_minmax(0,_1fr))] items-center p-4">
	<h1 class="flex items-end gap-4 justify-self-start text-lg font-bold tracking-tight sm:text-4xl">
		<div class="w-6 sm:w-9">{@html icon}</div>
		<span>Readme Tech Generator</span>
	</h1>
	<nav>
		{#each links as link}
			<Button
				variant="link"
				class={link.href !== $page.url.pathname ? ' text-muted-foreground' : 'text-foreground'}
				href={link.href}>{link.name}</Button
			>
		{/each}
	</nav>
	<div class="justify-self-end">
		<Button on:click={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</div>
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
