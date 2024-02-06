<script>
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';
	import '../app.pcss';

	const links = [
		{
			name: 'Tech list',
			href: '/'
		}
	];
</script>

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
