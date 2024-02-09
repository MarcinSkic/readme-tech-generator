<script>
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';
	import '../app.pcss';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';

	const links = [
		{
			name: 'Tech list',
			href: '/'
		}
	];
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
